import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  CreditCardIcon,
  ReceiptIcon,
  BarChart3Icon,
  BellIcon,
  PieChartIcon,
  CalendarIcon,
} from "lucide-react";
import type { ProductFeature } from "@/lib/products";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "credit-card": CreditCardIcon,
  receipt: ReceiptIcon,
  "bar-chart": BarChart3Icon,
  bell: BellIcon,
  "pie-chart": PieChartIcon,
  calendar: CalendarIcon,
};

interface FeaturesShowcaseProps {
  features: ProductFeature[];
}

export function FeaturesShowcase({ features }: FeaturesShowcaseProps) {
  return (
    <section id="features" className="container-landing section-padding">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Powerful Features for Team Treasurers
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Everything you need to manage your team&apos;s finances with confidence.
        </p>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => {
          const Icon = iconMap[feature.icon] || CreditCardIcon;
          return (
            <Card key={feature.title} className="relative">
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
