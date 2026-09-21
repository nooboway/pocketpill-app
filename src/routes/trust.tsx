import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck, LockKeyhole, BadgeCheck, FileText, ArrowRight } from "lucide-react";
import ndpcBadge from "@/assets/ndpc-badge.png";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SectionHeader } from "@/components/section-header";

export const Route = createFileRoute("/trust")({
  head: () => ({
    meta: [
      { title: "Trust & Compliance | PocketPill" },
      {
        name: "description",
        content:
          "Learn about PocketPill's commitment to regulatory compliance, data protection, and medication authenticity in Nigeria.",
      },
    ],
  }),
  component: TrustCompliancePage,
});

const pillars = [
  {
    icon: BadgeCheck,
    title: "Pharmacist support",
    description:
      "Contact the PocketPill team about medicine use, prescriptions, and the next steps in your care. You can ask for the name and professional registration details of the pharmacist handling your request.",
  },
  {
    icon: ShieldCheck,
    title: "Medicine enquiries",
    description:
      "Send a medicine name or prescription to discuss availability, sourcing, and delivery. Ask the team to confirm the product, supplier, cost, and any prescription requirements before you pay.",
  },
  {
    icon: LockKeyhole,
    title: "Data Privacy & Security",
    description:
      "Review medicine requests before sending them in WhatsApp, or submit Lineage details to our pharmacists by email. Within PocketPill, patient care information is restricted to pharmacists who need it for their work. Contact privacy@pocketpill.co about your information.",
  },
  {
    icon: FileText,
    title: "Registration information",
    description:
      "The registration document linked below names PocketPill as a data controller/processor of major importance. Registration is not a guarantee of security or a substitute for specific privacy safeguards.",
  },
];

function TrustCompliancePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="section-padding bg-background">
          <div className="container-tight max-w-4xl pt-12">
            <SectionHeader
              eyebrow="Trust & Compliance"
              title="Clear information about your care."
              description="Understand how to contact our team, send a medicine request, and ask questions about your information."
            />

            <div className="mt-16 grid gap-6 md:grid-cols-2">
              {pillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="rounded-2xl border border-border/60 bg-cream p-8 transition-colors hover:bg-[#123d2d]/5"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#123d2d] text-white">
                    <pillar.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 font-heading text-xl font-bold text-foreground">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{pillar.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-16 overflow-hidden rounded-3xl border border-border/60 bg-white">
              <div className="grid md:grid-cols-[1fr_auto]">
                <div className="p-8 sm:p-12">
                  <h2 className="font-heading text-2xl font-bold text-foreground">
                    NDPC registration document
                  </h2>
                  <p className="mt-4 max-w-lg leading-relaxed text-muted-foreground">
                    The supplied certificate lists registration ID NDPC/DCP/14112 and a validity
                    period of 21 August 2026 to 21 August 2027. View the document for its stated
                    scope. It does not establish that all records are end-to-end encrypted or that
                    independent security audits have been completed.
                  </p>
                  <ul className="mt-6 space-y-3">
                    {[
                      "Review your request before sharing",
                      "Prescription follow-up with a pharmacist",
                      "Privacy enquiries: privacy@pocketpill.co",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-center text-sm font-medium text-foreground"
                      >
                        <BadgeCheck className="mr-3 h-5 w-5 text-[#123d2d]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/privacy-policy"
                    className="mt-6 inline-block font-semibold text-[#123d2d] underline underline-offset-4"
                  >
                    Read the privacy policy
                  </Link>
                </div>
                <div className="flex items-center justify-center border-t border-border/60 bg-cream p-8 md:border-l md:border-t-0 md:p-16">
                  <a
                    href="/ndpc-certificate.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="group relative block"
                  >
                    <img
                      src={ndpcBadge}
                      alt="NDPC registration document"
                      className="h-32 w-auto rounded-lg shadow-md transition-transform group-hover:scale-105"
                    />
                    <div className="absolute -bottom-8 left-1/2 flex -translate-x-1/2 items-center text-xs font-semibold uppercase tracking-widest text-[#123d2d] opacity-0 transition-opacity group-hover:opacity-100 whitespace-nowrap">
                      View Certificate <ArrowRight className="ml-1 h-3 w-3" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
