import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { beforeAfterContent } from "@/lib/content";
import { X, Check, ArrowRight } from "lucide-react";

export function BeforeAfterSection() {
  return (
    <section className="container-landing section-padding">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          The Treasurer Transformation
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          See how Team Manager changes the game for volunteer treasurers.
        </p>
      </div>

      {/* Before/After Cards */}
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-4 items-stretch">
        {/* Before Card */}
        <Card className="border-destructive/20 bg-destructive/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-destructive">
              <X className="h-5 w-5" />
              {beforeAfterContent.before.title}
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              {beforeAfterContent.before.subtitle}
            </p>
          </CardHeader>
          <CardContent>
            {/* Visual Placeholder */}
            <div className="mb-6 rounded-lg bg-destructive/10 p-6 text-center">
              <SpreadsheetChaosVisual />
              <p className="mt-2 text-xs text-muted-foreground">
                {beforeAfterContent.before.visual.description}
              </p>
            </div>

            {/* Pain Points */}
            <ul className="space-y-3">
              {beforeAfterContent.before.painPoints.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <X className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">{point}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Arrow (hidden on mobile, visible on lg) */}
        <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="rounded-full bg-primary p-3">
            <ArrowRight className="h-6 w-6 text-primary-foreground" />
          </div>
        </div>

        {/* After Card */}
        <Card className="border-primary/20 bg-primary/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-primary">
              <Check className="h-5 w-5" />
              {beforeAfterContent.after.title}
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              {beforeAfterContent.after.subtitle}
            </p>
          </CardHeader>
          <CardContent>
            {/* Visual Placeholder */}
            <div className="mb-6 rounded-lg bg-primary/10 p-6 text-center">
              <CleanDashboardVisual />
              <p className="mt-2 text-xs text-muted-foreground">
                {beforeAfterContent.after.visual.description}
              </p>
            </div>

            {/* Benefits */}
            <ul className="space-y-3">
              {beforeAfterContent.after.benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">{benefit}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Mobile Arrow */}
      <div className="flex justify-center my-4 lg:hidden">
        <div className="rounded-full bg-primary p-2 rotate-90">
          <ArrowRight className="h-5 w-5 text-primary-foreground" />
        </div>
      </div>
    </section>
  );
}

function SpreadsheetChaosVisual() {
  return (
    <svg
      className="h-24 w-full max-w-[200px] mx-auto text-destructive/40"
      viewBox="0 0 200 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Spreadsheet grid with chaos */}
      <rect x="10" y="10" width="180" height="80" rx="4" stroke="currentColor" strokeWidth="2" />

      {/* Rows with varying colors suggesting disorder */}
      <rect x="15" y="20" width="40" height="12" fill="currentColor" opacity="0.3" />
      <rect x="60" y="20" width="60" height="12" fill="currentColor" opacity="0.5" />
      <rect x="125" y="20" width="30" height="12" fill="currentColor" opacity="0.2" />

      <rect x="15" y="37" width="30" height="12" fill="currentColor" opacity="0.4" />
      <rect x="50" y="37" width="45" height="12" fill="currentColor" opacity="0.6" />
      <rect x="100" y="37" width="55" height="12" fill="currentColor" opacity="0.3" />

      <rect x="15" y="54" width="50" height="12" fill="currentColor" opacity="0.5" />
      <rect x="70" y="54" width="25" height="12" fill="currentColor" opacity="0.2" />
      <rect x="100" y="54" width="40" height="12" fill="currentColor" opacity="0.4" />

      <rect x="15" y="71" width="35" height="12" fill="currentColor" opacity="0.3" />
      <rect x="55" y="71" width="55" height="12" fill="currentColor" opacity="0.5" />
      <rect x="115" y="71" width="25" height="12" fill="currentColor" opacity="0.2" />

      {/* Question marks */}
      <text x="160" y="35" fill="currentColor" fontSize="16" fontWeight="bold">?</text>
      <text x="170" y="65" fill="currentColor" fontSize="14" fontWeight="bold">?</text>
      <text x="40" y="85" fill="currentColor" fontSize="12" fontWeight="bold">?</text>
    </svg>
  );
}

function CleanDashboardVisual() {
  return (
    <svg
      className="h-24 w-full max-w-[200px] mx-auto text-primary/40"
      viewBox="0 0 200 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Dashboard frame */}
      <rect x="10" y="10" width="180" height="80" rx="4" stroke="currentColor" strokeWidth="2" />

      {/* Header bar */}
      <rect x="15" y="15" width="170" height="8" rx="2" fill="currentColor" opacity="0.3" />

      {/* Stats cards */}
      <rect x="15" y="28" width="50" height="25" rx="2" fill="currentColor" opacity="0.5" />
      <rect x="70" y="28" width="50" height="25" rx="2" fill="currentColor" opacity="0.5" />
      <rect x="125" y="28" width="55" height="25" rx="2" fill="currentColor" opacity="0.5" />

      {/* Chart area */}
      <rect x="15" y="58" width="100" height="27" rx="2" fill="currentColor" opacity="0.2" />

      {/* Bar chart lines */}
      <rect x="25" y="72" width="8" height="10" fill="currentColor" opacity="0.6" />
      <rect x="40" y="67" width="8" height="15" fill="currentColor" opacity="0.6" />
      <rect x="55" y="62" width="8" height="20" fill="currentColor" opacity="0.6" />
      <rect x="70" y="70" width="8" height="12" fill="currentColor" opacity="0.6" />
      <rect x="85" y="65" width="8" height="17" fill="currentColor" opacity="0.6" />
      <rect x="100" y="68" width="8" height="14" fill="currentColor" opacity="0.6" />

      {/* Side panel */}
      <rect x="120" y="58" width="60" height="27" rx="2" fill="currentColor" opacity="0.2" />

      {/* Checkmarks */}
      <circle cx="130" cy="67" r="4" fill="currentColor" opacity="0.5" />
      <circle cx="130" cy="78" r="4" fill="currentColor" opacity="0.5" />
    </svg>
  );
}
