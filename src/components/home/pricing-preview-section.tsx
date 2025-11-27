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
import { CheckIcon } from "lucide-react";
import { ctaLinks } from "@/lib/constants";

const tiers = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for small teams getting started",
    features: [
      "1 team",
      "Up to 20 members",
      "Full payment tracking",
      "Basic expense tracking",
      "Email support",
    ],
    cta: "Start Free",
    href: ctaLinks.signup,
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$8",
    period: "/month",
    description: "For treasurers who need more power",
    features: [
      "Unlimited teams",
      "Unlimited members",
      "Advanced financial reports",
      "Budget tracking & forecasting",
      "Automated reminders",
      "Export to Excel/PDF",
      "Priority support",
    ],
    cta: "Start Free Trial",
    href: `${ctaLinks.signup}?plan=pro`,
    highlighted: true,
    badge: "Most Popular",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For leagues and large organizations",
    features: [
      "Everything in Pro",
      "Multi-team management",
      "Custom integrations",
      "Dedicated account manager",
      "SLA guarantee",
    ],
    cta: "Contact Sales",
    href: "/contact?subject=enterprise",
    highlighted: false,
  },
];

export function PricingPreviewSection() {
  return (
    <section className="container-landing section-padding">
      {/* Section Header */}
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Simple, Transparent Pricing
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Start free, upgrade when you need more. No hidden fees, no surprises.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="mt-12 grid gap-8 lg:grid-cols-3">
        {tiers.map((tier) => (
          <Card
            key={tier.name}
            className={`relative flex flex-col ${
              tier.highlighted ? "border-primary shadow-lg" : ""
            }`}
          >
            {tier.badge && (
              <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">
                {tier.badge}
              </Badge>
            )}
            <CardHeader>
              <CardTitle>{tier.name}</CardTitle>
              <CardDescription>{tier.description}</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold">{tier.price}</span>
                <span className="text-muted-foreground">{tier.period}</span>
              </div>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <CheckIcon className="h-5 w-5 shrink-0 text-primary" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button
                className="w-full"
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

      {/* Link to full pricing */}
      <div className="mt-8 text-center">
        <Link
          href="/pricing"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          View full pricing details →
        </Link>
      </div>
    </section>
  );
}
