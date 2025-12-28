const stats = [
  {
    value: "100%",
    label: "Financial Focus",
    description: "Built exclusively for team treasurer needs",
  },
  {
    value: "Unlimited",
    label: "Teams & Members",
    description: "No limits on Pro plan - manage as many as you need",
  },
  {
    value: "7 Days",
    label: "Free Trial",
    description: "No credit card required",
  },
  {
    value: "Core Plan",
    label: "Available",
    description: "Full payment tracking for small teams",
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
