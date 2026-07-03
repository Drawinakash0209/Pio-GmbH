import type { Metadata } from "next";
import { Inter, Courier_Prime } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const courierPrime = Courier_Prime({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-courier-prime",
});
const qalisso = localFont({
  src: "./fonts/Qalisso.otf",
  variable: "--font-qalisso",
  display: "swap",
});
const questeroItalic = localFont({
  src: "./fonts/QesteroItalic-WyDLE.ttf",
  variable: "--font-questero-italic",
  display: "swap",
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
    <html
      lang="en"
      className={`${inter.variable} ${courierPrime.variable} ${qalisso.variable} ${questeroItalic.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
