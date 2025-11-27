import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckIcon, XIcon } from "lucide-react";

const APP_URL =
  process.env.NEXT_PUBLIC_APP_URL || "https://app.organizemyteam.com";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple, transparent pricing for Team Manager. Start free with full payment tracking, upgrade for unlimited teams and advanced features. Compare to TeamSnap and save.",
  keywords: [
    "team manager pricing",
    "youth sports software cost",
    "team management pricing",
    "teamsnap alternative pricing",
    "affordable team software",
  ],
  openGraph: {
    title: "Pricing - OrganizeMyTeam",
    description:
      "Start free, upgrade when you need more. Simple pricing for team treasurers.",
    type: "website",
    url: "https://organizemyteam.com/pricing",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing - OrganizeMyTeam",
    description:
      "Start free, upgrade when you need more. Simple pricing for team treasurers.",
  },
  alternates: {
    canonical: "https://organizemyteam.com/pricing",
  },
};

const tiers = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description:
      "Perfect for small teams. Full payment tracking capabilities to get you started.",
    features: [
      { text: "1 team", included: true },
      { text: "Up to 20 members", included: true },
      { text: "Full payment tracking", included: true },
      { text: "Basic expense tracking", included: true },
      { text: "Member payment history", included: true },
      { text: "Email support", included: true },
      { text: "Advanced financial reports", included: false },
      { text: "Budget tracking", included: false },
      { text: "Automated reminders", included: false },
    ],
    cta: "Get Started Free",
    href: `${APP_URL}/signup`,
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$8",
    period: "/month",
    yearlyPrice: "$96/year",
    description:
      "For serious treasurers. Unlimited teams, advanced reports, and automation.",
    features: [
      { text: "Unlimited teams", included: true },
      { text: "Unlimited members", included: true },
      { text: "Full payment tracking", included: true },
      { text: "Advanced expense management", included: true },
      { text: "Detailed financial reports", included: true },
      { text: "Budget tracking & forecasting", included: true },
      { text: "Automated payment reminders", included: true },
      { text: "Export to Excel/PDF", included: true },
      { text: "Priority support", included: true },
    ],
    cta: "Start 14-Day Free Trial",
    href: `${APP_URL}/signup?plan=pro`,
    highlighted: true,
    badge: "Best Value",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description:
      "For leagues and large organizations. Custom solutions and dedicated support.",
    features: [
      { text: "Everything in Pro", included: true },
      { text: "Multi-organization management", included: true },
      { text: "Custom integrations", included: true },
      { text: "API access", included: true },
      { text: "Dedicated account manager", included: true },
      { text: "Custom onboarding", included: true },
      { text: "SLA guarantee", included: true },
      { text: "Phone support", included: true },
      { text: "Custom reporting", included: true },
    ],
    cta: "Contact Sales",
    href: "/contact?subject=enterprise",
    highlighted: false,
  },
];

const faqs = [
  {
    question: "Can I try Pro features before committing?",
    answer:
      "Absolutely! Start a 14-day free trial of Pro with no credit card required. You'll have full access to all Pro features during the trial.",
  },
  {
    question: "What happens when my trial ends?",
    answer:
      "You'll be automatically moved to the Free plan—no charge, no data loss. Upgrade to Pro anytime to unlock advanced features again.",
  },
  {
    question: "Can I switch plans later?",
    answer:
      "Yes! Upgrade or downgrade anytime. When upgrading, you'll get immediate access to new features. When downgrading, you'll keep Pro features until your current billing period ends.",
  },
  {
    question: "Is there a discount for annual billing?",
    answer:
      "Yes! Pay annually for Pro and get 2 months free ($96/year instead of $8/month). That's just $8/month for unlimited teams and all Pro features.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards (Visa, Mastercard, American Express) and can arrange invoicing for Enterprise customers.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes, cancel anytime with no questions asked. You'll retain access to paid features until the end of your billing period.",
  },
];

const competitorComparison = [
  { feature: "Monthly price (team plan)", teamManager: "$8", teamSnap: "$12.50" },
  { feature: "Annual price", teamManager: "$96", teamSnap: "$150" },
  { feature: "Your savings", teamManager: "36%", teamSnap: "-" },
  { feature: "Payment tracking", teamManager: "✓ Advanced", teamSnap: "✓ Basic" },
  { feature: "Expense categorization", teamManager: "✓", teamSnap: "✗" },
  { feature: "Financial reports", teamManager: "✓ Detailed", teamSnap: "✗" },
  { feature: "Budget forecasting", teamManager: "✓", teamSnap: "✗" },
  { feature: "Treasurer dashboard", teamManager: "✓", teamSnap: "✗" },
];

export default function PricingPage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Team Manager Pricing",
            description:
              "Pricing plans for Team Manager financial management software",
            mainEntity: {
              "@type": "SoftwareApplication",
              name: "Team Manager",
              offers: [
                {
                  "@type": "Offer",
                  name: "Free",
                  price: "0",
                  priceCurrency: "USD",
                },
                {
                  "@type": "Offer",
                  name: "Pro",
                  price: "8",
                  priceCurrency: "USD",
                  billingIncrement: "month",
                },
              ],
            },
          }),
        }}
      />

      {/* Hero Section */}
      <section className="container-landing section-padding">
        <div className="text-center">
          <Badge variant="secondary" className="mb-4">
            Pricing
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Simple, Transparent Pricing
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Start free with full payment tracking. Upgrade when you need
            unlimited teams and advanced features. No hidden fees, no surprises.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {tiers.map((tier) => (
            <Card
              key={tier.name}
              className={`relative flex flex-col ${
                tier.highlighted ? "border-primary shadow-lg scale-105" : ""
              }`}
            >
              {tier.badge && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">
                  {tier.badge}
                </Badge>
              )}
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">{tier.name}</CardTitle>
                <CardDescription className="min-h-[48px]">
                  {tier.description}
                </CardDescription>
                <div className="mt-4">
                  <span className="text-5xl font-bold">{tier.price}</span>
                  <span className="text-muted-foreground">{tier.period}</span>
                </div>
                {tier.yearlyPrice && (
                  <p className="mt-1 text-sm text-muted-foreground">
                    or {tier.yearlyPrice} (2 months free)
                  </p>
                )}
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature.text} className="flex items-start gap-2">
                      {feature.included ? (
                        <CheckIcon className="h-5 w-5 shrink-0 text-primary" />
                      ) : (
                        <XIcon className="h-5 w-5 shrink-0 text-muted-foreground/50" />
                      )}
                      <span
                        className={
                          feature.included ? "" : "text-muted-foreground/50"
                        }
                      >
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full"
                  size="lg"
                  variant={tier.highlighted ? "default" : "outline"}
                  asChild
                >
                  {tier.href.startsWith("/") ? (
                    <Link href={tier.href}>{tier.cta}</Link>
                  ) : (
                    <a href={tier.href}>{tier.cta}</a>
                  )}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Trial Notice */}
        <p className="mt-8 text-center text-sm text-muted-foreground">
          All paid plans include a 14-day free trial. No credit card required.
        </p>
      </section>

      {/* Value Proposition */}
      <section className="bg-muted/30">
        <div className="container-landing section-padding">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Built for Financial Management
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              While other tools offer basic payment collection, Team Manager
              provides the deep financial tracking treasurers actually need.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <span className="text-2xl font-bold text-primary">$</span>
              </div>
              <h3 className="mt-4 font-semibold">Complete Payment Tracking</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Not just &ldquo;who paid&rdquo;—track payment history, partial
                payments, credits, and outstanding balances per member.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <span className="text-2xl font-bold text-primary">📊</span>
              </div>
              <h3 className="mt-4 font-semibold">Real Financial Reports</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Income statements, expense breakdowns, and balance reports—the
                kind you&apos;d present to a board.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <span className="text-2xl font-bold text-primary">📈</span>
              </div>
              <h3 className="mt-4 font-semibold">Budget Forecasting</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Plan your season finances, track actual vs. budget, and forecast
                cash flow. Know where you stand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TeamSnap Comparison */}
      <section className="container-landing section-padding">
        <div className="text-center">
          <Badge variant="outline" className="mb-4">
            Compare
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Team Manager vs. TeamSnap
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Save 36% while getting deeper financial features. TeamSnap is great
            for scheduling—we&apos;re built for treasurers.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-xl border">
          <table className="w-full">
            <thead>
              <tr className="border-b bg-muted/50">
                <th className="px-6 py-4 text-left font-semibold">Feature</th>
                <th className="px-6 py-4 text-center font-semibold text-primary">
                  Team Manager
                </th>
                <th className="px-6 py-4 text-center font-semibold">
                  TeamSnap
                </th>
              </tr>
            </thead>
            <tbody>
              {competitorComparison.map((row, index) => (
                <tr
                  key={row.feature}
                  className={
                    index !== competitorComparison.length - 1 ? "border-b" : ""
                  }
                >
                  <td className="px-6 py-4 text-sm font-medium">
                    {row.feature}
                  </td>
                  <td className="px-6 py-4 text-center text-sm font-semibold text-primary">
                    {row.teamManager}
                  </td>
                  <td className="px-6 py-4 text-center text-sm text-muted-foreground">
                    {row.teamSnap}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 text-center">
          <Button size="lg" asChild>
            <a href={`${APP_URL}/signup`}>Try Free for 14 Days</a>
          </Button>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-muted/30">
        <div className="container-landing section-padding">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Everything you need to know about our pricing.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {faqs.map((faq) => (
              <div key={faq.question} className="space-y-2">
                <h3 className="font-semibold">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-primary text-primary-foreground">
        <div className="container-landing section-padding">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to Simplify Your Team Finances?
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-primary-foreground/80">
              Join hundreds of treasurers who&apos;ve made the switch. Start
              your free trial today.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button size="lg" variant="secondary" asChild>
                <a href={`${APP_URL}/signup`}>Start Free Trial</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
                asChild
              >
                <Link href="/contact">Talk to Sales</Link>
              </Button>
            </div>
            <p className="mt-6 text-sm text-primary-foreground/60">
              No credit card required • Cancel anytime
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
