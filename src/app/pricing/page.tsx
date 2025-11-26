import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple, transparent pricing for Team Manager. Start free, upgrade when you need more.",
};

export default function PricingPage() {
  return (
    <div className="container-landing section-padding">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Simple, Transparent Pricing
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Start free. Upgrade when you need more.
        </p>
      </div>
      <div className="mt-16 text-center text-muted-foreground">
        <p>Pricing tiers coming in Task 6</p>
      </div>
    </div>
  );
}
