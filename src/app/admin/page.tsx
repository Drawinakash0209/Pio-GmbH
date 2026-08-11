import type { Metadata } from "next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { ADMIN_COOKIE_NAME, verifySessionToken } from "@/lib/session";
import AdminLoginForm from "@/components/AdminLoginForm";

export const metadata: Metadata = {
  title: "Admin Login — Pio GmbH",
};

export default async function AdminLoginPage() {
  const store = await cookies();
  if (await verifySessionToken(store.get(ADMIN_COOKIE_NAME)?.value)) {
    redirect("/admin/dashboard");
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-t-bg px-4">
      <AdminLoginForm />
    </main>
  );
}
