import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header, Footer } from "@/components/layout";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
  ],
  authors: [{ name: "OrganizeMyTeam" }],
  metadataBase: new URL("https://organizemyteam.com"),
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
