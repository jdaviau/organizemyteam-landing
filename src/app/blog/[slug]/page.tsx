import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { mdxComponents } from "@/components/blog";
import { getPostBySlug, getAllSlugs, getAllPosts } from "@/lib/blog";
import { CalendarIcon, ClockIcon, ArrowLeftIcon, UserIcon } from "lucide-react";
import { ctaLinks } from "@/lib/constants";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.description,
    keywords: [post.category, ...post.tags, "team treasurer", "youth sports"],
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url: `https://organizemyteam.com/blog/${post.slug}`,
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
    alternates: {
      canonical: `https://organizemyteam.com/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const { content } = await compileMDX({
    source: post.content,
    components: mdxComponents,
  });

  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // Get related posts (same category, excluding current)
  const relatedPosts = getAllPosts()
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3);

  return (
    <>
      {/* JSON-LD Article Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.description,
            author: {
              "@type": "Person",
              name: post.author,
            },
            datePublished: post.date,
            dateModified: post.date,
            publisher: {
              "@type": "Organization",
              name: "OrganizeMyTeam",
              url: "https://organizemyteam.com",
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://organizemyteam.com/blog/${post.slug}`,
            },
            keywords: post.tags.join(", "),
            articleSection: post.category,
          }),
        }}
      />

      <article className="container-landing section-padding">
        {/* Back Link */}
        <div className="mb-8">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/blog" className="gap-2">
              <ArrowLeftIcon className="h-4 w-4" />
              Back to Blog
            </Link>
          </Button>
        </div>

        {/* Header */}
        <header className="max-w-3xl mx-auto text-center">
          <Badge variant="secondary" className="mb-4">
            {post.category}
          </Badge>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            {post.title}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            {post.description}
          </p>

          {/* Meta Info */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <UserIcon className="h-4 w-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-1">
              <CalendarIcon className="h-4 w-4" />
              <span>{formattedDate}</span>
            </div>
            <div className="flex items-center gap-1">
              <ClockIcon className="h-4 w-4" />
              <span>{post.readingTime}</span>
            </div>
          </div>

          {/* Tags */}
          {post.tags.length > 0 && (
            <div className="mt-4 flex flex-wrap justify-center gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </header>

        <Separator className="my-8 max-w-3xl mx-auto" />

        {/* Content */}
        <div className="prose prose-lg max-w-3xl mx-auto">{content}</div>

        <Separator className="my-8 max-w-3xl mx-auto" />

        {/* Author Box */}
        <div className="max-w-3xl mx-auto rounded-xl border bg-muted/30 p-6">
          <p className="font-semibold">About the Author</p>
          <p className="mt-2 text-muted-foreground">
            {post.author} is part of the OrganizeMyTeam team, dedicated to
            helping youth sports treasurers manage their team finances with
            confidence.
          </p>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="mt-16 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
            <div className="grid gap-4">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  href={`/blog/${relatedPost.slug}`}
                  className="block rounded-lg border p-4 transition-colors hover:bg-muted/50"
                >
                  <h3 className="font-semibold">{relatedPost.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                    {relatedPost.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="mt-16 max-w-3xl mx-auto text-center rounded-xl bg-primary p-8 text-primary-foreground">
          <h2 className="text-2xl font-bold">
            Ready to Simplify Your Team Finances?
          </h2>
          <p className="mt-2 text-primary-foreground/80">
            Try Team Manager free for 14 days. No credit card required.
          </p>
          <Button variant="secondary" size="lg" className="mt-6" asChild>
            <a href={ctaLinks.signup}>Start Free Trial</a>
          </Button>
        </div>
      </article>
    </>
  );
}
