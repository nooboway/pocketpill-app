import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { title: "Talk to a Pharmacist — PocketPill" },
      { name: "description", content: "Chat with a licensed pharmacist directly on WhatsApp." },
    ],
  }),
  component: BookPage,
});

function BookPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="section-padding bg-background">
          <div className="container-tight text-center">
            <h1 className="font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Talk to a pharmacist
            </h1>
            <div className="mt-16 rounded-2xl bg-cream p-12 text-center">
              <p className="text-xl font-medium text-foreground max-w-2xl mx-auto">
                Connect with our licensed pharmacists on WhatsApp to discuss your health needs, request a specific medicine, or get answers to your questions.
              </p>
              <Button className="mt-8 bg-[#123d2d] text-white hover:bg-[#123d2d]/90" size="lg" asChild>
                <a href="https://wa.me/2347083725382" target="_blank" rel="noreferrer">
                  Message us on WhatsApp <ArrowUpRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
