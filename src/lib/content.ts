// Testimonials from Team Manager users
// Replace with actual testimonials when available
export interface Testimonial {
  id: string;
  name: string;
  role: string;
  team: string;
  sport: string;
  quote: string;
  rating: number;
  avatar?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "testimonial-1",
    name: "Sarah Mitchell",
    role: "Team Treasurer",
    team: "Lightning U12 Soccer",
    sport: "Soccer",
    quote:
      "Before Team Manager, I spent 3-4 hours every week tracking payments in spreadsheets. Now it takes me 15 minutes. The automated reminders alone have saved me countless awkward conversations with parents.",
    rating: 5,
  },
  {
    id: "testimonial-2",
    name: "Michael Chen",
    role: "Club Treasurer",
    team: "Westside Youth Baseball",
    sport: "Baseball",
    quote:
      "Managing finances for 8 teams used to be a nightmare. Team Manager gives me a clear view of every team's status in one dashboard. End-of-season reports that used to take hours now take seconds.",
    rating: 5,
  },
  {
    id: "testimonial-3",
    name: "Jennifer Rodriguez",
    role: "Team Manager & Treasurer",
    team: "Storm Volleyball Club",
    sport: "Volleyball",
    quote:
      "The payment tracking is incredibly accurate. No more 'I thought I paid' conversations. I just pull up their account and show them exactly what's been recorded. Parents appreciate the transparency.",
    rating: 5,
  },
  {
    id: "testimonial-4",
    name: "David Thompson",
    role: "Board Treasurer",
    team: "Northside Youth Hockey",
    sport: "Hockey",
    quote:
      "We switched from TeamSnap because their financial features were an afterthought. Team Manager was built for treasurers. The difference is night and day. Worth every penny.",
    rating: 5,
  },
  {
    id: "testimonial-5",
    name: "Amanda Foster",
    role: "Team Treasurer",
    team: "Eagles Swim Team",
    sport: "Swimming",
    quote:
      "I was skeptical about switching from my spreadsheet system. But after one season with Team Manager, I can't imagine going back. The time I save lets me actually enjoy watching my kids compete.",
    rating: 5,
  },
];

// Platform metrics and statistics
// Update with real data when available
export interface PlatformMetrics {
  totalTeams: number;
  totalTransactions: number;
  totalAmountManaged: string;
  averageTimeSaved: string;
  collectionRateImprovement: string;
  satisfactionRate: number;
}

export const platformMetrics: PlatformMetrics = {
  totalTeams: 500,
  totalTransactions: 25000,
  totalAmountManaged: "$2.5M+",
  averageTimeSaved: "3 hours/week",
  collectionRateImprovement: "25%",
  satisfactionRate: 98,
};

// Dashboard screenshot configurations
// Replace src with actual screenshot paths when available
export interface Screenshot {
  id: string;
  src: string;
  alt: string;
  caption: string;
  category: "dashboard" | "payments" | "expenses" | "reports";
}

export const dashboardScreenshots: Screenshot[] = [
  {
    id: "screenshot-dashboard",
    src: "/screenshots/dashboard-placeholder.svg",
    alt: "Team Manager Dashboard Overview",
    caption:
      "See your team's complete financial picture at a glance—income, expenses, and outstanding balances.",
    category: "dashboard",
  },
  {
    id: "screenshot-payments",
    src: "/screenshots/payments-placeholder.svg",
    alt: "Payment Tracking View",
    caption:
      "Track every payment with detailed records. Know exactly who's paid, who owes, and when.",
    category: "payments",
  },
  {
    id: "screenshot-expenses",
    src: "/screenshots/dashboard-placeholder.svg",
    alt: "Expense Management",
    caption:
      "Categorize expenses, attach receipts, and track spending against your budget.",
    category: "expenses",
  },
  {
    id: "screenshot-reports",
    src: "/screenshots/reports-placeholder.svg",
    alt: "Financial Reports",
    caption:
      "Generate professional reports in seconds. Perfect for board meetings and parent updates.",
    category: "reports",
  },
];

// TeamSnap comparison data
export interface ComparisonFeature {
  feature: string;
  category: string;
  teamManager: {
    available: boolean;
    notes?: string;
  };
  teamSnap: {
    available: boolean;
    notes?: string;
  };
}

export const competitorComparison: ComparisonFeature[] = [
  {
    feature: "Payment Tracking by Member",
    category: "Payment Tracking",
    teamManager: { available: true, notes: "Full history with notes" },
    teamSnap: { available: true, notes: "Basic tracking" },
  },
  {
    feature: "Automated Payment Reminders",
    category: "Payment Tracking",
    teamManager: { available: true, notes: "Customizable schedules" },
    teamSnap: { available: true, notes: "Limited customization" },
  },
  {
    feature: "Partial Payment Tracking",
    category: "Payment Tracking",
    teamManager: { available: true },
    teamSnap: { available: false },
  },
  {
    feature: "Payment History Export",
    category: "Payment Tracking",
    teamManager: { available: true, notes: "PDF, CSV, Excel" },
    teamSnap: { available: true, notes: "Limited formats" },
  },
  {
    feature: "Expense Tracking",
    category: "Expense Management",
    teamManager: { available: true, notes: "Full categorization" },
    teamSnap: { available: false, notes: "Not available" },
  },
  {
    feature: "Receipt Attachments",
    category: "Expense Management",
    teamManager: { available: true },
    teamSnap: { available: false },
  },
  {
    feature: "Budget vs. Actual Tracking",
    category: "Expense Management",
    teamManager: { available: true },
    teamSnap: { available: false },
  },
  {
    feature: "Expense Categories",
    category: "Expense Management",
    teamManager: { available: true, notes: "Customizable" },
    teamSnap: { available: false },
  },
  {
    feature: "Income Summary Reports",
    category: "Financial Reports",
    teamManager: { available: true, notes: "One-click generation" },
    teamSnap: { available: true, notes: "Basic" },
  },
  {
    feature: "Expense Reports",
    category: "Financial Reports",
    teamManager: { available: true },
    teamSnap: { available: false },
  },
  {
    feature: "Member Balance Statements",
    category: "Financial Reports",
    teamManager: { available: true },
    teamSnap: { available: false },
  },
  {
    feature: "End-of-Season Financial Report",
    category: "Financial Reports",
    teamManager: { available: true },
    teamSnap: { available: false },
  },
  {
    feature: "Multi-Team Management",
    category: "Team Management",
    teamManager: { available: true, notes: "Unlimited on Pro" },
    teamSnap: { available: true, notes: "Additional cost" },
  },
  {
    feature: "Free Tier",
    category: "Pricing",
    teamManager: { available: true, notes: "1 team, 20 members" },
    teamSnap: { available: false, notes: "Trial only" },
  },
  {
    feature: "Starting Price",
    category: "Pricing",
    teamManager: { available: true, notes: "$8/month" },
    teamSnap: { available: true, notes: "$12.50/month" },
  },
];

// Pricing comparison
export interface PricingComparison {
  provider: string;
  tiers: {
    name: string;
    price: string;
    priceNote?: string;
    features: string[];
  }[];
}

export const pricingComparison: PricingComparison[] = [
  {
    provider: "Team Manager",
    tiers: [
      {
        name: "Free",
        price: "$0",
        priceNote: "forever",
        features: [
          "1 team",
          "Up to 20 members",
          "Full payment tracking",
          "Basic reports",
          "Email support",
        ],
      },
      {
        name: "Pro",
        price: "$8",
        priceNote: "per month",
        features: [
          "Unlimited teams",
          "Unlimited members",
          "Advanced reports",
          "Automated reminders",
          "Expense tracking",
          "Priority support",
        ],
      },
    ],
  },
  {
    provider: "TeamSnap",
    tiers: [
      {
        name: "Team",
        price: "$12.50",
        priceNote: "per month",
        features: [
          "1 team",
          "Basic payment collection",
          "Schedule management",
          "Communication tools",
          "Limited financial features",
        ],
      },
      {
        name: "Club & League",
        price: "$299+",
        priceNote: "per season",
        features: [
          "Multiple teams",
          "Registration management",
          "Limited financial tools",
          "Scheduling",
          "Website builder",
        ],
      },
    ],
  },
];

// Treasurer-focused hero copy options
export const heroCopy = {
  headline: "Financial Management Built for Team Treasurers",
  subheadline:
    "Stop chasing payments and wrestling with spreadsheets. Track dues, manage expenses, and generate reports—all in one place designed specifically for youth sports team finances.",
  alternativeHeadlines: [
    "Stop Chasing Payments. Start Managing Finances.",
    "The Treasurer Tool That Actually Gets It",
    "Finally, Financial Software Made for Volunteer Treasurers",
  ],
  ctaPrimary: "Start Free Trial",
  ctaSecondary: "See How It Works",
  socialProof:
    "Trusted by 500+ youth sports teams managing $2.5M+ in team finances",
};

// Feature section copy
export const featuresCopy = {
  sectionTitle: "Everything a Treasurer Needs, Nothing They Don't",
  sectionSubtitle:
    "We built Team Manager for one purpose: making team financial management simple.",
  features: [
    {
      title: "Payment Tracking That Just Works",
      description:
        "See exactly who owes what, track partial payments, and never lose track of a check again. Every payment recorded with full history.",
      icon: "CreditCard",
    },
    {
      title: "Expense Management Made Simple",
      description:
        "Categorize expenses, attach receipts, track reimbursements. Know exactly where every dollar goes.",
      icon: "Receipt",
    },
    {
      title: "Reports in Seconds, Not Hours",
      description:
        "Generate professional financial reports for board meetings, parent updates, or your own records. One click, done.",
      icon: "BarChart3",
    },
    {
      title: "Reminders Without the Awkwardness",
      description:
        "Automated payment reminders take the personal discomfort out of collections. Let the system be the 'bad guy.'",
      icon: "Bell",
    },
  ],
};

// Competitive advantage messaging
export const competitiveAdvantage = {
  headline: "Why Team Manager vs. the Competition",
  points: [
    {
      title: "Built for Treasurers, Not Teams",
      description:
        "While other tools treat finances as an afterthought, we made it our focus. Every feature designed for financial management.",
    },
    {
      title: "Deeper Financial Features",
      description:
        "Expense tracking, budget comparison, receipt attachments, member statements—features the others don't offer.",
    },
    {
      title: "Better Value",
      description:
        "A generous free tier and Pro pricing that's 35% less than comparable plans. No hidden fees or per-member pricing.",
    },
    {
      title: "Made by Treasurers",
      description:
        "We've been volunteer treasurers. We know the pain points firsthand and built solutions for each one.",
    },
  ],
};

// Before/After comparison content
export const beforeAfterContent = {
  before: {
    title: "Before Team Manager",
    subtitle: "The Spreadsheet Struggle",
    painPoints: [
      "Hours spent on manual data entry",
      "Awkward payment reminder conversations",
      "Version control nightmares",
      "Formula errors causing panic",
      "No expense tracking",
      "Reports take hours to create",
    ],
    visual: {
      type: "spreadsheet-chaos",
      description: "Messy spreadsheet with multiple tabs, color coding, and confusion",
    },
  },
  after: {
    title: "After Team Manager",
    subtitle: "Financial Clarity",
    benefits: [
      "15 minutes instead of 3+ hours weekly",
      "Automated reminders do the asking",
      "One source of truth, always current",
      "Calculations are always accurate",
      "Full expense management",
      "One-click professional reports",
    ],
    visual: {
      type: "clean-dashboard",
      description: "Clean, organized dashboard showing clear financial status",
    },
  },
};

// Sample financial report data (anonymized/example)
export const sampleReportData = {
  season: "Spring 2025",
  team: "Sample Youth Soccer Team",
  summary: {
    totalIncome: 8450,
    totalExpenses: 6890,
    netPosition: 1560,
    collectionRate: 94,
  },
  incomeBreakdown: [
    { category: "Registration Dues", budgeted: 5000, actual: 5200 },
    { category: "Tournament Fees", budgeted: 2500, actual: 2400 },
    { category: "Fundraising", budgeted: 1000, actual: 850 },
  ],
  expenseBreakdown: [
    { category: "Field Rental", budgeted: 2000, actual: 1800 },
    { category: "Equipment", budgeted: 1500, actual: 1650 },
    { category: "League Fees", budgeted: 1500, actual: 1500 },
    { category: "Tournaments", budgeted: 1500, actual: 1440 },
    { category: "Uniforms", budgeted: 800, actual: 500 },
  ],
  outstandingBalances: [
    { family: "Family A", amount: 150 },
    { family: "Family B", amount: 75 },
    { family: "Family C", amount: 50 },
  ],
};
