import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Calendar, UserRound } from "lucide-react";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/blog/$slug")({
  component: BlogPostPage,
});

function BlogPostPage() {
  const { slug } = Route.useParams();

  // Basic mock content renderer - in production this would pull from a CMS or MDX files
  const getPost = (slug: string) => {
    const titles: Record<string, string> = {
      "what-your-pharmacist-wants-you-to-know-about-ed": "5 Things Your Pharmacist Wants You to Know About ED",
      "how-stress-kills-testosterone": "The Silent Killer: How Chronic Stress Lowers Your Testosterone",
      "talking-to-your-partner-about-pe": "How to Talk to Your Partner About Premature Ejaculation"
    };
    
    if (!titles[slug]) return null;
    
    return {
      title: titles[slug],
      author: "Pharm. Adebayo",
      date: "August 2026",
      content: "This is a placeholder for the full article content. In a production environment, this text would be hydrated from a Headless CMS (like Sanity or Contentful) or from local MDX markdown files. For now, the structure and SEO meta tags are prepared to rank well for men's health queries in the Nigerian market."
    };
  };

  const post = getPost(slug);

  if (!post) {
    return (
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-foreground">Article not found</h1>
            <Button className="mt-6 bg-black text-white hover:bg-black/90" asChild>
              <Link to="/blog">Back to blog</Link>
            </Button>
          </div>
        </main>
        <SiteFooter />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 bg-background">
        <article className="section-padding">
          <div className="container-tight max-w-2xl">
            <Link to="/blog" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground mb-8 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to all articles
            </Link>
            
            <header className="mb-10">
              <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                {post.title}
              </h1>
              
              <div className="mt-6 flex items-center gap-6 border-y border-border py-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <UserRound className="h-4 w-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{post.date}</span>
                </div>
              </div>
            </header>

            <div className="prose prose-lg dark:prose-invert prose-headings:font-heading prose-a:text-primary max-w-none text-muted-foreground">
              <p className="lead text-xl text-foreground font-medium mb-6">
                Understanding the science behind men's health is the first step towards better treatment and lasting confidence.
              </p>
              <p>{post.content}</p>
              
              <div className="mt-12 p-8 bg-muted rounded-2xl border border-border/50 text-center">
                <h3 className="font-heading text-xl font-bold text-foreground mb-3">Ready to take control?</h3>
                <p className="text-sm mb-6 text-muted-foreground">Stop guessing. Get clear, pharmacist-led guidance today.</p>
                <Button className="bg-black text-white hover:bg-black/90" asChild>
                  <Link to="/book">Book a Private Consultation</Link>
                </Button>
              </div>
            </div>
          </div>
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}
