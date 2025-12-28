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
import { ctaLinks } from "@/lib/constants";

const tiers = [
  {
    name: "Core",
    price: "$9.99",
    priceCAD: "$12.99",
    period: " USD/month",
    description: "Perfect for small teams getting started",
    features: [
      { text: "20 teams", included: true },
      { text: "50 members", included: true },
      { text: "Full payment tracking", included: true },
      { text: "Full expense tracking", included: true },
      { text: "Treasurer dashboards only", included: true },
      { text: "Export to CSV", included: true },
      { text: "Priority support", included: true },
      { text: "Automated reminders", included: false },
    ],
    cta: "Get Started",
    href: ctaLinks.signup,
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$16.99",
    priceCAD: "$19.99",
    period: " USD/month",
    description: "For treasurers who need more power",
    features: [
      { text: "Unlimited teams", included: true },
      { text: "50 members", included: true },
      { text: "Full payment tracking", included: true },
      { text: "Full expense tracking", included: true },
      { text: "Treasurer, parent and member dashboards", included: true },
      { text: "Automated reminders", included: true },
      { text: "Export to CSV/Excel/PDF", included: true },
      { text: "Priority support", included: true },
    ],
    cta: "Start Free Trial",
    href: `/contact?subject=pro`,
    highlighted: true,
    badge: "Most Popular",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For leagues and large organizations",
    features: [
      { text: "Everything in Pro", included: true },
      { text: "Multi-team management", included: true },
      { text: "Custom integrations", included: true },
      { text: "Custom onboarding", included: true },
      { text: "Custom reporting", included: true },
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
          Choose the plan that fits your team. No hidden fees, no surprises.
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
                {tier.priceCAD && (
                  <p className="mt-1 text-sm text-muted-foreground">
                    {tier.priceCAD} CAD/month
                  </p>
                )}
              </div>
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
                    <span className={feature.included ? "text-sm" : "text-sm text-muted-foreground/50"}>
                      {feature.text}
                    </span>
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
