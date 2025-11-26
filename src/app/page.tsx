import { Button } from "@/components/ui/button";

const APP_URL =
  process.env.NEXT_PUBLIC_APP_URL || "https://app.organizemyteam.com";

export default function Home() {
  return (
    <div className="container-landing section-padding">
      {/* Placeholder Hero Section */}
      <section className="flex flex-col items-center text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Financial Management
          <br />
          <span className="text-primary">Built for Team Treasurers</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Track payments, manage expenses, and generate reports for your youth
          sports team. Finally, a tool designed specifically for the people who
          handle team finances.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Button size="lg" asChild>
            <a href={`${APP_URL}/signup`}>Get Started Free</a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="/pricing">View Pricing</a>
          </Button>
        </div>
      </section>

      {/* Placeholder for additional sections */}
      <section className="mt-24 text-center text-muted-foreground">
        <p>Additional sections (Features, Social Proof, Pricing Preview) coming in Task 4</p>
      </section>
    </div>
  );
}
