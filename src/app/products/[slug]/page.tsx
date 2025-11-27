import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  ProductHero,
  FeaturesShowcase,
  UseCasesSection,
  ScreenshotGallery,
  ProductCTA,
} from "@/components/products";
import { getProduct, getAllProductSlugs } from "@/lib/products";

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = getAllProductSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: product.name,
    description: product.description,
    keywords: [
      product.name.toLowerCase(),
      "team management",
      "youth sports",
      "treasurer",
      "payment tracking",
      "expense management",
      "financial reports",
    ],
    openGraph: {
      title: `${product.name} - OrganizeMyTeam`,
      description: product.tagline,
      type: "website",
      url: `https://organizemyteam.com/products/${product.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} - OrganizeMyTeam`,
      description: product.tagline,
    },
    alternates: {
      canonical: `https://organizemyteam.com/products/${product.slug}`,
    },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) {
    notFound();
  }

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: product.name,
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web",
            description: product.description,
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
              description: "Free tier available",
            },
            featureList: product.features.map((f) => f.title),
          }),
        }}
      />

      <ProductHero
        name={product.name}
        tagline={product.tagline}
        description={product.description}
        ctaText={product.ctaText}
        ctaHref={product.ctaHref}
      />

      <ScreenshotGallery
        screenshots={product.screenshots}
        productName={product.name}
      />

      <FeaturesShowcase features={product.features} />

      <UseCasesSection useCases={product.useCases} />

      <ProductCTA
        productName={product.name}
        ctaText={product.ctaText}
        ctaHref={product.ctaHref}
      />
    </>
  );
}
