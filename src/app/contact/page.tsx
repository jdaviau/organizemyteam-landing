import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/contact/contact-form";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MessageSquare, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with the OrganizeMyTeam team. We're here to help with questions about Team Manager.",
  openGraph: {
    title: "Contact Us | OrganizeMyTeam",
    description:
      "Get in touch with the OrganizeMyTeam team. We're here to help with questions about Team Manager.",
  },
};

const contactMethods = [
  {
    icon: Mail,
    title: "Email Support",
    description: "For general inquiries and support requests",
    contact: "support@organizemyteam.com",
    href: "mailto:support@organizemyteam.com",
  },
  {
    icon: MessageSquare,
    title: "Sales Questions",
    description: "For pricing, enterprise plans, and partnerships",
    contact: "sales@organizemyteam.com",
    href: "mailto:sales@organizemyteam.com",
  },
  {
    icon: Clock,
    title: "Response Time",
    description: "We typically respond within 24 hours",
    contact: "Monday - Friday",
    href: null,
  },
];

export default function ContactPage() {
  return (
    <div className="container-landing section-padding">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Contact Us
        </h1>
        <p className="mt-6 text-xl text-muted-foreground">
          Have a question about Team Manager? We&apos;re here to help. Send us a
          message and we&apos;ll get back to you as soon as possible.
        </p>
      </div>

      {/* Contact Methods */}
      <div className="mt-12 grid gap-6 sm:grid-cols-3 max-w-4xl mx-auto">
        {contactMethods.map((method) => (
          <Card key={method.title} className="text-center">
            <CardContent className="pt-6">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <method.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold">{method.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {method.description}
              </p>
              {method.href ? (
                <a
                  href={method.href}
                  className="mt-2 block text-sm text-primary hover:underline"
                >
                  {method.contact}
                </a>
              ) : (
                <p className="mt-2 text-sm font-medium">{method.contact}</p>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Contact Form */}
      <div className="mt-16 max-w-2xl mx-auto">
        <Card>
          <CardContent className="p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
            <ContactForm />
          </CardContent>
        </Card>
      </div>

      {/* FAQ Link */}
      <div className="mt-12 text-center">
        <p className="text-muted-foreground">
          Looking for quick answers? Check out our{" "}
          <Link href="/docs" className="text-primary hover:underline">
            documentation
          </Link>{" "}
          or{" "}
          <Link href="/pricing#faq" className="text-primary hover:underline">
            pricing FAQ
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
