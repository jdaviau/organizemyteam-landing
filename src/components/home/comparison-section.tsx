import { CheckIcon, XIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { competitorComparison, competitiveAdvantage, pricingComparison } from "@/lib/content";

// Filter to key financial features for the home page comparison
const keyFeatures = competitorComparison.filter((f) =>
  [
    "Payment Tracking by Member",
    "Expense Tracking",
    "Receipt Attachments",
    "Budget vs. Actual Tracking",
    "Expense Reports",
    "Member Balance Statements",
    "End-of-Season Financial Report",
    "Free Tier",
  ].includes(f.feature)
);

export function ComparisonSection() {
  const teamManagerPricing = pricingComparison.find(
    (p) => p.provider === "Team Manager"
  );
  const teamSnapPricing = pricingComparison.find(
    (p) => p.provider === "TeamSnap"
  );

  return (
    <section className="bg-muted/30">
      <div className="container-landing section-padding">
        {/* Section Header */}
        <div className="text-center">
          <Badge variant="outline" className="mb-4">
            Why Switch?
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {competitiveAdvantage.headline}
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            While TeamSnap is great for scheduling and communication, Team
            Manager is built specifically for the financial side of running a
            team.
          </p>
        </div>

        {/* Competitive Advantages */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {competitiveAdvantage.points.map((point) => (
            <div key={point.title} className="rounded-lg border bg-background p-6">
              <h3 className="font-semibold text-primary">{point.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {point.description}
              </p>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="mt-12 overflow-hidden rounded-xl border bg-background">
          <table className="w-full">
            <thead>
              <tr className="border-b bg-muted/50">
                <th className="px-6 py-4 text-left text-sm font-semibold">
                  Financial Feature
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
              {keyFeatures.map((row, index) => (
                <tr
                  key={row.feature}
                  className={index !== keyFeatures.length - 1 ? "border-b" : ""}
                >
                  <td className="px-6 py-4 text-sm">{row.feature}</td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex flex-col items-center gap-1">
                      {row.teamManager.available ? (
                        <CheckIcon className="h-5 w-5 text-success" />
                      ) : (
                        <XIcon className="h-5 w-5 text-muted-foreground" />
                      )}
                      {row.teamManager.notes && (
                        <span className="text-xs text-muted-foreground">
                          {row.teamManager.notes}
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex flex-col items-center gap-1">
                      {row.teamSnap.available ? (
                        <CheckIcon className="h-5 w-5 text-success" />
                      ) : (
                        <XIcon className="h-5 w-5 text-muted-foreground" />
                      )}
                      {row.teamSnap.notes && (
                        <span className="text-xs text-muted-foreground">
                          {row.teamSnap.notes}
                        </span>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pricing Comparison */}
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="rounded-xl border-2 border-primary bg-background p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-primary">
                Team Manager
              </h3>
              <Badge>Best Value</Badge>
            </div>
            <p className="mt-2 text-3xl font-bold">
              {teamManagerPricing?.tiers[1]?.price}
              <span className="text-lg font-normal text-muted-foreground">
                /{teamManagerPricing?.tiers[1]?.priceNote}
              </span>
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              $96/year • Deep financial management
            </p>
            <p className="mt-2 text-sm text-success">
              + Free tier available for small teams
            </p>
          </div>
          <div className="rounded-xl border bg-muted/50 p-6">
            <h3 className="text-lg font-semibold">TeamSnap</h3>
            <p className="mt-2 text-3xl font-bold">
              {teamSnapPricing?.tiers[0]?.price}
              <span className="text-lg font-normal text-muted-foreground">
                /{teamSnapPricing?.tiers[0]?.priceNote}
              </span>
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              $150/year • General team management
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              No free tier available
            </p>
          </div>
        </div>

        {/* Savings Callout */}
        <div className="mt-8 text-center">
          <p className="text-lg">
            <span className="font-bold text-primary">Save 36%</span> compared to
            TeamSnap, with{" "}
            <span className="font-bold">deeper financial features</span> built
            for treasurers.
          </p>
        </div>
      </div>
    </section>
  );
}
