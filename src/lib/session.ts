import { createHmac, timingSafeEqual } from "node:crypto";
import bcrypt from "bcryptjs";
import { getAdminCredentials, getAdminSessionVersion, updateAdminPassword } from "./db";

const BCRYPT_ROUNDS = 12;
const MIN_PASSWORD_LENGTH = 8;

export const ADMIN_COOKIE_NAME = "pio_admin_session";
const SESSION_TTL_MS = 1000 * 60 * 60 * 24 * 7; // 7 days
export const ADMIN_COOKIE_MAX_AGE = SESSION_TTL_MS / 1000;

function getSessionSecret(): string {
  const secret = process.env.SESSION_SECRET;
  if (!secret) {
    throw new Error("SESSION_SECRET environment variable is not set.");
  }
  return secret;
}

function sign(payload: string): string {
  return createHmac("sha256", getSessionSecret()).update(payload).digest("hex");
}

function safeEqual(a: string, b: string): boolean {
  const bufA = Buffer.from(a);
  const bufB = Buffer.from(b);
  if (bufA.length !== bufB.length) return false;
  return timingSafeEqual(bufA, bufB);
}

// sessionVersion is admin_credentials.session_version at mint time; bumping it
// (on password change) invalidates every token minted under the old value.
export function createSessionToken(sessionVersion: number): string {
  const expires = Date.now() + SESSION_TTL_MS;
  const payload = `admin.${sessionVersion}.${expires}`;
  return `${payload}.${sign(payload)}`;
}

export async function verifySessionToken(token: string | undefined | null): Promise<boolean> {
  if (!token) return false;
  const parts = token.split(".");
  if (parts.length !== 4) return false;
  const [role, versionStr, expiresStr, signature] = parts;
  if (role !== "admin") return false;
  const expires = Number(expiresStr);
  if (!Number.isFinite(expires) || Date.now() > expires) return false;
  if (!safeEqual(signature, sign(`${role}.${versionStr}.${expiresStr}`))) return false;

  const currentVersion = await getAdminSessionVersion();
  return currentVersion !== null && String(currentVersion) === versionStr;
}

// Returns the session version to mint a token with, or null if the password was
// wrong or no admin account has been seeded yet (run `npm run seed`).
export async function verifyAdminPassword(password: string): Promise<number | null> {
  const creds = await getAdminCredentials();
  if (!creds) return null;
  const valid = await bcrypt.compare(password, creds.passwordHash);
  return valid ? creds.sessionVersion : null;
}

export async function changeAdminPassword(
  currentPassword: string,
  newPassword: string
): Promise<{ ok: true; sessionVersion: number } | { ok: false; error: string }> {
  if (newPassword.length < MIN_PASSWORD_LENGTH) {
    return { ok: false, error: `New password must be at least ${MIN_PASSWORD_LENGTH} characters.` };
  }

  const creds = await getAdminCredentials();
  if (!creds) {
    return { ok: false, error: "No admin account has been seeded yet." };
  }
  const valid = await bcrypt.compare(currentPassword, creds.passwordHash);
  if (!valid) {
    return { ok: false, error: "Current password is incorrect." };
  }

  const hash = await bcrypt.hash(newPassword, BCRYPT_ROUNDS);
  const sessionVersion = await updateAdminPassword(hash);
  return { ok: true, sessionVersion };
}
