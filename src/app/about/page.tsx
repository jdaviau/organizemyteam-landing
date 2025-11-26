import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about OrganizeMyTeam and our mission to simplify team financial management.",
};

export default function AboutPage() {
  return (
    <div className="container-landing section-padding">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          About OrganizeMyTeam
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Our mission is to simplify financial management for team treasurers.
        </p>
      </div>
      <div className="mt-16 text-center text-muted-foreground">
        <p>About page content coming in Task 9</p>
      </div>
    </div>
  );
}
