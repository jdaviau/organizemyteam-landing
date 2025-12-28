import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Target,
  Heart,
  Users,
  Lightbulb,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { ctaLinks } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about OrganizeMyTeam and our mission to simplify team financial management for youth sports treasurers.",
  openGraph: {
    title: "About Us | OrganizeMyTeam",
    description:
      "Learn about OrganizeMyTeam and our mission to simplify team financial management for youth sports treasurers.",
  },
};

const values = [
  {
    icon: Target,
    title: "Purpose-Built",
    description:
      "We focus exclusively on the financial challenges team treasurers face. No bloated features, just the tools you need.",
  },
  {
    icon: Heart,
    title: "Volunteer-Friendly",
    description:
      "We know you're doing this in your spare time. Our tools are designed to save you hours, not add complexity.",
  },
  {
    icon: Users,
    title: "Community-Focused",
    description:
      "Youth sports bring communities together. We're proud to support the volunteers who make it happen.",
  },
  {
    icon: Lightbulb,
    title: "Continuously Improving",
    description:
      "We listen to treasurers and constantly improve based on real-world feedback and needs.",
  },
];

const milestones = [
  {
    title: "The Problem We Saw",
    description:
      "We watched treasurers struggle with spreadsheets, chase payments awkwardly, and spend hours on what should be simple tasks.",
  },
  {
    title: "Building the Solution",
    description:
      "We built Team Manager from the ground up, focused on the specific needs of youth sports financial management.",
  },
  {
    title: "Growing Together",
    description:
      "Today, we help hundreds of teams manage their finances with confidence, and we're just getting started.",
  },
];

export default function AboutPage() {
  return (
    <div className="container-landing section-padding">
      {/* Hero Section */}
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          About OrganizeMyTeam
        </h1>
        <p className="mt-6 text-xl text-muted-foreground">
          We believe team treasurers deserve better tools. That&apos;s why we
          built software specifically for managing youth sports team finances.
        </p>
      </div>

      {/* Mission Section */}
      <div className="mt-20 max-w-4xl mx-auto">
        <div className="rounded-2xl bg-primary/5 border border-primary/20 p-8 md:p-12 text-center">
          <h2 className="text-2xl font-bold md:text-3xl">Our Mission</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            To give every youth sports team volunteer the tools they need to
            manage finances with confidence, transparency, and minimal time
            investment—so they can focus on what matters most: supporting their
            team.
          </p>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="mt-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Our Story</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            OrganizeMyTeam was born from firsthand experience with the
            challenges of team financial management.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
          {milestones.map((milestone, index) => (
            <div key={milestone.title} className="relative">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                  {index + 1}
                </div>
                <h3 className="font-semibold text-lg">{milestone.title}</h3>
              </div>
              <p className="text-muted-foreground pl-14">
                {milestone.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Values Section */}
      <div className="mt-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">What We Stand For</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Our values guide everything we build and every decision we make.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <Card key={value.title} className="text-center">
              <CardContent className="pt-6">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">{value.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Why We Built This Section */}
      <div className="mt-20 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          Why We Built Team Manager
        </h2>
        <div className="prose prose-lg max-w-none text-muted-foreground">
          <p>
            We&apos;ve been there—volunteering as team treasurers, wrestling
            with spreadsheets, sending awkward payment reminder texts, and
            spending Sunday nights reconciling accounts instead of relaxing.
          </p>
          <p>
            We looked for software to help, but everything we found was either
            too complicated, too expensive, or designed for businesses rather
            than volunteer-run teams. The tools built for &quot;team
            management&quot; focused on scheduling and communication, treating
            finances as an afterthought.
          </p>
          <p>
            So we built Team Manager—software that puts financial management
            first. Payment tracking that actually works. Reminders that remove
            the awkwardness. Reports that take seconds, not hours. All designed
            specifically for how youth sports teams actually operate.
          </p>
        </div>
      </div>

      {/* What Makes Us Different */}
      <div className="mt-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">What Makes Us Different</h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {[
            "Built specifically for youth sports team volunteers",
            "Financial management is our focus, not an afterthought",
            "Simple enough for volunteer treasurers, powerful enough for clubs",
            "Transparent pricing with a generous free tier",
            "Designed by people who've actually been team treasurers",
            "Continuous improvement based on real user feedback",
          ].map((item) => (
            <div key={item} className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
              <span className="text-lg">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-20 text-center">
        <div className="rounded-2xl bg-primary p-8 md:p-12 text-primary-foreground">
          <h2 className="text-2xl font-bold md:text-3xl">
            Ready to Simplify Your Team Finances?
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Join hundreds of teams who have already made the switch to easier
            financial management.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <a href={ctaLinks.signup}>
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
              asChild
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
