import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header, Footer } from "@/components/layout";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "OrganizeMyTeam - Financial Management for Team Treasurers",
    template: "%s | OrganizeMyTeam",
  },
  description:
    "Financial management built for team treasurers. Track payments, manage expenses, and generate reports for your youth sports team.",
  keywords: [
    "team management",
    "sports team",
    "treasurer",
    "payment tracking",
    "youth sports",
    "team finances",
    "expense management",
    "financial reports",
    "team treasurer software",
  ],
  authors: [{ name: "OrganizeMyTeam" }],
  creator: "OrganizeMyTeam",
  publisher: "OrganizeMyTeam",
  metadataBase: new URL("https://organizemyteam.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://organizemyteam.com",
    siteName: "OrganizeMyTeam",
    title: "OrganizeMyTeam - Financial Management for Team Treasurers",
    description:
      "Financial management built for team treasurers. Track payments, manage expenses, and generate reports for your youth sports team.",
  },
  twitter: {
    card: "summary_large_image",
    title: "OrganizeMyTeam - Financial Management for Team Treasurers",
    description:
      "Financial management built for team treasurers. Track payments, manage expenses, and generate reports for your youth sports team.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add verification codes when available
    // google: "google-site-verification-code",
    // yandex: "yandex-verification-code",
  },
};

// Organization structured data
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "OrganizeMyTeam",
  url: "https://organizemyteam.com",
  logo: "https://organizemyteam.com/logo.png",
  description:
    "Financial management software for youth sports team treasurers.",
  foundingDate: "2024",
  sameAs: [],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    email: "support@organizemyteam.com",
  },
};

// Software Application structured data
const softwareJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Team Manager",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    description: "Free tier available with paid plans starting at $8/month",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    ratingCount: "50",
    bestRating: "5",
    worstRating: "1",
  },
  description:
    "Financial management platform for youth sports team treasurers. Track payments, manage expenses, and generate reports.",
  url: "https://organizemyteam.com/products/team-manager",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(softwareJsonLd),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <div className="relative flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
