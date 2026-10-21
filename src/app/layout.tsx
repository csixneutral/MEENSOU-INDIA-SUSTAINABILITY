import type { Metadata } from "next";
import { DM_Serif_Display, Inter, Manrope, Plus_Jakarta_Sans } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { site } from "@/data/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const serif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Meensou India · Restoring Nature, Empowering Communities",
    template: "%s · Meensou India",
  },
  description: site.description,
  applicationName: site.shortName,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: site.shortName,
    title: "Meensou India · Restoring Nature, Empowering Communities",
    description: site.description,
    images: [
      {
        url: "/media/field-community.jpg",
        width: 1200,
        height: 800,
        alt: "Young mangrove restoration site in the Indian Sundarbans",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Meensou India",
    description: site.description,
    images: ["/media/field-community.jpg"],
  },
  icons: { icon: "/media/logo.png", apple: "/media/logo.png" },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  url: site.url,
  logo: `${site.url}/media/logo.png`,
  email: site.email,
  telephone: "+91-9124668034",
  foundingDate: site.founded,
  sameAs: [site.linkedin],
  address: [
    {
      "@type": "PostalAddress",
      streetAddress: "Kundaposhi, Kuchinda",
      postalCode: "768222",
      addressRegion: "Odisha",
      addressCountry: "IN",
    },
    {
      "@type": "PostalAddress",
      streetAddress: "Ergo Tower, Sector V, Bidhannagar",
      postalCode: "700091",
      addressLocality: "Kolkata",
      addressRegion: "West Bengal",
      addressCountry: "IN",
    },
    {
      "@type": "PostalAddress",
      streetAddress: "Hubstairs CoWorks, BTM Layout",
      postalCode: "560068",
      addressLocality: "Bengaluru",
      addressRegion: "Karnataka",
      addressCountry: "IN",
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable} ${manrope.variable} ${serif.variable}`}>
      <body className="min-h-screen bg-ivory font-sans text-charcoal antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[80] focus:bg-ivory focus:px-4 focus:py-2"
        >
          Skip to content
        </a>
        <SmoothScroll />
        <Header />
        <main id="content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
