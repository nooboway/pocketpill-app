import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, PhoneCall } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import parentImage from "@/assets/lineage-parent.jpg";
import familyImage from "@/assets/lineage-family.jpg";

export const Route = createFileRoute("/lineage")({
  component: LineagePage,
  head: () => ({ meta: [
    { title: "Lineage Family Medication Care | PocketPill" },
    { name: "description", content: "Coordinate medication care for a parent or family member in Nigeria, even when you live abroad." },
    { property: "og:title", content: "Lineage Family Medication Care | PocketPill" },
    { property: "og:description", content: "Coordinate medication care for a parent or family member in Nigeria, even when you live abroad." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
});

const WHATSAPP = "https://wa.me/2347083725382?text=Hi%2C%20I%20want%20to%20set%20up%20Lineage%20for%20my%20parent%20in%20Nigeria.";

function StatusCard({ label, value, className }: { label: string; value: string; className: string }) {
  return <div className={`lineage-status ${className}`}><span><Check /></span><div><small>{label}</small><strong>{value}</strong></div></div>;
}

function LineagePage() {
  return <div className="lineage-page">
    <SiteHeader />
    <main>
      <section className="lineage-hero">
        <div className="lineage-hero__copy"><span className="ds-kicker">Lineage by PocketPill</span><h1>Care for them, even from far away.</h1><p>Coordinate medication care for a parent in Nigeria. You set it up. A pharmacist calls them. They never need to log in.</p><div><Link to="/lineage/start" className="ds-primary-button">Set up their care <ArrowRight /></Link><a href={WHATSAPP} target="_blank" rel="noreferrer" className="ds-secondary-button"><PhoneCall /> Talk to a pharmacist</a></div></div>
        <div className="lineage-hero__visual"><img src={parentImage} alt="An older Nigerian parent speaking with her care team" width={1280} height={1536} /><StatusCard label="NEXT REFILL" value="Due soon" className="lineage-status--one" /><StatusCard label="PHARMACIST REVIEW" value="Complete" className="lineage-status--two" /><StatusCard label="FAMILY UPDATE" value="Sent" className="lineage-status--three" /></div>
      </section>

      <section className="lineage-statement"><span>THE REALITY</span><h2>Life moves across borders.<br />Care still happens at home.</h2><p>Your parent may not use apps. Their medicines still run out. Prescriptions still need checking, and someone still needs to notice when the next pack is due.</p></section>

      <section className="lineage-story"><div className="lineage-story__image"><img src={familyImage} alt="A Nigerian woman checking in with family from abroad" loading="lazy" width={1280} height={1536} /></div><div className="lineage-story__copy"><span className="ds-kicker">For family abroad</span><h2>Visibility without hovering.</h2><p>You provide the care details and fund the plan. PocketPill coordinates the medicine request, pharmacist review, and refill communication in Nigeria.</p><ul><li><Check /> Know when a refill is approaching</li><li><Check /> Receive a clear family update</li><li><Check /> Get help when something changes</li></ul></div></section>

      <section className="lineage-full-story"><div><span className="ds-kicker">For parents at home</span><h2>No new app.<br />No complicated routine.</h2><p>Your parent receives a familiar phone call from a pharmacist. Care fits around how they already live, rather than asking them to learn another platform.</p></div></section>

      <section className="lineage-how"><header><span className="ds-kicker">How Lineage works</span><h2>A simple loop that keeps care moving.</h2></header><ol><li><span>01</span><div><h3>You share the care details</h3><p>Send their name, caregiver contact, medicines, and prescription.</p></div></li><li><span>02</span><div><h3>A pharmacist reviews the request</h3><p>We check the information and clarify anything that needs attention.</p></div></li><li><span>03</span><div><h3>We coordinate the next medicine</h3><p>Your parent or caregiver gets a call before the medicine runs out.</p></div></li><li><span>04</span><div><h3>You receive the update</h3><p>You know what happened, even when you are several time zones away.</p></div></li></ol></section>

      <section className="lineage-cta"><div><span className="ds-kicker">Start Lineage</span><h2>Help them stay on treatment.</h2><p>Set up their care from wherever you are.</p><Link to="/lineage/start" className="ds-primary-button">Set up care for a parent <ArrowRight /></Link></div><img src={parentImage} alt="A parent supported by Lineage" loading="lazy" width={1280} height={1536} /></section>
    </main>
    <SiteFooter />
  </div>;
}