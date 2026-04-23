import { motion } from "framer-motion";
import { MessageCircle, Shield, Clock, ExternalLink, ChevronRight, Check } from "lucide-react";
import { useEffect, useState } from "react";

const WHATSAPP_URL = "https://wa.me/2348000000000";

const FADE_UP = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } }
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
        <PricingSection />
        <MonthlySupportSection />
        <ClosingCTASection />
      </main>

      <Footer />
    </div>
  );
}

function Navbar() {
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
        <a 
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 text-xs md:text-sm font-medium tracking-widest uppercase bg-primary hover:bg-primary/90 text-primary-foreground px-5 py-2.5 rounded-sm transition-all duration-300"
        >
          <span>Book Consult</span>
          <MessageCircle className="w-4 h-4 transition-transform group-hover:scale-110" />
        </a>
      </div>
    </motion.nav>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-[95vh] flex items-center pt-32 pb-20 overflow-hidden">
      {/* Background ambient image/texture */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/hero-texture.png" 
          alt="" 
          className="w-full h-full object-cover opacity-30 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-7xl">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={STAGGER}
          className="max-w-4xl"
        >
          <motion.div variants={FADE_UP} className="flex items-center gap-3 mb-8">
            <div className="w-8 h-[1px] bg-primary" />
            <span className="text-xs tracking-[0.2em] uppercase text-primary font-medium">
              Private Men's Health · West Africa & Diaspora
            </span>
          </motion.div>

          <motion.h1 
            variants={FADE_UP}
            className="font-serif text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.05] tracking-tight mb-10 text-foreground"
          >
            You've carried this long<br className="hidden md:block" /> enough. <em className="text-primary not-italic">Start here.</em>
          </motion.h1>

          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start md:items-end">
            <motion.p variants={FADE_UP} className="text-muted-foreground text-lg max-w-md leading-relaxed">
              Private pharmacist-led consultations for erectile dysfunction and premature ejaculation via WhatsApp. Clear guidance. Confidential communication. No waiting rooms.
            </motion.p>

            <motion.div variants={FADE_UP} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a 
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-sm transition-all duration-300 font-medium tracking-wide"
              >
                <span>Start on WhatsApp</span>
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a 
                href="#pricing"
                className="flex items-center justify-center px-8 py-4 border border-border/50 hover:border-primary/50 text-foreground hover:text-primary transition-colors duration-300 rounded-sm font-medium tracking-wide"
              >
                See Pricing
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function TrustStrip() {
  const stats = [
    { num: "1 in 4", desc: "Many younger men report erectile difficulties at some point.", icon: <Clock className="w-5 h-5 text-primary" /> },
    { num: "Private", desc: "Consultations are conducted confidentially through secure channels.", icon: <Shield className="w-5 h-5 text-primary" /> },
    { num: "Fast", desc: "Same-day scheduling may be available depending on demand.", icon: <MessageCircle className="w-5 h-5 text-primary" /> }
  ];

  return (
    <section className="border-y border-border/40 bg-card/30 backdrop-blur-sm relative z-20">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border/40">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="p-8 md:p-12 flex flex-col gap-4 group"
            >
              {stat.icon}
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
  return (
    <section className="py-24 md:py-40 relative">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={STAGGER}
            className="lg:col-span-7"
          >
            <motion.div variants={FADE_UP} className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[1px] bg-primary" />
              <span className="text-xs tracking-[0.2em] uppercase text-primary font-medium">Why Pocketpill Exists</span>
            </motion.div>
            
            <motion.h2 variants={FADE_UP} className="font-serif text-4xl md:text-5xl leading-[1.1] mb-8">
              The problem is often not the condition.<br /> It is the <em className="text-primary italic">silence.</em>
            </motion.h2>
            
            <motion.div variants={FADE_UP} className="text-muted-foreground text-lg space-y-6 max-w-xl">
              <p>Many men delay getting informed guidance because they want privacy, discretion, and a judgment-free conversation.</p>
              <p>Pocketpill is built to lower that barrier: direct access to pharmacist-led education and structured guidance over WhatsApp.</p>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/5 border border-primary/10 rounded-sm transform translate-x-4 translate-y-4" />
              <div className="bg-card border border-border/50 p-10 md:p-14 relative rounded-sm z-10">
                <div className="text-primary font-serif text-6xl leading-none absolute -top-6 left-8">"</div>
                <p className="font-serif text-xl md:text-2xl italic leading-relaxed text-foreground mb-8 pt-4">
                  I finally asked the questions I had been avoiding, and left with clarity instead of confusion.
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-[1px] bg-muted-foreground/30" />
                  <span className="text-sm text-muted-foreground">Client testimonial</span>
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
  const pillars = [
    {
      title: "Medication Expertise",
      items: [
        "Understand common treatment options and safety considerations",
        "Spot red flags and interaction concerns",
        "Help you avoid trial-and-error mistakes"
      ]
    },
    {
      title: "Root-Cause Guidance",
      highlight: true,
      items: [
        "Discuss lifestyle, stress, medication, and health contributors",
        "Structured screening questions",
        "Clear next-step recommendations"
      ]
    },
    {
      title: "Referral When Needed",
      items: [
        "Know when physician evaluation matters",
        "Escalation guidance for warning signs",
        "Support, not guesswork"
      ]
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-card/20 border-y border-border/40">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={STAGGER}
          className="mb-16 md:mb-24 text-center"
        >
          <motion.div variants={FADE_UP} className="flex justify-center items-center gap-3 mb-6">
            <span className="text-xs tracking-[0.2em] uppercase text-primary font-medium">Why Trust A Pharmacist</span>
          </motion.div>
          <motion.h2 variants={FADE_UP} className="font-serif text-4xl md:text-5xl leading-[1.1]">
            Expertise that goes beyond <br className="hidden sm:block"/><em className="text-primary italic">internet advice.</em>
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className={`p-8 lg:p-10 rounded-sm border transition-colors duration-500 hover:border-primary/30 ${
                pillar.highlight 
                  ? 'bg-card border-primary/20 shadow-[0_0_40px_-15px_rgba(224,92,42,0.1)]' 
                  : 'bg-background border-border/40'
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

function TestimonialsSection() {
  const testimonials = [
    {
      quote: "I delayed reaching out for months because I felt embarrassed. The consultation was private, calm, and practical. I left with clearer next steps than I had from weeks of searching online.",
      name: "Tunde A.",
      location: "Lagos",
      age: 34,
      theme: "Privacy"
    },
    {
      quote: "What stood out was the discretion. No awkwardness, no judgment — just a direct conversation that helped me understand what questions I should be asking.",
      name: "Michael O.",
      location: "Abuja",
      theme: "Privacy"
    },
    {
      quote: "I expected generic advice. What I got was a thoughtful conversation tailored to my situation. The written follow-up was especially useful.",
      name: "K.",
      location: "London",
      age: 41,
      theme: "Clarity"
    },
    {
      quote: "I was mainly looking for clarity. The session helped me separate myths from facts and gave me a more structured way to think about the issue.",
      name: "Emeka N.",
      location: "Port Harcourt",
      theme: "Clarity"
    },
    {
      quote: "The privacy mattered to me. Being able to speak over WhatsApp made it much easier to start the conversation in the first place.",
      name: "S.",
      location: "Ibadan",
      theme: "WhatsApp"
    },
    {
      quote: "I appreciated that nothing felt rushed. I was able to ask questions I'd been avoiding, and I got straightforward answers.",
      name: "Daniel A.",
      location: "Lagos",
      age: 38,
      theme: "Trust"
    },
    {
      quote: "What I valued most was having someone explain possible contributing factors clearly, instead of jumping straight to assumptions.",
      name: "Olumide B.",
      location: "Lagos",
      theme: "Clarity"
    },
    {
      quote: "I came in skeptical. The consultation felt professional and grounded, and the action points gave me something concrete to work with.",
      name: "J.",
      location: "Manchester",
      theme: "Trust"
    },
    {
      quote: "I live outside Nigeria and was looking for someone who understood both the privacy concerns and the cultural hesitation around discussing this. That made a difference.",
      name: "Chuka E.",
      location: "Toronto, Canada",
      theme: "Privacy"
    },
    {
      quote: "The biggest change for me was peace of mind. I stopped guessing and had a clearer sense of what to do next.",
      name: "A.",
      location: "Abuja",
      theme: "WhatsApp"
    }
  ];

  return (
    <section className="relative py-28 md:py-40 bg-background overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[140px]" />
      </div>

      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={STAGGER}
          className="max-w-3xl mb-20"
        >
          <motion.div variants={FADE_UP} className="flex items-center gap-3 mb-6">
            <div className="w-8 h-[1px] bg-primary" />
            <span className="text-xs tracking-[0.2em] uppercase text-primary font-medium">In Their Words</span>
          </motion.div>

          <motion.h2 variants={FADE_UP} className="font-serif text-4xl md:text-5xl leading-[1.1] mb-6">
            Quiet conversations.<br />
            <em className="text-primary italic">Lasting clarity.</em>
          </motion.h2>

          <motion.p variants={FADE_UP} className="text-muted-foreground text-lg max-w-xl">
            Shared with permission. Names and details have been adjusted to protect privacy.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={STAGGER}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border/40"
        >
          {testimonials.map((t, i) => (
            <motion.figure
              key={i}
              variants={FADE_UP}
              className="group relative bg-background hover:bg-card/60 transition-colors duration-500 p-8 md:p-10 flex flex-col"
            >
              <div className="absolute top-6 right-8 font-serif text-5xl text-primary/20 leading-none select-none">
                "
              </div>

              <div className="mb-6">
                <span className="text-[10px] tracking-[0.2em] uppercase text-primary/70 font-medium">
                  {t.theme}
                </span>
              </div>

              <blockquote className="font-serif text-lg md:text-[1.15rem] leading-relaxed text-foreground/90 italic mb-8 flex-1">
                {t.quote}
              </blockquote>

              <figcaption className="flex items-center gap-3 pt-6 border-t border-border/40">
                <div className="w-6 h-[1px] bg-primary/60" />
                <div className="text-sm text-muted-foreground">
                  <span className="text-foreground/80 font-medium">{t.name}</span>
                  <span className="text-muted-foreground/70">
                    {" · "}{t.location}
                    {t.age ? `, Age ${t.age}` : ""}
                  </span>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xs text-muted-foreground/60 mt-10 max-w-2xl leading-relaxed"
        >
          Testimonials reflect individual experiences. They are not promises of specific outcomes and do not constitute medical advice.
        </motion.p>
      </div>
    </section>
  );
}

function PricingSection() {
  const tiers = [
    {
      name: "Starter",
      price: "₦10,000",
      desc: "Text consultation",
      features: ["Written consultation", "Follow-up questions included", "24-hour response target"],
      link: "https://www.paypal.com/paypalme/yourusername/10000",
      primary: false
    },
    {
      name: "Standard",
      price: "₦15,000",
      desc: "30-min voice consultation",
      features: ["Private voice session", "Written summary", "Action plan included"],
      link: "https://www.paypal.com/paypalme/yourusername/15000",
      primary: true
    },
    {
      name: "Premium",
      price: "₦27,000",
      desc: "Deep-dive session + protocol",
      features: ["Extended consult", "Protocol document", "7-day follow-up access"],
      link: "https://www.paypal.com/paypalme/yourusername/27000",
      primary: false
    }
  ];

  return (
    <section id="pricing" className="py-24 md:py-40">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={STAGGER}
          className="mb-16 md:mb-24"
        >
          <motion.div variants={FADE_UP} className="flex items-center gap-3 mb-6">
            <div className="w-8 h-[1px] bg-primary" />
            <span className="text-xs tracking-[0.2em] uppercase text-primary font-medium">Pricing</span>
          </motion.div>
          <motion.h2 variants={FADE_UP} className="font-serif text-4xl md:text-5xl leading-[1.1]">
            Simple pricing. <br /><em className="text-primary italic">Clear next steps.</em>
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-center">
          {tiers.map((tier, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className={`p-8 lg:p-10 flex flex-col rounded-sm border ${
                tier.primary 
                  ? 'bg-card border-primary/30 shadow-[0_0_50px_-15px_rgba(224,92,42,0.15)] md:-translate-y-4' 
                  : 'bg-background border-border/40'
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
                href={tier.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center gap-2 w-full py-4 px-6 rounded-sm font-medium transition-all duration-300 ${
                  tier.primary 
                    ? 'bg-primary text-primary-foreground hover:bg-primary/90' 
                    : 'border border-border hover:border-primary text-foreground hover:text-primary'
                }`}
              >
                <span>Pay & Book</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MonthlySupportSection() {
  const plans = [
    {
      name: "Maintenance",
      price: "₦30,000",
      features: ["Weekly check-ins", "Protocol adjustments", "Priority response"]
    },
    {
      name: "Intensive",
      price: "₦40,000",
      features: ["Two monthly calls", "Ongoing text access", "Progress reporting"],
      highlight: true
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-card/20 border-t border-border/40">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="font-serif text-2xl md:text-3xl mb-4">Monthly Support</h3>
          <p className="text-muted-foreground">For ongoing guidance and protocol refinement.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`p-8 flex flex-col sm:flex-row items-center justify-between gap-6 border rounded-sm ${
                plan.highlight ? 'border-primary/20 bg-card' : 'border-border/40 bg-background'
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

function ClosingCTASection() {
  return (
    <section className="py-32 md:py-48 relative overflow-hidden flex flex-col items-center justify-center text-center">
      <div className="absolute inset-0 z-0">
        <img 
          src="/discreet-phone.png" 
          alt="" 
          className="w-full h-full object-cover opacity-20 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-background/80 backdrop-blur-[2px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-3xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={STAGGER}
        >
          <motion.div variants={FADE_UP} className="flex justify-center items-center gap-3 mb-8">
            <span className="text-xs tracking-[0.2em] uppercase text-primary font-medium">When You're Ready</span>
          </motion.div>
          
          <motion.h2 variants={FADE_UP} className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-8">
            The hardest part is <br className="hidden sm:block" />the first message.
          </motion.h2>
          
          <motion.p variants={FADE_UP} className="text-muted-foreground text-lg mb-12 max-w-lg mx-auto">
            Start privately on WhatsApp. Ask the question you've been postponing.
          </motion.p>
          
          <motion.div variants={FADE_UP}>
            <a 
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-5 rounded-sm transition-all duration-300 font-medium tracking-wide shadow-[0_10px_40px_-10px_rgba(224,92,42,0.4)] hover:shadow-[0_15px_50px_-10px_rgba(224,92,42,0.5)] hover:-translate-y-1"
            >
              <span>Message on WhatsApp</span>
              <MessageCircle className="w-5 h-5" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-background border-t border-border/40 py-12 md:py-16">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl flex flex-col md:flex-row gap-8 justify-between items-start md:items-center">
        <a href="#" className="font-serif text-2xl tracking-wide text-foreground">
          Pocket<span className="text-primary italic">pill</span>
        </a>
        
        <p className="text-xs text-muted-foreground/60 max-w-2xl leading-relaxed text-left md:text-right">
          Pocketpill provides pharmacist consultation and health education services. Services are informational and do not constitute diagnosis, emergency care, or prescription services. Users should seek a licensed physician for diagnosis, emergencies, or treatment decisions. Confidentiality is handled in accordance with applicable professional obligations and the privacy limits of the communication tools used.
        </p>
      </div>
    </footer>
  );
}
