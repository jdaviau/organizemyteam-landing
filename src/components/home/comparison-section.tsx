import { CheckIcon, XIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const comparisonFeatures = [
  {
    feature: "Payment tracking by member",
    teamManager: true,
    teamSnap: true,
  },
  {
    feature: "Expense categorization",
    teamManager: true,
    teamSnap: false,
  },
  {
    feature: "Detailed financial reports",
    teamManager: true,
    teamSnap: false,
  },
  {
    feature: "Budget tracking & forecasting",
    teamManager: true,
    teamSnap: false,
  },
  {
    feature: "Automated payment reminders",
    teamManager: true,
    teamSnap: true,
  },
  {
    feature: "Export to Excel/PDF",
    teamManager: true,
    teamSnap: false,
  },
  {
    feature: "Multi-season financial history",
    teamManager: true,
    teamSnap: false,
  },
  {
    feature: "Treasurer-specific dashboard",
    teamManager: true,
    teamSnap: false,
  },
];

export function ComparisonSection() {
  return (
    <section className="bg-muted/30">
      <div className="container-landing section-padding">
        {/* Section Header */}
        <div className="text-center">
          <Badge variant="outline" className="mb-4">
            Why Switch?
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Team Manager vs. TeamSnap
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            While TeamSnap is great for scheduling and communication, Team
            Manager is built specifically for the financial side of running a
            team.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="mt-12 overflow-hidden rounded-xl border bg-background">
          <table className="w-full">
            <thead>
              <tr className="border-b bg-muted/50">
                <th className="px-6 py-4 text-left text-sm font-semibold">
                  Feature
                </th>
                <th className="px-6 py-4 text-center text-sm font-semibold">
                  <span className="text-primary">Team Manager</span>
                </th>
                <th className="px-6 py-4 text-center text-sm font-semibold">
                  TeamSnap
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonFeatures.map((row, index) => (
                <tr
                  key={row.feature}
                  className={index !== comparisonFeatures.length - 1 ? "border-b" : ""}
                >
                  <td className="px-6 py-4 text-sm">{row.feature}</td>
                  <td className="px-6 py-4 text-center">
                    {row.teamManager ? (
                      <CheckIcon className="mx-auto h-5 w-5 text-success" />
                    ) : (
                      <XIcon className="mx-auto h-5 w-5 text-muted-foreground" />
                    )}
                  </td>
                  <td className="px-6 py-4 text-center">
                    {row.teamSnap ? (
                      <CheckIcon className="mx-auto h-5 w-5 text-success" />
                    ) : (
                      <XIcon className="mx-auto h-5 w-5 text-muted-foreground" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pricing Comparison */}
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="rounded-xl border bg-background p-6">
            <h3 className="text-lg font-semibold text-primary">Team Manager</h3>
            <p className="mt-2 text-3xl font-bold">
              $8<span className="text-lg font-normal text-muted-foreground">/month</span>
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              $96/year • Deep financial management
            </p>
          </div>
          <div className="rounded-xl border bg-muted/50 p-6">
            <h3 className="text-lg font-semibold">TeamSnap</h3>
            <p className="mt-2 text-3xl font-bold">
              $12.50<span className="text-lg font-normal text-muted-foreground">/month</span>
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              $150/year • General team management
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
