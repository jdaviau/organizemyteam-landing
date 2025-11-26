import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { QuoteIcon } from "lucide-react";

const testimonials = [
  {
    quote:
      "As a soccer mom turned treasurer, I was drowning in spreadsheets. Team Manager saved my sanity—I can finally see who owes what without digging through emails.",
    author: "Sarah M.",
    role: "Treasurer, Riverside Youth Soccer",
    initials: "SM",
  },
  {
    quote:
      "The automated reminders alone are worth it. I used to dread asking parents for late payments. Now the system does it for me, professionally and on schedule.",
    author: "Mike T.",
    role: "Treasurer, Little League Baseball",
    initials: "MT",
  },
  {
    quote:
      "Our board meetings are so much smoother now. I pull up the financial report in 30 seconds instead of scrambling to update a spreadsheet the night before.",
    author: "Jennifer L.",
    role: "Treasurer, Swim Club",
    initials: "JL",
  },
  {
    quote:
      "We switched from TeamSnap because their payment features were too basic. Team Manager gives us the detailed tracking we actually need as treasurers.",
    author: "David K.",
    role: "Treasurer, Hockey Association",
    initials: "DK",
  },
  {
    quote:
      "Finally, a tool that understands what treasurers actually do. The expense categories and budget tracking are exactly what I needed.",
    author: "Lisa R.",
    role: "Treasurer, Basketball League",
    initials: "LR",
  },
];

export function TestimonialsSection() {
  return (
    <section className="container-landing section-padding">
      {/* Section Header */}
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Loved by Team Treasurers
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Hear from treasurers who&apos;ve made the switch to stress-free
          financial management.
        </p>
      </div>

      {/* Testimonial Cards */}
      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.slice(0, 3).map((testimonial) => (
          <Card key={testimonial.author} className="relative">
            <CardContent className="pt-6">
              <QuoteIcon className="h-8 w-8 text-primary/20" />
              <blockquote className="mt-4 text-muted-foreground">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <div className="mt-6 flex items-center gap-3">
                <Avatar>
                  <AvatarFallback className="bg-primary/10 text-primary">
                    {testimonial.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-sm">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Additional testimonials in a different layout */}
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {testimonials.slice(3).map((testimonial) => (
          <Card key={testimonial.author} className="relative">
            <CardContent className="pt-6">
              <QuoteIcon className="h-6 w-6 text-primary/20" />
              <blockquote className="mt-3 text-sm text-muted-foreground">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <div className="mt-4 flex items-center gap-3">
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="bg-primary/10 text-primary text-xs">
                    {testimonial.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-sm">{testimonial.author}</p>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
