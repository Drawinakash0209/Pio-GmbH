import type { Metadata } from "next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { ADMIN_COOKIE_NAME, verifySessionToken } from "@/lib/session";
import { CONTENT_SECTIONS } from "@/lib/content-schema";
import AdminDashboard from "@/components/admin/AdminDashboard";

export const metadata: Metadata = {
  title: "Content Dashboard — Pio GmbH",
};

export default async function AdminDashboardPage() {
  const store = await cookies();
  if (!verifySessionToken(store.get(ADMIN_COOKIE_NAME)?.value)) {
    redirect("/admin");
  }

  return <AdminDashboard sections={CONTENT_SECTIONS} />;
}
