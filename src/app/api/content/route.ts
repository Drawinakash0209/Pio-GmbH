import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { deleteContentValue, getAllContent, resetAllContent, setContentValue } from "@/lib/db";
import { ADMIN_COOKIE_NAME, verifySessionToken } from "@/lib/session";

async function isAdminRequest(): Promise<boolean> {
  const store = await cookies();
  return verifySessionToken(store.get(ADMIN_COOKIE_NAME)?.value);
}

export async function GET() {
  return NextResponse.json(getAllContent());
}

export async function PATCH(request: Request) {
  if (!(await isAdminRequest())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json().catch(() => null);
  const id = typeof body?.id === "string" ? body.id : "";
  const value = typeof body?.value === "string" ? body.value : "";

  if (!id) {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }

  setContentValue(id, value);
  return NextResponse.json({ ok: true });
}

export async function DELETE(request: Request) {
  if (!(await isAdminRequest())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (id) {
    deleteContentValue(id);
  } else {
    resetAllContent();
  }

  return NextResponse.json({ ok: true });
}
