import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight, Check, Shield, Lock, CreditCard } from "lucide-react";
import { usePaystackPayment } from "react-paystack";
import { useLocation } from "wouter";
import { Navbar, Footer } from "./home";

const PAYSTACK_PUBLIC_KEY = import.meta.env.VITE_PAYSTACK_PUBLIC_KEY || "pk_test_b8e5c1a84f3e5b30ecba393b4a4505c24f653fa3";
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] } }
};

const STAGGER = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const CONDITIONS = [
  "Erectile Dysfunction",
  "Premature Ejaculation",
  "Hair Loss",
  "Weight Management"
];

const PLANS = [
  {
    id: "starter",
    name: "Starter",
    price: 7500,
    priceLabel: "₦7,500",
    desc: "Focused consultation to understand your concern, discuss possible contributing factors and provide personalised lifestyle recommendations.",
    features: [],
    btn: "Choose Starter",
    popular: false,
    paystackLink: "https://paystack.shop/pay/fngi1ly9gj"
  },
  {
    id: "full",
    name: "Full Consultation",
    price: 15000,
    priceLabel: "₦15,000",
    desc: "Comprehensive assessment of your concern, medication review where applicable, laboratory test recommendations where necessary, interpretation of available results and a personalised care plan.",
    features: ["Where physician input is required, we'll coordinate this as part of your care."],
    btn: "Choose Full Consultation",
    popular: true,
    paystackLink: "https://paystack.shop/pay/xta4jk5m6r"
  },
  {
    id: "complete",
    name: "Complete Care",
    price: 20000,
    priceLabel: "₦20,000",
    desc: "Thirty days of pharmacist support including:",
    features: [
      "Up to two consultations weekly",
      "Medication counselling",
      "Progress monitoring",
      "Priority follow-ups",
      "Where clinically appropriate, we'll liaise with our partner physicians to ensure continuity of care."
    ],
    btn: "Choose Complete Care",
    popular: false,
    paystackLink: "https://paystack.shop/pay/hh9lusj3xv"
  },
  {
    id: "priority",
    name: "Priority Access",
    price: 30000,
    priceLabel: "₦30,000",
    desc: "Includes:",
    features: [
      "Priority phone access",
      "Faster response times",
      "Ongoing pharmacist support",
      "Care coordination with partner physicians where required"
    ],
    btn: "Choose Priority Access",
    popular: false,
    paystackLink: "https://paystack.shop/pay/7246psxu1r"
  }
];

const FAQS = [
  {
    q: "Is my consultation confidential?",
    a: "Yes. Everything shared with PocketPill is treated confidentially."
  },
  {
    q: "Who will I speak with?",
    a: "Your consultation begins with one of our licensed pharmacists. Where physician assessment or prescribing is required, we coordinate your care with our partner physicians."
  },
  {
    q: "How quickly will someone respond?",
    a: "During business hours, one of our pharmacists will typically respond within 30 minutes of you completing your health questionnaire."
  },
  {
    q: "Can medications be delivered?",
    a: "Yes. Following your consultation, any required medications or treatments can be securely packaged and delivered directly to your address via our fulfilment partners."
  },
  {
    q: "What if I need a doctor?",
    a: "Where physician assessment or prescribing is required, we'll coordinate your care with one of our partner physicians."
  }
];

function PlanCard({ tier, onSuccess }: { tier: typeof PLANS[0], onSuccess: (reference: any, tier: typeof PLANS[0]) => void }) {
  const config = {
    reference: (new Date()).getTime().toString() + "_" + tier.id,
    email: `guest_${Math.floor(Math.random() * 1000000)}@pocketpill.co`,
    amount: tier.price * 100,
    publicKey: PAYSTACK_PUBLIC_KEY,
    metadata: {
      custom_fields: [
        {
          display_name: "Selected Plan",
          variable_name: "selected_plan",
          value: tier.name
        }
      ]
    }
  };

  const initializePayment = usePaystackPayment(config);

  const handlePay = () => {
    initializePayment({
      onSuccess: (reference: any) => onSuccess(reference, tier),
      onClose: () => console.log("Payment closed")
    });
  };

  return (
    <div
      className={`p-8 flex flex-col rounded-sm border relative transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:border-primary/40 cursor-pointer group ${
        tier.popular ? "bg-card border-primary/30 shadow-[0_0_50px_-15px_rgba(224,92,42,0.15)] lg:-translate-y-4 hover:lg:-translate-y-6" : "bg-background border-border/40"
      }`}
    >
      {tier.popular && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full">
          Most Popular
        </div>
      )}
      <div className="text-sm text-muted-foreground uppercase tracking-wider mb-2">{tier.name}</div>
      <div className="font-serif text-4xl font-bold mb-4">{tier.priceLabel}</div>
      <div className="text-sm text-foreground/80 mb-8 leading-relaxed">{tier.desc}</div>
      <ul className="space-y-4 mb-10 flex-1">
        {tier.features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3 text-muted-foreground text-sm">
            <div className="w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0 mt-2" />
            <span className="leading-relaxed">{feature}</span>
          </li>
        ))}
      </ul>
      <button
        onClick={handlePay}
        className="btn-pay"
      >
        <span className="btn-pay-text">Pay Now</span>
        <span className="btn-pay-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width={20} viewBox="0 0 24 24" strokeWidth={2.5} strokeLinejoin="round" strokeLinecap="round" stroke="currentColor" height={20} fill="none"><line y2={19} y1={5} x2={12} x1={12} /><line y2={12} y1={12} x2={19} x1={5} /></svg>
        </span>
      </button>
    </div>
  );
}

export default function ConsultationPage() {
  const [, setLocation] = useLocation();

  const handleSuccess = (reference: any, tier: typeof PLANS[0]) => {
    setLocation(`/start/success?plan=${encodeURIComponent(tier.name)}&reference=${reference.reference}`);
  };

  return (
    <div className="min-h-[100dvh] flex flex-col selection:bg-primary/30">
      <Navbar />

      <main className="flex-1">
        {/* Section 1 - Hero */}
        <section className="relative pt-40 pb-20 overflow-hidden bg-background">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
          </div>
          <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-4xl text-center">
            <motion.div initial="hidden" animate="visible" variants={STAGGER}>
              <motion.div variants={FADE_UP} className="flex justify-center items-center gap-3 mb-6">
                <span className="text-xs tracking-[0.2em] uppercase text-primary font-medium border border-primary/20 px-3 py-1 rounded-full">
                  Consultation
                </span>
              </motion.div>
              <motion.h1 variants={FADE_UP} className="font-serif text-5xl md:text-7xl leading-[1.05] tracking-tight mb-8 text-foreground">
                Start Your <em className="text-primary not-italic">Private</em> Consultation
              </motion.h1>
              <motion.p variants={FADE_UP} className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12">
                Confidential, pharmacist-led support for erectile dysfunction, premature ejaculation, hair loss and weight management. Our licensed pharmacists work alongside partner physicians whenever physician assessment or prescribing is required.
              </motion.p>
              <motion.div variants={FADE_UP}>
                <a
                  href="#plans"
                  className="btn-pocket group gap-2 px-10 py-5 text-base tracking-wide hover:-translate-y-1"
                >
                  <span>Choose Your Plan</span>
                  <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Section 2 - About PocketPill */}
        <section className="py-24 bg-card/10 border-y border-border/40">
          <div className="container mx-auto px-6 md:px-12 max-w-4xl text-center">
            <Shield className="w-12 h-12 text-primary mx-auto mb-8 opacity-80" />
            <h2 className="font-serif text-3xl md:text-4xl leading-[1.2] text-foreground mb-8">
              PocketPill is a private, <em className="text-primary italic">pharmacist-led</em> men's health service.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Our licensed pharmacists provide medication expertise, counselling and ongoing support.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Where physician assessment, prescribing or additional medical care is required, we coordinate with our partner physicians.
            </p>
          </div>
        </section>

        {/* Section 3 - How It Works */}
        <section className="py-24 md:py-32 bg-background relative">
          <div className="container mx-auto px-6 md:px-12 max-w-7xl">
            <div className="text-center mb-16 md:mb-24">
              <h2 className="font-serif text-4xl md:text-5xl leading-[1.1] mb-6">How It Works</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                "Choose your consultation plan.",
                "Pay securely online.",
                "Complete your confidential health questionnaire.",
                "Begin your consultation with one of our licensed pharmacists."
              ].map((step, idx) => (
                <div key={idx} className="relative p-8 rounded-sm bg-card/30 border border-border/40">
                  <div className="text-5xl font-serif text-primary/10 absolute top-4 right-6 font-bold">{idx + 1}</div>
                  <div className="pt-8 text-lg font-medium text-foreground relative z-10">{step}</div>
                </div>
              ))}
            </div>
            <p className="text-center text-muted-foreground mt-16 max-w-2xl mx-auto italic text-sm">
              Where physician assessment or prescribing is required, we'll coordinate your care with our partner physicians.
            </p>
          </div>
        </section>

        {/* Section 4 - Conditions We Help With */}
        <section className="py-24 bg-card/20 border-y border-border/40">
          <div className="container mx-auto px-6 md:px-12 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl md:text-4xl">Conditions We Help With</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {CONDITIONS.map((cond, i) => (
                <div key={i} className="p-8 rounded-sm bg-background border border-border/50 text-center hover:border-primary/40 transition-colors">
                  <h3 className="font-serif text-xl font-medium text-foreground">{cond}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5 - Consultation Plans */}
        <section id="plans" className="py-24 md:py-32 bg-background">
          <div className="container mx-auto px-6 md:px-12 max-w-7xl">
            <div className="text-center mb-16 md:mb-24">
              <h2 className="font-serif text-4xl md:text-5xl mb-6">Consultation Plans</h2>
              <p className="text-muted-foreground text-lg">Select the level of care that suits your needs.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-stretch">
              {PLANS.map((tier) => (
                <PlanCard key={tier.id} tier={tier} onSuccess={handleSuccess} />
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 md:py-32 bg-card/10 border-t border-border/40">
          <div className="container mx-auto px-6 md:px-12 max-w-3xl">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl">Frequently Asked Questions</h2>
            </div>
            <div className="space-y-6">
              {FAQS.map((faq, i) => (
                <div key={i} className="border-b border-border/40 pb-6">
                  <h3 className="font-serif text-xl mb-3">{faq.q}</h3>
                  <p className="text-muted-foreground">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
