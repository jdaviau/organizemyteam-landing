import fs from "fs";
import path from "path";
import matter from "gray-matter";

const DOCS_DIR = path.join(process.cwd(), "content/docs");

export interface DocMeta {
  slug: string[];
  title: string;
  description: string;
  order: number;
}

export interface Doc extends DocMeta {
  content: string;
}

export interface DocSection {
  title: string;
  slug: string;
  order: number;
  items: DocMeta[];
}

// Navigation structure for the docs sidebar
export const docsNavigation: DocSection[] = [
  {
    title: "Getting Started",
    slug: "getting-started",
    order: 1,
    items: [
      {
        slug: ["getting-started", "introduction"],
        title: "Introduction",
        description: "Welcome to Team Manager",
        order: 1,
      },
      {
        slug: ["getting-started", "quick-start"],
        title: "Quick Start Guide",
        description: "Get up and running in 5 minutes",
        order: 2,
      },
      {
        slug: ["getting-started", "key-concepts"],
        title: "Key Concepts",
        description: "Understanding teams, members, and payments",
        order: 3,
      },
    ],
  },
  {
    title: "Payment Tracking",
    slug: "payment-tracking",
    order: 2,
    items: [
      {
        slug: ["payment-tracking", "overview"],
        title: "Payment Overview",
        description: "How payment tracking works",
        order: 1,
      },
      {
        slug: ["payment-tracking", "recording-payments"],
        title: "Recording Payments",
        description: "Log payments from members",
        order: 2,
      },
      {
        slug: ["payment-tracking", "payment-reminders"],
        title: "Payment Reminders",
        description: "Set up automated reminders",
        order: 3,
      },
    ],
  },
  {
    title: "Expense Management",
    slug: "expense-management",
    order: 3,
    items: [
      {
        slug: ["expense-management", "tracking-expenses"],
        title: "Tracking Expenses",
        description: "Record and categorize team expenses",
        order: 1,
      },
      {
        slug: ["expense-management", "expense-categories"],
        title: "Expense Categories",
        description: "Organize expenses by type",
        order: 2,
      },
    ],
  },
  {
    title: "Reports",
    slug: "reports",
    order: 4,
    items: [
      {
        slug: ["reports", "financial-reports"],
        title: "Financial Reports",
        description: "Generate and export reports",
        order: 1,
      },
      {
        slug: ["reports", "member-reports"],
        title: "Member Reports",
        description: "View payment status by member",
        order: 2,
      },
    ],
  },
];

export function getAllDocs(): DocMeta[] {
  const docs: DocMeta[] = [];

  function walkDir(dir: string, slugPath: string[] = []) {
    if (!fs.existsSync(dir)) return;

    const items = fs.readdirSync(dir);

    for (const item of items) {
      const itemPath = path.join(dir, item);
      const stat = fs.statSync(itemPath);

      if (stat.isDirectory()) {
        walkDir(itemPath, [...slugPath, item]);
      } else if (item.endsWith(".mdx")) {
        const slug = item.replace(/\.mdx$/, "");
        const fileContent = fs.readFileSync(itemPath, "utf-8");
        const { data } = matter(fileContent);

        docs.push({
          slug: [...slugPath, slug],
          title: data.title || slug,
          description: data.description || "",
          order: data.order || 999,
        });
      }
    }
  }

  walkDir(DOCS_DIR);
  return docs.sort((a, b) => a.order - b.order);
}

export function getDocBySlug(slugArray: string[]): Doc | null {
  const filePath = path.join(DOCS_DIR, ...slugArray.slice(0, -1), `${slugArray[slugArray.length - 1]}.mdx`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  return {
    slug: slugArray,
    title: data.title || slugArray[slugArray.length - 1],
    description: data.description || "",
    order: data.order || 999,
    content,
  };
}

export function getAllDocSlugs(): string[][] {
  const docs = getAllDocs();
  return docs.map((doc) => doc.slug);
}

export function getDocNavigation(): DocSection[] {
  return docsNavigation;
}

export function findNextDoc(currentSlug: string[]): DocMeta | null {
  const allDocs = getFlattenedDocs();
  const currentIndex = allDocs.findIndex(
    (doc) => doc.slug.join("/") === currentSlug.join("/")
  );

  if (currentIndex === -1 || currentIndex === allDocs.length - 1) {
    return null;
  }

  return allDocs[currentIndex + 1];
}

export function findPrevDoc(currentSlug: string[]): DocMeta | null {
  const allDocs = getFlattenedDocs();
  const currentIndex = allDocs.findIndex(
    (doc) => doc.slug.join("/") === currentSlug.join("/")
  );

  if (currentIndex <= 0) {
    return null;
  }

  return allDocs[currentIndex - 1];
}

export function getFlattenedDocs(): DocMeta[] {
  const flattened: DocMeta[] = [];

  for (const section of docsNavigation) {
    for (const item of section.items) {
      flattened.push(item);
    }
  }

  return flattened;
}

export function getBreadcrumbs(slugArray: string[]): { label: string; href: string }[] {
  const breadcrumbs: { label: string; href: string }[] = [
    { label: "Docs", href: "/docs" },
  ];

  // Find the section
  const sectionSlug = slugArray[0];
  const section = docsNavigation.find((s) => s.slug === sectionSlug);

  if (section) {
    breadcrumbs.push({
      label: section.title,
      href: `/docs/${section.slug}`,
    });

    // Find the doc
    if (slugArray.length > 1) {
      const docSlug = slugArray.join("/");
      const doc = section.items.find((item) => item.slug.join("/") === docSlug);

      if (doc) {
        breadcrumbs.push({
          label: doc.title,
          href: `/docs/${docSlug}`,
        });
      }
    }
  }

  return breadcrumbs;
}
