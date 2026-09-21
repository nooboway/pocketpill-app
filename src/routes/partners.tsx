import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import image from "@/assets/doctors-nigerian.png";

export const Route = createFileRoute("/partners")({
  component: PartnersPage,
  head: () => ({ meta: [
    { title: "Partners | PocketPill" },
    { name: "description", content: "Work with PocketPill to improve coordinated medicine access and pharmacist-led care." },
    { property: "og:title", content: "Partners | PocketPill" },
    { property: "og:description", content: "Work with PocketPill to improve coordinated medicine access and pharmacist-led care." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
});
function PartnersPage() { return <div><SiteHeader /><main className="simple-editorial simple-editorial--reverse"><div><span className="ds-kicker">Partners</span><h1>Better medicine access takes coordination.</h1><p>PocketPill works across the care journey to connect medicine requests, pharmacist guidance, specialty sourcing, and ongoing support.</p><Link to="/about" className="ds-primary-button">About PocketPill <ArrowRight /></Link></div><img src={image} alt="Nigerian healthcare professionals" /></main><SiteFooter /></div>; }