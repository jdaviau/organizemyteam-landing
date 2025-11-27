import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";
import { mdxComponents } from "@/components/blog";
import {
  getDocBySlug,
  getDocNavigation,
  getBreadcrumbs,
  findNextDoc,
  findPrevDoc,
} from "@/lib/docs";
import { DocsBreadcrumb } from "@/components/docs/docs-breadcrumb";
import { DocsPagination } from "@/components/docs/docs-pagination";

interface DocsPageProps {
  params: Promise<{ slug: string[] }>;
}

export async function generateStaticParams() {
  const navigation = getDocNavigation();
  const params: { slug: string[] }[] = [];

  for (const section of navigation) {
    for (const item of section.items) {
      params.push({ slug: item.slug });
    }
  }

  return params;
}

export async function generateMetadata({
  params,
}: DocsPageProps): Promise<Metadata> {
  const { slug } = await params;
  const doc = getDocBySlug(slug);

  if (!doc) {
    return {
      title: "Doc Not Found",
    };
  }

  return {
    title: `${doc.title} | Documentation`,
    description: doc.description,
    openGraph: {
      title: `${doc.title} | Team Manager Documentation`,
      description: doc.description,
      type: "article",
      url: `https://organizemyteam.com/docs/${slug.join("/")}`,
    },
    alternates: {
      canonical: `https://organizemyteam.com/docs/${slug.join("/")}`,
    },
  };
}

export default async function DocsPage({ params }: DocsPageProps) {
  const { slug } = await params;
  const doc = getDocBySlug(slug);

  if (!doc) {
    notFound();
  }

  const { content } = await compileMDX({
    source: doc.content,
    components: mdxComponents,
  });

  const breadcrumbs = getBreadcrumbs(slug);
  const prevDoc = findPrevDoc(slug);
  const nextDoc = findNextDoc(slug);

  return (
    <article>
      <DocsBreadcrumb items={breadcrumbs} />

      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">{doc.title}</h1>
        {doc.description && (
          <p className="mt-2 text-lg text-muted-foreground">{doc.description}</p>
        )}
      </header>

      <div className="prose prose-lg max-w-none">{content}</div>

      <DocsPagination prevDoc={prevDoc} nextDoc={nextDoc} />
    </article>
  );
}
