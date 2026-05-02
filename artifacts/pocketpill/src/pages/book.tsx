import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Check, ChevronRight, MessageCircle, Calendar, Clock, User, Mail, Phone, ExternalLink, ArrowLeft, Shield, Lock, Copy, CheckCircle } from "lucide-react";
import { DEFAULT_SETTINGS, getWhatsappUrl, getPaypalLink, type AdminSettings } from "@/lib/adminSettings";

const SLIDE = {
  enter: { opacity: 0, x: 40 },
  center: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -40 },
};

const TRANSITION = { duration: 0.35, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] };

const TIME_SLOTS = [
  { id: "09:00", label: "9:00 AM", period: "morning" },
  { id: "10:00", label: "10:00 AM", period: "morning" },
  { id: "11:00", label: "11:00 AM", period: "morning" },
  { id: "14:00", label: "2:00 PM", period: "afternoon" },
  { id: "15:00", label: "3:00 PM", period: "afternoon" },
  { id: "16:00", label: "4:00 PM", period: "afternoon" },
  { id: "18:00", label: "6:00 PM", period: "evening" },
  { id: "19:00", label: "7:00 PM", period: "evening" },
];

function getAvailableDates(): Date[] {
  const dates: Date[] = [];
  const today = new Date();
  let d = new Date(today);
  d.setDate(d.getDate() + 1);
  while (dates.length < 14) {
    if (d.getDay() !== 0) dates.push(new Date(d));
    d.setDate(d.getDate() + 1);
  }
  return dates;
}

function formatDate(d: Date): string {
  return d.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" });
}

function randomRef(): string {
  return "PP-" + Math.random().toString(36).slice(2, 8).toUpperCase();
}

type Details = {
  name: string;
  whatsapp: string;
  email: string;
  concern: string;
};

const STEPS = ["Plan", "Details", "Payment", "Schedule", "Confirmed"];

export default function BookPage() {
  const [settings, setSettings] = useState<AdminSettings | null>(null);
  const [step, setStep] = useState(0);
  const [planIdx, setPlanIdx] = useState<number | null>(null);
  const [details, setDetails] = useState<Details>({ name: "", whatsapp: "", email: "", concern: "" });
  const [errors, setErrors] = useState<Partial<Details>>({});
  const [paymentConfirmed, setPaymentConfirmed] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [bookingRef] = useState(() => randomRef());
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    fetch("/api/settings")
      .then((r) => r.json())
      .then((data) => setSettings(data as AdminSettings))
      .catch(() => setSettings(DEFAULT_SETTINGS));

    const params = new URLSearchParams(window.location.search);
    const p = params.get("plan");
    if (p !== null) {
      const idx = parseInt(p, 10);
      if ([0, 1, 2].includes(idx)) {
        setPlanIdx(idx);
        setStep(1);
      }
    }
  }, []);

  if (!settings) {
    return (
      <div className="min-h-[100dvh] bg-background flex items-center justify-center">
        <span className="w-6 h-6 border-2 border-primary/30 border-t-primary rounded-full animate-spin" aria-label="Loading" />
      </div>
    );
  }

  const tier = planIdx !== null ? settings.tiers[planIdx] : null;
  const waUrl = getWhatsappUrl(settings);

  function next() { setStep((s) => s + 1); }
  function back() { setStep((s) => Math.max(0, s - 1)); }

  function validateDetails(): boolean {
    const e: Partial<Details> = {};
    if (!details.name.trim()) e.name = "Name is required";
    if (!details.whatsapp.trim()) e.whatsapp = "WhatsApp number is required";
    if (!details.email.trim() || !details.email.includes("@")) e.email = "A valid email is required";
    if (!details.concern.trim()) e.concern = "Please describe your concern briefly";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function confirmAndNext() {
    if (planIdx !== null && tier) {
      fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          reference: bookingRef,
          planName: tier.name,
          planPrice: tier.price,
          planIndex: planIdx,
          clientName: details.name,
          clientEmail: details.email,
          clientWhatsapp: details.whatsapp,
          concern: details.concern,
          appointmentDate: selectedDate
            ? selectedDate.toISOString().slice(0, 10)
            : null,
          appointmentTime: selectedTime,
        }),
      }).catch(() => {});
    }
    next();
  }

  const confirmMessage = [
    `Hi, I'm booking a ${tier?.name ?? ""} consultation (${bookingRef}).`,
    ``,
    `Name: ${details.name}`,
    `Date: ${selectedDate ? formatDate(selectedDate) : ""}`,
    `Time: ${TIME_SLOTS.find((s) => s.id === selectedTime)?.label ?? ""}`,
    ``,
    `Looking forward to the session.`,
  ].join("\n");

  async function copyRef() {
    try {
      await navigator.clipboard.writeText(bookingRef);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  }

  return (
    <div className="min-h-[100dvh] bg-background flex flex-col">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/40" aria-label="Booking navigation">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl py-4 flex items-center justify-between">
          <a href="/" className="font-serif text-xl tracking-wide text-foreground">
            Pocket<span className="text-primary italic">pill</span>
          </a>
          <div className="flex items-center gap-2 text-muted-foreground/70 text-xs tracking-widest uppercase">
            <Lock className="w-3.5 h-3.5" strokeWidth={1.5} aria-hidden="true" />
            <span>Secure booking</span>
          </div>
        </div>
      </nav>

      <main className="flex-1 pt-24 pb-20">
        <div className="container mx-auto px-6 md:px-12 max-w-3xl">
          {/* Progress */}
          {step < 4 && (
            <div className="mb-12" role="progressbar" aria-valuenow={step + 1} aria-valuemin={1} aria-valuemax={4} aria-label={`Step ${step + 1} of 4`}>
              <div className="flex items-center justify-between mb-3">
                {STEPS.slice(0, -1).map((label, i) => (
                  <div key={i} className={`flex items-center gap-2 text-[11px] tracking-[0.15em] uppercase font-medium transition-colors duration-300 ${i === step ? "text-primary" : i < step ? "text-primary/60" : "text-muted-foreground/40"}`}>
                    <span className={`w-5 h-5 rounded-full border flex items-center justify-center text-[10px] transition-all duration-300 ${i < step ? "bg-primary border-primary text-primary-foreground" : i === step ? "border-primary text-primary" : "border-border/40 text-muted-foreground/40"}`} aria-hidden="true">
                      {i < step ? <Check className="w-3 h-3" /> : i + 1}
                    </span>
                    <span className="hidden sm:inline">{label}</span>
                  </div>
                ))}
              </div>
              <div className="h-[2px] bg-border/40 overflow-hidden rounded-full">
                <motion.div className="h-full bg-primary rounded-full" animate={{ width: `${(step / 3) * 100}%` }} transition={{ duration: 0.5 }} />
              </div>
            </div>
          )}

          <AnimatePresence mode="wait">
            {step === 0 && (
              <motion.div key="plan" variants={SLIDE} initial="enter" animate="center" exit="exit" transition={TRANSITION}>
                <StepPlan settings={settings} onSelect={(i) => { setPlanIdx(i); next(); }} />
              </motion.div>
            )}
            {step === 1 && (
              <motion.div key="details" variants={SLIDE} initial="enter" animate="center" exit="exit" transition={TRANSITION}>
                <StepDetails
                  tier={tier}
                  details={details}
                  errors={errors}
                  onChange={(k, v) => setDetails((d) => ({ ...d, [k]: v }))}
                  onBack={back}
                  onNext={() => { if (validateDetails()) next(); }}
                />
              </motion.div>
            )}
            {step === 2 && (
              <motion.div key="payment" variants={SLIDE} initial="enter" animate="center" exit="exit" transition={TRANSITION}>
                <StepPayment
                  settings={settings}
                  planIdx={planIdx!}
                  tier={tier!}
                  details={details}
                  paymentConfirmed={paymentConfirmed}
                  onConfirm={() => setPaymentConfirmed(true)}
                  onBack={back}
                  onNext={next}
                />
              </motion.div>
            )}
            {step === 3 && (
              <motion.div key="schedule" variants={SLIDE} initial="enter" animate="center" exit="exit" transition={TRANSITION}>
                <StepSchedule
                  selectedDate={selectedDate}
                  selectedTime={selectedTime}
                  onSelectDate={setSelectedDate}
                  onSelectTime={setSelectedTime}
                  onBack={back}
                  onNext={confirmAndNext}
                />
              </motion.div>
            )}
            {step === 4 && (
              <motion.div key="confirm" variants={SLIDE} initial="enter" animate="center" exit="exit" transition={TRANSITION}>
                <StepConfirmed
                  bookingRef={bookingRef}
                  tier={tier!}
                  details={details}
                  selectedDate={selectedDate}
                  selectedTime={selectedTime}
                  waUrl={waUrl}
                  message={confirmMessage}
                  copied={copied}
                  onCopy={copyRef}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}

function StepPlan({ settings, onSelect }: { settings: AdminSettings; onSelect: (i: number) => void }) {
  return (
    <div>
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-[1px] bg-primary" aria-hidden="true" />
          <span className="text-xs tracking-[0.2em] uppercase text-primary font-medium">Step 1 of 4</span>
        </div>
        <h1 className="font-serif text-4xl md:text-5xl leading-tight mb-4">Choose your <em className="text-primary italic">consultation</em></h1>
        <p className="text-muted-foreground max-w-lg">All sessions are private, pharmacist-led, and conducted over WhatsApp. Select the level that fits your needs.</p>
      </div>

      <div className="grid gap-4 md:gap-6" role="list" aria-label="Consultation plans">
        {settings.tiers.map((tier, i) => (
          <motion.div
            key={i}
            role="listitem"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className={`group relative border rounded-sm p-7 md:p-8 cursor-pointer transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_40px_-15px_rgba(224,92,42,0.15)] ${tier.popular ? "border-primary/30 bg-card shadow-[0_0_40px_-15px_rgba(224,92,42,0.1)]" : "border-border/40 bg-background"}`}
            onClick={() => onSelect(i)}
          >
            {tier.popular && (
              <div className="absolute -top-3 left-6">
                <span className="bg-primary text-primary-foreground text-[10px] tracking-[0.2em] uppercase font-semibold px-3 py-1 rounded-sm">Most popular</span>
              </div>
            )}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-3">
                  <h3 className="font-medium text-lg text-foreground">{tier.name}</h3>
                  <span className="text-muted-foreground text-sm">{tier.desc}</span>
                </div>
                <ul className="flex flex-wrap gap-x-6 gap-y-1.5">
                  {tier.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="w-3.5 h-3.5 text-primary/70 shrink-0" aria-hidden="true" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex sm:flex-col items-center sm:items-end gap-4 sm:gap-3 shrink-0">
                <div className="font-serif text-3xl font-bold text-foreground">{tier.price}</div>
                <button
                  type="button"
                  className="group/btn flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-5 py-3 rounded-sm text-sm font-medium tracking-wide transition-all duration-300 whitespace-nowrap"
                  aria-label={`Select ${tier.name} plan`}
                >
                  <span>Select</span>
                  <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" aria-hidden="true" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-8 flex items-center gap-3 text-xs text-muted-foreground/60">
        <Shield className="w-4 h-4 text-primary/50" strokeWidth={1.5} aria-hidden="true" />
        <span>All consultations are private and confidential. Payment processed securely via PayPal.</span>
      </div>
    </div>
  );
}

function StepDetails({
  tier,
  details,
  errors,
  onChange,
  onBack,
  onNext,
}: {
  tier: AdminSettings["tiers"][0] | null;
  details: Details;
  errors: Partial<Details>;
  onChange: (k: keyof Details, v: string) => void;
  onBack: () => void;
  onNext: () => void;
}) {
  return (
    <div>
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-[1px] bg-primary" aria-hidden="true" />
          <span className="text-xs tracking-[0.2em] uppercase text-primary font-medium">Step 2 of 4</span>
        </div>
        <h1 className="font-serif text-4xl md:text-5xl leading-tight mb-4">Your <em className="text-primary italic">details</em></h1>
        <p className="text-muted-foreground">This is kept strictly private. Your pharmacist will reach you on WhatsApp at the scheduled time.</p>
      </div>

      {tier && (
        <div className="mb-8 flex items-center gap-4 p-4 bg-card/50 border border-border/40 rounded-sm">
          <div className="w-2 h-2 rounded-full bg-primary" aria-hidden="true" />
          <span className="text-sm text-muted-foreground">Booking: <span className="text-foreground font-medium">{tier.name}</span> — {tier.price}</span>
        </div>
      )}

      <div className="space-y-5">
        <Field label="Full name" icon={<User className="w-4 h-4" aria-hidden="true" />} error={errors.name} htmlFor="field-name">
          <input
            id="field-name"
            type="text"
            placeholder="Your full name"
            value={details.name}
            onChange={(e) => onChange("name", e.target.value)}
            autoComplete="name"
            aria-describedby={errors.name ? "field-name-error" : undefined}
            aria-invalid={!!errors.name}
            className={inputCls(!!errors.name)}
          />
          {errors.name && <p id="field-name-error" role="alert" className="text-[11px] text-destructive/80 mt-1.5">{errors.name}</p>}
        </Field>

        <Field label="WhatsApp number" icon={<Phone className="w-4 h-4" aria-hidden="true" />} error={errors.whatsapp} hint="Include country code, e.g. +234 801 234 5678" htmlFor="field-whatsapp">
          <input
            id="field-whatsapp"
            type="tel"
            placeholder="+234 801 234 5678"
            value={details.whatsapp}
            onChange={(e) => onChange("whatsapp", e.target.value)}
            autoComplete="tel"
            aria-invalid={!!errors.whatsapp}
            className={inputCls(!!errors.whatsapp)}
          />
        </Field>

        <Field label="Email address" icon={<Mail className="w-4 h-4" aria-hidden="true" />} error={errors.email} hint="For your booking confirmation" htmlFor="field-email">
          <input
            id="field-email"
            type="email"
            placeholder="you@example.com"
            value={details.email}
            onChange={(e) => onChange("email", e.target.value)}
            autoComplete="email"
            aria-invalid={!!errors.email}
            className={inputCls(!!errors.email)}
          />
        </Field>

        <Field label="Brief description" icon={<MessageCircle className="w-4 h-4" aria-hidden="true" />} error={errors.concern} hint="A sentence or two — this helps your pharmacist prepare" htmlFor="field-concern">
          <textarea
            id="field-concern"
            placeholder="E.g. I've been dealing with premature ejaculation for about six months and want structured guidance..."
            value={details.concern}
            onChange={(e) => onChange("concern", e.target.value)}
            rows={4}
            maxLength={2000}
            aria-invalid={!!errors.concern}
            className={inputCls(!!errors.concern) + " resize-none"}
          />
        </Field>
      </div>

      <div className="mt-8 flex items-center gap-3 text-[11px] text-muted-foreground/60">
        <Lock className="w-3.5 h-3.5 text-primary/50" strokeWidth={1.5} aria-hidden="true" />
        <span>Your information is not shared with third parties and is used only to conduct your consultation.</span>
      </div>

      <div className="flex gap-4 mt-8">
        <button type="button" onClick={onBack} className="flex items-center gap-2 text-muted-foreground hover:text-foreground text-sm transition-colors">
          <ArrowLeft className="w-4 h-4" aria-hidden="true" />
          <span>Back</span>
        </button>
        <button type="button" onClick={onNext} className="flex-1 flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground py-4 rounded-sm font-medium tracking-wide transition-colors">
          <span>Continue to Payment</span>
          <ChevronRight className="w-4 h-4" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}

function StepPayment({
  settings,
  planIdx,
  tier,
  details,
  paymentConfirmed,
  onConfirm,
  onBack,
  onNext,
}: {
  settings: AdminSettings;
  planIdx: number;
  tier: AdminSettings["tiers"][0];
  details: Details;
  paymentConfirmed: boolean;
  onConfirm: () => void;
  onBack: () => void;
  onNext: () => void;
}) {
  const paypalLink = getPaypalLink(settings, planIdx);

  return (
    <div>
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-[1px] bg-primary" aria-hidden="true" />
          <span className="text-xs tracking-[0.2em] uppercase text-primary font-medium">Step 3 of 4</span>
        </div>
        <h1 className="font-serif text-4xl md:text-5xl leading-tight mb-4">Secure <em className="text-primary italic">payment</em></h1>
        <p className="text-muted-foreground">Your slot is held for 15 minutes. Pay via PayPal, then return here to schedule your appointment.</p>
      </div>

      <div className="bg-card border border-border/50 rounded-sm p-6 mb-6">
        <div className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">Order Summary</div>
        <div className="flex justify-between items-center mb-4 pb-4 border-b border-border/40">
          <div>
            <div className="font-medium text-foreground">{tier.name} Consultation</div>
            <div className="text-sm text-muted-foreground mt-0.5">{tier.desc}</div>
          </div>
          <div className="font-serif text-2xl font-bold text-foreground">{tier.price}</div>
        </div>
        <div className="text-sm text-muted-foreground">
          <span className="text-foreground/60">For: </span>{details.name}
        </div>
      </div>

      {!paymentConfirmed ? (
        <div className="space-y-4">
          <a
            href={paypalLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full bg-[#0070ba] hover:bg-[#005ea6] text-white py-4 rounded-sm font-semibold tracking-wide transition-colors text-base"
            aria-label={`Pay ${tier.price} with PayPal (opens in new tab)`}
          >
            <svg width="20" height="24" viewBox="0 0 124 33" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-auto" aria-hidden="true">
              <path d="M46.4 8.2H37.6c-.6 0-1.1.4-1.2 1L32.9 27c-.1.4.2.8.6.8h4.2c.6 0 1.1-.4 1.2-1l1-6.4c.1-.6.6-1 1.2-1h2.7c5.6 0 8.8-2.7 9.6-8 .4-2.3 0-4.1-1-5.4-1.1-1.5-3.1-2.4-6-2.4h.01zm1 7.9c-.5 3-2.8 3-5 3h-1.3l.9-5.6c.1-.4.4-.6.8-.6h.6c1.5 0 3 0 3.7.9.4.5.5 1.4.3 2.3zM71.7 16h-4.2c-.4 0-.7.2-.8.6l-.2 1.2-.3-.4c-1-1.4-3.1-1.9-5.3-1.9-4.9 0-9.1 3.7-9.9 8.9-.4 2.6.2 5 1.7 6.7 1.4 1.6 3.3 2.2 5.6 2.2 3.9 0 6.1-2.5 6.1-2.5l-.2 1.2c-.1.4.2.8.6.8h3.8c.6 0 1.1-.4 1.2-1l2.3-14.8c.1-.5-.2-.9-.6-.9l-.1-.1zM64 24.7c-.4 2.2-2.2 3.6-4.4 3.6-1.1 0-2-.4-2.6-1.1-.6-.7-.8-1.7-.6-2.8.4-2.2 2.2-3.7 4.4-3.7 1.1 0 2 .4 2.6 1.1.6.7.9 1.7.6 2.9zM96 16h-4.3c-.4 0-.9.2-1.1.6l-6.2 9.1-2.6-8.7c-.2-.5-.7-.9-1.2-.9h-4.2c-.5 0-.8.5-.7.9l4.9 14.5-4.6 6.5c-.3.5 0 1.1.6 1.1h4.3c.4 0 .9-.2 1.1-.6l14.8-21.4c.4-.4.1-1.1-.6-1.1h.01z" fill="white"/>
              <path d="M108.5 8.2H99.7c-.6 0-1.1.4-1.2 1l-3.5 22c-.1.4.2.8.6.8h4.5c.4 0 .8-.3.8-.7l1-6.6c.1-.6.6-1 1.2-1h2.7c5.6 0 8.8-2.7 9.6-8 .4-2.3 0-4.1-1-5.4-1.1-1.5-3.2-2.3-6-2.3l.1.2zm1 7.9c-.5 3-2.8 3-5 3h-1.3l.9-5.6c.1-.4.4-.6.8-.6h.6c1.5 0 3 0 3.7.9.4.5.5 1.4.3 2.3zM133.8 16h-4.2c-.4 0-.7.2-.8.6l-.2 1.2-.3-.4c-1-1.4-3.1-1.9-5.3-1.9-4.9 0-9.1 3.7-9.9 8.9-.4 2.6.2 5 1.7 6.7 1.4 1.6 3.3 2.2 5.6 2.2 3.9 0 6.1-2.5 6.1-2.5l-.2 1.2c-.1.4.2.8.6.8h3.8c.6 0 1.1-.4 1.2-1l2.3-14.8c.1-.5-.2-.9-.8-.9zm-7.7 8.7c-.4 2.2-2.2 3.6-4.4 3.6-1.1 0-2-.4-2.6-1.1-.6-.7-.8-1.7-.6-2.8.4-2.2 2.2-3.7 4.4-3.7 1.1 0 2 .4 2.6 1.1.6.7.9 1.7.6 2.9z" fill="white"/>
            </svg>
            <span>Pay {tier.price} with PayPal</span>
            <ExternalLink className="w-4 h-4 opacity-70" aria-hidden="true" />
          </a>

          <div className="relative" aria-hidden="true">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border/40" />
            </div>
            <div className="relative flex justify-center">
              <span className="bg-background px-4 text-xs text-muted-foreground/60 uppercase tracking-widest">Then</span>
            </div>
          </div>

          <button
            type="button"
            onClick={onConfirm}
            className="w-full flex items-center justify-center gap-2 border border-border/60 hover:border-primary/40 hover:bg-primary/[0.04] py-4 rounded-sm text-foreground/90 font-medium tracking-wide transition-colors text-sm"
          >
            <Check className="w-4 h-4 text-primary" aria-hidden="true" />
            <span>I've completed my PayPal payment</span>
          </button>
        </div>
      ) : (
        <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} className="bg-primary/[0.07] border border-primary/25 rounded-sm p-6 flex items-center gap-4" role="status">
          <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center shrink-0" aria-hidden="true">
            <Check className="w-5 h-5 text-primary" />
          </div>
          <div>
            <div className="font-medium text-foreground mb-0.5">Payment confirmed</div>
            <div className="text-sm text-muted-foreground">Great — let's schedule your appointment.</div>
          </div>
        </motion.div>
      )}

      <div className="flex gap-4 mt-8">
        <button type="button" onClick={onBack} className="flex items-center gap-2 text-muted-foreground hover:text-foreground text-sm transition-colors">
          <ArrowLeft className="w-4 h-4" aria-hidden="true" />
          <span>Back</span>
        </button>
        {paymentConfirmed && (
          <button type="button" onClick={onNext} className="flex-1 flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground py-4 rounded-sm font-medium tracking-wide transition-colors">
            <Calendar className="w-4 h-4" aria-hidden="true" />
            <span>Schedule My Appointment</span>
          </button>
        )}
      </div>
    </div>
  );
}

function StepSchedule({
  selectedDate,
  selectedTime,
  onSelectDate,
  onSelectTime,
  onBack,
  onNext,
}: {
  selectedDate: Date | null;
  selectedTime: string | null;
  onSelectDate: (d: Date) => void;
  onSelectTime: (t: string) => void;
  onBack: () => void;
  onNext: () => void;
}) {
  const dates = getAvailableDates();
  const canContinue = selectedDate !== null && selectedTime !== null;

  return (
    <div>
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-[1px] bg-primary" aria-hidden="true" />
          <span className="text-xs tracking-[0.2em] uppercase text-primary font-medium">Step 4 of 4</span>
        </div>
        <h1 className="font-serif text-4xl md:text-5xl leading-tight mb-4">Schedule your <em className="text-primary italic">appointment</em></h1>
        <p className="text-muted-foreground">Choose a date and time. Your pharmacist will reach you on WhatsApp at the agreed time.</p>
      </div>

      {/* Date picker */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <Calendar className="w-4 h-4 text-primary" strokeWidth={1.5} aria-hidden="true" />
          <span className="text-sm font-medium text-foreground/80 tracking-wide">Select a date</span>
          <span className="text-xs text-muted-foreground/60 ml-1">(next 14 working days)</span>
        </div>
        <div className="grid grid-cols-4 sm:grid-cols-7 gap-2" role="listbox" aria-label="Available dates">
          {dates.map((d, i) => {
            const isSelected = selectedDate?.toDateString() === d.toDateString();
            return (
              <button
                key={i}
                type="button"
                role="option"
                aria-selected={isSelected}
                onClick={() => onSelectDate(d)}
                aria-label={formatDate(d)}
                className={`flex flex-col items-center p-2.5 rounded-sm border text-center transition-all duration-200 ${
                  isSelected
                    ? "bg-primary border-primary text-primary-foreground"
                    : "border-border/50 hover:border-primary/40 text-muted-foreground hover:text-foreground"
                }`}
              >
                <span className="text-[10px] uppercase tracking-wider font-medium">
                  {d.toLocaleDateString("en-US", { weekday: "short" })}
                </span>
                <span className={`text-lg font-semibold mt-0.5 ${isSelected ? "" : "text-foreground"}`}>
                  {d.getDate()}
                </span>
                <span className="text-[10px] opacity-70">
                  {d.toLocaleDateString("en-US", { month: "short" })}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Time slots */}
      {selectedDate && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
          <div className="flex items-center gap-2 mb-4">
            <Clock className="w-4 h-4 text-primary" strokeWidth={1.5} aria-hidden="true" />
            <span className="text-sm font-medium text-foreground/80 tracking-wide">Select a time</span>
            <span className="text-xs text-muted-foreground/60 ml-1">(WAT / Lagos time)</span>
          </div>

          {(["morning", "afternoon", "evening"] as const).map((period) => {
            const slots = TIME_SLOTS.filter((s) => s.period === period);
            return (
              <div key={period} className="mb-5">
                <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60 mb-2.5 ml-1">{period}</div>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-2" role="listbox" aria-label={`${period} time slots`}>
                  {slots.map((slot) => {
                    const isSelected = selectedTime === slot.id;
                    return (
                      <button
                        key={slot.id}
                        type="button"
                        role="option"
                        aria-selected={isSelected}
                        onClick={() => onSelectTime(slot.id)}
                        className={`py-3 px-2 rounded-sm border text-center text-sm font-medium transition-all duration-200 ${
                          isSelected
                            ? "bg-primary border-primary text-primary-foreground"
                            : "border-border/50 hover:border-primary/40 text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        {slot.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </motion.div>
      )}

      <div className="flex gap-4 mt-8">
        <button type="button" onClick={onBack} className="flex items-center gap-2 text-muted-foreground hover:text-foreground text-sm transition-colors">
          <ArrowLeft className="w-4 h-4" aria-hidden="true" />
          <span>Back</span>
        </button>
        <button
          type="button"
          onClick={onNext}
          disabled={!canContinue}
          aria-disabled={!canContinue}
          className={`flex-1 flex items-center justify-center gap-2 py-4 rounded-sm font-medium tracking-wide transition-all ${
            canContinue ? "bg-primary hover:bg-primary/90 text-primary-foreground" : "bg-border/30 text-muted-foreground/50 cursor-not-allowed"
          }`}
        >
          <span>Confirm Appointment</span>
          <Check className="w-4 h-4" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}

function StepConfirmed({
  bookingRef,
  tier,
  details,
  selectedDate,
  selectedTime,
  waUrl,
  message,
  copied,
  onCopy,
}: {
  bookingRef: string;
  tier: AdminSettings["tiers"][0];
  details: Details;
  selectedDate: Date | null;
  selectedTime: string | null;
  waUrl: string;
  message: string;
  copied: boolean;
  onCopy: () => void;
}) {
  const timeLabel = TIME_SLOTS.find((s) => s.id === selectedTime)?.label ?? "";
  const waLink = `${waUrl}?text=${encodeURIComponent(message)}`;

  return (
    <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} role="main" aria-label="Booking confirmed">
      <div className="text-center mb-12">
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }} className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 border border-primary/30 mb-6" aria-hidden="true">
          <CheckCircle className="w-9 h-9 text-primary" strokeWidth={1.5} />
        </motion.div>
        <h1 className="font-serif text-4xl md:text-5xl mb-4">You're <em className="text-primary italic">confirmed.</em></h1>
        <p className="text-muted-foreground max-w-md mx-auto">Your consultation is booked. Start the WhatsApp conversation below so your pharmacist has your reference.</p>
      </div>

      <div className="bg-card border border-border/50 rounded-sm p-7 mb-6 space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground">Booking reference</span>
          <button type="button" onClick={onCopy} aria-label={`Copy booking reference ${bookingRef}`} className="flex items-center gap-2 font-mono text-primary font-semibold text-sm hover:text-primary/80 transition-colors">
            <span>{bookingRef}</span>
            {copied ? <Check className="w-3.5 h-3.5" aria-hidden="true" /> : <Copy className="w-3.5 h-3.5" aria-hidden="true" />}
          </button>
        </div>
        <div className="h-[1px] bg-border/40" aria-hidden="true" />
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <div className="text-muted-foreground text-xs uppercase tracking-wider mb-1">Plan</div>
            <div className="text-foreground font-medium">{tier.name}</div>
          </div>
          <div>
            <div className="text-muted-foreground text-xs uppercase tracking-wider mb-1">Name</div>
            <div className="text-foreground font-medium">{details.name}</div>
          </div>
          <div>
            <div className="text-muted-foreground text-xs uppercase tracking-wider mb-1">Date</div>
            <div className="text-foreground font-medium">{selectedDate ? formatDate(selectedDate) : "—"}</div>
          </div>
          <div>
            <div className="text-muted-foreground text-xs uppercase tracking-wider mb-1">Time (WAT)</div>
            <div className="text-foreground font-medium">{timeLabel}</div>
          </div>
        </div>
      </div>

      <a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-center gap-3 w-full bg-primary hover:bg-primary/90 text-primary-foreground py-4 rounded-sm font-medium tracking-wide transition-colors mb-4"
        aria-label="Open WhatsApp to send booking confirmation (opens in new tab)"
      >
        <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" aria-hidden="true" />
        <span>Open WhatsApp to confirm</span>
      </a>

      <p className="text-center text-xs text-muted-foreground/60 leading-relaxed">
        Save this reference number. Your pharmacist will reach you at the scheduled time. If you need to reschedule, message on WhatsApp at least 24 hours in advance.
      </p>

      <div className="mt-8 text-center">
        <a href="/" className="text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors">
          ← Return to Pocketpill
        </a>
      </div>
    </motion.div>
  );
}

function inputCls(hasError: boolean) {
  return `w-full bg-background border ${hasError ? "border-destructive/60" : "border-border/50 focus:border-primary/50"} rounded-sm px-4 py-3.5 text-foreground placeholder:text-muted-foreground/50 focus:outline-none transition-colors text-sm`;
}

function Field({
  label,
  icon,
  error,
  hint,
  children,
  htmlFor,
}: {
  label: string;
  icon?: React.ReactNode;
  error?: string;
  hint?: string;
  children: React.ReactNode;
  htmlFor?: string;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="flex items-center gap-2 text-sm font-medium text-foreground/80 mb-2">
        {icon && <span aria-hidden="true">{icon}</span>}
        {label}
      </label>
      {children}
      {hint && !error && <p className="text-[11px] text-muted-foreground/60 mt-1.5">{hint}</p>}
      {error && <p role="alert" className="text-[11px] text-destructive/80 mt-1.5">{error}</p>}
    </div>
  );
}
