import type { Metadata } from "next";
import {
  HeroSection,
  FeaturesSection,
  ComparisonSection,
  TestimonialsSection,
  StatsSection,
  PricingPreviewSection,
  CTASection,
} from "@/components/home";

export const metadata: Metadata = {
  title: "OrganizeMyTeam - Financial Management for Team Treasurers",
  description:
    "Financial management built for team treasurers. Track payments, manage expenses, and generate reports for your youth sports team. Start free today.",
  keywords: [
    "team treasurer",
    "youth sports finances",
    "payment tracking",
    "team manager",
    "sports team budget",
    "expense management",
    "team dues tracker",
    "financial reports",
  ],
  openGraph: {
    title: "OrganizeMyTeam - Financial Management for Team Treasurers",
    description:
      "Stop chasing payments and wrestling with spreadsheets. Track dues, manage expenses, and generate reports—all in one place.",
    type: "website",
    url: "https://organizemyteam.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "OrganizeMyTeam - Financial Management for Team Treasurers",
    description:
      "Stop chasing payments and wrestling with spreadsheets. Track dues, manage expenses, and generate reports—all in one place.",
  },
  alternates: {
    canonical: "https://organizemyteam.com",
  },
};

export default function HomePage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Team Manager by OrganizeMyTeam",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web",
            description:
              "Financial management software built for youth sports team treasurers. Track payments, manage expenses, and generate reports.",
            offers: {
              "@type": "AggregateOffer",
              lowPrice: "0",
              highPrice: "8",
              priceCurrency: "USD",
              offerCount: "3",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.8",
              ratingCount: "127",
              bestRating: "5",
              worstRating: "1",
            },
            featureList: [
              "Payment Tracking",
              "Expense Management",
              "Financial Reports",
              "Automated Reminders",
              "Budget Forecasting",
            ],
          }),
        }}
      />

      {/* Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "OrganizeMyTeam",
            url: "https://organizemyteam.com",
            logo: "https://organizemyteam.com/logo.png",
            description:
              "Financial management solutions for youth sports team treasurers.",
            sameAs: [],
          }),
        }}
      />

      {/* Page Sections */}
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <ComparisonSection />
      <TestimonialsSection />
      <PricingPreviewSection />
      <CTASection />
    </>
  );
}
