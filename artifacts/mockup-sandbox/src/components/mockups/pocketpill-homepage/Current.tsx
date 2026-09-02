import "./_group.css";

const image = (name: string) => `/__mockup/images/pocketpill-current/${name}`;

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export function Current() {
  return (
    <div style={{ minHeight: "100vh", background: "#fffefa", color: "#101d19" }}>
      <header style={{ display: "flex", height: 72, alignItems: "center", justifyContent: "space-between", padding: "0 5%", borderBottom: "1px solid #e7e8e1" }}>
        <strong style={{ fontFamily: "Manrope", fontSize: 22, letterSpacing: "-.06em" }}>PocketPill</strong>
        <nav style={{ display: "flex", gap: 26, color: "#6b746e", fontSize: 13 }}>
          <span>Services</span><span>Shop</span><span>How it works</span><span>Pricing</span><span>About</span><span>Contact</span>
        </nav>
        <button style={{ border: 0, borderRadius: 999, background: "#121614", color: "white", padding: "12px 18px", fontWeight: 700 }}>Book a visit</button>
      </header>
      <main>
        <section style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 50, alignItems: "center", minHeight: 650, padding: "72px 5%", background: "linear-gradient(125deg, #fffefa 0%, #fffefa 58%, #fdf2e8 58%)" }}>
          <div>
            <span style={{ display: "inline-block", borderRadius: 999, background: "#fff0e5", padding: "9px 14px", color: "#bb4f16", fontSize: 11, fontWeight: 800, letterSpacing: ".12em", textTransform: "uppercase" }}>A better way to ask</span>
            <h1 style={{ margin: "24px 0 0", maxWidth: 560, fontFamily: "Manrope", fontSize: "clamp(42px, 5vw, 72px)", lineHeight: .98, letterSpacing: "-.075em" }}>
              <span style={{ color: "#ed5b15" }}>Private men's health care</span> for stronger, longer, calmer sex.
            </h1>
            <p style={{ maxWidth: 470, margin: "25px 0 0", color: "#68716c", fontSize: 17, lineHeight: 1.6 }}>Pharmacist-led consultations for erectile dysfunction and premature ejaculation — on WhatsApp, for men across West Africa and the diaspora.</p>
            <div style={{ display: "flex", gap: 12, marginTop: 30 }}>
              <button style={{ border: 0, borderRadius: 999, background: "#ed5b15", color: "white", padding: "15px 23px", fontWeight: 700 }}>Start on WhatsApp <Arrow /></button>
              <button style={{ border: "1px solid #d9dcd4", borderRadius: 999, background: "white", padding: "15px 23px", fontWeight: 700 }}>See pricing</button>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1.1fr .9fr", gap: 14, height: 470 }}>
            <img src={image("hero.jpg")} alt="Man starting a private consultation" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 28 }} />
            <div style={{ display: "grid", gap: 14, gridTemplateRows: "1fr 1fr" }}>
              <img src={image("pharmacist.jpg")} alt="Pharmacist reviewing answers" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 28 }} />
              <img src={image("products.jpg")} alt="Medication products" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 28 }} />
            </div>
          </div>
        </section>
        <section style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16, padding: "52px 5%", background: "#f5f4ef" }}>
          {[
            ["Discreet by design", "One private thread. No waiting room, front desk, or awkward handover."],
            ["Medication expertise", "Clear explanations of treatment options, safety, and interactions."],
            ["Root-cause guidance", "Practical advice with referral when a prescriber is needed."],
          ].map(([title, body]) => (
            <article key={title} style={{ padding: 22, borderRadius: 22, background: "white" }}>
              <h2 style={{ margin: 0, fontFamily: "Manrope", fontSize: 20, letterSpacing: "-.04em" }}>{title}</h2>
              <p style={{ margin: "10px 0 0", color: "#68716c", lineHeight: 1.5 }}>{body}</p>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}