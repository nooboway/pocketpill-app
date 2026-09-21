import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import image from "@/assets/oh-cat-intimacy.jpg";

export const Route = createFileRoute("/mental-health")({
  component: MentalHealthPage,
  head: () => ({ meta: [
    { title: "Mental Health Care | PocketPill" },
    { name: "description", content: "Private, pharmacist-led mental health medication support in Nigeria." },
    { property: "og:title", content: "Mental Health Care | PocketPill" },
    { property: "og:description", content: "Private, pharmacist-led mental health medication support in Nigeria." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
});

function MentalHealthPage() { return <div><SiteHeader /><main className="simple-editorial"><div><span className="ds-kicker">Mental Health Care</span><h1>Medication support that feels private and human.</h1><p>Talk through medicine questions, side effects, interactions, and continuity with a pharmacist — discreetly and without judgment.</p><Link to="/telepharmacy" className="ds-primary-button">Talk to a pharmacist <ArrowRight /></Link></div><img src={image} alt="A Nigerian couple in a calm home setting" /></main><SiteFooter /></div>; }