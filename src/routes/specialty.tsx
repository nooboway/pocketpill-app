import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Search, ShieldCheck } from "lucide-react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const Route = createFileRoute("/specialty")({
  component: SpecialtyPage,
  head: () => ({
    meta: [
      { title: "Specialty Sourcing | PocketPill" },
      {
        name: "description",
        content: "Sourcing for difficult-to-find treatments, oncology and specialized medications.",
      },
    ],
  }),
});

function SpecialtyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="bg-[#f5f7f2] pt-12 sm:pt-24 pb-24">
          <div className="container-tight max-w-4xl">
            <span className="text-[#123d2d] font-bold tracking-widest text-sm uppercase mb-6 block">
              SPECIALTY SOURCING
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#133c2c] leading-tight mb-6">
              Hard-to-find medicine? Let us look for it.
            </h1>
            <p className="text-lg sm:text-xl text-[#6b7b73] leading-relaxed max-w-2xl mb-12">
              We leverage our network to source specialized treatments, oncology medications, and
              out-of-stock items reliably.
            </p>

            <div className="grid sm:grid-cols-2 gap-8 mb-16">
              <div className="bg-white p-8 rounded-2xl border border-border/40 shadow-sm">
                <Search className="h-8 w-8 text-[#123d2d] mb-4" />
                <h3 className="font-heading text-xl font-bold text-[#133c2c] mb-2">
                  Dedicated Sourcing
                </h3>
                <p className="text-[#6b7b73] text-sm leading-relaxed">
                  We investigate availability across vetted manufacturers and distributors to find
                  the specific brand or generic you need.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl border border-border/40 shadow-sm">
                <ShieldCheck className="h-8 w-8 text-[#123d2d] mb-4" />
                <h3 className="font-heading text-xl font-bold text-[#133c2c] mb-2">
                  Cold Chain & Quality
                </h3>
                <p className="text-[#6b7b73] text-sm leading-relaxed">
                  Specialty drugs are handled with care, ensuring cold-chain integrity and
                  authenticity from shelf to doorstep.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Link
                to="/find"
                className="pill-button pill-button--mint w-full sm:w-auto justify-center"
              >
                Submit a request <ArrowUpRight className="ml-2 h-4 w-4" />
              </Link>
              <a
                href="https://wa.me/2347083725382"
                target="_blank"
                rel="noreferrer"
                className="pill-button pill-button--outline-light !text-[#123d2d] w-full sm:w-auto justify-center"
              >
                Chat with our team
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
