import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pio GmbH — International Expertise. German Reliability.",
  description:
    "A premier management and service company in Mülheim an der Ruhr combining European standards with local excellence.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
