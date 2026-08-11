import type { Metadata } from "next";
import { Playfair_Display, DM_Sans, DM_Mono } from "next/font/google";
import localFont from "next/font/local";
import { cookies } from "next/headers";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LanguageProvider } from "@/components/LanguageProvider";
import { EditableProvider } from "@/components/EditableProvider";
import { InlineScript } from "@/components/InlineScript";
import { JsonLd } from "@/components/JsonLd";
import { getAllContent } from "@/lib/db";
import { ADMIN_COOKIE_NAME, verifySessionToken } from "@/lib/session";
import { SITE_URL } from "@/lib/site";

const DEFAULT_TITLE = "Pio GmbH — International Expertise. German Reliability.";
const DEFAULT_DESCRIPTION =
  "Pio GmbH is a premier management and service company in Mülheim an der Ruhr, Germany, combining European standards with local excellence in facility management, staffing, and operations.";

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
const bloved = localFont({
  src: "./fonts/Bloved.ttf",
  variable: "--font-bloved",
});

export async function generateMetadata(): Promise<Metadata> {
  const content = await getAllContent();
  const title = content["seo.title"] ?? DEFAULT_TITLE;
  const description = content["seo.description"] ?? DEFAULT_DESCRIPTION;

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    keywords: [
      "facility management",
      "staffing solutions",
      "operational optimization",
      "import export",
      "Mülheim an der Ruhr",
      "Germany",
    ],
    alternates: { canonical: "/" },
    robots: { index: true, follow: true },
    openGraph: {
      type: "website",
      url: SITE_URL,
      siteName: "Pio GmbH",
      title,
      description,
      locale: "en_US",
      alternateLocale: ["de_DE"],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const content = await getAllContent();
  const cookieStore = await cookies();
  const isAdmin = await verifySessionToken(cookieStore.get(ADMIN_COOKIE_NAME)?.value);

  const cityLine = content["contact.address.cityLine"] ?? "45476 Mülheim an der Ruhr";
  const [postalCode, ...cityParts] = cityLine.split(" ");
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Pio GmbH",
    description: content["seo.description"] ?? DEFAULT_DESCRIPTION,
    url: SITE_URL,
    telephone: content["contact.phone"] ?? "+49 151 27919995",
    address: {
      "@type": "PostalAddress",
      streetAddress: content["contact.address.street"] ?? "Oberhausener Straße 187",
      postalCode,
      addressLocality: cityParts.join(" ") || "Mülheim an der Ruhr",
      addressCountry: "DE",
    },
  };

  return (
    <html
      lang="en"
      className={`${playfairDisplay.variable} ${dmSans.variable} ${dmMono.variable} ${bloved.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        />
        <JsonLd data={jsonLd} />
        {/* Set theme class + language before paint to avoid a flash of the wrong state on load */}
        <InlineScript
          html={`(function(){try{var t=localStorage.getItem('pio-gmbh-theme');if(!t){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}if(t==='dark'){document.documentElement.classList.add('dark');}var l=localStorage.getItem('pio-gmbh-lang');if(l==='de'||l==='en'){document.documentElement.lang=l;}}catch(e){}})();`}
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
