import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Camera, Check, MessageCircle, Search, ShieldCheck } from "lucide-react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import heroImage from "@/assets/pocketpill-portrait.png";
import specialtyImage from "@/assets/doctors-nigerian.png";
import mentalHealthImage from "@/assets/oh-cat-intimacy.jpg";
import lineageImage from "@/assets/lineage-parent.jpg";
import pharmacistImage from "@/assets/oh-care-team.jpg";
import deliveryImage from "@/assets/pocketpill-editorial.png";

const WHATSAPP = "https://wa.me/2347083725382";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: "PocketPill | Care beyond the prescription" },
      { name: "description", content: "Find medicines and get ongoing pharmacist-led medication care in Nigeria." },
      { property: "og:title", content: "PocketPill | Care beyond the prescription" },
      { property: "og:description", content: "Find medicines and get ongoing pharmacist-led medication care in Nigeria." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function ArrowLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link to={to} className="ds-arrow-link">
      {children}<ArrowRight aria-hidden="true" />
    </Link>
  );
}

function HomePage() {
  return (
    <div className="ds-page">
      <main>
        <section className="ds-hero">
          <img src={heroImage} alt="A PocketPill pharmacist caring for a patient" className="ds-hero__image" />
          <div className="ds-hero__veil" />
          <SiteHeader overlay />
          <div className="ds-hero__content">
            <h1>Care beyond<br />the prescription.</h1>
            <p>Find medicines, speak with a pharmacist, and stay supported throughout treatment.</p>
            <Link to="/find" className="ds-primary-button">Find a medicine <ArrowRight /></Link>
          </div>
        </section>

        <section className="ds-mission">
          <div className="ds-mission__copy">
            <h2>Healthcare shouldn&apos;t end when the prescription is written.</h2>
            <p>PocketPill connects medicine access with pharmacist support and ongoing medication care — from the first request to the next refill.</p>
            <div className="ds-mission__proof"><ShieldCheck /><span>Pharmacist-led care</span><span>Private support</span></div>
          </div>
          <div className="ds-mission__journey" aria-label="PocketPill care journey">
            <span className="ds-mission__journey-label">One continuous care journey</span>
            <div><i>01</i><span><strong>Request</strong><small>Tell us what you need</small></span></div>
            <div><i>02</i><span><strong>Review</strong><small>A pharmacist checks in</small></span></div>
            <div><i>03</i><span><strong>Continue</strong><small>Support through treatment</small></span></div>
          </div>
        </section>

        <section className="ds-care">
          <div className="ds-care__inner">
            <header className="ds-care__intro">
              <h2>Our Care</h2>
              <p>One pharmacy relationship for finding medicines, navigating complex treatment, and looking after the people who matter to you.</p>
            </header>

            <article className="ds-feature ds-feature--medicine">
              <div className="ds-feature__copy">
                <span className="ds-kicker">Medicine access</span>
                <h3>Find a Medicine</h3>
                <p>Search by name, upload a prescription, or ask our pharmacy team to investigate difficult-to-find treatments.</p>
                <ArrowLink to="/find">Find a medicine</ArrowLink>
              </div>
              <div className="medicine-preview" aria-label="Preview of PocketPill medicine request">
                <div className="medicine-preview__bar"><img src="/pocketpill-icon-512.png" alt="" /><span>PocketPill</span></div>
                <div className="medicine-preview__body">
                  <small>WHAT DO YOU NEED?</small>
                  <div className="medicine-preview__search"><Search /><span>Medicine name or prescription</span></div>
                  <div className="medicine-preview__actions"><span><Camera /> Photo of box</span><span>Upload prescription</span></div>
                </div>
              </div>
            </article>

            <div className="ds-pair">
              <article className="ds-feature ds-feature--specialty">
                <div className="ds-feature__copy"><span className="ds-kicker">Complex therapies</span><h3>Specialty Care</h3><p>Support sourcing oncology and other specialist medicines, with pharmacist coordination throughout treatment.</p><ArrowLink to="/specialty">Explore specialty care</ArrowLink></div>
                <img src={specialtyImage} alt="PocketPill healthcare professionals" loading="lazy" />
              </article>
              <article className="ds-feature ds-feature--mental">
                <div className="ds-feature__copy"><span className="ds-kicker">Discreet support</span><h3>Mental Health Care</h3><p>Private, human medication support designed around continuity, clarity, and dignity.</p><ArrowLink to="/mental-health">Explore mental health care</ArrowLink></div>
                <img src={mentalHealthImage} alt="A Nigerian couple at home" loading="lazy" />
              </article>
            </div>

            <div className="ds-pair">
              <article className="ds-feature ds-feature--lineage">
                <div className="ds-feature__copy"><span className="ds-kicker">Family care</span><h3>Lineage</h3><p>You may live elsewhere. Your parent is in Nigeria. We help coordinate their medicine care without asking them to use an app.</p><ArrowLink to="/lineage">Discover Lineage</ArrowLink></div>
                <img src={lineageImage} alt="An older Nigerian parent receiving a care call" loading="lazy" width={1280} height={1536} />
              </article>
              <article className="ds-feature ds-feature--pharmacist">
                <div className="ds-feature__copy"><span className="ds-kicker">Telepharmacy</span><h3>Pharmacist Care</h3><p>Ask about medication use, interactions, side effects, storage, and what to do next.</p><a href={WHATSAPP} target="_blank" rel="noreferrer" className="ds-arrow-link">Talk to a pharmacist <ArrowRight /></a></div>
                <img src={pharmacistImage} alt="A PocketPill pharmacist available by phone" loading="lazy" />
              </article>
            </div>
          </div>
        </section>

        <section className="ds-recognition">
          <div>
            <h2>Built around trusted care.</h2>
            <div className="ds-recognition__grid">
              <div><Check /><strong>Pharmacist review</strong><span>Clinical oversight before fulfilment.</span></div>
              <div><Check /><strong>Trusted sourcing</strong><span>Medicines from vetted supply channels.</span></div>
              <div><Check /><strong>Private by design</strong><span>Documented privacy practices aligned with Nigeria&apos;s data protection requirements.</span></div>
            </div>
            <ArrowLink to="/trust">See how we protect your care</ArrowLink>
          </div>
        </section>

        <section className="ds-partners">
          <h2>One connected care experience</h2>
          <div className="ds-partners__line">
            <span>Medicine requests</span><i />
            <span>Pharmacist guidance</span><i />
            <span>Specialty sourcing</span><i />
            <span>Ongoing family care</span>
          </div>
        </section>

        <section className="ds-final">
          <div className="ds-final__copy">
            <span className="ds-kicker">PocketPill</span>
            <h2>Your pharmacy care, in your pocket.</h2>
            <p>Start with a medicine name, a prescription, or a private conversation with a pharmacist.</p>
            <div><Link to="/find" className="ds-primary-button">Get started <ArrowRight /></Link><a href={WHATSAPP} target="_blank" rel="noreferrer" className="ds-secondary-button"><MessageCircle /> Talk to a pharmacist</a></div>
          </div>
          <img src={deliveryImage} alt="PocketPill medicine delivery in Nigeria" />
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}