import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Calendar, UserRound } from "lucide-react";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SectionHeader } from "@/components/section-header";
import { Card, CardContent } from "@/components/ui/card";

export const Route = createFileRoute("/blog")({
  component: BlogPage,
  head: () => ({
    meta: [
      { title: "Men's Health Blog & Resources — PocketPill" },
      { name: "description", content: "Expert, pharmacist-led articles on men's health, erectile dysfunction, testosterone, and wellness in Nigeria." },
    ],
  }),
});

const articles = [
  {
    slug: "what-your-pharmacist-wants-you-to-know-about-ed",
    title: "5 Things Your Pharmacist Wants You to Know About ED",
    excerpt: "Erectile dysfunction is common, but the misinformation surrounding it can be dangerous. Here is what the science actually says about treating ED safely.",
    category: "Sexual Health",
    author: "Pharm. Adebayo",
    date: "Aug 15, 2026",
    readTime: "4 min read",
  },
  {
    slug: "how-stress-kills-testosterone",
    title: "The Silent Killer: How Chronic Stress Lowers Your Testosterone",
    excerpt: "Before you buy expensive supplements, look at your sleep and stress levels. Cortisol and testosterone are locked in a constant battle.",
    category: "Hormone Health",
    author: "PocketPill Editorial",
    date: "Aug 10, 2026",
    readTime: "6 min read",
  },
  {
    slug: "talking-to-your-partner-about-pe",
    title: "How to Talk to Your Partner About Premature Ejaculation",
    excerpt: "The silence around PE often causes more relationship strain than the condition itself. Here is a framework for having the conversation without shame.",
    category: "Relationships",
    author: "Pharm. Adebayo",
    date: "Aug 2, 2026",
    readTime: "5 min read",
  },
];

function BlogPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 bg-background">
        <section className="section-padding">
          <div className="container-tight">
            <SectionHeader
              eyebrow="Resources"
              title="Men's Health Insights"
              description="Clear, pharmacist-led education on the topics that matter most. No bro-science, just evidence."
              align="left"
            />

            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {articles.map((article) => (
                <Link key={article.slug} to="/blog/$slug" params={{ slug: article.slug }} className="group block h-full">
                  <Card className="h-full border-border/60 bg-card transition-all hover:shadow-lg hover:border-primary/30 flex flex-col">
                    <CardContent className="p-6 flex flex-col h-full">
                      <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
                        {article.category}
                      </span>
                      <h3 className="font-heading text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                        {article.title}
                      </h3>
                      <p className="mt-3 text-sm text-muted-foreground line-clamp-3 mb-6 flex-1">
                        {article.excerpt}
                      </p>
                      
                      <div className="mt-auto border-t border-border/50 pt-4 flex items-center justify-between text-xs text-muted-foreground">
                        <div className="flex items-center gap-1.5">
                          <UserRound className="h-3 w-3" />
                          <span>{article.author}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Calendar className="h-3 w-3" />
                          <span>{article.date}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
