import type { Metadata } from "next";
import { Inter, Courier_Prime } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const courierPrime = Courier_Prime({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-courier-prime",
});

export const metadata: Metadata = {
  title: "Pio GmbH - International Expertise. German Reliability.",
  description:
    "A premier management and service company in Mülheim an der Ruhr combining European standards with local excellence.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${courierPrime.variable}`}>
      <body>{children}</body>
    </html>
  );
}
