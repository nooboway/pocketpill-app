import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Check, ArrowRight, Shield, Activity, Brain, Zap, Heart, ChevronRight } from "lucide-react";

const FADE_UP = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] } },
};

const STAGGER = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const TOPICS = [
  { icon: <Activity className="w-5 h-5" />, title: "Lifestyle & Performance", desc: "How sleep, stress, and diet affect your sexual health — practical and evidence-based." },
  { icon: <Brain className="w-5 h-5" />, title: "The Psychology of ED", desc: "Understanding performance anxiety, the stress cycle, and how to break it quietly." },
  { icon: <Zap className="w-5 h-5" />, title: "Medication Clarity", desc: "Plain-language breakdowns of common treatments — what works, what doesn't, and why." },
  { icon: <Heart className="w-5 h-5" />, title: "Relationships & Intimacy", desc: "Navigating conversations with partners and reclaiming confidence in the bedroom." },
  { icon: <Shield className="w-5 h-5" />, title: "Prevention & Maintenance", desc: "Build habits now that protect your sexual health for years to come." },
  { icon: <Mail className="w-5 h-5" />, title: "Ask the Pharmacist", desc: "Subscriber-only Q&A. Your questions answered privately in each issue." },
];

export default function NewsletterPage() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    if (!email || !email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/newsletter/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim(), name: name.trim() || undefined }),
      });
      if (res.status === 409) {
        setSubmitted(true);
        return;
      }
      if (!res.ok) {
        const data = await res.json().catch(() => ({})) as { message?: string };
        setError(data.message ?? "Something went wrong. Please try again.");
        return;
      }
      setSubmitted(true);
    } catch {
      setError("Network error — please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-[100dvh] bg-background flex flex-col selection:bg-primary/30">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/40 py-4" aria-label="Site navigation">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl flex justify-between items-center">
          <a href="/" className="font-serif text-xl tracking-wide text-foreground">
            Pocket<span className="text-primary italic">pill</span>
          </a>
          <a href="/" className="flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors">
            <ChevronRight className="w-3.5 h-3.5 rotate-180" aria-hidden="true" />
            <span>Back to site</span>
          </a>
        </div>
      </nav>

      <main className="flex-1 pt-32 pb-24">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

            {/* Left — copy */}
            <motion.div initial="hidden" animate="visible" variants={STAGGER}>
              <motion.div variants={FADE_UP} className="flex items-center gap-3 mb-8">
                <div className="w-8 h-[1px] bg-primary" aria-hidden="true" />
                <span className="text-xs tracking-[0.2em] uppercase text-primary font-medium">Free newsletter</span>
              </motion.div>

              <motion.h1 variants={FADE_UP} className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-8">
                Better health.<br />
                <em className="text-primary italic">Stronger living.</em>
              </motion.h1>

              <motion.p variants={FADE_UP} className="text-muted-foreground text-lg leading-relaxed mb-12 max-w-lg">
                A private newsletter for men who want to understand their health without judgment. No spam. One issue per week. Unsubscribe any time.
              </motion.p>

              <motion.div variants={STAGGER} className="grid grid-cols-1 sm:grid-cols-2 gap-4" role="list" aria-label="Newsletter topics">
                {TOPICS.map((topic, i) => (
                  <motion.div key={i} variants={FADE_UP} role="listitem" className="flex items-start gap-4 p-4 border border-border/30 rounded-sm hover:border-primary/20 transition-colors bg-card/20">
                    <span className="text-primary/70 mt-0.5 shrink-0" aria-hidden="true">{topic.icon}</span>
                    <div>
                      <div className="text-sm font-medium text-foreground/90 mb-0.5">{topic.title}</div>
                      <div className="text-xs text-muted-foreground leading-relaxed">{topic.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right — form */}
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="lg:sticky lg:top-32">
              <div className="relative">
                <div className="absolute -inset-4 bg-primary/5 border border-primary/10 rounded-sm transform translate-x-4 translate-y-4" aria-hidden="true" />
                <div className="relative bg-card border border-border/50 rounded-sm p-8 md:p-10 z-10">
                  {!submitted ? (
                    <>
                      <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mb-6" aria-hidden="true">
                        <Mail className="w-5 h-5 text-primary" strokeWidth={1.5} />
                      </div>

                      <h2 className="font-serif text-2xl md:text-3xl mb-2">Join the newsletter</h2>
                      <p className="text-muted-foreground text-sm mb-8">Weekly health tips, delivered privately to your inbox. Free forever.</p>

                      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                        <div>
                          <label htmlFor="newsletter-name" className="block text-xs uppercase tracking-wider font-medium text-foreground/70 mb-2">
                            First name <span className="text-muted-foreground/50 normal-case tracking-normal">(optional)</span>
                          </label>
                          <input
                            id="newsletter-name"
                            type="text"
                            placeholder="e.g. Tunde"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            autoComplete="given-name"
                            className="w-full bg-background border border-border/50 focus:border-primary/50 rounded-sm px-4 py-3.5 text-foreground placeholder:text-muted-foreground/40 focus:outline-none transition-colors text-sm"
                          />
                        </div>

                        <div>
                          <label htmlFor="newsletter-email" className="block text-xs uppercase tracking-wider font-medium text-foreground/70 mb-2">Email address</label>
                          <input
                            id="newsletter-email"
                            type="email"
                            placeholder="you@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            autoComplete="email"
                            aria-describedby={error ? "newsletter-error" : undefined}
                            aria-invalid={!!error}
                            className={`w-full bg-background border ${error ? "border-destructive/60" : "border-border/50 focus:border-primary/50"} rounded-sm px-4 py-3.5 text-foreground placeholder:text-muted-foreground/40 focus:outline-none transition-colors text-sm`}
                            required
                          />
                          {error && <p id="newsletter-error" role="alert" className="text-xs text-destructive/80 mt-1.5">{error}</p>}
                        </div>

                        <button
                          type="submit"
                          disabled={loading}
                          aria-busy={loading}
                          className="group w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 disabled:opacity-60 text-primary-foreground py-4 rounded-sm font-medium tracking-wide transition-all"
                        >
                          {loading ? (
                            <span className="flex items-center gap-2">
                              <span className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" aria-hidden="true" />
                              <span>Subscribing…</span>
                            </span>
                          ) : (
                            <>
                              <span>Subscribe — it's free</span>
                              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
                            </>
                          )}
                        </button>
                      </form>

                      <div className="mt-6 flex items-center gap-2 text-xs text-muted-foreground/60">
                        <Shield className="w-3.5 h-3.5 text-primary/50 shrink-0" strokeWidth={1.5} aria-hidden="true" />
                        <span>No spam. No sharing your data. Unsubscribe with one click, any time.</span>
                      </div>
                    </>
                  ) : (
                    <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4 }} className="text-center py-6" role="status" aria-live="polite">
                      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 200, damping: 15 }} className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 border border-primary/30 mb-6" aria-hidden="true">
                        <Check className="w-7 h-7 text-primary" strokeWidth={1.5} />
                      </motion.div>
                      <h3 className="font-serif text-2xl mb-3">You're in{name ? `, ${name.split(" ")[0]}` : ""}.</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">
                        Your first issue will arrive soon. In the meantime, your information is safe and will never be shared.
                      </p>
                      <div className="mt-8 space-y-3">
                        <a href="/" className="flex items-center justify-center gap-2 text-sm text-foreground/80 hover:text-foreground transition-colors">
                          <ChevronRight className="w-4 h-4 rotate-180" aria-hidden="true" />
                          Return to Pocketpill
                        </a>
                        <a href="/book" className="flex items-center justify-center gap-2 text-sm bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20 px-4 py-2.5 rounded-sm transition-colors">
                          Book a consultation
                          <ChevronRight className="w-4 h-4" aria-hidden="true" />
                        </a>
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}
