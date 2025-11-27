import Image from "next/image";
import Link from "next/link";

export const mdxComponents = {
  h1: ({ children }: { children: React.ReactNode }) => (
    <h1 className="mt-8 mb-4 text-3xl font-bold tracking-tight">{children}</h1>
  ),
  h2: ({ children }: { children: React.ReactNode }) => (
    <h2 className="mt-8 mb-4 text-2xl font-bold tracking-tight">{children}</h2>
  ),
  h3: ({ children }: { children: React.ReactNode }) => (
    <h3 className="mt-6 mb-3 text-xl font-semibold">{children}</h3>
  ),
  h4: ({ children }: { children: React.ReactNode }) => (
    <h4 className="mt-4 mb-2 text-lg font-semibold">{children}</h4>
  ),
  p: ({ children }: { children: React.ReactNode }) => (
    <p className="mb-4 leading-7 text-muted-foreground">{children}</p>
  ),
  ul: ({ children }: { children: React.ReactNode }) => (
    <ul className="mb-4 ml-6 list-disc space-y-2">{children}</ul>
  ),
  ol: ({ children }: { children: React.ReactNode }) => (
    <ol className="mb-4 ml-6 list-decimal space-y-2">{children}</ol>
  ),
  li: ({ children }: { children: React.ReactNode }) => (
    <li className="leading-7 text-muted-foreground">{children}</li>
  ),
  blockquote: ({ children }: { children: React.ReactNode }) => (
    <blockquote className="mb-4 border-l-4 border-primary pl-4 italic text-muted-foreground">
      {children}
    </blockquote>
  ),
  a: ({ href, children }: { href?: string; children: React.ReactNode }) => {
    const isExternal = href?.startsWith("http");
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline underline-offset-4 hover:text-primary/80"
        >
          {children}
        </a>
      );
    }
    return (
      <Link
        href={href || "#"}
        className="text-primary underline underline-offset-4 hover:text-primary/80"
      >
        {children}
      </Link>
    );
  },
  code: ({ children }: { children: React.ReactNode }) => (
    <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">
      {children}
    </code>
  ),
  pre: ({ children }: { children: React.ReactNode }) => (
    <pre className="mb-4 overflow-x-auto rounded-lg bg-muted p-4 font-mono text-sm">
      {children}
    </pre>
  ),
  table: ({ children }: { children: React.ReactNode }) => (
    <div className="mb-4 overflow-x-auto">
      <table className="w-full border-collapse">{children}</table>
    </div>
  ),
  th: ({ children }: { children: React.ReactNode }) => (
    <th className="border border-border bg-muted px-4 py-2 text-left font-semibold">
      {children}
    </th>
  ),
  td: ({ children }: { children: React.ReactNode }) => (
    <td className="border border-border px-4 py-2">{children}</td>
  ),
  hr: () => <hr className="my-8 border-border" />,
  strong: ({ children }: { children: React.ReactNode }) => (
    <strong className="font-semibold text-foreground">{children}</strong>
  ),
  em: ({ children }: { children: React.ReactNode }) => (
    <em className="italic">{children}</em>
  ),
  img: ({ src, alt }: { src?: string; alt?: string }) => (
    <span className="my-6 block overflow-hidden rounded-lg border">
      <Image
        src={src || ""}
        alt={alt || ""}
        width={800}
        height={450}
        className="w-full"
      />
    </span>
  ),
};
