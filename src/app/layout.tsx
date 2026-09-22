import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import Script from "next/script";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://apex24consultancy.com'),
  title: "Recruitment & Talent Solutions Across India | APEX 24",
  description: "APEX 24 is a Pune-based recruitment and talent solutions consultancy providing IT, BFSI, corporate, bulk hiring, executive search and talent acquisition solutions across India.",
  openGraph: {
    title: 'Recruitment & Talent Solutions Across India | APEX 24',
    description: 'APEX 24 is a Pune-based recruitment and talent solutions consultancy providing IT, BFSI, corporate, bulk hiring, executive search and talent acquisition solutions across India.',
    url: 'https://apex24consultancy.com',
    siteName: 'APEX 24',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Recruitment & Talent Solutions Across India | APEX 24',
    description: 'APEX 24 is a Pune-based recruitment and talent solutions consultancy providing IT, BFSI, corporate, bulk hiring, executive search and talent acquisition solutions across India.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    "name": "APEX 24 Recruitment & Talent Solutions",
    "url": "https://apex24consultancy.com",
    "logo": "https://apex24consultancy.com/icon.jpg",
    "image": "https://apex24consultancy.com/icon.jpg",
    "description": "APEX 24 is an India-wide recruitment and talent solutions consultancy based in Pune, Maharashtra.",
    "telephone": "+919021068823",
    "email": "hr@apex24consultancy.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "GQFJ+96H, Dr. Homi Bhabha Rd, Ram Nagar, Bavdhan",
      "addressLocality": "Pune",
      "addressRegion": "Maharashtra",
      "postalCode": "411021",
      "addressCountry": "IN"
    },
    "areaServed": "IN",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    }
  };

  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground selection:bg-accent/20 selection:text-accent">
        <Navbar />
        <main className="flex-1 pt-[90px]">
          {children}
        </main>
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}
