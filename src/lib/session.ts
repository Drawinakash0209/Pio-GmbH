import { createHmac, timingSafeEqual } from "node:crypto";
import bcrypt from "bcryptjs";
import { getAdminPasswordHash, setAdminPasswordHash } from "./db";

const BCRYPT_ROUNDS = 12;

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

export function createSessionToken(): string {
  const expires = Date.now() + SESSION_TTL_MS;
  const payload = `admin.${expires}`;
  return `${payload}.${sign(payload)}`;
}

export function verifySessionToken(token: string | undefined | null): boolean {
  if (!token) return false;
  const parts = token.split(".");
  if (parts.length !== 3) return false;
  const [role, expiresStr, signature] = parts;
  if (role !== "admin") return false;
  const expires = Number(expiresStr);
  if (!Number.isFinite(expires) || Date.now() > expires) return false;
  return safeEqual(signature, sign(`${role}.${expiresStr}`));
}

let seedInFlight: Promise<string> | undefined;

// Seeds admin_credentials from ADMIN_PASSWORD on first run; the DB row is
// authoritative for every login after that.
function getOrSeedPasswordHash(): Promise<string> {
  if (!seedInFlight) {
    seedInFlight = (async () => {
      const existing = await getAdminPasswordHash();
      if (existing) return existing;

      const seed = process.env.ADMIN_PASSWORD;
      if (!seed) {
        throw new Error("ADMIN_PASSWORD environment variable is not set.");
      }
      const hash = await bcrypt.hash(seed, BCRYPT_ROUNDS);
      await setAdminPasswordHash(hash);
      return hash;
    })().catch((err) => {
      seedInFlight = undefined;
      throw err;
    });
  }
  return seedInFlight;
}

export async function verifyAdminPassword(password: string): Promise<boolean> {
  const hash = await getOrSeedPasswordHash();
  return bcrypt.compare(password, hash);
}
