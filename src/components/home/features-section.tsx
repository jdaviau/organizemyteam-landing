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
} from "lucide-react";

const features = [
  {
    title: "Payment Tracking",
    description:
      "Track dues, registration fees, and fundraising payments. See who's paid, who owes, and send reminders with one click.",
    icon: CreditCardIcon,
  },
  {
    title: "Expense Management",
    description:
      "Categorize team expenses, track receipts, and monitor your budget. Know exactly where every dollar goes.",
    icon: ReceiptIcon,
  },
  {
    title: "Financial Reports",
    description:
      "Generate detailed financial reports for board meetings, parents, or your own records. Export to PDF or Excel anytime.",
    icon: BarChart3Icon,
  },
  {
    title: "Automated Reminders",
    description:
      "Set up automatic payment reminders so you never have to awkwardly chase down parents for dues again.",
    icon: BellIcon,
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="container-landing section-padding">
      {/* Section Header */}
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Everything a Team Treasurer Needs
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Purpose-built tools for managing youth sports team finances. No more
          spreadsheets, no more confusion.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <Card key={feature.title} className="relative overflow-hidden">
            <CardHeader>
              <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-xl">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                {feature.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
