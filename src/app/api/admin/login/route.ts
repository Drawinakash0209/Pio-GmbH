import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import {
  ADMIN_COOKIE_MAX_AGE,
  ADMIN_COOKIE_NAME,
  createSessionToken,
  verifyAdminPassword,
} from "@/lib/session";
import { clearAttempts, getClientIp, isLocked, recordFailedAttempt } from "@/lib/rateLimit";

export async function POST(request: Request) {
  const ip = getClientIp(request);
  if (isLocked(ip)) {
    return NextResponse.json(
      { error: "Too many attempts. Try again later." },
      { status: 429 }
    );
  }

  const body = await request.json().catch(() => null);
  const password = typeof body?.password === "string" ? body.password : "";

  const sessionVersion = password ? await verifyAdminPassword(password) : null;
  if (sessionVersion === null) {
    recordFailedAttempt(ip);
    // Small fixed delay blunts naive brute-force attempts.
    await new Promise((resolve) => setTimeout(resolve, 400));
    return NextResponse.json({ error: "Invalid password" }, { status: 401 });
  }
  clearAttempts(ip);

  const store = await cookies();
  store.set(ADMIN_COOKIE_NAME, createSessionToken(sessionVersion), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: ADMIN_COOKIE_MAX_AGE,
  });

  return NextResponse.json({ ok: true });
}
