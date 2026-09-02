import { FormEvent, useState } from "react";
import "./_group.css";

const image = (name: string) => `/__mockup/images/pocketpill-current/${name}`;

function Arrow({ direction = "up" }: { direction?: "up" | "down" }) {
  return (
    <svg
      aria-hidden="true"
      className={direction === "down" ? "pcv-arrow pcv-arrow-down" : "pcv-arrow"}
      viewBox="0 0 18 18"
      fill="none"
    >
      <path d="M4.5 13.5 13.5 4.5M6 4.5h7.5V12" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Check() {
  return (
    <svg aria-hidden="true" viewBox="0 0 18 18" fill="none" className="pcv-check">
      <path d="m4.2 9.2 3.1 3.1 6.6-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Shield() {
  return (
    <svg aria-hidden="true" viewBox="0 0 28 28" fill="none" className="pcv-shield">
      <path d="M14 3.5 23 7v6.25c0 5.65-3.74 9.67-9 11.25-5.26-1.58-9-5.6-9-11.25V7l9-3.5Z" stroke="currentColor" strokeWidth="1.5" />
      <path d="m9.1 13.8 3.1 3.1 6.8-6.8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

type ConsultState = "idle" | "sending" | "success" | "error";

export function TrustedCare() {
  const [modalOpen, setModalOpen] = useState(false);
  const [consultState, setConsultState] = useState<ConsultState>("idle");
  const [safetyOpen, setSafetyOpen] = useState(false);
  const [questionOpen, setQuestionOpen] = useState<number | null>(0);
  const [form, setForm] = useState({ name: "", contact: "", concern: "I have a question about my symptoms" });

  const openConsult = (concern = form.concern) => {
    setForm((current) => ({ ...current, concern }));
    setConsultState("idle");
    setModalOpen(true);
  };

  const submitConsult = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!form.name.trim() || !form.contact.trim()) {
      setConsultState("error");
      return;
    }
    setConsultState("sending");
    window.setTimeout(() => setConsultState("success"), 700);
  };

  const questions = [
    ["Will I speak to a real pharmacist?", "Yes. Your first conversation is with a registered pharmacist who takes time to understand your health, current medicines, and what you want help with."],
    ["Is my information kept private?", "Your conversation is private by design. We only collect what is needed to advise safely, and we never sell your health information."],
    ["Do I need a prescription?", "Sometimes. If a prescription-only treatment is appropriate, we explain why and guide you to the right prescriber. We do not skip safety checks."],
  ];

  return (
    <div className="pcv">
      <style>{`
        .pcv {
          --ink: #172a35;
          --muted: #5e706f;
          --paper: #f8f7f1;
          --warm: #f0eee3;
          --sage: #dce9df;
          --sage-deep: #496c63;
          --coral: #d96143;
          --line: #d8ded5;
          min-height: 100vh;
          color: var(--ink);
          background: var(--paper);
          font-family: "DM Sans", ui-sans-serif, system-ui, sans-serif;
          overflow: hidden;
        }
        .pcv * { box-sizing: border-box; }
        .pcv button, .pcv input, .pcv select { font: inherit; }
        .pcv button { cursor: pointer; }
        .pcv-header {
          height: 78px; padding: 0 5.2%; display: flex; align-items: center; justify-content: space-between;
          border-bottom: 1px solid var(--line); background: rgba(248,247,241,.94); position: relative; z-index: 2;
        }
        .pcv-brand { color: var(--ink); text-decoration: none; display: inline-flex; align-items: center; gap: 9px; font-family: Manrope, sans-serif; font-size: 20px; font-weight: 800; letter-spacing: -.07em; }
        .pcv-brand-mark { width: 25px; height: 25px; border-radius: 8px 8px 8px 2px; background: var(--coral); color: #fff9f1; display: grid; place-items: center; font-size: 14px; letter-spacing: 0; }
        .pcv-nav { display: flex; gap: 25px; align-items: center; }
        .pcv-nav a { color: var(--muted); text-decoration: none; font-size: 12px; }
        .pcv-nav a:hover { color: var(--coral); }
        .pcv-header-cta, .pcv-primary { border: 0; border-radius: 999px; background: var(--ink); color: #f9f7ed; font-weight: 700; }
        .pcv-header-cta { padding: 12px 18px; font-size: 12px; }
        .pcv-header-cta:hover, .pcv-primary:hover { background: var(--coral); }
        .pcv-hero { display: grid; grid-template-columns: minmax(0, .92fr) minmax(420px, 1.08fr); min-height: 625px; }
        .pcv-hero-copy { padding: 80px 7% 72px 11%; display: flex; flex-direction: column; justify-content: center; position: relative; }
        .pcv-eyebrow { color: var(--sage-deep); font-size: 11px; font-weight: 800; letter-spacing: .15em; text-transform: uppercase; display: inline-flex; align-items: center; gap: 9px; }
        .pcv-eyebrow::before { content: ""; width: 29px; height: 1px; background: var(--coral); }
        .pcv h1, .pcv h2, .pcv h3 { font-family: Manrope, sans-serif; letter-spacing: -.075em; }
        .pcv h1 { max-width: 600px; margin: 22px 0 0; font-size: clamp(43px, 5.7vw, 78px); line-height: .96; font-weight: 700; }
        .pcv h1 em { color: var(--coral); font-style: normal; }
        .pcv-hero-lede { max-width: 480px; margin: 27px 0 0; color: var(--muted); font-size: 17px; line-height: 1.6; }
        .pcv-actions { display: flex; align-items: center; gap: 14px; margin-top: 31px; flex-wrap: wrap; }
        .pcv-primary { padding: 15px 21px; display: inline-flex; align-items: center; gap: 12px; }
        .pcv-secondary { border: 0; color: var(--ink); background: transparent; padding: 12px 4px; font-weight: 700; display: inline-flex; align-items: center; gap: 8px; }
        .pcv-secondary:hover { color: var(--coral); }
        .pcv-arrow { width: 17px; height: 17px; transition: transform .2s ease; }
        .pcv-arrow-down { transform: rotate(90deg); }
        .pcv-primary:hover .pcv-arrow { transform: translate(2px, -2px); }
        .pcv-credentials { display: flex; gap: 19px; align-items: center; margin-top: 50px; color: var(--muted); font-size: 11px; }
        .pcv-credential { display: flex; gap: 7px; align-items: center; }
        .pcv-credential + .pcv-credential { padding-left: 19px; border-left: 1px solid var(--line); }
        .pcv-check { color: var(--sage-deep); width: 17px; height: 17px; flex: 0 0 auto; }
        .pcv-hero-art { padding: 31px 5.2% 31px 0; background: var(--sage); position: relative; display: grid; grid-template-columns: 1.17fr .83fr; gap: 14px; }
        .pcv-hero-photo { min-height: 560px; width: 100%; height: 100%; object-fit: cover; border-radius: 3px 34px 3px 34px; filter: saturate(.78); }
        .pcv-art-side { display: grid; grid-template-rows: 1fr 1fr; gap: 14px; }
        .pcv-side-photo { width: 100%; height: 100%; min-height: 0; object-fit: cover; border-radius: 30px 3px 30px 3px; filter: saturate(.78); }
        .pcv-trust-stamp { position: absolute; width: 116px; height: 116px; bottom: 80px; left: -41px; border-radius: 50%; background: var(--coral); color: #fff7ed; display: grid; place-items: center; text-align: center; padding: 22px; font-family: Manrope, sans-serif; font-size: 11px; line-height: 1.2; font-weight: 800; transform: rotate(-9deg); }
        .pcv-trust-stamp span { display: block; font-size: 20px; margin-bottom: 4px; }
        .pcv-proof { background: var(--ink); color: #f6f4e9; display: grid; grid-template-columns: .85fr 1.15fr; gap: 50px; padding: 65px 11%; }
        .pcv-proof h2 { margin: 0; max-width: 380px; font-size: clamp(28px, 3.4vw, 46px); line-height: 1.02; font-weight: 600; }
        .pcv-proof h2 span { color: #ec9a77; }
        .pcv-proof-copy { color: #b9c9c3; line-height: 1.65; font-size: 14px; margin: 0 0 24px; }
        .pcv-safety-link { display: inline-flex; align-items: center; gap: 8px; color: #f7d3be; border: 0; background: transparent; padding: 0; font-size: 13px; font-weight: 700; }
        .pcv-safety-link:hover { color: #fff; }
        .pcv-safety-panel { margin-top: 18px; padding: 14px 16px; border-left: 2px solid var(--coral); background: rgba(255,255,255,.07); color: #d2ddd7; font-size: 12px; line-height: 1.55; }
        .pcv-proof-list { display: grid; gap: 22px; }
        .pcv-proof-item { display: grid; grid-template-columns: 33px 1fr; gap: 16px; align-items: start; }
        .pcv-proof-number { color: #ec9a77; font-family: Manrope, sans-serif; font-size: 13px; font-weight: 800; padding-top: 3px; }
        .pcv-proof-item h3 { margin: 0; font-size: 18px; letter-spacing: -.04em; font-weight: 600; }
        .pcv-proof-item p { margin: 6px 0 0; max-width: 420px; color: #9fb4ac; font-size: 13px; line-height: 1.5; }
        .pcv-pathway { padding: 86px 11%; background: var(--warm); }
        .pcv-section-kicker { color: var(--coral); font-size: 11px; font-weight: 800; letter-spacing: .15em; text-transform: uppercase; }
        .pcv-section-heading { margin: 13px 0 0; max-width: 580px; font-size: clamp(32px, 4vw, 53px); line-height: .99; font-weight: 600; }
        .pcv-path-grid { margin-top: 50px; display: grid; grid-template-columns: 1.15fr .9fr .9fr; gap: 0; }
        .pcv-path-card { padding: 27px 27px 26px 0; border-top: 1px solid #c7d0c7; min-height: 205px; }
        .pcv-path-card + .pcv-path-card { padding-left: 27px; border-left: 1px solid #c7d0c7; }
        .pcv-path-index { color: var(--coral); font-family: Manrope, sans-serif; font-weight: 800; font-size: 12px; }
        .pcv-path-card h3 { margin: 25px 0 0; font-size: 21px; letter-spacing: -.05em; }
        .pcv-path-card p { max-width: 245px; color: var(--muted); line-height: 1.5; font-size: 13px; margin: 9px 0 0; }
        .pcv-team { padding: 90px 11%; display: grid; grid-template-columns: .82fr 1.18fr; gap: 9%; background: var(--paper); align-items: center; }
        .pcv-team-img { width: 100%; aspect-ratio: 1 / 1.08; object-fit: cover; border-radius: 50% 4px 50% 4px; filter: saturate(.72); }
        .pcv-team-copy h2 { max-width: 530px; margin: 14px 0 0; font-size: clamp(32px, 4.1vw, 56px); line-height: .98; font-weight: 600; }
        .pcv-team-copy p { max-width: 465px; margin: 22px 0 0; color: var(--muted); font-size: 15px; line-height: 1.65; }
        .pcv-quote { margin-top: 28px; padding: 21px 0 0 21px; border-left: 2px solid var(--coral); color: var(--ink); font-family: Manrope, sans-serif; font-size: 17px; line-height: 1.35; letter-spacing: -.035em; }
        .pcv-quote cite { display: block; margin-top: 10px; color: var(--muted); font-family: "DM Sans", sans-serif; font-size: 11px; font-style: normal; letter-spacing: .02em; }
        .pcv-options { padding: 76px 11% 86px; background: #e6eee7; }
        .pcv-options-head { display: flex; justify-content: space-between; gap: 30px; align-items: end; }
        .pcv-options-head p { color: var(--muted); max-width: 280px; font-size: 13px; line-height: 1.55; margin: 0; }
        .pcv-option-grid { display: grid; grid-template-columns: 1.3fr .7fr; gap: 15px; margin-top: 37px; }
        .pcv-option { padding: 28px; background: var(--paper); border: 1px solid #d3dfd5; min-height: 185px; position: relative; }
        .pcv-option:first-child { background: var(--ink); color: #f8f5ea; }
        .pcv-option h3 { margin: 0; font-size: 24px; font-weight: 600; letter-spacing: -.05em; }
        .pcv-option p { max-width: 420px; margin: 12px 0 0; color: var(--muted); font-size: 13px; line-height: 1.5; }
        .pcv-option:first-child p { color: #b8c8bf; }
        .pcv-option button { position: absolute; right: 25px; bottom: 24px; border: 0; background: transparent; color: var(--coral); font-size: 12px; font-weight: 800; display: flex; align-items: center; gap: 7px; }
        .pcv-option:first-child button { color: #f2b092; }
        .pcv-faq { padding: 83px 11%; display: grid; grid-template-columns: .75fr 1.25fr; gap: 10%; background: var(--paper); }
        .pcv-faq h2 { margin: 13px 0 0; font-size: clamp(31px, 3.5vw, 47px); line-height: 1; font-weight: 600; }
        .pcv-faq-list { border-top: 1px solid var(--line); }
        .pcv-faq-item { border-bottom: 1px solid var(--line); }
        .pcv-faq-q { width: 100%; padding: 19px 0; display: flex; justify-content: space-between; gap: 20px; text-align: left; border: 0; background: transparent; color: var(--ink); font-weight: 700; font-size: 14px; }
        .pcv-faq-q span:last-child { color: var(--coral); font-size: 21px; line-height: 14px; font-weight: 400; }
        .pcv-faq-a { margin: -3px 35px 17px 0; color: var(--muted); font-size: 13px; line-height: 1.55; }
        .pcv-footer { padding: 30px 5.2%; border-top: 1px solid var(--line); display: flex; justify-content: space-between; align-items: center; color: var(--muted); font-size: 11px; }
        .pcv-footer strong { color: var(--ink); font-family: Manrope, sans-serif; font-size: 15px; letter-spacing: -.06em; }
        .pcv-modal-backdrop { position: fixed; inset: 0; z-index: 10; display: grid; place-items: center; padding: 20px; background: rgba(23,42,53,.56); }
        .pcv-modal { width: min(500px, 100%); max-height: calc(100dvh - 40px); overflow: auto; padding: 31px; background: var(--paper); border-radius: 4px 26px 4px 26px; box-shadow: 0 24px 70px rgba(15,30,37,.24); position: relative; }
        .pcv-modal-close { position: absolute; top: 18px; right: 20px; border: 0; background: transparent; color: var(--muted); font-size: 21px; }
        .pcv-modal h2 { margin: 12px 35px 0 0; font-size: 31px; line-height: 1; font-weight: 600; }
        .pcv-modal-lede { color: var(--muted); font-size: 13px; line-height: 1.5; margin: 14px 0 23px; }
        .pcv-form { display: grid; gap: 13px; }
        .pcv-form label { display: grid; gap: 6px; color: var(--muted); font-size: 11px; font-weight: 700; }
        .pcv-form input, .pcv-form select { border: 1px solid var(--line); border-radius: 2px 10px 2px 10px; padding: 12px 13px; background: #fffdf7; color: var(--ink); outline: 0; font-size: 13px; }
        .pcv-form input:focus, .pcv-form select:focus { border-color: var(--coral); }
        .pcv-form .pcv-primary { justify-content: center; margin-top: 4px; }
        .pcv-form-error { color: #b64732; margin: 0; font-size: 12px; }
        .pcv-success { padding: 17px 0 6px; }
        .pcv-success-mark { width: 40px; height: 40px; border-radius: 50%; background: var(--sage); color: var(--sage-deep); display: grid; place-items: center; }
        .pcv-success h3 { margin: 18px 0 8px; font-size: 27px; line-height: 1; }
        .pcv-success p { color: var(--muted); font-size: 13px; line-height: 1.55; }
        @media (max-width: 900px) {
          .pcv-nav { gap: 13px; }
          .pcv-nav a:nth-child(n+4) { display: none; }
          .pcv-hero { grid-template-columns: 1fr; }
          .pcv-hero-copy { padding: 65px 8%; }
          .pcv-hero-art { padding: 0 8% 45px; }
          .pcv-hero-photo { min-height: 420px; }
          .pcv-proof, .pcv-team, .pcv-faq { padding-left: 8%; padding-right: 8%; }
          .pcv-pathway, .pcv-options { padding-left: 8%; padding-right: 8%; }
        }
        @media (max-width: 640px) {
          .pcv-header { height: 64px; padding: 0 6%; }
          .pcv-nav { display: none; }
          .pcv-header-cta { padding: 10px 14px; }
          .pcv-hero-copy { padding: 57px 7% 52px; }
          .pcv h1 { font-size: clamp(42px, 13vw, 62px); }
          .pcv-hero-lede { font-size: 15px; }
          .pcv-credentials { gap: 11px; margin-top: 38px; align-items: start; }
          .pcv-credential { align-items: start; }
          .pcv-credential + .pcv-credential { padding-left: 11px; }
          .pcv-hero-art { padding: 0 7% 31px; grid-template-columns: 1fr; }
          .pcv-hero-photo { min-height: 350px; border-radius: 3px 27px 3px 27px; }
          .pcv-art-side { grid-template-columns: 1fr 1fr; grid-template-rows: 155px; }
          .pcv-trust-stamp { width: 94px; height: 94px; left: auto; right: 5%; bottom: 175px; padding: 15px; font-size: 9px; }
          .pcv-trust-stamp span { font-size: 16px; }
          .pcv-proof { display: block; padding-top: 54px; padding-bottom: 56px; }
          .pcv-proof-list { margin-top: 43px; }
          .pcv-pathway, .pcv-options, .pcv-team, .pcv-faq { padding-top: 59px; padding-bottom: 61px; }
          .pcv-path-grid, .pcv-option-grid { grid-template-columns: 1fr; margin-top: 33px; }
          .pcv-path-card { min-height: 0; padding: 21px 0; }
          .pcv-path-card + .pcv-path-card { padding-left: 0; border-left: 0; }
          .pcv-path-card h3 { margin-top: 17px; }
          .pcv-team { display: flex; flex-direction: column; gap: 40px; }
          .pcv-team-img { width: 76%; align-self: center; }
          .pcv-options-head { display: block; }
          .pcv-options-head p { margin-top: 14px; }
          .pcv-option { min-height: 175px; }
          .pcv-faq { display: block; }
          .pcv-faq-list { margin-top: 36px; }
          .pcv-footer { padding: 25px 7%; align-items: start; gap: 15px; flex-direction: column; }
          .pcv-modal { padding: 26px 21px; }
        }
      `}</style>

      <header className="pcv-header">
        <a className="pcv-brand" href="#top" aria-label="PocketPill home">
          <span className="pcv-brand-mark">+</span>
          PocketPill
        </a>
        <nav className="pcv-nav" aria-label="Main navigation">
          <a href="#care">Our care</a>
          <a href="#safety">Safety</a>
          <a href="#pharmacists">Pharmacists</a>
          <a href="#options">Care options</a>
        </nav>
        <button className="pcv-header-cta" onClick={() => openConsult()}>Talk to a pharmacist</button>
      </header>

      <main id="top">
        <section className="pcv-hero" aria-labelledby="hero-title">
          <div className="pcv-hero-copy">
            <div className="pcv-eyebrow">Care before capsules</div>
            <h1 id="hero-title">A pharmacist who <em>listens</em> first.</h1>
            <p className="pcv-hero-lede">Private men&apos;s health support that starts with a proper conversation — your symptoms, your medicines, your peace of mind.</p>
            <div className="pcv-actions">
              <button className="pcv-primary" onClick={() => openConsult("I would like a private pharmacist consultation")}>Start a private consultation <Arrow /></button>
              <a className="pcv-secondary" href="#care">See how care works <Arrow direction="down" /></a>
            </div>
            <div className="pcv-credentials" aria-label="PocketPill commitments">
              <span className="pcv-credential"><Check /> Registered pharmacists</span>
              <span className="pcv-credential"><Check /> Private by design</span>
            </div>
          </div>
          <div className="pcv-hero-art" aria-label="Pharmacist care at PocketPill">
            <img className="pcv-hero-photo" src={image("care-team.jpg")} alt="Pharmacist speaking with a patient in a bright consultation room" />
            <div className="pcv-art-side">
              <img className="pcv-side-photo" src={image("pharmacist.jpg")} alt="PocketPill pharmacist reviewing a patient's answers" />
              <img className="pcv-side-photo" src={image("hero.jpg")} alt="Patient using a phone for a private health conversation" />
            </div>
            <div className="pcv-trust-stamp"><div><span>01:01</span>average first reply from our care team</div></div>
          </div>
        </section>

        <section className="pcv-proof" id="safety" aria-labelledby="proof-title">
          <div>
            <h2 id="proof-title">Good treatment starts with <span>good questions.</span></h2>
            <p className="pcv-proof-copy">We do more than match a symptom to a product. We check the context around it, explain your options plainly, and know when another clinician should be involved.</p>
            <button className="pcv-safety-link" onClick={() => setSafetyOpen((open) => !open)}><Shield /> {safetyOpen ? "Hide our safety promise" : "Read our safety promise"} <Arrow direction="down" /></button>
            {safetyOpen && <div className="pcv-safety-panel">Every consultation includes a medicines and health check. We will never recommend a treatment if the information you share suggests it may be unsafe, and we will tell you exactly what to do next.</div>}
          </div>
          <div className="pcv-proof-list">
            {[
              ["01", "A real clinical conversation", "Tell us what is happening in your own words. No rushed tick-box diagnosis."],
              ["02", "A safety check that means something", "We consider blood pressure, heart health, current medication, and the details that change the advice."],
              ["03", "Confidence in your next step", "You leave knowing what you are taking, why it may help, and when to speak to a doctor."],
            ].map(([number, title, body]) => (
              <article className="pcv-proof-item" key={number}>
                <div className="pcv-proof-number">{number}</div>
                <div><h3>{title}</h3><p>{body}</p></div>
              </article>
            ))}
          </div>
        </section>

        <section className="pcv-pathway" id="care" aria-labelledby="path-title">
          <div className="pcv-section-kicker">The PocketPill pathway</div>
          <h2 id="path-title" className="pcv-section-heading">Care that keeps you in the conversation.</h2>
          <div className="pcv-path-grid">
            {[
              ["01", "Tell us what is going on", "Start in a private chat at a time that suits you. There is no waiting room and no awkward handover."],
              ["02", "Get considered advice", "A pharmacist reviews your answers, asks the useful follow-ups, and talks through treatment honestly."],
              ["03", "Keep your confidence", "If treatment is suitable, we arrange the next step discreetly — with support after, not silence."],
            ].map(([number, title, body]) => (
              <article className="pcv-path-card" key={number}>
                <div className="pcv-path-index">{number}</div>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="pcv-team" id="pharmacists" aria-labelledby="team-title">
          <img className="pcv-team-img" src={image("performance.jpg")} alt="Friendly PocketPill pharmacist ready for a private consultation" />
          <div className="pcv-team-copy">
            <div className="pcv-section-kicker">People, not algorithms</div>
            <h2 id="team-title">The calm voice on the other side of the chat.</h2>
            <p>Our pharmacists are trained to talk about sensitive health concerns without judgement or jargon. They will be direct when something needs attention, and patient when you need a moment.</p>
            <blockquote className="pcv-quote">&quot;I finally understood what was safe for me — not just what was available.&quot;<cite>— PocketPill patient, anonymous by choice</cite></blockquote>
            <div className="pcv-actions"><button className="pcv-primary" onClick={() => openConsult("I want to speak with the care team")}>Meet the care team <Arrow /></button></div>
          </div>
        </section>

        <section className="pcv-options" id="options" aria-labelledby="options-title">
          <div className="pcv-options-head">
            <div><div className="pcv-section-kicker">When you are ready</div><h2 id="options-title" className="pcv-section-heading">Treatment, explained without the hard sell.</h2></div>
            <p>Start with care. Explore options only after you know what makes sense for your health.</p>
          </div>
          <div className="pcv-option-grid">
            <article className="pcv-option">
              <h3>Private pharmacist consultation</h3>
              <p>A considered review for erectile dysfunction, premature ejaculation, and the questions you have been putting off.</p>
              <button onClick={() => openConsult("I would like to book a pharmacist consultation")}>Book a consultation <Arrow /></button>
            </article>
            <article className="pcv-option">
              <h3>Explore treatment options</h3>
              <p>See what may be suitable after your safety check. Clear prices, no bundles you do not need.</p>
              <button onClick={() => openConsult("I would like to understand my treatment options")}>Ask what fits <Arrow /></button>
            </article>
          </div>
        </section>

        <section className="pcv-faq" aria-labelledby="faq-title">
          <div><div className="pcv-section-kicker">Still wondering?</div><h2 id="faq-title">Straight answers for a sensitive subject.</h2></div>
          <div className="pcv-faq-list">
            {questions.map(([question, answer], index) => (
              <article className="pcv-faq-item" key={question}>
                <button className="pcv-faq-q" onClick={() => setQuestionOpen(questionOpen === index ? null : index)} aria-expanded={questionOpen === index}>
                  <span>{question}</span><span>{questionOpen === index ? "−" : "+"}</span>
                </button>
                {questionOpen === index && <p className="pcv-faq-a">{answer}</p>}
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="pcv-footer"><strong>PocketPill</strong><span>Private care for the questions that matter.</span><span>© 2024 PocketPill Health</span></footer>

      {modalOpen && (
        <div className="pcv-modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setModalOpen(false); }}>
          <section className="pcv-modal" role="dialog" aria-modal="true" aria-labelledby="consult-title">
            <button className="pcv-modal-close" onClick={() => setModalOpen(false)} aria-label="Close consultation form">×</button>
            {consultState === "success" ? (
              <div className="pcv-success">
                <div className="pcv-success-mark"><Check /></div>
                <h3>We&apos;ll take it from here.</h3>
                <p>Thanks, {form.name}. A member of the PocketPill care team will reach you privately at {form.contact} to arrange a good time.</p>
                <button className="pcv-primary" onClick={() => setModalOpen(false)}>Close</button>
              </div>
            ) : (
              <>
                <div className="pcv-section-kicker">A private first step</div>
                <h2 id="consult-title">Talk to a pharmacist.</h2>
                <p className="pcv-modal-lede">Leave a few details and our care team will reply privately. No payment is taken here.</p>
                <form className="pcv-form" onSubmit={submitConsult}>
                  <label>Your name<input value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} placeholder="What should we call you?" autoComplete="name" /></label>
                  <label>WhatsApp number or email<input value={form.contact} onChange={(event) => setForm({ ...form, contact: event.target.value })} placeholder="Where should we reach you?" autoComplete="email" /></label>
                  <label>What would you like help with?<select value={form.concern} onChange={(event) => setForm({ ...form, concern: event.target.value })}><option>I have a question about my symptoms</option><option>I would like a private pharmacist consultation</option><option>I would like to understand my treatment options</option><option>I want to speak with the care team</option></select></label>
                  {consultState === "error" && <p className="pcv-form-error">Please add your name and a WhatsApp number or email so we can reply.</p>}
                  <button className="pcv-primary" type="submit" disabled={consultState === "sending"}>{consultState === "sending" ? "Sending securely…" : "Request a private reply"} <Arrow /></button>
                </form>
              </>
            )}
          </section>
        </div>
      )}
    </div>
  );
}