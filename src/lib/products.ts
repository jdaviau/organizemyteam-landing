export interface ProductFeature {
  title: string;
  description: string;
  icon: string;
}

export interface ProductUseCase {
  title: string;
  description: string;
  persona: string;
}

export interface ProductScreenshot {
  src: string;
  alt: string;
  caption: string;
}

export interface Product {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  features: ProductFeature[];
  useCases: ProductUseCase[];
  screenshots: ProductScreenshot[];
  ctaText: string;
  ctaHref: string;
}

import { ctaLinks } from "@/lib/constants";

export const products: Record<string, Product> = {
  // Future product placeholders - uncomment when ready to launch
  // "league-manager": {
  //   slug: "league-manager",
  //   name: "League Manager",
  //   tagline: "Organization-wide financial oversight",
  //   description: "Coming soon: Manage multiple teams and leagues from a single dashboard.",
  //   features: [],
  //   useCases: [],
  //   screenshots: [],
  //   ctaText: "Join Waitlist",
  //   ctaHref: "/contact?subject=league-manager",
  // },
  // "tournament-manager": {
  //   slug: "tournament-manager",
  //   name: "Tournament Manager",
  //   tagline: "End-to-end tournament finances",
  //   description: "Coming soon: Complete financial management for tournament organizers.",
  //   features: [],
  //   useCases: [],
  //   screenshots: [],
  //   ctaText: "Join Waitlist",
  //   ctaHref: "/contact?subject=tournament-manager",
  // },
  "team-manager": {
    slug: "team-manager",
    name: "Team Manager",
    tagline: "Financial management built for team treasurers",
    description:
      "Team Manager is the complete financial management solution for youth sports team treasurers. Track payments, manage expenses, generate reports, and automate reminders—all in one place designed specifically for the people who handle team finances.",
    features: [
      {
        title: "Payment Tracking",
        description:
          "Track dues, registration fees, tournament costs, and fundraising contributions for every team member. See payment history, outstanding balances, and send reminders with one click.",
        icon: "credit-card",
      },
      {
        title: "Expense Management",
        description:
          "Categorize and track all team expenses—equipment, uniforms, field rentals, tournament fees, and more. Upload receipts, assign categories, and maintain a complete audit trail.",
        icon: "receipt",
      },
      {
        title: "Financial Reports",
        description:
          "Generate professional financial reports for board meetings, parents, or your own records. Income statements, expense breakdowns, and member balance reports—all exportable to PDF or Excel.",
        icon: "bar-chart",
      },
      {
        title: "Automated Reminders",
        description:
          "Set up automatic payment reminders on your schedule. Customize the message, frequency, and recipients. No more awkward conversations about overdue payments.",
        icon: "bell",
      },
      {
        title: "Budget Tracking",
        description:
          "Create seasonal budgets, track actual vs. planned spending, and forecast future expenses. Stay on top of your team's financial health throughout the year.",
        icon: "pie-chart",
      },
      {
        title: "Multi-Season History",
        description:
          "Access financial records across multiple seasons. Compare year-over-year trends, carry forward member balances, and maintain continuity when treasurers change.",
        icon: "calendar",
      },
    ],
    useCases: [
      {
        title: "Collecting Team Dues",
        description:
          "Set up recurring dues, track who's paid, and automatically remind families with outstanding balances. No more spreadsheet chaos or awkward email chains.",
        persona: "Soccer Team Treasurer",
      },
      {
        title: "Managing Tournament Expenses",
        description:
          "Track registration fees, travel costs, hotel expenses, and per-diems. Split costs across participants and generate expense reports for reimbursement.",
        persona: "Travel Ball Coordinator",
      },
      {
        title: "Fundraising Tracking",
        description:
          "Track fundraising contributions per family, monitor progress toward goals, and credit amounts toward dues or team fees automatically.",
        persona: "Booster Club Treasurer",
      },
      {
        title: "End-of-Season Reporting",
        description:
          "Generate comprehensive financial summaries for board presentations, parent meetings, or league requirements. Show exactly where every dollar went.",
        persona: "League Administrator",
      },
    ],
    screenshots: [
      {
        src: "/screenshots/dashboard-placeholder.svg",
        alt: "Team Manager Dashboard",
        caption: "Overview dashboard showing team finances at a glance",
      },
      {
        src: "/screenshots/payments-placeholder.svg",
        alt: "Payment Tracking View",
        caption: "Track payments and outstanding balances by member",
      },
      {
        src: "/screenshots/reports-placeholder.svg",
        alt: "Financial Reports",
        caption: "Generate detailed financial reports in seconds",
      },
    ],
    ctaText: "Start Free Trial",
    ctaHref: ctaLinks.signup,
  },
};

export function getProduct(slug: string): Product | undefined {
  return products[slug];
}

export function getAllProductSlugs(): string[] {
  return Object.keys(products);
}
