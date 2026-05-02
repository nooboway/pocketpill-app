import { motion } from "framer-motion";
import { MessageCircle, Shield, Clock, ChevronRight, Check, BookOpen, Copy, Lock, AlertTriangle, Globe, Mail, ArrowRight } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { useLang, useT, LANGUAGES } from "@/i18n/LanguageProvider";
import type { Translation } from "@/i18n/translations";

const WHATSAPP_URL = "https://wa.me/2348000000000";

const TRUST_ICONS = [
  <Clock className="w-5 h-5 text-primary" />,
  <Shield className="w-5 h-5 text-primary" />,
  <MessageCircle className="w-5 h-5 text-primary" />
];

const FADE_UP = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] } }
};

const STAGGER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

export default function Home() {
  return (
    <div className="min-h-[100dvh] flex flex-col selection:bg-primary/30">
      <Navbar />

      <main className="flex-1">
        <HeroSection />
        <TrustStrip />
        <NarrativeSection />
        <WhyPharmacistSection />
        <TestimonialsSection />
        <ScreenerSection />
        <PricingSection />
        <MonthlySupportSection />
        <ReadBeforeBookingSection />
        <FAQSection />
        <NewsletterSection />
        <ClosingCTASection />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

function FloatingWhatsApp() {
  const t = useT();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.floating.aria}
      initial={false}
      animate={{
        opacity: visible ? 1 : 0,
        y: visible ? 0 : 20,
        pointerEvents: visible ? "auto" : "none"
      }}
      transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
      className="group fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 flex items-center gap-3 bg-primary hover:bg-primary/90 text-primary-foreground pl-4 pr-5 py-3.5 rounded-full shadow-[0_10px_40px_-10px_rgba(0,0,0,0.6)] ring-1 ring-primary/40"
    >
      <span className="relative flex items-center justify-center w-9 h-9 rounded-full bg-primary-foreground/15">
        <span className="absolute inset-0 rounded-full bg-primary-foreground/20 animate-ping opacity-60" />
        <MessageCircle className="w-4 h-4 relative" />
      </span>
      <span className="text-xs md:text-sm font-medium tracking-widest uppercase">
        {t.floating.startPrivately}
      </span>
    </motion.a>
  );
}

function LanguageSwitcher() {
  const { lang, setLang, t } = useLang();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const current = LANGUAGES.find((l) => l.code === lang) ?? LANGUAGES[0];

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label={t.langSwitcher.label}
        aria-expanded={open}
        className="flex items-center gap-2 text-[11px] md:text-xs tracking-[0.2em] uppercase text-foreground/80 hover:text-primary transition-colors px-2.5 py-2 border border-border/40 hover:border-primary/40 rounded-sm"
      >
        <Globe className="w-3.5 h-3.5" strokeWidth={1.5} />
        <span>{current.short}</span>
      </button>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.15 }}
          className="absolute right-0 top-full mt-2 min-w-[160px] bg-background/95 backdrop-blur-md border border-border/60 rounded-sm shadow-lg z-50 overflow-hidden"
        >
          {LANGUAGES.map((l) => (
            <button
              key={l.code}
              type="button"
              onClick={() => {
                setLang(l.code);
                setOpen(false);
              }}
              className={`flex items-center justify-between w-full text-left px-4 py-2.5 text-xs tracking-wider transition-colors ${
                l.code === lang ? "bg-primary/10 text-primary" : "text-foreground/80 hover:bg-card/60 hover:text-foreground"
              }`}
            >
              <span>{l.label}</span>
              <span className="text-[10px] text-muted-foreground/70">{l.short}</span>
            </button>
          ))}
        </motion.div>
      )}
    </div>
  );
}

function Navbar() {
  const t = useT();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/90 backdrop-blur-md border-b border-white/5 py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center max-w-7xl">
        <a href="#" className="font-serif text-xl md:text-2xl tracking-wide text-foreground">
          Pocket<span className="text-primary italic">pill</span>
        </a>
        <div className="flex items-center gap-3 md:gap-4">
          <LanguageSwitcher />
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-[11px] md:text-sm font-medium tracking-widest uppercase bg-primary hover:bg-primary/90 text-primary-foreground px-4 md:px-5 py-2.5 rounded-sm transition-all duration-300"
          >
            <span>{t.nav.bookConsult}</span>
            <MessageCircle className="w-4 h-4 transition-transform group-hover:scale-110" />
          </a>
        </div>
      </div>
    </motion.nav>
  );
}

function HeroSection() {
  const t = useT();
  return (
    <section className="relative min-h-[95vh] flex items-center pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src="/hero-texture.png" alt="" fetchPriority="high" decoding="async" className="w-full h-full object-cover opacity-30 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-7xl">
        <motion.div initial="hidden" animate="visible" variants={STAGGER} className="max-w-4xl">
          <motion.div variants={FADE_UP} className="flex items-center gap-3 mb-8">
            <div className="w-8 h-[1px] bg-primary" />
            <span className="text-xs tracking-[0.2em] uppercase text-primary font-medium">
              {t.hero.kicker}
            </span>
          </motion.div>

          <motion.h1
            variants={FADE_UP}
            className="font-serif text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.05] tracking-tight mb-10 text-foreground"
          >
            {t.hero.headlinePre}<br className="hidden md:block" /> <em className="text-primary not-italic">{t.hero.headlineEm}</em>
          </motion.h1>

          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start md:items-end">
            <motion.p variants={FADE_UP} className="text-muted-foreground text-lg max-w-md leading-relaxed">
              {t.hero.body}
            </motion.p>

            <motion.div variants={FADE_UP} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-sm transition-all duration-300 font-medium tracking-wide"
              >
                <span>{t.hero.ctaPrimary}</span>
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#pricing"
                className="flex items-center justify-center px-8 py-4 border border-border/50 hover:border-primary/50 text-foreground hover:text-primary transition-colors duration-300 rounded-sm font-medium tracking-wide"
              >
                {t.hero.ctaSecondary}
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function TrustStrip() {
  const t = useT();
  return (
    <section className="border-y border-border/40 bg-card/30 backdrop-blur-sm relative z-20">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border/40">
          {t.trust.items.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="p-8 md:p-12 flex flex-col gap-4 group"
            >
              {TRUST_ICONS[i]}
              <div>
                <div className="font-serif text-3xl font-bold mb-2 group-hover:text-primary transition-colors">{stat.num}</div>
                <div className="text-sm text-muted-foreground leading-relaxed">{stat.desc}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function NarrativeSection() {
  const t = useT();
  return (
    <section className="py-24 md:py-40 relative">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={STAGGER} className="lg:col-span-7">
            <motion.div variants={FADE_UP} className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[1px] bg-primary" />
              <span className="text-xs tracking-[0.2em] uppercase text-primary font-medium">{t.narrative.kicker}</span>
            </motion.div>

            <motion.h2 variants={FADE_UP} className="font-serif text-4xl md:text-5xl leading-[1.1] mb-8">
              {t.narrative.headlinePre}<br /> <em className="text-primary italic">{t.narrative.headlineEm}</em>
            </motion.h2>

            <motion.div variants={FADE_UP} className="text-muted-foreground text-lg space-y-6 max-w-xl">
              {t.narrative.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, ease: "easeOut" }} className="lg:col-span-5">
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/5 border border-primary/10 rounded-sm transform translate-x-4 translate-y-4" />
              <div className="bg-card border border-border/50 p-10 md:p-14 relative rounded-sm z-10">
                <div className="text-primary font-serif text-6xl leading-none absolute -top-6 left-8">"</div>
                <p className="font-serif text-xl md:text-2xl italic leading-relaxed text-foreground mb-8 pt-4">
                  {t.narrative.quote}
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-[1px] bg-muted-foreground/30" />
                  <span className="text-sm text-muted-foreground">{t.narrative.quoteAttr}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function WhyPharmacistSection() {
  const t = useT();
  return (
    <section className="py-24 md:py-32 bg-card/20 border-y border-border/40">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={STAGGER} className="mb-16 md:mb-24 text-center">
          <motion.div variants={FADE_UP} className="flex justify-center items-center gap-3 mb-6">
            <span className="text-xs tracking-[0.2em] uppercase text-primary font-medium">{t.whyPharmacist.kicker}</span>
          </motion.div>
          <motion.h2 variants={FADE_UP} className="font-serif text-4xl md:text-5xl leading-[1.1]">
            {t.whyPharmacist.headlinePre} <br className="hidden sm:block" /><em className="text-primary italic">{t.whyPharmacist.headlineEm}</em>
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {t.whyPharmacist.pillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className={`p-8 lg:p-10 rounded-sm border transition-colors duration-500 hover:border-primary/30 ${
                idx === 1 ? "bg-card border-primary/20 shadow-[0_0_40px_-15px_rgba(224,92,42,0.1)]" : "bg-background border-border/40"
              }`}
            >
              <h3 className="text-xl font-medium mb-8 text-foreground">{pillar.title}</h3>
              <ul className="space-y-5">
                {pillar.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground text-sm leading-relaxed">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const TESTIMONIAL_META: { name: string; location: string; age?: number }[] = [
  { name: "Tunde A.", location: "Lagos", age: 34 },
  { name: "Michael O.", location: "Abuja" },
  { name: "K.", location: "London", age: 41 },
  { name: "Emeka N.", location: "Port Harcourt" },
  { name: "S.", location: "Ibadan" },
  { name: "Daniel A.", location: "Lagos", age: 38 },
  { name: "Olumide B.", location: "Lagos" },
  { name: "J.", location: "Manchester" },
  { name: "Chuka E.", location: "Toronto, Canada" },
  { name: "A.", location: "Abuja" }
];

function TestimonialsSection() {
  const t = useT();
  return (
    <section className="relative py-28 md:py-40 bg-background overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[140px]" />
      </div>

      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={STAGGER} className="max-w-3xl mb-20">
          <motion.div variants={FADE_UP} className="flex items-center gap-3 mb-6">
            <div className="w-8 h-[1px] bg-primary" />
            <span className="text-xs tracking-[0.2em] uppercase text-primary font-medium">{t.testimonials.kicker}</span>
          </motion.div>

          <motion.h2 variants={FADE_UP} className="font-serif text-4xl md:text-5xl leading-[1.1] mb-6">
            {t.testimonials.headlinePre}<br />
            <em className="text-primary italic">{t.testimonials.headlineEm}</em>
          </motion.h2>

          <motion.p variants={FADE_UP} className="text-muted-foreground text-lg max-w-xl">
            {t.testimonials.sub}
          </motion.p>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={STAGGER} className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border/40">
          {t.testimonials.items.map((item, i) => {
            const meta = TESTIMONIAL_META[i];
            return (
              <motion.figure
                key={i}
                variants={FADE_UP}
                className="group relative bg-background hover:bg-card/60 transition-colors duration-500 p-8 md:p-10 flex flex-col"
              >
                <div className="absolute top-6 right-8 font-serif text-5xl text-primary/20 leading-none select-none">"</div>
                <div className="mb-6">
                  <span className="text-[10px] tracking-[0.2em] uppercase text-primary/70 font-medium">
                    {t.testimonials.themes[item.themeKey as keyof typeof t.testimonials.themes]}
                  </span>
                </div>
                <blockquote className="font-serif text-lg md:text-[1.15rem] leading-relaxed text-foreground/90 italic mb-8 flex-1">
                  {item.quote}
                </blockquote>
                <figcaption className="flex items-center gap-3 pt-6 border-t border-border/40">
                  <div className="w-6 h-[1px] bg-primary/60" />
                  <div className="text-sm text-muted-foreground">
                    <span className="text-foreground/80 font-medium">{meta.name}</span>
                    <span className="text-muted-foreground/70">
                      {" · "}{meta.location}
                      {meta.age ? `, ${t.testimonials.ageLabel} ${meta.age}` : ""}
                    </span>
                  </div>
                </figcaption>
              </motion.figure>
            );
          })}
        </motion.div>

        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} className="text-xs text-muted-foreground/60 mt-10 max-w-2xl leading-relaxed">
          {t.testimonials.disclaimer}
        </motion.p>
      </div>
    </section>
  );
}

type ScreenerOption = { value: string; label: string; redFlag?: boolean };

function ScreenerSection() {
  const t = useT();
  const screener = t.screener;
  const questions = screener.questions;

  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, ScreenerOption>>({});
  const [copied, setCopied] = useState(false);

  const total = questions.length;
  const isResult = step >= total;
  const current = questions[step];
  const progress = isResult ? 100 : Math.round((step / total) * 100);

  const summary = useMemo(() => buildSummary(answers, screener.message.labels, screener.message.dash), [answers, screener]);
  const recommendation = useMemo(() => recommendTier(answers, screener.recommendations), [answers, screener]);
  const hasRedFlag = useMemo(() => Object.values(answers).some((a) => a?.redFlag), [answers]);

  const message = useMemo(() => {
    const m = screener.message;
    return [
      m.intro,
      "",
      m.summaryHeading,
      summary,
      "",
      `${m.goalPrefix} ${answers.goal?.label ?? m.dash}`,
      "",
      `${m.tierPrefix} ${recommendation.tier}.`
    ].join("\n");
  }, [summary, answers, recommendation, screener]);

  const whatsappLink = `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`;

  function pick(option: ScreenerOption) {
    if (!current) return;
    setAnswers((prev) => ({ ...prev, [current.id]: option }));
    setStep((s) => s + 1);
  }

  function reset() {
    setAnswers({});
    setStep(0);
    setCopied(false);
  }

  async function copyMessage() {
    try {
      await navigator.clipboard.writeText(message);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  }

  return (
    <section className="relative py-28 md:py-40 bg-card/40 border-y border-border/40 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-60">
        <div className="absolute top-1/3 -left-32 w-[460px] h-[460px] bg-primary/[0.05] rounded-full blur-[140px]" />
      </div>

      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={STAGGER} className="lg:col-span-5 lg:sticky lg:top-32">
            <motion.div variants={FADE_UP} className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[1px] bg-primary" />
              <span className="text-xs tracking-[0.2em] uppercase text-primary font-medium">{screener.kicker}</span>
            </motion.div>

            <motion.h2 variants={FADE_UP} className="font-serif text-4xl md:text-5xl leading-[1.05] mb-6">
              {screener.headlinePre}<br />
              <em className="text-primary italic">{screener.headlineEm}</em>
            </motion.h2>

            <motion.p variants={FADE_UP} className="text-muted-foreground text-base leading-relaxed mb-8 max-w-md">
              {screener.sub}
            </motion.p>

            <motion.div variants={FADE_UP} className="flex items-center gap-3 text-sm text-muted-foreground/80">
              <Lock className="w-4 h-4 text-primary/70" strokeWidth={1.5} />
              <span>{screener.privacyNote}</span>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }} className="lg:col-span-7">
            <div className="relative">
              <div className="absolute -inset-3 bg-primary/5 border border-primary/10 rounded-sm transform translate-x-3 translate-y-3" />
              <div className="relative bg-background border border-border/60 rounded-sm p-8 md:p-12 z-10 min-h-[460px] flex flex-col">
                <div className="flex items-center justify-between mb-8">
                  <span className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground">
                    {isResult ? screener.yourSummary : `${screener.questionLabel} ${step + 1} ${screener.of} ${total}`}
                  </span>
                  <span className="text-[11px] tracking-[0.2em] uppercase text-primary/70">{progress}%</span>
                </div>
                <div className="h-[2px] bg-border/60 mb-10 overflow-hidden">
                  <motion.div className="h-full bg-primary" initial={false} animate={{ width: `${progress}%` }} transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }} />
                </div>

                {!isResult && current && (
                  <motion.div key={current.id} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="flex-1 flex flex-col">
                    <h3 className="font-serif text-2xl md:text-[1.7rem] leading-snug text-foreground/95 mb-3">
                      {current.question}
                    </h3>
                    {current.helper && <p className="text-sm text-muted-foreground/80 mb-6">{current.helper}</p>}

                    <div className="grid gap-3 mt-2">
                      {current.options.map((opt) => (
                        <button
                          key={opt.value}
                          type="button"
                          onClick={() => pick(opt)}
                          className="group w-full text-left flex items-center justify-between gap-4 px-5 py-4 border border-border/50 hover:border-primary/40 hover:bg-primary/[0.04] rounded-sm transition-all duration-300"
                        >
                          <span className="text-foreground/90 text-[15px] md:text-base">{opt.label}</span>
                          <ChevronRight className="w-4 h-4 text-muted-foreground/50 group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
                        </button>
                      ))}
                    </div>

                    {step > 0 && (
                      <button type="button" onClick={() => setStep((s) => Math.max(0, s - 1))} className="mt-8 self-start text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground/80 transition-colors">
                        {screener.back}
                      </button>
                    )}
                  </motion.div>
                )}

                {isResult && (
                  <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="flex-1 flex flex-col">
                    <h3 className="font-serif text-2xl md:text-[1.7rem] leading-snug text-foreground/95 mb-3">{screener.resultTitle}</h3>
                    <p className="text-sm text-muted-foreground mb-6">{screener.resultSub}</p>

                    <div className="bg-card/60 border border-border/50 rounded-sm p-5 md:p-6 mb-5">
                      <pre className="font-sans text-[14px] leading-relaxed text-foreground/90 whitespace-pre-wrap">{message}</pre>
                    </div>

                    <div className="bg-primary/[0.06] border border-primary/20 rounded-sm p-5 mb-5">
                      <div className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-primary mt-1 shrink-0" strokeWidth={2} />
                        <div className="text-sm">
                          <div className="text-foreground/90 font-medium mb-1">{screener.suggestedLabel} {recommendation.tier}</div>
                          <div className="text-muted-foreground leading-relaxed">{recommendation.reason}</div>
                        </div>
                      </div>
                    </div>

                    {hasRedFlag && (
                      <div className="bg-destructive/[0.08] border border-destructive/20 rounded-sm p-5 mb-6">
                        <div className="flex items-start gap-3">
                          <AlertTriangle className="w-4 h-4 text-destructive mt-1 shrink-0" strokeWidth={2} />
                          <div className="text-sm">
                            <div className="text-foreground/90 font-medium mb-1">{screener.redFlagTitle}</div>
                            <div className="text-muted-foreground leading-relaxed">{screener.redFlagBody}</div>
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                      <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="group flex-1 inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-4 rounded-sm transition-colors text-xs md:text-sm font-medium tracking-widest uppercase">
                        <span>{screener.sendBtn}</span>
                        <MessageCircle className="w-4 h-4 transition-transform group-hover:scale-110" />
                      </a>
                      <button type="button" onClick={copyMessage} className="inline-flex items-center justify-center gap-2 border border-border/60 hover:border-primary/40 hover:bg-primary/[0.04] px-6 py-4 rounded-sm transition-colors text-xs md:text-sm font-medium tracking-widest uppercase text-foreground/90">
                        {copied ? <Check className="w-4 h-4 text-primary" /> : <Copy className="w-4 h-4" />}
                        <span>{copied ? screener.copiedBtn : screener.copyBtn}</span>
                      </button>
                    </div>

                    <button type="button" onClick={reset} className="mt-6 self-start text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground/80 transition-colors">
                      {screener.startOver}
                    </button>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function buildSummary(
  answers: Record<string, ScreenerOption>,
  labels: Translation["screener"]["message"]["labels"],
  dash: string
): string {
  const lines: string[] = [];
  if (answers.concern) lines.push(`• ${labels.concern}: ${answers.concern.label}`);
  if (answers.duration) lines.push(`• ${labels.duration}: ${answers.duration.label.toLowerCase()}`);
  if (answers.onset) lines.push(`• ${labels.onset}: ${answers.onset.label.toLowerCase()}`);
  if (answers.context) lines.push(`• ${labels.context}: ${answers.context.label.toLowerCase()}`);
  if (answers.meds) lines.push(`• ${labels.meds}: ${answers.meds.label.toLowerCase()}`);
  return lines.length ? lines.join("\n") : dash;
}

function recommendTier(
  answers: Record<string, ScreenerOption>,
  rec: Translation["screener"]["recommendations"]
): { tier: string; reason: string } {
  const goal = answers.goal?.value;
  const duration = answers.duration?.value;
  if (goal === "support") return rec.support;
  if (goal === "second" || duration === "year+") return rec.premium;
  if (goal === "options") return rec.standard;
  return rec.starter;
}

function PricingSection() {
  const t = useT();
  return (
    <section id="pricing" className="py-24 md:py-40">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={STAGGER} className="mb-16 md:mb-24">
          <motion.div variants={FADE_UP} className="flex items-center gap-3 mb-6">
            <div className="w-8 h-[1px] bg-primary" />
            <span className="text-xs tracking-[0.2em] uppercase text-primary font-medium">{t.pricing.kicker}</span>
          </motion.div>
          <motion.h2 variants={FADE_UP} className="font-serif text-4xl md:text-5xl leading-[1.1]">
            {t.pricing.headlinePre} <br /><em className="text-primary italic">{t.pricing.headlineEm}</em>
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-center">
          {t.pricing.tiers.map((tier, idx) => {
            const primary = idx === 1;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className={`p-8 lg:p-10 flex flex-col rounded-sm border ${
                  primary ? "bg-card border-primary/30 shadow-[0_0_50px_-15px_rgba(224,92,42,0.15)] md:-translate-y-4" : "bg-background border-border/40"
                }`}
              >
                <div className="text-sm text-muted-foreground uppercase tracking-wider mb-2">{tier.name}</div>
                <div className="font-serif text-4xl lg:text-5xl font-bold mb-3">{tier.price}</div>
                <div className="text-sm text-primary mb-8">{tier.desc}</div>

                <ul className="space-y-4 mb-10 flex-1">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0 mt-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={`/book?plan=${idx}`}
                  className={`flex items-center justify-center gap-2 w-full py-4 px-6 rounded-sm font-medium transition-all duration-300 ${
                    primary ? "bg-primary text-primary-foreground hover:bg-primary/90" : "border border-border hover:border-primary text-foreground hover:text-primary"
                  }`}
                >
                  <span>{t.pricing.payBook}</span>
                  <ChevronRight className="w-4 h-4" />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function MonthlySupportSection() {
  const t = useT();
  return (
    <section className="py-16 md:py-24 bg-card/20 border-t border-border/40">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <h3 className="font-serif text-2xl md:text-3xl mb-4">{t.monthly.title}</h3>
          <p className="text-muted-foreground">{t.monthly.sub}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.monthly.plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`p-8 flex flex-col sm:flex-row items-center justify-between gap-6 border rounded-sm ${
                idx === 1 ? "border-primary/20 bg-card" : "border-border/40 bg-background"
              }`}
            >
              <div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider mb-1">{plan.name}</div>
                <div className="font-serif text-2xl font-bold text-foreground">{plan.price}</div>
              </div>
              <ul className="space-y-2">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="w-3.5 h-3.5 text-primary/70" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ReadBeforeBookingSection() {
  const t = useT();
  return (
    <section className="relative py-28 md:py-40 bg-card/30 border-y border-border/40 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-primary/[0.04] rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={STAGGER} className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16 md:mb-20">
          <div className="max-w-2xl">
            <motion.div variants={FADE_UP} className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[1px] bg-primary" />
              <span className="text-xs tracking-[0.2em] uppercase text-primary font-medium">{t.primers.kicker}</span>
            </motion.div>

            <motion.h2 variants={FADE_UP} className="font-serif text-4xl md:text-5xl leading-[1.05]">
              {t.primers.headlinePre}<br />
              <em className="text-primary italic">{t.primers.headlineEm}</em>
            </motion.h2>
          </div>

          <motion.p variants={FADE_UP} className="text-muted-foreground text-base leading-relaxed max-w-sm md:text-right">
            {t.primers.sub}
          </motion.p>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={STAGGER} className="grid md:grid-cols-2 gap-6 md:gap-8">
          {t.primers.items.map((a, i) => (
            <motion.div key={i} variants={FADE_UP}>
              <ArticleCard article={a} readBtn={t.primers.readBtn} closeBtn={t.primers.closeBtn} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ArticleCard({
  article,
  readBtn,
  closeBtn
}: {
  article: { kicker: string; readTime: string; title: string; excerpt: string; body: string[] };
  readBtn: string;
  closeBtn: string;
}) {
  const [open, setOpen] = useState(false);
  return (
    <article className="group relative bg-background/60 border border-border/50 hover:border-primary/30 transition-colors duration-500 p-8 md:p-10 rounded-sm flex flex-col h-full">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2.5 text-primary">
          <BookOpen className="w-4 h-4" strokeWidth={1.5} />
          <span className="text-[10px] tracking-[0.2em] uppercase font-medium">{article.kicker}</span>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground/70">
          <Clock className="w-3.5 h-3.5" strokeWidth={1.5} />
          <span className="text-[11px] tracking-wider uppercase">{article.readTime}</span>
        </div>
      </div>

      <h3 className="font-serif text-2xl md:text-[1.65rem] leading-snug text-foreground/95 mb-4">{article.title}</h3>

      <p className="text-muted-foreground text-base leading-relaxed mb-6">{article.excerpt}</p>

      <motion.div initial={false} animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }} transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }} className="overflow-hidden">
        <div className="space-y-4 text-foreground/75 text-[15px] leading-relaxed border-t border-border/40 pt-6 mb-6">
          {article.body.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </motion.div>

      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="mt-auto inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-primary hover:text-primary/80 transition-colors self-start"
      >
        <span>{open ? closeBtn : readBtn}</span>
        <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${open ? "rotate-90" : "group-hover:translate-x-1"}`} />
      </button>
    </article>
  );
}

function FAQSection() {
  const t = useT();
  return (
    <section className="relative py-28 md:py-40 bg-background overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={STAGGER} className="lg:col-span-4">
            <motion.div variants={FADE_UP} className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[1px] bg-primary" />
              <span className="text-xs tracking-[0.2em] uppercase text-primary font-medium">{t.faq.kicker}</span>
            </motion.div>

            <motion.h2 variants={FADE_UP} className="font-serif text-4xl md:text-5xl leading-[1.05] mb-8">
              {t.faq.headlinePre}<br />
              <em className="text-primary italic">{t.faq.headlineEm}</em>
            </motion.h2>

            <motion.p variants={FADE_UP} className="text-muted-foreground text-base leading-relaxed max-w-sm">
              {t.faq.sub}
            </motion.p>

            <motion.a variants={FADE_UP} href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 mt-8 text-sm tracking-widest uppercase text-primary hover:text-primary/80 transition-colors">
              <span>{t.faq.askPrivately}</span>
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </motion.a>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={STAGGER} className="lg:col-span-8">
            {t.faq.items.map((item, i) => (
              <motion.div key={i} variants={FADE_UP}>
                <FAQItem question={item.q} answer={item.a} defaultOpen={i === 0} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FAQItem({ question, answer, defaultOpen = false }: { question: string; answer: string; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-border/40">
      <button type="button" onClick={() => setOpen((o) => !o)} aria-expanded={open} className="group w-full flex items-start justify-between gap-6 py-7 text-left">
        <span className="font-serif text-xl md:text-2xl leading-snug text-foreground/90 group-hover:text-primary transition-colors duration-300">
          {question}
        </span>
        <span
          className={`relative shrink-0 mt-2 w-9 h-9 rounded-full border border-border/60 flex items-center justify-center text-primary transition-all duration-500 ${
            open ? "rotate-45 border-primary/50 bg-primary/5" : "rotate-0"
          }`}
          aria-hidden="true"
        >
          <span className="block w-3 h-[1px] bg-current absolute" />
          <span className="block w-[1px] h-3 bg-current absolute" />
        </span>
      </button>
      <motion.div initial={false} animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }} transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }} className="overflow-hidden">
        <p className="text-muted-foreground text-base md:text-[1.05rem] leading-relaxed pb-8 pr-12 max-w-2xl">{answer}</p>
      </motion.div>
    </div>
  );
}

function ClosingCTASection() {
  const t = useT();
  return (
    <section className="py-32 md:py-48 relative overflow-hidden flex flex-col items-center justify-center text-center">
      <div className="absolute inset-0 z-0">
        <img src="/discreet-phone.png" alt="" loading="lazy" decoding="async" className="w-full h-full object-cover opacity-20 mix-blend-overlay" />
        <div className="absolute inset-0 bg-background/80 backdrop-blur-[2px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-3xl">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={STAGGER}>
          <motion.div variants={FADE_UP} className="flex justify-center items-center gap-3 mb-8">
            <span className="text-xs tracking-[0.2em] uppercase text-primary font-medium">{t.closing.kicker}</span>
          </motion.div>

          <motion.h2 variants={FADE_UP} className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-8">
            {t.closing.headlinePre} <br className="hidden sm:block" />{t.closing.headlinePost}
          </motion.h2>

          <motion.p variants={FADE_UP} className="text-muted-foreground text-lg mb-12 max-w-lg mx-auto">
            {t.closing.sub}
          </motion.p>

          <motion.div variants={FADE_UP}>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-5 rounded-sm transition-all duration-300 font-medium tracking-wide shadow-[0_10px_40px_-10px_rgba(224,92,42,0.4)] hover:shadow-[0_15px_50px_-10px_rgba(224,92,42,0.5)] hover:-translate-y-1">
              <span>{t.closing.cta}</span>
              <MessageCircle className="w-5 h-5" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !email.includes("@")) return;
    setLoading(true);
    setTimeout(() => {
      try {
        const existing = JSON.parse(localStorage.getItem("pp_newsletter_subs") ?? "[]") as string[];
        if (!existing.includes(email)) {
          existing.push(email);
          localStorage.setItem("pp_newsletter_subs", JSON.stringify(existing));
        }
      } catch {}
      setLoading(false);
      setSubmitted(true);
    }, 700);
  }

  return (
    <section className="py-24 md:py-32 bg-card/30 border-y border-border/40">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={STAGGER}>
            <motion.div variants={FADE_UP} className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[1px] bg-primary" />
              <span className="text-xs tracking-[0.2em] uppercase text-primary font-medium">Free newsletter</span>
            </motion.div>
            <motion.h2 variants={FADE_UP} className="font-serif text-4xl md:text-5xl leading-[1.05] mb-6">
              Better health.<br /><em className="text-primary italic">Stronger living.</em>
            </motion.h2>
            <motion.p variants={FADE_UP} className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-md">
              Weekly insights on men's health — lifestyle, medication clarity, and performance — delivered privately to your inbox. Free forever.
            </motion.p>
            <motion.a variants={FADE_UP} href="/newsletter" className="group inline-flex items-center gap-2 text-sm tracking-widest uppercase text-primary hover:text-primary/80 transition-colors">
              <span>See what's inside</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] }}>
            {!submitted ? (
              <form onSubmit={handleSubmit} className="bg-background border border-border/50 rounded-sm p-8 md:p-10">
                <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
                  <Mail className="w-5 h-5 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-2xl mb-2">Join the newsletter</h3>
                <p className="text-muted-foreground text-sm mb-6">No spam. Unsubscribe any time.</p>
                <div className="flex gap-3">
                  <input
                    type="email"
                    required
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 bg-card/50 border border-border/50 focus:border-primary/50 rounded-sm px-4 py-3.5 text-foreground placeholder:text-muted-foreground/40 focus:outline-none transition-colors text-sm"
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="group flex items-center gap-2 bg-primary hover:bg-primary/90 disabled:opacity-60 text-primary-foreground px-5 py-3.5 rounded-sm font-medium transition-all whitespace-nowrap text-sm"
                  >
                    {loading ? (
                      <span className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                    ) : (
                      <>
                        <span className="hidden sm:inline">Subscribe</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                      </>
                    )}
                  </button>
                </div>
                <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground/50">
                  <Shield className="w-3.5 h-3.5 text-primary/40 shrink-0" strokeWidth={1.5} />
                  <span>Your email is never shared. Unsubscribe with one click.</span>
                </div>
              </form>
            ) : (
              <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4 }} className="bg-background border border-primary/20 rounded-sm p-8 md:p-10 text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 border border-primary/30 mb-5">
                  <Check className="w-6 h-6 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-2xl mb-2">You're in.</h3>
                <p className="text-muted-foreground text-sm">Your first issue is on its way. Welcome.</p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const t = useT();
  return (
    <footer className="bg-background border-t border-border/40 py-12 md:py-16">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="flex flex-col md:flex-row gap-10 justify-between items-start md:items-center mb-8 pb-8 border-b border-border/30">
          <a href="#" className="font-serif text-2xl tracking-wide text-foreground">
            Pocket<span className="text-primary italic">pill</span>
          </a>
          <nav className="flex flex-wrap gap-x-8 gap-y-3 text-xs tracking-[0.18em] uppercase text-muted-foreground">
            <a href="/book" className="hover:text-primary transition-colors">Book a consult</a>
            <a href="/newsletter" className="hover:text-primary transition-colors">Newsletter</a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">WhatsApp</a>
          </nav>
        </div>
        <p className="text-xs text-muted-foreground/50 max-w-2xl leading-relaxed">
          {t.footer.disclaimer}
        </p>
      </div>
    </footer>
  );
}
