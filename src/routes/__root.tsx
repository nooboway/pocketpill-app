import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { CookieConsent } from "../components/cookie-consent";
import { EnoreChat } from "../components/enore-chat";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "PocketPill — Online Doctor Visits, Prescriptions & Care" },
      {
        name: "description",
        content:
          "PocketPill connects you with certified doctors, pharmacists and team of healthcare professionals for urgent care, mental health, prescriptions, and more — from your phone, same day.",
      },
      { name: "author", content: "PocketPill" },
      { property: "og:site_name", content: "PocketPill" },
      { property: "og:title", content: "PocketPill — Your Virtual Health Clinic" },
      {
        property: "og:description",
        content:
          "PocketPill connects you with certified doctors, pharmacists and team of healthcare professionals for urgent care, mental health, prescriptions, and more — from your phone, same day.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@pocketpill" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Onest:wght@400;500;600;700&display=swap",
      },

      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  const structuredData = {
    pharmacy: {
      "@context": "https://schema.org",
      "@type": "Pharmacy",
      "name": "PocketPill",
      "alternateName": "PocketPill Nigeria",
      "url": "https://pocketpill.co",
      "@id": "https://pocketpill.co/#pharmacy",
      "telephone": "+234-708-372-5382",
      "description": "Medicines and care, made simple. Shop trusted medicines in Nigeria, talk to a pharmacist, and book private telehealth support from home.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Ikeja",
        "addressRegion": "Lagos",
        "addressCountry": "NG"
      },
      "areaServed": {
        "@type": "Country",
        "name": "Nigeria"
      },
      "currenciesAccepted": "NGN",
      "paymentAccepted": "Cash, Bank Transfer, Card Payment",
      "sameAs": [
        "https://wa.me/2347083725382"
      ]
    },
    website: {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": "https://pocketpill.co/#website",
      "url": "https://pocketpill.co",
      "name": "PocketPill",
      "description": "Medicines and care, made simple",
      "publisher": {
        "@type": "Organization",
        "name": "PocketPill",
        "@id": "https://pocketpill.co/#organization"
      }
    },
    services: {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Telehealth & Pharmacy Services",
      "provider": {
        "@type": "Pharmacy",
        "@id": "https://pocketpill.co/#pharmacy"
      },
      "areaServed": {
        "@type": "Country",
        "name": "Nigeria"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "PocketPill Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Private Pharmacist Consultations",
              "description": "One-on-one consultations with a licensed pharmacist via WhatsApp or virtual sessions"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Medicine Delivery",
              "description": "Trusted pharmacy products delivered discreetly across Nigeria"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Mental Health Support",
              "description": "Accessible mental health care, guidance, and medication support"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Oncology Medication Sourcing",
              "description": "Expert sourcing, delivery, and guidance for oncology medications in Nigeria"
            }
          }
        ]
      }
    },
    faq: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How do I order my medications?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can shop directly on our website, ask our Enoré AI assistant, or message us on WhatsApp. Once confirmed, we process and dispatch your order swiftly and discreetly."
          }
        },
        {
          "@type": "Question",
          "name": "Are your medications genuine?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We source directly from trusted manufacturers and verified distributors. PocketPill is committed to delivering only safe and authentic medications."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need a prescription to order?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Over-the-counter (OTC) medications can be ordered directly. For prescription-only medicines (POM), you will need to upload a valid prescription during checkout or share it with our pharmacists via WhatsApp."
          }
        },
        {
          "@type": "Question",
          "name": "How fast is delivery?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer fast, discreet delivery across Nigeria. Delivery availability and timing depend on your specific area and order, and our team will confirm the exact details before you pay."
          }
        },
        {
          "@type": "Question",
          "name": "Can I speak to a pharmacist before buying?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. Our licensed pharmacists are available for private consultations via WhatsApp or voice call. We provide expert advice on dosage, side effects, and drug interactions."
          }
        },
        {
          "@type": "Question",
          "name": "Is my consultation really private?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Consultations happen on your personal WhatsApp thread with the pharmacist. There is no public profile, waiting room, or front-desk handover. Your conversations and data are treated with strict confidentiality."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer specialized care for chronic conditions?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We specialize in sourcing and delivering medications for oncology, mental health, and other chronic conditions, ensuring you never run out of essential care and have the right guidance."
          }
        },
        {
          "@type": "Question",
          "name": "What happens after I reach out for a consultation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A licensed pharmacist asks a few focused questions, listens to what is going on, and shares clear next steps. If you need a prescriber, we will tell you what to ask for and when to seek further care."
          }
        },
        {
          "@type": "Question",
          "name": "Can the pharmacist prescribe medication?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "PocketPill is a pharmacist consultation and education service. We can explain treatment options, flag interactions, and help you prepare for a prescriber, but a licensed physician must issue any new prescription."
          }
        },
        {
          "@type": "Question",
          "name": "What if I am not sure where to start?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Start a message on WhatsApp before paying. A short back-and-forth is enough to point you toward the right route. There is no pressure to book."
          }
        }
      ]
    }
  };

  return (
    <html lang="en">
      <head>
        <HeadContent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.pharmacy) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.website) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.services) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.faq) }}
        />
      </head>
      <body>
        {children}
        <CookieConsent />
        <EnoreChat />
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
