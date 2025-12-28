import Link from "next/link";
import { Metadata } from "next";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getDocNavigation } from "@/lib/docs";
import { BookOpen, CreditCard, Receipt, BarChart3 } from "lucide-react";

export const metadata: Metadata = {
  title: "Documentation",
  description: "Learn how to use Team Manager to track payments, manage expenses, and generate financial reports for your sports team.",
  openGraph: {
    title: "Documentation | Team Manager",
    description: "Learn how to use Team Manager to track payments, manage expenses, and generate financial reports for your sports team.",
  },
};

const sectionIcons: Record<string, React.ReactNode> = {
  "getting-started": <BookOpen className="h-6 w-6" />,
  "payment-tracking": <CreditCard className="h-6 w-6" />,
  "expense-management": <Receipt className="h-6 w-6" />,
  "reports": <BarChart3 className="h-6 w-6" />,
};

export default function DocsPage() {
  const navigation = getDocNavigation();

  return (
    <div className="container max-w-6xl py-12 md:py-16">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Documentation</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Everything you need to know about Team Manager. From getting started to advanced features.
        </p>
      </div>

      {/* Quick Start Card */}
      <Card className="mb-12 bg-primary/5 border-primary/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-primary" />
            New to Team Manager?
          </CardTitle>
          <CardDescription>
            Start with our quick start guide to get your team set up in just 5 minutes.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Link
            href="/docs/getting-started/quick-start"
            className="inline-flex items-center text-primary hover:underline font-medium"
          >
            Read the Quick Start Guide →
          </Link>
        </CardContent>
      </Card>

      {/* Documentation Sections */}
      <div className="grid gap-6 md:grid-cols-2">
        {navigation.map((section) => (
          <Card key={section.slug} className="hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  {sectionIcons[section.slug] || <BookOpen className="h-6 w-6" />}
                </div>
                <CardTitle>{section.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {section.items.map((item) => (
                  <li key={item.slug.join("/")}>
                    <Link
                      href={`/docs/${item.slug.join("/")}`}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Help Section */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Need More Help?</h2>
        <p className="text-muted-foreground mb-6">
          Can&apos;t find what you&apos;re looking for? We&apos;re here to help.
        </p>
        <div className="flex justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
}
