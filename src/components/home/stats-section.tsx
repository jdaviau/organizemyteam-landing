const stats = [
  {
    value: "$2.5M+",
    label: "Team Finances Tracked",
    description: "Total amount managed through our platform",
  },
  {
    value: "500+",
    label: "Active Teams",
    description: "Youth sports teams using Team Manager",
  },
  {
    value: "15,000+",
    label: "Payments Processed",
    description: "Dues, fees, and fundraising tracked",
  },
  {
    value: "4.8/5",
    label: "Treasurer Rating",
    description: "Average satisfaction score",
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
