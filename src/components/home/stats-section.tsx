import { platformMetrics } from "@/lib/content";

const stats = [
  {
    value: platformMetrics.totalAmountManaged,
    label: "Team Finances Tracked",
    description: "Total amount managed through our platform",
  },
  {
    value: `${platformMetrics.totalTeams}+`,
    label: "Active Teams",
    description: "Youth sports teams using Team Manager",
  },
  {
    value: `${(platformMetrics.totalTransactions / 1000).toFixed(0)}K+`,
    label: "Transactions Recorded",
    description: "Payments, dues, and expenses tracked",
  },
  {
    value: `${platformMetrics.satisfactionRate}%`,
    label: "Satisfaction Rate",
    description: "Treasurers who recommend Team Manager",
  },
];

export function StatsSection() {
  return (
    <section className="border-y bg-muted/30">
      <div className="container-landing py-12 md:py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-4xl font-bold text-primary">{stat.value}</p>
              <p className="mt-2 font-semibold">{stat.label}</p>
              <p className="mt-1 text-sm text-muted-foreground">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
