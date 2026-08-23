import {
  Activity,
  Clock,
  Stethoscope,
  Scissors,
  TrendingDown,
  FlaskConical,
  HeartPulse,
  Leaf,
  type LucideIcon,
} from "lucide-react";

export interface Condition {
  slug: string;
  title: string;
  shortTitle: string;
  icon: LucideIcon;
  tagline: string;
  description: string;
  howWeHelp: string[];
  whyPocketPill: string[];
  disclaimer: string;
  seoTitle: string;
  seoDescription: string;
}

export const conditions: Condition[] = [
  {
    slug: "erectile-dysfunction",
    title: "Erectile Dysfunction",
    shortTitle: "Stronger erections",
    icon: Activity,
    tagline: "Private pharmacist-led guidance for erectile difficulty.",
    description:
      "Erectile dysfunction is common, treatable, and nothing to be ashamed of. PocketPill provides private, pharmacist-led consultations to help you understand your options, identify contributing factors, and build a clear action plan — all from your phone.",
    howWeHelp: [
      "Confidential assessment of your situation",
      "Medication education — understand what works, what doesn't, and what to avoid",
      "Lifestyle and root-cause guidance (stress, sleep, diet, fitness)",
      "Structured follow-up and ongoing support",
      "Referral to a physician when clinically appropriate",
    ],
    whyPocketPill: [
      "No waiting rooms — consult from anywhere",
      "Pharmacist-led expertise on medication safety and interactions",
      "Discreet, encrypted communication",
      "Culturally aware care for West African men and the diaspora",
    ],
    disclaimer:
      "PocketPill provides pharmacist-led education and guidance. A licensed physician must issue any prescription medication. If you are experiencing chest pain, priapism, or a medical emergency, seek immediate medical attention.",
    seoTitle: "Erectile Dysfunction Treatment Online — Private & Discreet | PocketPill",
    seoDescription:
      "Private pharmacist-led consultations for erectile dysfunction. Understand your options, get medication guidance, and build an action plan — all online. Discreet and confidential.",
  },
  {
    slug: "premature-ejaculation",
    title: "Premature Ejaculation",
    shortTitle: "Longer lasting",
    icon: Clock,
    tagline: "Actionable protocols for premature ejaculation.",
    description:
      "Premature ejaculation affects a significant number of men but is rarely discussed openly. PocketPill offers private, structured consultations to help you understand what's happening, explore evidence-based approaches, and regain confidence.",
    howWeHelp: [
      "Private assessment without judgment",
      "Education on behavioural techniques and timing strategies",
      "Medication options explained clearly (topical, oral, and combination)",
      "Partner communication guidance where appropriate",
      "Ongoing follow-up and protocol adjustments",
    ],
    whyPocketPill: [
      "Direct, shame-free conversations",
      "Pharmacist insight into medication timing and side effects",
      "Written action plans you can reference anytime",
      "Flexible scheduling — consult when it suits you",
    ],
    disclaimer:
      "PocketPill provides pharmacist-led education and guidance. Prescription medication requires a licensed physician. If you experience persistent pain or urinary symptoms, seek professional medical evaluation.",
    seoTitle: "Premature Ejaculation Help Online — Private Consultations | PocketPill",
    seoDescription:
      "Private consultations for premature ejaculation. Evidence-based protocols, medication guidance, and ongoing support. No waiting rooms. 100% confidential.",
  },
  {
    slug: "hair-loss",
    title: "Hair Loss",
    shortTitle: "Hair restoration",
    icon: Scissors,
    tagline: "Understand your hair loss and explore proven options.",
    description:
      "Male pattern hair loss is one of the most common conditions men face, yet many suffer in silence or waste money on unproven products. PocketPill connects you with pharmacist-led guidance to understand what's causing your hair loss and which treatments actually work.",
    howWeHelp: [
      "Assessment of hair loss pattern and potential causes",
      "Education on clinically proven treatments (finasteride, minoxidil, etc.)",
      "Guidance on what to avoid — unproven products and false claims",
      "Monitoring and follow-up to track progress",
      "Referral to a dermatologist when appropriate",
    ],
    whyPocketPill: [
      "No awkward in-person consultations",
      "Honest, evidence-based guidance — no sales pressure",
      "Pharmacist expertise on medication safety and side effects",
      "Discreet delivery of recommended products",
    ],
    disclaimer:
      "PocketPill provides pharmacist-led education and guidance. Prescription treatments such as finasteride require a licensed physician's prescription. Sudden or patchy hair loss may indicate an underlying condition requiring medical evaluation.",
    seoTitle: "Hair Loss Treatment for Men Online — Expert Guidance | PocketPill",
    seoDescription:
      "Private consultations for male hair loss. Understand your options, get pharmacist-led guidance on proven treatments, and track your progress. Discreet and online.",
  },
  {
    slug: "weight-management",
    title: "Weight Management",
    shortTitle: "Weight management",
    icon: TrendingDown,
    tagline: "Sustainable weight management with professional support.",
    description:
      "Losing weight isn't just about willpower — it's about understanding your body, your habits, and the right approach for your situation. PocketPill provides structured, pharmacist-led consultations to help you build a sustainable weight management plan.",
    howWeHelp: [
      "Personalised assessment of your current health and goals",
      "Education on evidence-based weight management strategies",
      "Medication options explained where clinically appropriate",
      "Nutrition and lifestyle guidance tailored to West African diets",
      "Regular check-ins and accountability support",
    ],
    whyPocketPill: [
      "No gym-bro culture — clinical, structured support",
      "Culturally relevant dietary guidance",
      "Pharmacist insight into medication safety (e.g., appetite suppressants)",
      "Private consultations — no one needs to know",
    ],
    disclaimer:
      "PocketPill provides pharmacist-led education and lifestyle guidance. Prescription weight management medications require a licensed physician. If you have underlying conditions such as diabetes or heart disease, consult your doctor before starting any programme.",
    seoTitle: "Weight Management for Men Online — Professional Support | PocketPill",
    seoDescription:
      "Structured weight management consultations for men. Get personalised guidance, medication education, and ongoing support — all online and private.",
  },
  {
    slug: "low-testosterone",
    title: "Low Testosterone",
    shortTitle: "Hormone health",
    icon: FlaskConical,
    tagline: "Understand your testosterone levels and what you can do.",
    description:
      "Fatigue, low mood, reduced libido, and difficulty building muscle can all be linked to testosterone levels. PocketPill helps you understand what's going on and what options are available — without hype or false promises.",
    howWeHelp: [
      "Guidance on recognising signs of low testosterone",
      "Education on testing options and what results mean",
      "Lifestyle interventions that can support healthy testosterone",
      "Medication and supplement guidance (what works vs. what's marketing)",
      "Referral to an endocrinologist when clinically indicated",
    ],
    whyPocketPill: [
      "Evidence-based, not bro-science",
      "Pharmacist expertise on testosterone-related medications and supplements",
      "Private and confidential — no judgement",
      "Clear referral pathways when specialist care is needed",
    ],
    disclaimer:
      "PocketPill provides pharmacist-led education and guidance. Testosterone replacement therapy (TRT) requires diagnosis and prescription by a licensed physician. Self-medicating with testosterone products can be dangerous.",
    seoTitle: "Low Testosterone Help Online — Honest Guidance | PocketPill",
    seoDescription:
      "Private consultations for low testosterone concerns. Understand your symptoms, explore evidence-based options, and get pharmacist-led guidance. No hype, no false promises.",
  },
  {
    slug: "wellness-diagnostics",
    title: "Wellness & Diagnostics",
    shortTitle: "Wellness & testing",
    icon: Leaf,
    tagline: "Proactive health screening and wellness support.",
    description:
      "Don't wait until something feels wrong. PocketPill offers guidance on proactive health screening, at-home testing kits, and general wellness support to help you stay ahead of potential issues.",
    howWeHelp: [
      "Guidance on recommended health screenings for men",
      "At-home STI screening kits (Venchecker 4-in-1)",
      "Wellness supplement packages for daily health support",
      "Lifestyle and preventive health education",
      "Referral for laboratory testing when needed",
    ],
    whyPocketPill: [
      "Proactive, not reactive healthcare",
      "Discreet at-home testing options",
      "Pharmacist guidance on supplements and wellness products",
      "Shop wellness products directly via shop.pocketpill.co",
    ],
    disclaimer:
      "At-home screening tests are not a substitute for laboratory-confirmed diagnostics. Reactive/positive results require confirmatory testing by a healthcare professional.",
    seoTitle: "Men's Health Screening & Wellness Products | PocketPill",
    seoDescription:
      "Proactive health screening, at-home STI test kits, and wellness products for men. Private, discreet, and pharmacist-guided. Shop at PocketPill.",
  },
];

export function getConditionBySlug(slug: string) {
  return conditions.find((c) => c.slug === slug);
}
