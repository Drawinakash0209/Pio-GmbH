import type { Metadata } from "next";
import { Playfair_Display, DM_Sans, DM_Mono } from "next/font/google";
import { cookies } from "next/headers";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LanguageProvider } from "@/components/LanguageProvider";
import { EditableProvider } from "@/components/EditableProvider";
import { getAllContent } from "@/lib/db";
import { ADMIN_COOKIE_NAME, verifySessionToken } from "@/lib/session";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
});
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" });
const dmMono = DM_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-dm-mono",
});

export const metadata: Metadata = {
  title: "Pio GmbH - International Expertise. German Reliability.",
  description:
    "A premier management and service company in Mülheim an der Ruhr combining European standards with local excellence.",
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const content = getAllContent();
  const cookieStore = await cookies();
  const isAdmin = verifySessionToken(cookieStore.get(ADMIN_COOKIE_NAME)?.value);

  return (
    <html
      lang="en"
      className={`${playfairDisplay.variable} ${dmSans.variable} ${dmMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        />
        {/* Set theme class + language before paint to avoid a flash of the wrong state on load */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('pio-gmbh-theme');if(!t){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}if(t==='dark'){document.documentElement.classList.add('dark');}var l=localStorage.getItem('pio-gmbh-lang');if(l==='de'||l==='en'){document.documentElement.lang=l;}}catch(e){}})();`,
          }}
        />
      </head>
      <body suppressHydrationWarning>
        <ThemeProvider>
          <LanguageProvider>
            <EditableProvider initialContent={content} isAdmin={isAdmin}>
              {children}
            </EditableProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
