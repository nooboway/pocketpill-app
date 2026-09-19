import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { CheckCircle2, XCircle, Loader2 } from "lucide-react";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

type Search = { reference?: string | undefined; trxref?: string | undefined };

export const Route = createFileRoute("/payment/success")({
  head: () => ({
    meta: [
      { title: "Payment confirmation — PocketPill" },
      { name: "description", content: "Confirm your PocketPill payment and see the next steps for your private consultation." },
      { property: "og:title", content: "Payment confirmation — PocketPill" },
      { property: "og:description", content: "Confirm your PocketPill payment and see the next steps for your private consultation." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "noindex" },
    ],
  }),
  validateSearch: (search: Record<string, unknown>): Search => ({
    reference: (search["reference"] as string) || undefined,
    trxref: (search["trxref"] as string) || undefined,
  }),
  component: PaymentSuccessPage,
});

function PaymentSuccessPage() {
  const search = Route.useSearch();
  const reference = search.reference || search.trxref;

  const { data, isLoading, isError } = useQuery({
    queryKey: ["verify-payment", reference],
    enabled: Boolean(reference),
    queryFn: async () => {
      const res = await fetch(`/api/public/verify-payment?reference=${encodeURIComponent(reference!)}`);
      return (await res.json()) as {
        verified?: boolean;
        amount?: number;
        plan?: string;
        email?: string;
        error?: string;
      };
    },
  });

  const verified = data?.verified === true;

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex flex-1 items-center justify-center bg-background px-6 py-24">
        <div className="w-full max-w-lg rounded-2xl border border-border/60 bg-card p-10 text-center shadow-sm">
          {!reference ? (
            <>
              <XCircle className="mx-auto h-12 w-12 text-destructive" />
              <h1 className="heading-md mt-6">No payment reference</h1>
              <p className="mt-3 text-sm text-muted-foreground">
                We couldn't find a payment to confirm. If you were charged, contact us and we'll sort it out right away.
              </p>
            </>
          ) : isLoading ? (
            <>
              <Loader2 className="mx-auto h-12 w-12 animate-spin text-primary" />
              <h1 className="heading-md mt-6">Confirming your payment…</h1>
              <p className="mt-3 text-sm text-muted-foreground">This only takes a moment.</p>
            </>
          ) : verified ? (
            <>
              <CheckCircle2 className="mx-auto h-12 w-12 text-primary" />
              <h1 className="heading-md mt-6">Payment confirmed</h1>
              <p className="mt-3 text-sm text-muted-foreground">
                Thank you{data?.email ? `, ${data.email}` : ""}. {data?.plan ? `Your ${data.plan} is confirmed.` : ""} Our team will reach out on WhatsApp shortly with your next steps.
              </p>
              {typeof data?.amount === "number" && (
                <p className="mt-2 text-sm font-medium text-foreground">
                  Amount paid: ₦{data.amount.toLocaleString()}
                </p>
              )}
            </>
          ) : (
            <>
              <XCircle className="mx-auto h-12 w-12 text-destructive" />
              <h1 className="heading-md mt-6">Payment not confirmed</h1>
              <p className="mt-3 text-sm text-muted-foreground">
                {isError ? "We couldn't reach the payment service." : data?.error || "This transaction hasn't been completed."} Reference: {reference}
              </p>
            </>
          )}

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Back home
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-md border border-input bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-accent"
            >
              Contact support
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
