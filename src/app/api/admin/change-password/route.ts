import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import {
  ADMIN_COOKIE_MAX_AGE,
  ADMIN_COOKIE_NAME,
  changeAdminPassword,
  createSessionToken,
  verifySessionToken,
} from "@/lib/session";

export async function POST(request: Request) {
  const store = await cookies();
  if (!(await verifySessionToken(store.get(ADMIN_COOKIE_NAME)?.value))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json().catch(() => null);
  const currentPassword = typeof body?.currentPassword === "string" ? body.currentPassword : "";
  const newPassword = typeof body?.newPassword === "string" ? body.newPassword : "";

  const result = await changeAdminPassword(currentPassword, newPassword);
  if (!result.ok) {
    return NextResponse.json({ error: result.error }, { status: 400 });
  }

  // Re-mint a token under the new session_version so the requester (who just
  // proved they know the new password) isn't logged out along with every
  // other outstanding session.
  store.set(ADMIN_COOKIE_NAME, createSessionToken(result.sessionVersion), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: ADMIN_COOKIE_MAX_AGE,
  });

  return NextResponse.json({ ok: true });
}
