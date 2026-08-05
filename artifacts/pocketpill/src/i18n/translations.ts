export type LangCode = "en" | "pcm" | "yo" | "ig" | "fr";

export const LANGUAGES: { code: LangCode; label: string; short: string }[] = [
  { code: "en", label: "English", short: "EN" },
  { code: "pcm", label: "Pidgin", short: "PCM" },
  { code: "yo", label: "Yorùbá", short: "YO" },
  { code: "ig", label: "Igbo", short: "IG" },
  { code: "fr", label: "Français", short: "FR" }
];

const en = {
  nav: { bookConsult: "Book Consult" },
  floating: { startPrivately: "Book Consult", aria: "Start a private WhatsApp conversation" },
  hero: {
    kicker: "Private Men's Health · West Africa & Diaspora",
    headlinePre: "You've carried this long enough.",
    headlineEm: "Start here.",
    body: "Private pharmacist-led consultations for erectile dysfunction and premature ejaculation via WhatsApp. Clear guidance. Confidential communication. No waiting rooms.",
    ctaPrimary: "Start on WhatsApp",
    ctaSecondary: "See Pricing"
  },
  trust: {
    items: [
      { num: "500+", desc: "Trusted by over 500 men across West Africa and the diaspora." },
      { num: "Private", desc: "Consultations are conducted confidentially through secure channels." },
      { num: "Fast", desc: "Same-day scheduling may be available depending on demand." }
    ]
  },
  narrative: {
    kicker: "Why Pocketpill Exists",
    headlinePre: "The problem is often not the condition.",
    headlineEm: "It is the silence.",
    paragraphs: [
      "Many men delay getting informed guidance because they want privacy, discretion, and a judgment-free conversation.",
      "Pocketpill is built to lower that barrier: direct access to pharmacist-led education and structured guidance over WhatsApp."
    ],
    quote: "I finally asked the questions I had been avoiding, and left with clarity instead of confusion.",
    quoteAttr: "Client testimonial"
  },
  whyPharmacist: {
    kicker: "Why Trust A Pharmacist",
    headlinePre: "Expertise that goes beyond",
    headlineEm: "internet advice.",
    pillars: [
      { title: "Medication Expertise", items: ["Understand common treatment options and safety considerations", "Spot red flags and interaction concerns", "Help you avoid trial-and-error mistakes"] },
      { title: "Root-Cause Guidance", items: ["Discuss lifestyle, stress, medication, and health contributors", "Structured screening questions", "Clear next-step recommendations"] },
      { title: "Referral When Needed", items: ["Know when physician evaluation matters", "Escalation guidance for warning signs", "Support, not guesswork"] }
    ]
  },
  testimonials: {
    kicker: "In Their Words",
    headlinePre: "Quiet conversations.",
    headlineEm: "Lasting clarity.",
    sub: "Shared with permission. Names and details have been adjusted to protect privacy.",
    disclaimer: "Testimonials reflect individual experiences. They are not promises of specific outcomes and do not constitute medical advice.",
    ageLabel: "Age",
    themes: { privacy: "Privacy", clarity: "Clarity", trust: "Trust", whatsapp: "WhatsApp" },
    items: [
      { quote: "I delayed reaching out for months because I felt embarrassed. The consultation was private, calm, and practical. I left with clearer next steps than I had from weeks of searching online.", themeKey: "privacy" },
      { quote: "What stood out was the discretion. No awkwardness, no judgment — just a direct conversation that helped me understand what questions I should be asking.", themeKey: "privacy" },
      { quote: "I expected generic advice. What I got was a thoughtful conversation tailored to my situation. The written follow-up was especially useful.", themeKey: "clarity" },
      { quote: "I was mainly looking for clarity. The session helped me separate myths from facts and gave me a more structured way to think about the issue.", themeKey: "clarity" },
      { quote: "The privacy mattered to me. Being able to speak over WhatsApp made it much easier to start the conversation in the first place.", themeKey: "whatsapp" },
      { quote: "I appreciated that nothing felt rushed. I was able to ask questions I'd been avoiding, and I got straightforward answers.", themeKey: "trust" },
      { quote: "What I valued most was having someone explain possible contributing factors clearly, instead of jumping straight to assumptions.", themeKey: "clarity" },
      { quote: "I came in skeptical. The consultation felt professional and grounded, and the action points gave me something concrete to work with.", themeKey: "trust" },
      { quote: "I live outside Nigeria and was looking for someone who understood both the privacy concerns and the cultural hesitation around discussing this. That made a difference.", themeKey: "privacy" },
      { quote: "The biggest change for me was peace of mind. I stopped guessing and had a clearer sense of what to do next.", themeKey: "whatsapp" }
    ]
  },
  screener: {
    kicker: "30-Second Self-Check",
    headlinePre: "Not sure where to begin?",
    headlineEm: "Answer six private questions.",
    sub: "Nothing is sent anywhere. Your answers stay on this device and produce a short summary you can copy into WhatsApp — so you don't have to type the hard parts twice.",
    privacyNote: "No accounts. No tracking. No storage.",
    questionLabel: "Question",
    of: "of",
    yourSummary: "Your summary",
    resultTitle: "Here's what to send.",
    resultSub: "Copy this into WhatsApp, or open the chat with it pre-filled.",
    suggestedLabel: "Suggested starting point:",
    redFlagTitle: "Worth seeing a doctor in person, soon",
    redFlagBody: "Sudden onset can occasionally be an early signal of something cardiovascular. A pharmacist consultation is still useful — but please also book a physician.",
    sendBtn: "Send on WhatsApp",
    copyBtn: "Copy",
    copiedBtn: "Copied",
    back: "← Back",
    startOver: "← Start over",
    questions: [
      { id: "concern", question: "What brings you in?", options: [
        { value: "ed", label: "Erectile difficulty" },
        { value: "pe", label: "Premature ejaculation" },
        { value: "both", label: "Both" },
        { value: "other", label: "Something related, not sure how to label it" }
      ]},
      { id: "duration", question: "How long has this been on your mind?", options: [
        { value: "weeks", label: "A few weeks" },
        { value: "months", label: "Several months" },
        { value: "year+", label: "A year or longer" }
      ]},
      { id: "onset", question: "How did it start?", options: [
        { value: "gradual", label: "Gradually, over time" },
        { value: "sudden", label: "Suddenly, in days or weeks", redFlag: true },
        { value: "always", label: "It's been like this as long as I remember" }
      ]},
      { id: "context", question: "When does it show up?", options: [
        { value: "partner", label: "Mainly with a partner" },
        { value: "solo", label: "Mainly when alone" },
        { value: "both", label: "In both situations" }
      ]},
      { id: "meds", question: "Are you currently on heart, blood pressure, or mental-health medication?", helper: "Honest answer matters — it changes the conversation.", options: [
        { value: "yes", label: "Yes" },
        { value: "no", label: "No" },
        { value: "unsure", label: "Not sure" }
      ]},
      { id: "goal", question: "What would make this consultation worth it for you?", options: [
        { value: "clarity", label: "Clarity — I want to understand what's happening" },
        { value: "options", label: "Options — I want to know what could help" },
        { value: "second", label: "A second opinion on something I've already tried" },
        { value: "support", label: "Ongoing support over time" }
      ]}
    ],
    message: {
      intro: "Hi — I'd like to book a private consultation.",
      summaryHeading: "A quick summary of my situation:",
      goalPrefix: "What I'm hoping to get out of it:",
      tierPrefix: "Suggested starting point:",
      labels: { concern: "Concern", duration: "Duration", onset: "Onset", context: "Context", meds: "On heart / BP / mental-health medication" },
      dash: "—"
    },
    recommendations: {
      support: { tier: "Monthly — Maintenance", reason: "You're looking for ongoing support, so a monthly arrangement gives you check-ins and protocol adjustments over time." },
      premium: { tier: "Premium — Deep-dive consultation", reason: "Given how long you've been working with this, a longer session and a written protocol will go further than a quick exchange." },
      standard: { tier: "Standard — 30-minute voice consultation", reason: "A real conversation is the fastest way to walk through options and figure out which one fits your situation." },
      starter: { tier: "Starter — Text consultation", reason: "If clarity is the main goal, a written consultation is enough to get you there — and you can always upgrade later." }
    }
  },
  pricing: {
    kicker: "Pricing",
    headlinePre: "Simple pricing.",
    headlineEm: "Clear next steps.",
    payBook: "Pay & Book",
    tiers: [
      { name: "Starter", price: "₦10,000", desc: "Text consultation", features: ["Written consultation", "Follow-up questions included", "24-hour response target"] },
      { name: "Standard", price: "₦15,000", desc: "30-min voice consultation", features: ["Private voice session", "Written summary", "Action plan included"] },
      { name: "Premium", price: "₦27,000", desc: "Deep-dive session + protocol", features: ["Extended consult", "Protocol document", "7-day follow-up access"] }
    ]
  },
  monthly: {
    title: "Monthly Support",
    sub: "For ongoing guidance and protocol refinement.",
    plans: [
      { name: "Maintenance", price: "₦30,000", features: ["Weekly check-ins", "Protocol adjustments", "Priority response"] },
      { name: "Intensive", price: "₦40,000", features: ["Two monthly calls", "Ongoing text access", "Progress reporting"] }
    ]
  },
  primers: {
    kicker: "Read Before Booking",
    headlinePre: "You don't have to message yet.",
    headlineEm: "Start by reading.",
    sub: "Plain-language primers written by the same pharmacist who would take your consultation. No upsells in the body.",
    readBtn: "Read primer",
    closeBtn: "Close",
    items: [
      { kicker: "Primer", readTime: "4 min read", title: "What erectile dysfunction actually is", excerpt: "ED is far more common — and far less binary — than the internet suggests. Here is what's actually happening, and what isn't.", body: [
        "Erectile dysfunction is the consistent difficulty in getting or keeping an erection firm enough for the kind of sex you want to have. The keyword is consistent — an off night is not a diagnosis.",
        "Mechanically, an erection requires four things working together: nervous system signals, healthy blood flow, hormones in a normal range, and a psychological state that isn't actively shutting the process down. A breakdown in any one of these can show up as ED.",
        "That's why a thoughtful conversation matters more than a quick prescription. Treating only the symptom — without understanding which lever is stuck — often leads to disappointment and a longer road back."
      ]},
      { kicker: "Primer", readTime: "3 min read", title: "Premature ejaculation: what's normal, what isn't", excerpt: "There is no universal stopwatch. The honest answer involves time, control, and how you and your partner feel about it.", body: [
        "Premature ejaculation is usually defined as ejaculation that happens sooner than you'd like, with little sense of control, and that bothers you or your partner. All three matter — time alone doesn't define it.",
        "It can be lifelong (since first sexual experiences) or acquired (showed up later). Each pattern points to different contributing factors and different starting points for guidance.",
        "Behavioral techniques, addressing anxiety, and in some cases medication all have roles. The right combination depends on your pattern, not on a one-size-fits-all script."
      ]},
      { kicker: "When to escalate", readTime: "2 min read", title: "When to see a doctor in person", excerpt: "Some signals are worth a face-to-face evaluation. Knowing them is part of taking yourself seriously.", body: [
        "Sudden onset ED — especially over days or a couple of weeks — can sometimes be an early signal of cardiovascular issues. It deserves a physician visit, not a forum thread.",
        "Pain during erection, a noticeable change in shape or curvature, blood where there shouldn't be, or symptoms alongside chest pain, fainting or new headaches are all reasons to be seen in person, soon.",
        "If you take heart, blood pressure, or psychiatric medications and have noticed a change since starting them, that is also worth a structured review with a prescriber rather than self-adjustment."
      ]},
      { kicker: "Lifestyle", readTime: "3 min read", title: "The four levers most men underestimate", excerpt: "Sleep, alcohol, weight, and stress are not platitudes — they are the levers that quietly decide how well treatment works.", body: [
        "Sleep below six hours consistently lowers testosterone and dampens nervous system response. Many men chasing a pill would benefit more from a fixed bedtime first.",
        "Alcohol is a depressant: a couple of drinks can take the edge off anxiety, but it also takes the edge off everything else. The pattern matters more than any single night.",
        "Carrying significant excess weight around the midsection is metabolically active in ways that affect hormones and blood vessels. Modest, sustained loss often improves function before any other intervention.",
        "Chronic stress keeps the body in a state that is the opposite of what arousal requires. Naming it and addressing it isn't soft — it's mechanical."
      ]}
    ]
  },
  faq: {
    kicker: "Frequently Asked",
    headlinePre: "The questions",
    headlineEm: "men don't ask out loud.",
    sub: "If something here isn't covered, message on WhatsApp before booking. There's no obligation to continue.",
    askPrivately: "Ask Privately",
    items: [
      { q: "Is this really private?", a: "Yes. Consultations happen on your personal WhatsApp thread with the pharmacist. There is no public profile, no waiting room, no front-desk handover. Your name is never shared, and notes are kept confidentially in line with applicable professional obligations." },
      { q: "Will anything show up on my bank or card statement?", a: "Payments are processed through PayPal under a discreet descriptor. No medical or condition-specific wording appears on your statement — only the platform name." },
      { q: "Can the pharmacist prescribe medication?", a: "No. Pocketpill is a pharmacist consultation and education service. We can explain treatment options, flag interactions, and tell you what a prescriber needs to hear — but a licensed physician must issue any prescription." },
      { q: "What if my issue turns out to be something more serious?", a: "Part of the consultation is identifying when physician evaluation matters. If anything in your screening points to a red flag, you'll get clear escalation guidance and a recommendation to see a doctor in person." },
      { q: "I live outside Nigeria. Can I still book?", a: "Yes. The service is built for the West African community at home and across the diaspora. Sessions run on WhatsApp and PayPal, both of which work globally. Time zones are accommodated when scheduling." },
      { q: "How fast can I be seen?", a: "Same-day scheduling is often available depending on demand. For text consultations the response target is within 24 hours; voice sessions are booked at a time that works for both of us." },
      { q: "What if I'm not sure which tier I need?", a: "Start a message on WhatsApp before paying. A short back-and-forth is enough to point you toward the right format — text, voice, or deep-dive. There is no pressure to upgrade." },
      { q: "Do I have to share my real name?", a: "No. Many clients use a first name or initial. What matters is that the conversation is honest — not that the file says who you are." }
    ]
  },

  services: {
    kicker: "What We Treat",
    headlinePre: "Specialized care",
    headlineEm: "built for men.",
    items: [
      { title: "Get stronger erections", desc: "Private pharmacist-led guidance for erectile difficulty.", link: "erectile-dysfunction" },
      { title: "Have longer sex", desc: "Actionable protocols for premature ejaculation.", link: "premature-ejaculation" },
      { title: "Understand your health", desc: "Clear answers on lifestyle, testosterone, and performance.", link: "performance" }
    ]
  },
  howItWorks: {
    kicker: "How It Works",
    headlinePre: "Getting started is",
    headlineEm: "easy and private.",
    steps: [
      { num: "01", title: "Message on WhatsApp", desc: "Start a secure, private chat. Answer a few questions about your situation." },
      { num: "02", title: "Get personalized guidance", desc: "Receive a structured review and action plan from a licensed professional." },
      { num: "03", title: "Ongoing support", desc: "Reach out anytime to adjust your protocol or ask follow-up questions." }
    ]
  },
  expertNote: {
    quote: "Our goal is to provide you with a discreet, non-judgmental and convenient space that puts you in control. Every man deserves access to safe, private, and straightforward guidance. We take a multidisciplinary approach, involving doctors, nurses, and specialists when and where necessary to ensure comprehensive care.",
    name: "Dr. J.O, PharmD",
    title: "Founder & Lead Pharmacist"
  },
  closing: {
    kicker: "When You're Ready",
    headlinePre: "The hardest part is",
    headlinePost: "the first message.",
    sub: "Start privately on WhatsApp. Ask the question you've been postponing.",
    cta: "Message on WhatsApp"
  },
  footer: {
    disclaimer: "Pocketpill provides pharmacist consultation and health education services. Services are informational and do not constitute diagnosis, emergency care, or prescription services. Users should seek a licensed physician for diagnosis, emergencies, or treatment decisions. Confidentiality is handled in accordance with applicable professional obligations and the privacy limits of the communication tools used."
  },
  langSwitcher: { label: "Language" }
};

export type Translation = typeof en;

const pcm: Translation = {
  nav: { bookConsult: "Book Consult" },
  floating: { startPrivately: "Book Consult", aria: "Start private WhatsApp talk" },
  hero: {
    kicker: "Private Men Health · West Africa & Diaspora",
    headlinePre: "You don carry am too long.",
    headlineEm: "Start here.",
    body: "Private pharmacist talk for erectile difficulty and premature ejaculation through WhatsApp. Clear guide. Confidential talk. No waiting room.",
    ctaPrimary: "Start for WhatsApp",
    ctaSecondary: "See Price"
  },
  trust: {
    items: [
      { num: "500+", desc: "Plenty younger men dey face erectile wahala one time or another." },
      { num: "Private", desc: "Every talk dey happen confidentially through secure channel." },
      { num: "Sharp", desc: "Same-day booking fit dey possible, depending on how full schedule be." }
    ]
  },
  narrative: {
    kicker: "Why Pocketpill Dey",
    headlinePre: "The real wahala no be the condition.",
    headlineEm: "Na the silence.",
    paragraphs: [
      "Plenty men dey delay getting proper guide because dem want privacy, discretion, and talk wey no carry judgment.",
      "Pocketpill don set up to make am easy: direct access to pharmacist-led education and structured guide over WhatsApp."
    ],
    quote: "I finally ask the questions wey I been dey avoid, and I comot with clear mind, no more confusion.",
    quoteAttr: "Client testimony"
  },
  whyPharmacist: {
    kicker: "Why Trust Pharmacist",
    headlinePre: "Knowledge wey pass",
    headlineEm: "internet advice.",
    pillars: [
      { title: "Medicine Expertise", items: ["Understand common treatment options and safety matters", "Spot red flag and drug interaction wahala", "Help you avoid trial-and-error mistake"] },
      { title: "Root-Cause Guide", items: ["Discuss lifestyle, stress, medicine, and health things", "Structured screening questions", "Clear next-step recommendation"] },
      { title: "Referral When E Need", items: ["Sabi when doctor evaluation matter", "Escalation guide for warning sign", "Support, no be guess work"] }
    ]
  },
  testimonials: {
    kicker: "Wetin Dem Talk",
    headlinePre: "Quiet conversation.",
    headlineEm: "Lasting clarity.",
    sub: "Shared with permission. Names and details don change to protect privacy.",
    disclaimer: "These testimony na individual experience. Dem no be promise of specific result and dem no be medical advice.",
    ageLabel: "Age",
    themes: { privacy: "Privacy", clarity: "Clarity", trust: "Trust", whatsapp: "WhatsApp" },
    items: [
      { quote: "I delay for months because shame catch me. The consultation private, calm, and practical. I comot with clearer next step pass weeks of searching online.", themeKey: "privacy" },
      { quote: "Wetin make am stand out na the discretion. No awkwardness, no judgment — just direct talk wey help me understand the question wey I suppose dey ask.", themeKey: "privacy" },
      { quote: "I been expect generic advice. Wetin I get na thoughtful talk tailored to my situation. The written follow-up especially useful.", themeKey: "clarity" },
      { quote: "I just dey find clarity. The session help me separate myth from fact and give me better way to think about the matter.", themeKey: "clarity" },
      { quote: "The privacy matter to me. Talk over WhatsApp make am easy to start the conversation for the first time.", themeKey: "whatsapp" },
      { quote: "I appreciate say nothing rush. I fit ask questions wey I been dey avoid, and I get straightforward answer.", themeKey: "trust" },
      { quote: "Wetin I value most na person wey explain possible contributing factor clear, instead of jumping straight to assumption.", themeKey: "clarity" },
      { quote: "I come in skeptical. The consultation feel professional and grounded, and the action points give me concrete thing to work with.", themeKey: "trust" },
      { quote: "I dey live outside Nigeria and I been dey find person wey understand both the privacy concern and the cultural hesitation around discussing this. That make difference.", themeKey: "privacy" },
      { quote: "The biggest change for me na peace of mind. I stop to dey guess and I get clearer sense of wetin to do next.", themeKey: "whatsapp" }
    ]
  },
  screener: {
    kicker: "30-Second Self-Check",
    headlinePre: "You no sure where to start?",
    headlineEm: "Answer six private questions.",
    sub: "Nothing dey go anywhere. Your answer dey stay for this device and produce short summary wey you fit copy into WhatsApp — so you no go type the hard parts twice.",
    privacyNote: "No account. No tracking. No storage.",
    questionLabel: "Question",
    of: "of",
    yourSummary: "Your summary",
    resultTitle: "See wetin to send.",
    resultSub: "Copy am into WhatsApp, or open the chat with am already inside.",
    suggestedLabel: "Suggested starting point:",
    redFlagTitle: "E good make you see doctor face-to-face, sharp-sharp",
    redFlagBody: "Sudden onset fit be early sign of cardiovascular thing sometimes. Pharmacist consultation still useful — but abeg book doctor too.",
    sendBtn: "Send for WhatsApp",
    copyBtn: "Copy",
    copiedBtn: "Don copy",
    back: "← Back",
    startOver: "← Start again",
    questions: [
      { id: "concern", question: "Wetin bring you come?", options: [
        { value: "ed", label: "Erectile difficulty" },
        { value: "pe", label: "Premature ejaculation" },
        { value: "both", label: "The two" },
        { value: "other", label: "Something related, no sure how to call am" }
      ]},
      { id: "duration", question: "How long this matter don dey worry you?", options: [
        { value: "weeks", label: "Few weeks" },
        { value: "months", label: "Several months" },
        { value: "year+", label: "One year or pass" }
      ]},
      { id: "onset", question: "How e take start?", options: [
        { value: "gradual", label: "Small small, over time" },
        { value: "sudden", label: "Sudden, for days or weeks", redFlag: true },
        { value: "always", label: "E don dey like this since I remember" }
      ]},
      { id: "context", question: "When e dey show?", options: [
        { value: "partner", label: "Mostly with partner" },
        { value: "solo", label: "Mostly when I dey alone" },
        { value: "both", label: "For both situation" }
      ]},
      { id: "meds", question: "You dey on heart, blood pressure, or mental-health medicine now?", helper: "Honest answer matter — e dey change the talk.", options: [
        { value: "yes", label: "Yes" },
        { value: "no", label: "No" },
        { value: "unsure", label: "I no sure" }
      ]},
      { id: "goal", question: "Wetin go make this consultation worth am for you?", options: [
        { value: "clarity", label: "Clarity — I wan understand wetin dey happen" },
        { value: "options", label: "Options — I wan sabi wetin fit help" },
        { value: "second", label: "Second opinion on something wey I don try" },
        { value: "support", label: "Ongoing support over time" }
      ]}
    ],
    message: {
      intro: "Hello — I wan book private consultation.",
      summaryHeading: "Quick summary of my situation:",
      goalPrefix: "Wetin I dey hope to get from am:",
      tierPrefix: "Suggested starting point:",
      labels: { concern: "Concern", duration: "Duration", onset: "Onset", context: "Context", meds: "On heart / BP / mental-health medicine" },
      dash: "—"
    },
    recommendations: {
      support: { tier: "Monthly — Maintenance", reason: "Since you dey find ongoing support, monthly arrangement go give you check-in and protocol adjustment over time." },
      premium: { tier: "Premium — Deep-dive consultation", reason: "Since this matter don dey long, longer session and written protocol go reach pass quick exchange." },
      standard: { tier: "Standard — 30-minute voice consultation", reason: "Real conversation na the fastest way to walk through options and figure out wetin fit your situation." },
      starter: { tier: "Starter — Text consultation", reason: "If clarity na the main goal, written consultation enough to carry you reach there — and you fit always upgrade later." }
    }
  },
  pricing: {
    kicker: "Price",
    headlinePre: "Simple price.",
    headlineEm: "Clear next step.",
    payBook: "Pay & Book",
    tiers: [
      { name: "Starter", price: "₦10,000", desc: "Text consultation", features: ["Written consultation", "Follow-up questions included", "24-hour response target"] },
      { name: "Standard", price: "₦15,000", desc: "30-min voice consultation", features: ["Private voice session", "Written summary", "Action plan included"] },
      { name: "Premium", price: "₦27,000", desc: "Deep-dive session + protocol", features: ["Extended consult", "Protocol document", "7-day follow-up access"] }
    ]
  },
  monthly: {
    title: "Monthly Support",
    sub: "For ongoing guide and protocol refinement.",
    plans: [
      { name: "Maintenance", price: "₦30,000", features: ["Weekly check-in", "Protocol adjustment", "Priority response"] },
      { name: "Intensive", price: "₦40,000", features: ["Two monthly calls", "Ongoing text access", "Progress reporting"] }
    ]
  },
  primers: {
    kicker: "Read Before You Book",
    headlinePre: "You no need to message yet.",
    headlineEm: "Start by reading.",
    sub: "Plain-language primers written by the same pharmacist wey go take your consultation. No upsell inside the body.",
    readBtn: "Read primer",
    closeBtn: "Close",
    items: [
      { kicker: "Primer", readTime: "4 min read", title: "Wetin erectile dysfunction really be", excerpt: "ED far more common — and far less binary — pass wetin internet dey suggest. Na wetin really dey happen, and wetin no be.", body: [
        "Erectile dysfunction na the consistent difficulty to get or keep erection firm enough for the kind sex you wan get. The keyword na consistent — one off night no be diagnosis.",
        "Mechanically, erection need four things to work together: nervous system signal, healthy blood flow, hormone for normal range, and psychological state wey no dey actively shut the process down. Breakdown for any one fit show as ED.",
        "Na why thoughtful conversation matter pass quick prescription. Treating only the symptom — without understanding which lever stuck — often dey lead to disappointment and longer road back."
      ]},
      { kicker: "Primer", readTime: "3 min read", title: "Premature ejaculation: wetin normal, wetin no be", excerpt: "No universal stopwatch dey. The honest answer involve time, control, and how you and your partner feel about am.", body: [
        "Premature ejaculation usually mean say ejaculation dey happen sooner than you wan, with small sense of control, and e dey worry you or your partner. The three matter — time alone no define am.",
        "E fit be lifelong (since first sexual experience) or acquired (later). Each pattern point to different contributing factor and different starting point for guide.",
        "Behavioral technique, addressing anxiety, and sometimes medicine all get role. The right combination depend on your pattern, no be one-size-fits-all script."
      ]},
      { kicker: "When to escalate", readTime: "2 min read", title: "When to see doctor face-to-face", excerpt: "Some signal worth face-to-face evaluation. To sabi dem na part of taking yourself serious.", body: [
        "Sudden onset ED — especially over days or couple of weeks — fit sometimes be early signal of cardiovascular issue. E deserve doctor visit, no be forum thread.",
        "Pain during erection, noticeable change for shape or curvature, blood where e no suppose dey, or symptom alongside chest pain, fainting or new headache na all reasons to see person face-to-face, sharp-sharp.",
        "If you dey take heart, blood pressure, or psychiatric medicine and you don notice change since you start dem, that worth structured review with prescriber instead of self-adjustment."
      ]},
      { kicker: "Lifestyle", readTime: "3 min read", title: "The four levers wey most men underestimate", excerpt: "Sleep, alcohol, weight, and stress no be platitude — na the levers wey quietly dey decide how well treatment go work.", body: [
        "Sleep below six hours consistently dey lower testosterone and dey dampen nervous system response. Plenty men wey dey chase pill go benefit more from fixed bedtime first.",
        "Alcohol na depressant: couple of drink fit take the edge off anxiety, but e dey take the edge off everything else too. The pattern matter pass any single night.",
        "To dey carry significant excess weight around the midsection na metabolically active for ways wey dey affect hormone and blood vessel. Modest, sustained loss often dey improve function before any other intervention.",
        "Chronic stress dey keep the body for state wey be the opposite of wetin arousal need. To name am and to address am no be soft — e mechanical."
      ]}
    ]
  },
  faq: {
    kicker: "Common Questions",
    headlinePre: "The questions wey",
    headlineEm: "men no dey ask out loud.",
    sub: "If something no dey covered here, message for WhatsApp before you book. No obligation to continue.",
    askPrivately: "Ask Quiet-Quiet",
    items: [
      { q: "This thing really private?", a: "Yes. Consultation dey happen for your personal WhatsApp thread with pharmacist. No public profile, no waiting room, no front-desk handover. Your name no go ever share, and notes dey keep confidentially in line with applicable professional obligation." },
      { q: "Anything go show on my bank or card statement?", a: "Payments dey process through PayPal under discreet descriptor. No medical or condition-specific wording dey appear for your statement — only the platform name." },
      { q: "Pharmacist fit prescribe medicine?", a: "No. Pocketpill na pharmacist consultation and education service. We fit explain treatment options, flag interactions, and tell you wetin prescriber need to hear — but licensed physician must issue any prescription." },
      { q: "Wetin if my matter turn out to be something more serious?", a: "Part of the consultation na to identify when physician evaluation matter. If anything for your screening point to red flag, you go get clear escalation guide and recommendation to see doctor face-to-face." },
      { q: "I dey live outside Nigeria. I still fit book?", a: "Yes. The service na for West African community for home and across the diaspora. Sessions dey run on WhatsApp and PayPal, both wey work globally. Time zones dey accommodated when scheduling." },
      { q: "How fast I fit see consult?", a: "Same-day scheduling often dey available depending on demand. For text consultations the response target dey within 24 hours; voice sessions dey book for time wey work for both of us." },
      { q: "Wetin if I no sure which tier I need?", a: "Start message for WhatsApp before you pay. Short back-and-forth enough to point you toward the right format — text, voice, or deep-dive. No pressure to upgrade." },
      { q: "I must share my real name?", a: "No. Plenty client dey use first name or initial. Wetin matter na say the conversation dey honest — no be say file dey carry who you be." }
    ]
  },

  services: {
    kicker: "What We Treat",
    headlinePre: "Specialized care",
    headlineEm: "built for men.",
    items: [
      { title: "Get stronger erections", desc: "Private pharmacist-led guidance for erectile difficulty.", link: "erectile-dysfunction" },
      { title: "Have longer sex", desc: "Actionable protocols for premature ejaculation.", link: "premature-ejaculation" },
      { title: "Understand your health", desc: "Clear answers on lifestyle, testosterone, and performance.", link: "performance" }
    ]
  },
  howItWorks: {
    kicker: "How It Works",
    headlinePre: "Getting started is",
    headlineEm: "easy and private.",
    steps: [
      { num: "01", title: "Message on WhatsApp", desc: "Start a secure, private chat. Answer a few questions about your situation." },
      { num: "02", title: "Get personalized guidance", desc: "Receive a structured review and action plan from a licensed professional." },
      { num: "03", title: "Ongoing support", desc: "Reach out anytime to adjust your protocol or ask follow-up questions." }
    ]
  },
  expertNote: {
    quote: "Our goal is to provide you with a discreet, non-judgmental and convenient space that puts you in control. Every man deserves access to safe, private, and straightforward guidance. We take a multidisciplinary approach, involving doctors, nurses, and specialists when and where necessary to ensure comprehensive care.",
    name: "Dr. J.O, PharmD",
    title: "Founder & Lead Pharmacist"
  },
  closing: {
    kicker: "When You Ready",
    headlinePre: "The hardest part na",
    headlinePost: "the first message.",
    sub: "Start quiet-quiet for WhatsApp. Ask the question wey you don dey postpone.",
    cta: "Message for WhatsApp"
  },
  footer: {
    disclaimer: "Pocketpill dey provide pharmacist consultation and health education service. Services na informational and dem no constitute diagnosis, emergency care, or prescription service. Users suppose seek licensed physician for diagnosis, emergencies, or treatment decision. Confidentiality dey handled in accordance with applicable professional obligation and the privacy limits of the communication tools used."
  },
  langSwitcher: { label: "Language" }
};

const yo: Translation = {
  nav: { bookConsult: "Gba Ìdánilẹ́kọ̀ọ́" },
  floating: { startPrivately: "Gba Ìdánilẹ́kọ̀ọ́", aria: "Bẹ̀rẹ̀ ìjíròrò WhatsApp ní ìkọ̀kọ̀" },
  hero: {
    kicker: "Ìlera Àwọn Ọkùnrin Ní Ìkọ̀kọ̀ · Ìwọ̀-Oòrùn Áfríkà & Ilẹ̀ Òkèèrè",
    headlinePre: "O ti gbé ẹrù yìí lọ́pọ̀lọpọ̀.",
    headlineEm: "Bẹ̀rẹ̀ níhìn-ín.",
    body: "Ìjíròrò ní ìkọ̀kọ̀ pẹ̀lú elegbogi nípa àìlágbára ìbálòpọ̀ àti ìṣẹlẹ̀ ìṣàdánù kíákíá nípasẹ̀ WhatsApp. Ìtọ́ni tó ye kooro. Ìbáraẹnisọ̀rọ̀ àdáni. Kò sí yàrá ìdúró.",
    ctaPrimary: "Bẹ̀rẹ̀ Lórí WhatsApp",
    ctaSecondary: "Wo Iye Owó"
  },
  trust: {
    items: [
      { num: "1 nínú 4", desc: "Ọ̀pọ̀ àwọn ọkùnrin ọ̀dọ́ máa ń ní ìṣòro ìbálòpọ̀ ní àkókò kan." },
      { num: "Àdáni", desc: "A máa ń ṣe ìjíròrò ní ìkọ̀kọ̀ nípasẹ̀ ọ̀nà àjùmọ̀ṣe tó ní ààbò." },
      { num: "Yára", desc: "Ìṣètò ọjọ́ kan náà lè wà, ó dá lórí bí ọ̀pọ̀ ènìyàn ti ń béèrè." }
    ]
  },
  narrative: {
    kicker: "Ìdí Tí Pocketpill Fi Wà",
    headlinePre: "Ìṣòro náà kì í ṣe àìsàn náà ní gbogbo ìgbà.",
    headlineEm: "Ìdákẹ́jẹ́ẹ́ ni.",
    paragraphs: [
      "Ọ̀pọ̀ àwọn ọkùnrin máa ń sún ìtọ́ni síwájú nítorí pé wọ́n fẹ́ ìpamọ́, ìfòyemọ̀, àti ìjíròrò aláìṣèdájọ́.",
      "A kọ́ Pocketpill láti rọrùn ìdènà yẹn: ìráyè tààrà sí ẹ̀kọ́ aṣáájú elegbogi àti ìtọ́ni tí a ṣètò nípasẹ̀ WhatsApp."
    ],
    quote: "Mo bá ara mi béèrè àwọn ìbéèrè tí mo ti ń yẹ̀ fún, mo sì padà pẹ̀lú ìmọ́lẹ̀ dípò rúdurùdu.",
    quoteAttr: "Ẹ̀rí oníbàárà"
  },
  whyPharmacist: {
    kicker: "Ìdí Tí O Fi Yẹ Kí O Gbẹ́kẹ̀lé Elegbogi",
    headlinePre: "Ìmọ̀ tí ó ré ojú",
    headlineEm: "ìmọ̀ràn intanẹ́ẹ̀tì kọjá.",
    pillars: [
      { title: "Ìmọ̀ Lórí Òògùn", items: ["Lóye àwọn àyànfẹ́ ìtọ́jú àti ìpèsè ààbò", "Mọ àmì ewu àti àwọn ìṣòro ìṣepọ̀ òògùn", "Ràn ọ́ lọ́wọ́ láti yẹra fún àwọn àṣìṣe ìdánwò"] },
      { title: "Ìtọ́ni Lórí Orígun Ọ̀rọ̀", items: ["Jíròrò ìgbé ayé, ìnira, òògùn, àti ohun tó ń kan ìlera", "Àwọn ìbéèrè àyẹ̀wò tí a ṣètò", "Àwọn ìmọ̀ràn igbésẹ̀ tó tẹ̀lé tí ó ye kooro"] },
      { title: "Ìtọ́kasí Nígbà Tí Ó Bá Yẹ", items: ["Mọ ìgbà tí ìdánwò dókítà ṣe pàtàkì", "Ìtọ́ni nípa àwọn àmì ewu", "Ìrànlọ́wọ́, kì í ṣe àdánwò"] }
    ]
  },
  testimonials: {
    kicker: "Nínú Ọ̀rọ̀ Wọn",
    headlinePre: "Ìjíròrò ìpalọ́lọ́.",
    headlineEm: "Ìmọ́lẹ̀ tí ó wà títí.",
    sub: "A pín pẹ̀lú ìyọ̀ǹda. A ti yí orúkọ àti àlàyé padà láti dáàbò bo ìpamọ́.",
    disclaimer: "Àwọn ẹ̀rí wọ̀nyí jẹ́ ìrírí ẹnìkọ̀ọ̀kan. Wọn kì í ṣe ìlérí àwọn àbájáde kan pàtó, wọn kì í sì í ṣe ìmọ̀ràn ìṣègùn.",
    ageLabel: "Ọjọ́ orí",
    themes: { privacy: "Ìpamọ́", clarity: "Ìmọ́lẹ̀", trust: "Ìgbẹ́kẹ̀lé", whatsapp: "WhatsApp" },
    items: [
      { quote: "Mo sún ọ̀rọ̀ síwájú fún ọ̀pọ̀ oṣù nítorí pé ìtìjú mú mi. Ìjíròrò náà jẹ́ ti àdáni, ìpalọ́lọ́, àti tó wúlò. Mo padà pẹ̀lú igbésẹ̀ tó ye kooro ju gbogbo ìṣewárí orí ayélujára lọ.", themeKey: "privacy" },
      { quote: "Ohun tí ó dúró jáde ni ìfòyemọ̀ náà. Kò sí ìjayà, kò sí ìdájọ́ — ìjíròrò tààrà tí ó ràn mí lọ́wọ́ láti mọ ohun tí mo gbọ́dọ̀ ń béèrè.", themeKey: "privacy" },
      { quote: "Mo retí ìmọ̀ràn lásán. Ohun tí mo gbà ni ìjíròrò aláṣèlóye tí ó bá ipò mi mu. Àkọsílẹ̀ tó tẹ̀lé wúlò gan-an.", themeKey: "clarity" },
      { quote: "Mo kàn ń wá ìmọ́lẹ̀. Ìpàdé náà ràn mí lọ́wọ́ láti ya àwọn ìtàn àròsọ kúrò nínú òtítọ́ ó sì fún mi ní ọ̀nà tó dára láti ronú nípa ọ̀rọ̀ náà.", themeKey: "clarity" },
      { quote: "Ìpamọ́ ṣe pàtàkì sí mi. Ìbálòpọ̀ pẹ̀lú WhatsApp jẹ́ kí ó rọrùn láti bẹ̀rẹ̀ ìjíròrò náà.", themeKey: "whatsapp" },
      { quote: "Mo dúpẹ́ pé kò sí ohun tí ó yára jù. Mo lè béèrè àwọn ìbéèrè tí mo ti ń yẹ̀ fún, mo sì gbà àwọn ìdáhùn tí ó tààrà.", themeKey: "trust" },
      { quote: "Ohun tí mo dáa ní iyì jù ni pé ẹnìkan ṣàlàyé àwọn àfikún ọ̀rọ̀ kedere, dípò kí ó fò sí àbá lẹ́sẹ̀kẹsẹ̀.", themeKey: "clarity" },
      { quote: "Mo wọlé pẹ̀lú àìgbàgbọ́. Ìjíròrò náà jẹ́ ọjọ̀gbọ́n àti gídí, àwọn igbésẹ̀ náà sì fún mi ní ohun gangan láti ṣiṣẹ́ pẹ̀lú.", themeKey: "trust" },
      { quote: "Mo ń gbé ní ilẹ̀ òkèèrè, mo sì ń wá ẹnìkan tó lóye àwọn ìṣòro ìpamọ́ àti ìfàséyìn àṣà nípa ọ̀rọ̀ yìí. Ìyẹn ṣe ìyàtọ̀.", themeKey: "privacy" },
      { quote: "Ìyípadà tó tóbi jù fún mi ni ìfọkànbalẹ̀ ọkàn. Mo dáwọ́ ìfojúsọ́nà dúró, mo sì ní oye tó ye kooro lórí ohun tí mo gbọ́dọ̀ ṣe nígbà tó tẹ̀lé.", themeKey: "whatsapp" }
    ]
  },
  screener: {
    kicker: "Àyẹ̀wò Ara-Ẹni 30-Ìṣẹ́jú-Àáyá",
    headlinePre: "O ò mọ ibi tí o ti máa bẹ̀rẹ̀?",
    headlineEm: "Dáhùn ìbéèrè àdáni mẹ́fà.",
    sub: "Kò sí ohun tí ó lọ síbikíbi. Àwọn ìdáhùn rẹ wà lórí ẹ̀rọ yìí, wọ́n sì ń mú àkójọpọ̀ kúkúrú jáde tí o lè daakọ sí WhatsApp — kí o má ba à ní láti tẹ àwọn apá líle léèmejì.",
    privacyNote: "Kò sí àkáǹtì. Kò sí àbójútó. Kò sí ìpamọ́ data.",
    questionLabel: "Ìbéèrè",
    of: "nínú",
    yourSummary: "Àkójọpọ̀ rẹ",
    resultTitle: "Ohun tí o gbọ́dọ̀ rán nìyí.",
    resultSub: "Daakọ rẹ̀ sí WhatsApp, tàbí ṣí ìjíròrò pẹ̀lú rẹ̀ tí ó ti ṣètò.",
    suggestedLabel: "Ibi ìbẹ̀rẹ̀ tí a dámọ̀ràn:",
    redFlagTitle: "Ó yẹ kí o rí dókítà ní ojú-sí-ojú láìpẹ́",
    redFlagBody: "Ìbẹ̀rẹ̀ òjijì lè jẹ́ àmì àkọ́kọ́ àìsàn ọkàn nígbà mìíràn. Ìjíròrò pẹ̀lú elegbogi ṣì wúlò — ṣùgbọ́n jọ̀wọ́ gba dókítà náà.",
    sendBtn: "Rán Sí WhatsApp",
    copyBtn: "Daakọ",
    copiedBtn: "A Ti Daakọ",
    back: "← Padà",
    startOver: "← Bẹ̀rẹ̀ láti ìbẹ̀rẹ̀",
    questions: [
      { id: "concern", question: "Kí ni ó mú ọ wá?", options: [
        { value: "ed", label: "Àìlágbára ìbálòpọ̀" },
        { value: "pe", label: "Ìṣàdánù kíákíá" },
        { value: "both", label: "Méjèèjì" },
        { value: "other", label: "Ohun tó jẹmọ́, n kò mọ ohun tí n ó pè é" }
      ]},
      { id: "duration", question: "Báwo ni ọ̀rọ̀ yìí ti pẹ́ tó ní ọkàn rẹ?", options: [
        { value: "weeks", label: "Ọ̀sẹ̀ díẹ̀" },
        { value: "months", label: "Ọ̀pọ̀lọpọ̀ oṣù" },
        { value: "year+", label: "Ọdún kan tàbí jù bẹ́ẹ̀ lọ" }
      ]},
      { id: "onset", question: "Báwo ni ó ṣe bẹ̀rẹ̀?", options: [
        { value: "gradual", label: "Díẹ̀-díẹ̀, lójú àkókò" },
        { value: "sudden", label: "Lójijì, láàrín ọjọ́ tàbí ọ̀sẹ̀", redFlag: true },
        { value: "always", label: "Ó ti wà bí èyí láti ìgbà tí mo bá ti ń rántí" }
      ]},
      { id: "context", question: "Ìgbà wo ló máa ń farahàn?", options: [
        { value: "partner", label: "Pẹ̀lú alábàákẹ́gbẹ́ jùlọ" },
        { value: "solo", label: "Nígbà tí mo wà lápá-pẹ̀rẹ̀ jùlọ" },
        { value: "both", label: "Nínú àwọn ipò méjèèjì" }
      ]},
      { id: "meds", question: "Ṣé o ń mu òògùn ọkàn, ìfúnpá ẹ̀jẹ̀, tàbí ìlera ọpọlọ báyìí?", helper: "Ìdáhùn òtítọ́ ṣe pàtàkì — ó máa yí ìjíròrò padà.", options: [
        { value: "yes", label: "Bẹ́ẹ̀ ni" },
        { value: "no", label: "Bẹ́ẹ̀ kọ́" },
        { value: "unsure", label: "N kò dájú" }
      ]},
      { id: "goal", question: "Kí ni yóò mú ìjíròrò yìí jẹ́ olówó iyì fún ọ?", options: [
        { value: "clarity", label: "Ìmọ́lẹ̀ — Mo fẹ́ lóye ohun tó ń ṣẹlẹ̀" },
        { value: "options", label: "Àwọn àyànfẹ́ — Mo fẹ́ mọ ohun tó lè ràn mí lọ́wọ́" },
        { value: "second", label: "Èrò kejì lórí ohun tí mo ti gbìyànjú" },
        { value: "support", label: "Ìrànlọ́wọ́ títí ayérayé" }
      ]}
    ],
    message: {
      intro: "Pẹ̀lẹ́ — Mo fẹ́ ṣètò ìjíròrò àdáni.",
      summaryHeading: "Àkójọpọ̀ kúkúrú nípa ipò mi:",
      goalPrefix: "Ohun tí mo ń retí láti gbà nínú rẹ̀:",
      tierPrefix: "Ibi ìbẹ̀rẹ̀ tí a dámọ̀ràn:",
      labels: { concern: "Ọ̀rọ̀", duration: "Àkókò", onset: "Ìbẹ̀rẹ̀", context: "Ipò", meds: "Lórí òògùn ọkàn / ìfúnpá / ìlera ọpọlọ" },
      dash: "—"
    },
    recommendations: {
      support: { tier: "Ọ̀rọ̀-Oṣù — Ìtọ́jú", reason: "Ó ń wá ìrànlọ́wọ́ títí ayérayé, nítorí náà, ètò oṣù-ní-oṣù yóò fún ọ ní àyẹ̀wò àti àtúnṣe protocol lójú àkókò." },
      premium: { tier: "Premium — Ìjíròrò Jíjinlẹ̀", reason: "Níwọ̀n bí o ti ń ṣe pẹ̀lú èyí pẹ́, ìpàdé tí ó gùn àti protocol àkọsílẹ̀ yóò lọ jìnnà ju ìfọwọ́sowọ́pọ̀ kíákíá." },
      standard: { tier: "Standard — Ìjíròrò ohùn 30 ìṣẹ́jú", reason: "Ìjíròrò gídí ni ọ̀nà tó yára jùlọ láti gbé àwọn àyànfẹ́ wo àti láti rí èyí tó bá ipò rẹ mu." },
      starter: { tier: "Starter — Ìjíròrò àkọsílẹ̀", reason: "Bí ìmọ́lẹ̀ bá jẹ́ erò pàtàkì, ìjíròrò àkọsílẹ̀ tó láti mú ọ dé ibẹ̀ — o sì lè máa ṣe ìmúgbòòrò nígbàkigbà lẹ́yìn-ọ̀-rẹyìn." }
    }
  },
  pricing: {
    kicker: "Iye Owó",
    headlinePre: "Iye owó tó rọrùn.",
    headlineEm: "Igbésẹ̀ tó tẹ̀lé tó ye kooro.",
    payBook: "Sanwó & Ṣètò",
    tiers: [
      { name: "Starter", price: "₦10,000", desc: "Ìjíròrò àkọsílẹ̀", features: ["Ìjíròrò àkọsílẹ̀", "Àwọn ìbéèrè àtẹ̀lé pẹ̀lú", "Ìfojúsọ́nà ìdáhùn 24-wákàtí"] },
      { name: "Standard", price: "₦15,000", desc: "Ìjíròrò ohùn 30-ìṣẹ́jú", features: ["Ìpàdé ohùn àdáni", "Àkójọpọ̀ àkọsílẹ̀", "Ètò igbésẹ̀ pẹ̀lú"] },
      { name: "Premium", price: "₦27,000", desc: "Ìpàdé jíjinlẹ̀ + protocol", features: ["Ìjíròrò gígùn", "Ìwé protocol", "Ìráyè àtẹ̀lé ọjọ́ 7"] }
    ]
  },
  monthly: {
    title: "Ìrànlọ́wọ́ Oṣù-Oṣù",
    sub: "Fún ìtọ́ni títí ayérayé àti àtúnṣe protocol.",
    plans: [
      { name: "Maintenance", price: "₦30,000", features: ["Àyẹ̀wò ọ̀sọ̀ọ̀sẹ̀", "Àtúnṣe protocol", "Ìdáhùn ní ìpàtàkì"] },
      { name: "Intensive", price: "₦40,000", features: ["Ìpè méjì lóṣooṣù", "Ìráyè àkọsílẹ̀ títí ayérayé", "Ìjábọ̀ ìlọsíwájú"] }
    ]
  },
  primers: {
    kicker: "Kà Kí O Tó Ṣètò",
    headlinePre: "O kò ní láti rán ìfiránṣẹ́ síbẹ̀.",
    headlineEm: "Bẹ̀rẹ̀ pẹ̀lú kíkà.",
    sub: "Ọ̀rọ̀ tó hàn kedere tí elegbogi tí yóò gba ìjíròrò rẹ kọ. Kò sí ìpolówó nínú.",
    readBtn: "Kà primer",
    closeBtn: "Tì",
    items: [
      { kicker: "Primer", readTime: "Kíkà 4 ìṣẹ́jú", title: "Kí ni àìlágbára ìbálòpọ̀ jẹ́ ní gangan", excerpt: "ED wọ́pọ̀ púpọ̀ — kì í sì í ṣe binary bí intanẹ́ẹ̀tì ti dámọ̀ràn. Ohun tó ń ṣẹlẹ̀ ní gangan nìyí, àti ohun tí kò ṣe.", body: [
        "Àìlágbára ìbálòpọ̀ ni ìṣòro tó wà nígbàkugbà láti ní tàbí láti pa ìbálòpọ̀ líle dúró tó láti ní ìbálòpọ̀ tí o fẹ́. Ọ̀rọ̀ pàtàkì ni nígbàkigbà — alẹ́ kan tó kùnà kì í ṣe ayẹ̀wò àìsàn.",
        "Lọ́nà ti ẹ̀rọ, ìbálòpọ̀ nílò àwọn nǹkan mẹ́rin tí ó ń ṣiṣẹ́ pọ̀: àwọn àmì ètò iṣan, ṣíṣàn ẹ̀jẹ̀ ìlera, hormone ní ipele tó tọ́, àti ipò ọpọlọ tí kò ní pa ìlànà náà tì. Ìtàlọ́lọ̀ nínú èyíkéyìí lè farahàn bí ED.",
        "Ìdí nìyẹn ti ìjíròrò aláṣèlóye fi ṣe pàtàkì ju ìwé-ìṣe òògùn kíákíá lọ. Tí a bá ń tọ́jú àmì nìkan — láìmọ́ ohun tí ó dí — ó sábà máa ń yọrí sí ìbànújẹ́ àti ọ̀nà gígùn padà."
      ]},
      { kicker: "Primer", readTime: "Kíkà 3 ìṣẹ́jú", title: "Ìṣàdánù kíákíá: kí ni ó wọ́pọ̀, kí ni kò ṣe", excerpt: "Kò sí àkókò àgbáyé. Ìdáhùn òtítọ́ kan àkókò, ìṣàkóso, àti bí ìwọ àti alábàákẹ́gbẹ́ rẹ ṣe rò nípa rẹ̀.", body: [
        "Ìṣàdánù kíákíá sábà máa ń jẹ́ ìṣàdánù tí ó ṣẹlẹ̀ ṣáájú àkókò tí o fẹ́, pẹ̀lú ìṣàkóso díẹ̀, tí ó sì ń yọ ọ́ lẹ́nu tàbí alábàákẹ́gbẹ́ rẹ. Gbogbo mẹ́tẹ̀ẹ̀ta ṣe pàtàkì — àkókò nìkan kò ṣe àlàyé.",
        "Ó lè jẹ́ ti ìgbà gbogbo (láti ìrírí ìbálòpọ̀ àkọ́kọ́) tàbí ti ìpasẹ̀ (ó wá lẹ́yìn). Èyíkéyìí ìlànà ń tọ́ka sí àwọn àfikún ọ̀rọ̀ tí ó yàtọ̀.",
        "Àwọn ọ̀nà ìwà, ríràn ìnira lọ́wọ́, àti nígbà mìíràn òògùn gbogbo ní ipa. Àpapọ̀ tó tọ́ ń dá lórí ìlànà rẹ, kì í ṣe ọ̀rọ̀-ipa-mọ̀-gbogbo."
      ]},
      { kicker: "Ìgbà tí ó tọ́ láti gbé sókè", readTime: "Kíkà 2 ìṣẹ́jú", title: "Ìgbà tí o gbọ́dọ̀ rí dókítà ní ojú-sí-ojú", excerpt: "Àwọn àmì kan tọ́ sí ìdánwò ojú-sí-ojú. Mímọ̀ wọn jẹ́ apá kan láti gba ara rẹ ní iyì.", body: [
        "Ìbẹ̀rẹ̀ òjijì ED — pàápàá lójú ọjọ́ tàbí ọ̀sẹ̀ kan tàbí méjì — lè jẹ́ àmì àkọ́kọ́ ti àwọn ọ̀rọ̀ ọkàn nígbà mìíràn. Ó tọ́ sí ìbẹ̀wò dókítà, kì í ṣe forum thread.",
        "Ìrora nígbà ìbálòpọ̀, ìyípadà tó hàn nínú ìrísí tàbí ìtẹ̀, ẹ̀jẹ̀ níbi tí kò gbọ́dọ̀ wà, tàbí àmì pẹ̀lú ìrora àyà, ìṣubú tàbí orí-fífọ́ tuntun jẹ́ àwọn ìdí láti ríran ní ojú-sí-ojú, láìpẹ́.",
        "Bí o bá ń mu òògùn ọkàn, ìfúnpá ẹ̀jẹ̀, tàbí ọpọlọ tí o sì ti ṣe àkíyèsí ìyípadà láti ìgbà tí o ti bẹ̀rẹ̀ wọn, ìyẹn tún tọ́ sí àyẹ̀wò tó ní ètò pẹ̀lú onísègùn dípò àtúnṣe ara rẹ."
      ]},
      { kicker: "Ìgbé Ayé", readTime: "Kíkà 3 ìṣẹ́jú", title: "Àwọn lever mẹ́rin tí ọ̀pọ̀ ọkùnrin máa ń fojú dín kù", excerpt: "Oorun, ọtí, ìwúwo, àti ìnira kì í ṣe àwọn ọ̀rọ̀ aláìnílò — ni àwọn lever tí ń pinnu ní ìpalọ́lọ́ bí ìtọ́jú yóò ṣe ṣiṣẹ́ tó.", body: [
        "Sísùn tí ó kéré sí wákàtí mẹ́fà nígbàkigbà ń dín testosterone kù àti pé ó dín ìdáhùn ètò iṣan kù. Ọ̀pọ̀ ọkùnrin tí ń lépa ìwé-òògùn yóò ní àǹfààní lórí àkókò sísùn tí ó dúró ṣinṣin lákọ̀ọ́kọ́.",
        "Ọtí jẹ́ olùdín-kù: ohun mímu méjì lè dín ìnira kù, ṣùgbọ́n ó tún ń dín gbogbo nǹkan yòókù kù pẹ̀lú. Ìlànà ṣe pàtàkì ju alẹ́ kan lọ.",
        "Ríru ìwúwo púpọ̀ ní àyíká ìbàdí jẹ́ metabolically active ní ọ̀nà tí ń kan hormone àti àwọn ohun-èlò ẹ̀jẹ̀. Ìpalára ìwọ̀ntúnwọ̀nsì, tí ó dúró ṣinṣin sábà máa ń mú ipa dára síwájú ìdáwọ́lé èyíkéyìí mìíràn.",
        "Ìnira tí ó pẹ́ ń pa ara mọ́ ní ipò tí ó tako ohun tí ìbálòpọ̀ nílò. Lórúkọ rẹ̀ àti dídojú kọ̀ ọ́ kì í ṣe àìnílò — ó jẹ́ ti ẹ̀rọ."
      ]}
    ]
  },
  faq: {
    kicker: "Ìbéèrè Tó Wọ́pọ̀",
    headlinePre: "Àwọn ìbéèrè tí",
    headlineEm: "ọkùnrin kì í béèrè ní gbangba.",
    sub: "Bí ohun kan kò bá sí níbí, rán ìfiránṣẹ́ lórí WhatsApp kí o tó ṣètò. Kò sí ìfipámú láti tẹ̀síwájú.",
    askPrivately: "Béèrè Ní Ìkọ̀kọ̀",
    items: [
      { q: "Ṣé èyí jẹ́ àdáni gangan?", a: "Bẹ́ẹ̀ ni. Ìjíròrò máa ń ṣẹlẹ̀ lórí thread WhatsApp ti ara rẹ pẹ̀lú elegbogi. Kò sí profaílì àjùmọ̀ṣe, kò sí yàrá ìdúró, kò sí ìfijíṣẹ́ ní iwájú-tabili. Orúkọ rẹ kò ní pín, a sì ń pa àkọsílẹ̀ mọ́ ní ìkọ̀kọ̀ gẹ́gẹ́ bí àwọn ojúṣe ọjọ̀gbọ́n." },
      { q: "Ṣé ohunkóhun yóò farahàn lórí ìwé báńkì mi tàbí kádì mi?", a: "A ń san owó nípasẹ̀ PayPal pẹ̀lú àpèjúwe ìpalọ́lọ́. Kò sí ọ̀rọ̀ ìṣègùn tàbí ọ̀rọ̀ pàtó nípa àìsàn yóò farahàn lórí ìwé rẹ — orúkọ pẹpẹ nìkan." },
      { q: "Ṣé elegbogi lè kọ òògùn fún mi?", a: "Bẹ́ẹ̀ kọ́. Pocketpill jẹ́ iṣẹ́ ìjíròrò àti ẹ̀kọ́ elegbogi. A lè ṣàlàyé àwọn àyànfẹ́ ìtọ́jú, ṣàmì àwọn ìṣepọ̀, kí a sì sọ ohun tí onísègùn nílò láti gbọ́ — ṣùgbọ́n onísègùn aláṣẹ ni ó gbọ́dọ̀ kọ òògùn èyíkéyìí." },
      { q: "Kí ni yóò ṣẹlẹ̀ bí ọ̀rọ̀ mi bá jẹ́ ohun tó burú jù?", a: "Apá ìjíròrò ni láti dá ìgbà tí ìdánwò onísègùn ṣe pàtàkì mọ̀. Bí ohunkóhun nínú àyẹ̀wò rẹ bá tọ́ka sí àmì ewu, o yóò gba ìtọ́ni gídí àti ìmọ̀ràn láti rí dókítà ní ojú-sí-ojú." },
      { q: "Mo ń gbé ní ilẹ̀ òkèèrè. Ṣé mo ṣì lè ṣètò?", a: "Bẹ́ẹ̀ ni. A kọ iṣẹ́ náà fún ìjọ Ìwọ̀-Oòrùn Áfríkà ní ilé àti ní gbogbo ilẹ̀ òkèèrè. Ìpàdé máa ń ṣiṣẹ́ lórí WhatsApp àti PayPal, méjèèjì ń ṣiṣẹ́ káàkiri ayé. A máa ń gba àkókò agbègbè sí àkíyèsí." },
      { q: "Báwo ni mo ṣe lè rí ìjíròrò?", a: "Ìṣètò ọjọ́ kan náà sábà máa ń wà, ó dá lórí bí ọ̀pọ̀ ènìyàn ti ń béèrè. Fún ìjíròrò àkọsílẹ̀, ìfojúsọ́nà ìdáhùn jẹ́ láàrín wákàtí 24; ìpàdé ohùn ń ṣètò ní àkókò tó bá àwa méjèèjì mu." },
      { q: "Kí ni yóò ṣẹlẹ̀ bí n kò bá dájú tier wo ni mo nílò?", a: "Bẹ̀rẹ̀ ìfiránṣẹ́ lórí WhatsApp kí o tó san. Ìfọwọ́sowọ́pọ̀ kúkúrú tó láti tọ́ka sí ọ̀nà tó tọ́ — àkọsílẹ̀, ohùn, tàbí jíjinlẹ̀. Kò sí ìfipámú láti ṣe ìmúgbòòrò." },
      { q: "Ṣé ó pọn dandan kí n pín orúkọ gangan mi?", a: "Bẹ́ẹ̀ kọ́. Ọ̀pọ̀ oníbàárà ń lo orúkọ àkọ́kọ́ tàbí àkọ́kọ́. Ohun tó ṣe pàtàkì ni pé ìjíròrò jẹ́ òtítọ́ — kì í ṣe pé fáìlì sọ ẹni tí o jẹ́." }
    ]
  },

  services: {
    kicker: "What We Treat",
    headlinePre: "Specialized care",
    headlineEm: "built for men.",
    items: [
      { title: "Get stronger erections", desc: "Private pharmacist-led guidance for erectile difficulty.", link: "erectile-dysfunction" },
      { title: "Have longer sex", desc: "Actionable protocols for premature ejaculation.", link: "premature-ejaculation" },
      { title: "Understand your health", desc: "Clear answers on lifestyle, testosterone, and performance.", link: "performance" }
    ]
  },
  howItWorks: {
    kicker: "How It Works",
    headlinePre: "Getting started is",
    headlineEm: "easy and private.",
    steps: [
      { num: "01", title: "Message on WhatsApp", desc: "Start a secure, private chat. Answer a few questions about your situation." },
      { num: "02", title: "Get personalized guidance", desc: "Receive a structured review and action plan from a licensed professional." },
      { num: "03", title: "Ongoing support", desc: "Reach out anytime to adjust your protocol or ask follow-up questions." }
    ]
  },
  expertNote: {
    quote: "Our goal is to provide you with a discreet, non-judgmental and convenient space that puts you in control. Every man deserves access to safe, private, and straightforward guidance. We take a multidisciplinary approach, involving doctors, nurses, and specialists when and where necessary to ensure comprehensive care.",
    name: "Dr. J.O, PharmD",
    title: "Founder & Lead Pharmacist"
  },
  closing: {
    kicker: "Nígbà Tí O Bá Ti Ṣetán",
    headlinePre: "Apá tó nira jù ni",
    headlinePost: "ìfiránṣẹ́ àkọ́kọ́.",
    sub: "Bẹ̀rẹ̀ ní ìpalọ́lọ́ lórí WhatsApp. Béèrè ìbéèrè tí o ti ń sún síwájú.",
    cta: "Fi Ìfiránṣẹ́ Ránṣẹ́ Lórí WhatsApp"
  },
  footer: {
    disclaimer: "Pocketpill ń pèsè iṣẹ́ ìjíròrò elegbogi àti ẹ̀kọ́ ìlera. Iṣẹ́ wọ̀nyí jẹ́ alaye, wọn kì í sì í ṣe àyẹ̀wò àìsàn, ìtọ́jú pàjáwìrì, tàbí iṣẹ́ ìwé-òògùn. Àwọn olùmúlò gbọ́dọ̀ wá onísègùn aláṣẹ fún àyẹ̀wò àìsàn, pàjáwìrì, tàbí ìpinnu ìtọ́jú. A ń mú ìpamọ́ dúró gẹ́gẹ́ bí àwọn ojúṣe ọjọ̀gbọ́n àti àwọn ààlà ìpamọ́ àwọn irinṣẹ́ ìbáraẹnisọ̀rọ̀ tí a ń lò."
  },
  langSwitcher: { label: "Èdè" }
};

const ig: Translation = {
  nav: { bookConsult: "Debe Nzụkọ" },
  floating: { startPrivately: "Debe Nzụkọ", aria: "Malite mkparịta ụka WhatsApp na nzuzo" },
  hero: {
    kicker: "Ahụike Ụmụ Nwoke Na Nzuzo · Ọdịda Anyanwụ Afrịka & Mba Ọzọ",
    headlinePre: "Ị buruwo ihe a ogologo oge.",
    headlineEm: "Malite ebe a.",
    body: "Ndụmọdụ na nzuzo nke ndị na-ahụ maka ọgwụ banyere enweghị ike mmekọrịta na ịgbapụ amị ngwa ngwa site na WhatsApp. Ntụziaka doro anya. Mkparịta ụka na nzuzo. Onweghị ọnụụlọ nchere.",
    ctaPrimary: "Malite Na WhatsApp",
    ctaSecondary: "Hụ Ọnụahịa"
  },
  trust: {
    items: [
      { num: "1 n'ime 4", desc: "Ọtụtụ ụmụ nwoke ndị na-eto eto na-akọ banyere nsogbu mmekọrịta n'oge ụfọdụ." },
      { num: "Nzuzo", desc: "A na-eme nzụkọ na nzuzo site n'ụzọ nchekwa." },
      { num: "Ngwa Ngwa", desc: "Nhazi otu ụbọchị nwere ike ịdị, dabere n'ọnụ ọgụgụ ndị na-arịọ." }
    ]
  },
  narrative: {
    kicker: "Ihe Mere Pocketpill Ji Dị",
    headlinePre: "Nsogbu ahụ abụghị mgbe niile ọrịa ahụ.",
    headlineEm: "Ọ bụ ịgbachi nkịtị.",
    paragraphs: [
      "Ọtụtụ ụmụ nwoke na-egbu oge ịnata ndụmọdụ n'ihi na ha chọrọ nzuzo, mmesapụ aka, na mkparịta ụka enweghị ikpe.",
      "E wuru Pocketpill iji belata mgbochi ahụ: ohere ozugbo na nkuzi nke onye na-ahụ maka ọgwụ na ndụmọdụ ahaziri ahazi site na WhatsApp."
    ],
    quote: "Emechara m jụọ ajụjụ ndị m na-ezere, m wee laghachi na nghọta kama mgbagwoju anya.",
    quoteAttr: "Ihe àmà ndị ahịa"
  },
  whyPharmacist: {
    kicker: "Ihe Mere Ị Ga-Eji Tụkwasị Onye Na-Ere Ọgwụ Obi",
    headlinePre: "Nka karịrị",
    headlineEm: "ndụmọdụ ịntanetị.",
    pillars: [
      { title: "Nka Ọgwụ", items: ["Ghọta nhọrọ ọgwụgwọ na ihe nchekwa", "Hụ akara ihe ize ndụ na nsogbu mmekọrịta ọgwụ", "Nyere gị aka izere mmejọ nnwale"] },
      { title: "Ndụmọdụ Mgbọrọgwụ", items: ["Tụlee ụdị ndụ, nrụgide, ọgwụ, na ihe ndị na-emetụta ahụike", "Ajụjụ nyocha ahaziri ahazi", "Aro nzọụkwụ na-eso doro anya"] },
      { title: "Nkwukwa Mgbe Ọ Dị Mkpa", items: ["Mata mgbe nyocha dọkịta dị mkpa", "Ntụziaka maka akara ịdọ aka ná ntị", "Nkwado, ọ bụghị nkechi"] }
    ]
  },
  testimonials: {
    kicker: "N'okwu Ha",
    headlinePre: "Mkparịta ụka dị jụụ.",
    headlineEm: "Nghọta na-adịgide.",
    sub: "E kekọrịtara na ikike. Agbanweela aha na nkọwa iji chebe nzuzo.",
    disclaimer: "Akaebe ndị a na-egosipụta ahụmahụ onye ọ bụla. Ha abụghị nkwa nke nsonaazụ ụfọdụ, ha abụghịkwa ndụmọdụ ahụike.",
    ageLabel: "Afọ",
    themes: { privacy: "Nzuzo", clarity: "Nghọta", trust: "Ntụkwasị obi", whatsapp: "WhatsApp" },
    items: [
      { quote: "M tugharịrị ọnwa ọtụtụ ọnwa n'ihi na ihere mere m. Nzụkọ ahụ bụ na nzuzo, dị jụụ, ma bara uru. Eji m nzọụkwụ doro anya pụta karịa izu ọtụtụ izu n'ịchọ na ịntanetị.", themeKey: "privacy" },
      { quote: "Ihe pụtara ìhè bụ mmesapụ aka. Onweghị ihere, onweghị ikpe — naanị mkparịta ụka kpọmkwem nke nyeere m aka ịghọta ajụjụ m kwesịrị ịjụ.", themeKey: "privacy" },
      { quote: "Echere m ndụmọdụ nkịtị. Ihe m nwetara bụ mkparịta ụka echere echiche nke kwekọrọ na ọnọdụ m. Mmegharị ederede ahụ bara uru karịsịa.", themeKey: "clarity" },
      { quote: "Ọ bụ nghọta ka m na-achọ. Nnọkọ ahụ nyeere m aka ikewa akụkọ ifo n'eziokwu wee nye m ụzọ ka mma iji chee echiche banyere okwu ahụ.", themeKey: "clarity" },
      { quote: "Nzuzo dị mkpa n'ebe m nọ. Ikwu okwu site na WhatsApp mere ka ọ dị mfe ịmalite mkparịta ụka ahụ na mbụ.", themeKey: "whatsapp" },
      { quote: "Enwere m ekele na ọ dịghị ihe na-eme ngwa ngwa. Enwere m ike ịjụ ajụjụ ndị m na-ezere, m nwetakwara azịza kpọmkwem.", themeKey: "trust" },
      { quote: "Ihe m kacha bara uru bụ inwe onye kọwara doro anya banyere ihe ndị na-enye aka, kama ịwụsa na nchepụta ozugbo.", themeKey: "clarity" },
      { quote: "M batara na enweghị ntụkwasị obi. Nzụkọ ahụ dị ka ọkachamara ma kwụsie ike, isi ihe omume nyere m ihe doro anya iji rụọ ọrụ.", themeKey: "trust" },
      { quote: "M na-ebi na mpụga Naijiria m wee na-achọ onye ghọtara nchegbu nzuzo na ịla azụ omenala banyere ịkparịta ụka banyere nke a. Nke ahụ mere ọdịiche.", themeKey: "privacy" },
      { quote: "Mgbanwe kachasị nye m bụ udo nke uche. Akwụsịrị m ịkọ nkọ ma nweta echiche doro anya banyere ihe m ga-eme ọzọ.", themeKey: "whatsapp" }
    ]
  },
  screener: {
    kicker: "Nyochaa Onwe Gị Sekọnd 30",
    headlinePre: "Ị makaghị ebe ị ga-amalite?",
    headlineEm: "Zaa ajụjụ isii nke nzuzo.",
    sub: "Onweghị ihe a na-eziga ebe ọ bụla. Azịza gị na-anọgide na ngwaọrụ a wee mepụta nchịkọta dị mkpụmkpụ ị nwere ike idepụta na WhatsApp — ka ị ghara pịnye akụkụ siri ike ugboro abụọ.",
    privacyNote: "Onweghị akaụntụ. Onweghị nleba anya. Onweghị nchekwa.",
    questionLabel: "Ajụjụ",
    of: "n'ime",
    yourSummary: "Nchịkọta gị",
    resultTitle: "Lee ihe ị ga-eziga.",
    resultSub: "Detuo ya na WhatsApp, ma ọ bụ mepee mkparịta ụka ya tinyere ya.",
    suggestedLabel: "Ebe mmalite a tụrụ aro:",
    redFlagTitle: "Ọ bara uru ịhụ dọkịta n'ihu n'ihu, n'oge na-adịghị anya",
    redFlagBody: "Mmalite mberede nwere ike ịbụ akara mbụ nke ihe metụtara obi mgbe ụfọdụ. Nzụkọ na onye na-ere ọgwụ ka bara uru — mana biko debekwa dọkịta.",
    sendBtn: "Ziga Na WhatsApp",
    copyBtn: "Detuo",
    copiedBtn: "Edetuola",
    back: "← Laghachi",
    startOver: "← Malite Ọzọ",
    questions: [
      { id: "concern", question: "Gịnị butere gị?", options: [
        { value: "ed", label: "Enweghị ike mmekọrịta" },
        { value: "pe", label: "Ịgbapụ amị ngwa ngwa" },
        { value: "both", label: "Ha abụọ" },
        { value: "other", label: "Ihe metụtara, m amaghị otu m ga-akpọ ya" }
      ]},
      { id: "duration", question: "Ogologo oge ole ihe a anọrọ n'uche gị?", options: [
        { value: "weeks", label: "Izu ole na ole" },
        { value: "months", label: "Ọtụtụ ọnwa" },
        { value: "year+", label: "Otu afọ ma ọ bụ karịa" }
      ]},
      { id: "onset", question: "Olee otu o si malite?", options: [
        { value: "gradual", label: "Nwayọọ nwayọọ, n'ihu oge" },
        { value: "sudden", label: "Na mberede, n'ime ụbọchị ole na ole ma ọ bụ izu", redFlag: true },
        { value: "always", label: "Ọ dị otú a kemgbe m chetara" }
      ]},
      { id: "context", question: "Kedu mgbe ọ na-egosipụta?", options: [
        { value: "partner", label: "Ọkachasị mgbe mụ na onye ibe m nọ" },
        { value: "solo", label: "Ọkachasị mgbe naanị m nọ" },
        { value: "both", label: "N'ọnọdụ abụọ" }
      ]},
      { id: "meds", question: "Ị na-aṅụ ọgwụ obi, nrụgide ọbara, ma ọ bụ ọgwụ uche ugbu a?", helper: "Azịza eziokwu dị mkpa — ọ na-agbanwe mkparịta ụka.", options: [
        { value: "yes", label: "Ee" },
        { value: "no", label: "Mba" },
        { value: "unsure", label: "Ejighị m n'aka" }
      ]},
      { id: "goal", question: "Gịnị ga-eme nzụkọ a bara uru nye gị?", options: [
        { value: "clarity", label: "Nghọta — Achọrọ m ịghọta ihe na-eme" },
        { value: "options", label: "Nhọrọ — Achọrọ m ịmata ihe nwere ike inye aka" },
        { value: "second", label: "Echiche nke abụọ banyere ihe m gbalịrị" },
        { value: "support", label: "Nkwado na-aga n'ihu n'oge" }
      ]}
    ],
    message: {
      intro: "Ndewo — Achọrọ m idebe nzụkọ na nzuzo.",
      summaryHeading: "Nchịkọta dị mkpụmkpụ banyere ọnọdụ m:",
      goalPrefix: "Ihe m na-atụ anya inweta na ya:",
      tierPrefix: "Ebe mmalite a tụrụ aro:",
      labels: { concern: "Nchegbu", duration: "Ogologo oge", onset: "Mmalite", context: "Ọnọdụ", meds: "Na-aṅụ ọgwụ obi / nrụgide ọbara / ọgwụ uche" },
      dash: "—"
    },
    recommendations: {
      support: { tier: "Kwa Ọnwa — Mmezi", reason: "Ị na-achọ nkwado na-aga n'ihu, ya mere nhazi kwa ọnwa ga-enye gị nyocha na mgbanwe usoro n'ihu oge." },
      premium: { tier: "Premium — Nzụkọ Miri Emi", reason: "Ebe ị na-arụ ọrụ na nke a ogologo oge, oge nzụkọ ogologo na usoro ederede ga-aga karịa mkparịta ụka ngwa ngwa." },
      standard: { tier: "Standard — Nzụkọ olu nkeji 30", reason: "Mkparịta ụka ezi okwu bụ ụzọ kacha ngwa ngwa iji jegharịa nhọrọ ma chọpụta nke kwekọrọ na ọnọdụ gị." },
      starter: { tier: "Starter — Nzụkọ ederede", reason: "Ọ bụrụ na nghọta bụ isi ebumnuche, nzụkọ ederede ezuru iji buru gị ruo ebe ahụ — ị nwekwara ike ịkwalite mgbe ọ bụla." }
    }
  },
  pricing: {
    kicker: "Ọnụahịa",
    headlinePre: "Ọnụahịa dị mfe.",
    headlineEm: "Nzọụkwụ doro anya.",
    payBook: "Kwụọ Ụgwọ & Debe",
    tiers: [
      { name: "Starter", price: "₦10,000", desc: "Nzụkọ ederede", features: ["Nzụkọ ederede", "Ajụjụ nleghachi anya so", "Ebumnuche nzaghachi awa 24"] },
      { name: "Standard", price: "₦15,000", desc: "Nzụkọ olu nkeji 30", features: ["Oge olu na nzuzo", "Nchịkọta ederede", "Atụmatụ omume so"] },
      { name: "Premium", price: "₦27,000", desc: "Nzụkọ miri emi + usoro", features: ["Nzụkọ ogologo", "Akwụkwọ usoro", "Ohere nleghachi anya ụbọchị 7"] }
    ]
  },
  monthly: {
    title: "Nkwado Kwa Ọnwa",
    sub: "Maka ndụmọdụ na-aga n'ihu na nrụzi usoro.",
    plans: [
      { name: "Maintenance", price: "₦30,000", features: ["Nyocha kwa izu", "Mgbanwe usoro", "Nzaghachi nke mbụ"] },
      { name: "Intensive", price: "₦40,000", features: ["Oku abụọ kwa ọnwa", "Ohere ederede na-aga n'ihu", "Akụkọ ọganihu"] }
    ]
  },
  primers: {
    kicker: "Gụọ Tupu Ị Debe",
    headlinePre: "Ị gaghị ezigharịrị ozi.",
    headlineEm: "Malite site n'ịgụ.",
    sub: "Akwụkwọ ntụzịaka na asụsụ doro anya nke otu onye na-ere ọgwụ nke ga-ewere nzụkọ gị dere. Onweghị ire ahịa n'ime ya.",
    readBtn: "Gụọ akwụkwọ",
    closeBtn: "Mechie",
    items: [
      { kicker: "Nkuzi", readTime: "Nkeji 4 ịgụ", title: "Ihe enweghị ike mmekọrịta nwoke bụ n'eziokwu", excerpt: "ED jukarịrị karịa — ọ bụghịkwa binary dị ka ịntanetị na-egosi. Lee ihe na-eme n'eziokwu, na ihe na-emeghị.", body: [
        "Enweghị ike mmekọrịta nwoke bụ ihe isi ike mgbe niile inweta ma ọ bụ idobe akwara mmekọrịta siri ike maka ụdị mmekọrịta ị chọrọ. Okwu dị mkpa bụ mgbe niile — abalị ọjọọ otu abụghị nyocha.",
        "Site na ụzọ ngwa, mmekọrịta chọrọ ihe anọ na-arụkọ ọrụ ọnụ: akara akwara ọkpụkpụ, ọbara na-eru ahụike, hormones n'ọnọdụ nkịtị, na ọnọdụ uche nke na-adịghị akpọchi usoro ahụ. Mmebi n'otu n'ime ha nwere ike igosipụta ka ED.",
        "Ọ bụ ya mere mkparịta ụka echere echiche ji dị mkpa karịa ọgwụ ngwa ngwa. Ọgwụgwọ naanị akara — n'amaghị nke lever rapaara — na-ebutekarị nkụda mmụọ na ụzọ ogologo ịlaghachi azụ."
      ]},
      { kicker: "Nkuzi", readTime: "Nkeji 3 ịgụ", title: "Ịgbapụ amị ngwa ngwa: ihe bụ nkịtị, ihe abụghị", excerpt: "Onweghị stopwatch zuru ụwa ọnụ. Azịza eziokwu na-agụnye oge, njikwa, na otú gị na onye ibe gị si eche maka ya.", body: [
        "Ịgbapụ amị ngwa ngwa na-akọwakarị dị ka ịgbapụ amị nke na-eme tupu ị chọọ, na obere mmetụta nke njikwa, nke na-enye gị ma ọ bụ onye ibe gị nsogbu. Ha atọ niile dị mkpa — oge naanị akọwapụtaghị ya.",
        "Ọ nwere ike ịbụ ndụ niile (kemgbe ahụmahụ mmekọrịta mbụ) ma ọ bụ enwetara (pụtara ma e mesịa). Usoro ọ bụla na-egosi ihe ndị dị iche na ebe mmalite dị iche maka ndụmọdụ.",
        "Usoro omume, ịkwado nchekasị, na mgbe ụfọdụ ọgwụ niile nwere ọrụ. Ngwakọta ziri ezi dabere na usoro gị, ọ bụghị otu nha-dabara-ihe niile."
      ]},
      { kicker: "Mgbe ị ga-akwalite", readTime: "Nkeji 2 ịgụ", title: "Mgbe ị ga-ahụ dọkịta n'ihu n'ihu", excerpt: "Akara ụfọdụ kwesịrị nyocha n'ihu n'ihu. Ịmata ha bụ akụkụ nke iji onwe gị kpọrọ ihe.", body: [
        "Mmalite mberede ED — karịsịa n'ime ụbọchị ole na ole ma ọ bụ izu abụọ — nwere ike mgbe ụfọdụ ịbụ akara mbụ nke nsogbu obi. Ọ kwesịrị nleta dọkịta, ọ bụghị forum thread.",
        "Mgbu n'oge mmekọrịta, mgbanwe doro anya na ọdịdị ma ọ bụ ngwakọ, ọbara n'ebe ọ na-ekwesịghị ịdị, ma ọ bụ akara ya na mgbu obi, ịda mba ma ọ bụ isi mgbu ọhụrụ niile bụ ihe mere ka a hụ gị n'ihu n'ihu, n'oge na-adịghị anya.",
        "Ọ bụrụ na ị na-aṅụ ọgwụ obi, nrụgide ọbara, ma ọ bụ ọgwụ uche ma na-ahụ mgbanwe kemgbe ị malitere ha, nke ahụ kwesịkwara nyocha ahaziri ahazi na onye na-ede ọgwụ kama ịhazi onwe."
      ]},
      { kicker: "Ụdị Ndụ", readTime: "Nkeji 3 ịgụ", title: "Lever anọ ndị ọtụtụ ụmụ nwoke na-eleda anya", excerpt: "Ụra, mmanya, ibu, na nrụgide abụghị okwu efu — ha bụ lever ndị na-ekpebi na nzuzo otú ọgwụgwọ ga-arụ ọrụ.", body: [
        "Ụra n'okpuru awa isii mgbe niile na-ebelata testosterone ma na-ebelata nzaghachi akwara. Ọtụtụ ụmụ nwoke na-achụ ọgwụ ga-erite uru karịa site na oge ụra siri ike na mbụ.",
        "Mmanya bụ depressant: mmanya ole na ole nwere ike iwepụ nrụgide, mana ọ na-ewepụkwa ọnụ ihe niile ọzọ. Usoro dị mkpa karịa abalị ọ bụla.",
        "Iburu ibu karịrị akarị n'akụkụ etiti bụ metabolically active n'ụzọ ndị na-emetụta hormone na akwara ọbara. Mfu dị nta, nke na-adịgide na-akawanye arụmọrụ tupu mmebanye ọ bụla ọzọ.",
        "Nrụgide na-adịgide na-edebe ahụ n'ọnọdụ bụ nke megidere ihe mmasị chọrọ. Ịkpọ ya na ileba anya ya abụghị ihe nro — ọ bụ nke ngwa."
      ]}
    ]
  },
  faq: {
    kicker: "Ajụjụ Ndị A Na-Ajụkarị",
    headlinePre: "Ajụjụ ndị",
    headlineEm: "ụmụ nwoke na-adịghị ajụ n'olu dara ụda.",
    sub: "Ọ bụrụ na ihe a na-ekpuchighị ya ebe a, ziga ozi na WhatsApp tupu ị debe. Onweghị mkpa ịga n'ihu.",
    askPrivately: "Jụọ Na Nzuzo",
    items: [
      { q: "Nke a ọ bụ na nzuzo n'ezie?", a: "Ee. Nzụkọ na-eme na thread WhatsApp gị nke onwe gị na onye na-ere ọgwụ. Onweghị profaịlụ ọha, onweghị ọnụụlọ nchere, onweghị nyefe n'ihu tebụl. A naghị ekekọrịta aha gị, a na-edebekwa edemede n'ọnọdụ nzuzo dịka ọrụ ọkachamara." },
      { q: "Ihe ọ bụla ọ ga-egosipụta na akwụkwọ ụlọ akụ ma ọ bụ kaadị m?", a: "A na-eji PayPal akwụ ụgwọ na nkọwa nzuzo. Onweghị okwu ahụike ma ọ bụ nke metụtara ọnọdụ ga-egosipụta na akwụkwọ gị — naanị aha pụlụfọm." },
      { q: "Onye na-ere ọgwụ nwere ike ide ọgwụ?", a: "Mba. Pocketpill bụ ọrụ nzụkọ na nkuzi nke onye na-ere ọgwụ. Anyị nwere ike ịkọwa nhọrọ ọgwụgwọ, gosipụta mmekọrịta, gwa gị ihe onye na-ede ọgwụ chọrọ ịnụ — mana dọkịta nwere ikike ga-ewepụta ọgwụ ọ bụla." },
      { q: "Gịnị ma ọ bụrụ na nsogbu m bụ ihe siri ike karịa?", a: "Otu akụkụ nke nzụkọ bụ ịchọpụta mgbe nyocha dọkịta dị mkpa. Ọ bụrụ na ihe ọ bụla na nyocha gị na-egosi akara ihe ize ndụ, ị ga-enweta ntụziaka doro anya na aro ka ị hụ dọkịta n'ihu n'ihu." },
      { q: "M na-ebi na mpụga Naịjirịa. Enwere m ike idebe?", a: "Ee. E wuru ọrụ ahụ maka obodo Ọdịda Anyanwụ Afrịka n'ụlọ na n'ofe mba ọzọ. Oge na-aga na WhatsApp na PayPal, ha abụọ na-arụ ọrụ zuru ụwa ọnụ. A na-ahazi mpaghara oge mgbe a na-ahazi." },
      { q: "Olee ngwa ngwa enwere m ike ịhụ?", a: "Nhazi otu ụbọchị na-adịkarị, dabere n'ọnụ ọgụgụ. Maka nzụkọ ederede ebumnuche nzaghachi bụ n'ime awa 24; nzụkọ olu na-ahazi n'oge dabara anyị abụọ." },
      { q: "Gịnị ma ọ bụrụ na ejighị m n'aka tier nke m chọrọ?", a: "Malite ozi na WhatsApp tupu ị kwụọ ụgwọ. Mkparịta ụka dị mkpụmkpụ ezuru iji tụọ aro ụzọ ziri ezi — ederede, olu, ma ọ bụ miri emi. Onweghị nrụgide ịkwalite." },
      { q: "Ọ ga-adị mkpa kekọrịta aha m n'ezie?", a: "Mba. Ọtụtụ ndị ahịa na-eji aha mbụ ma ọ bụ akara mbụ. Ihe dị mkpa bụ na mkparịta ụka bụ eziokwu — ọ bụghị na faịlụ kwuru onye ị bụ." }
    ]
  },

  services: {
    kicker: "What We Treat",
    headlinePre: "Specialized care",
    headlineEm: "built for men.",
    items: [
      { title: "Get stronger erections", desc: "Private pharmacist-led guidance for erectile difficulty.", link: "erectile-dysfunction" },
      { title: "Have longer sex", desc: "Actionable protocols for premature ejaculation.", link: "premature-ejaculation" },
      { title: "Understand your health", desc: "Clear answers on lifestyle, testosterone, and performance.", link: "performance" }
    ]
  },
  howItWorks: {
    kicker: "How It Works",
    headlinePre: "Getting started is",
    headlineEm: "easy and private.",
    steps: [
      { num: "01", title: "Message on WhatsApp", desc: "Start a secure, private chat. Answer a few questions about your situation." },
      { num: "02", title: "Get personalized guidance", desc: "Receive a structured review and action plan from a licensed professional." },
      { num: "03", title: "Ongoing support", desc: "Reach out anytime to adjust your protocol or ask follow-up questions." }
    ]
  },
  expertNote: {
    quote: "Our goal is to provide you with a discreet, non-judgmental and convenient space that puts you in control. Every man deserves access to safe, private, and straightforward guidance. We take a multidisciplinary approach, involving doctors, nurses, and specialists when and where necessary to ensure comprehensive care.",
    name: "Dr. J.O, PharmD",
    title: "Founder & Lead Pharmacist"
  },
  closing: {
    kicker: "Mgbe Ị Dị Njikere",
    headlinePre: "Akụkụ kacha sie ike bụ",
    headlinePost: "ozi mbụ.",
    sub: "Malite na nzuzo na WhatsApp. Jụọ ajụjụ nke ị nọ na-eyigharị.",
    cta: "Ziga Ozi Na WhatsApp"
  },
  footer: {
    disclaimer: "Pocketpill na-enye ọrụ nzụkọ na nkuzi ahụike nke onye na-ere ọgwụ. Ọrụ ndị a bụ ozi, ha abụghịkwa nyocha, nlekọta mberede, ma ọ bụ ọrụ ide ọgwụ. Ndị ọrụ kwesịrị ịchọ dọkịta nwere ikike maka nyocha, mberede, ma ọ bụ mkpebi ọgwụgwọ. A na-ejikwa nzuzo na-akwado dịka ọrụ ọkachamara na oke nzuzo nke ngwa nkwukọrịta a na-eji."
  },
  langSwitcher: { label: "Asụsụ" }
};

const fr: Translation = {
  nav: { bookConsult: "Réserver" },
  floating: { startPrivately: "Réserver", aria: "Démarrer une conversation WhatsApp privée" },
  hero: {
    kicker: "Santé masculine privée · Afrique de l'Ouest & diaspora",
    headlinePre: "Vous portez cela depuis trop longtemps.",
    headlineEm: "Commencez ici.",
    body: "Consultations privées menées par un pharmacien pour la dysfonction érectile et l'éjaculation précoce, par WhatsApp. Conseils clairs. Communication confidentielle. Aucune salle d'attente.",
    ctaPrimary: "Commencer sur WhatsApp",
    ctaSecondary: "Voir les tarifs"
  },
  trust: {
    items: [
      { num: "1 sur 4", desc: "Beaucoup de jeunes hommes signalent des difficultés érectiles à un moment donné." },
      { num: "Privé", desc: "Les consultations se déroulent confidentiellement par des canaux sécurisés." },
      { num: "Rapide", desc: "Une planification le jour même peut être disponible selon la demande." }
    ]
  },
  narrative: {
    kicker: "Pourquoi Pocketpill existe",
    headlinePre: "Le problème n'est souvent pas la condition.",
    headlineEm: "C'est le silence.",
    paragraphs: [
      "Beaucoup d'hommes tardent à chercher des conseils éclairés parce qu'ils veulent de la confidentialité, de la discrétion et une conversation sans jugement.",
      "Pocketpill est conçu pour abaisser cette barrière : un accès direct à l'éducation et aux conseils structurés d'un pharmacien, par WhatsApp."
    ],
    quote: "J'ai enfin posé les questions que j'évitais, et je suis reparti avec de la clarté plutôt que de la confusion.",
    quoteAttr: "Témoignage client"
  },
  whyPharmacist: {
    kicker: "Pourquoi faire confiance à un pharmacien",
    headlinePre: "Une expertise qui dépasse",
    headlineEm: "les conseils d'internet.",
    pillars: [
      { title: "Expertise médicamenteuse", items: ["Comprendre les options de traitement courantes et la sécurité", "Repérer les signaux d'alerte et les interactions", "Vous éviter les erreurs d'essais et erreurs"] },
      { title: "Recherche des causes profondes", items: ["Examiner mode de vie, stress, médicaments et facteurs de santé", "Questions de dépistage structurées", "Recommandations claires pour la suite"] },
      { title: "Orientation si nécessaire", items: ["Savoir quand une évaluation médicale s'impose", "Conseils d'escalade pour les signaux d'alerte", "Soutien, pas suppositions"] }
    ]
  },
  testimonials: {
    kicker: "Dans leurs mots",
    headlinePre: "Conversations discrètes.",
    headlineEm: "Clarté durable.",
    sub: "Partagés avec autorisation. Les noms et détails ont été modifiés pour protéger la vie privée.",
    disclaimer: "Les témoignages reflètent des expériences individuelles. Ils ne constituent ni des promesses de résultats ni des conseils médicaux.",
    ageLabel: "Âge",
    themes: { privacy: "Confidentialité", clarity: "Clarté", trust: "Confiance", whatsapp: "WhatsApp" },
    items: [
      { quote: "J'ai retardé pendant des mois par gêne. La consultation était privée, calme et pratique. J'en suis ressorti avec des étapes plus claires qu'après des semaines de recherches en ligne.", themeKey: "privacy" },
      { quote: "Ce qui m'a marqué, c'est la discrétion. Aucune gêne, aucun jugement — juste une conversation directe qui m'a aidé à savoir quelles questions poser.", themeKey: "privacy" },
      { quote: "Je m'attendais à des conseils génériques. J'ai eu une conversation réfléchie, adaptée à ma situation. Le suivi écrit a été particulièrement utile.", themeKey: "clarity" },
      { quote: "Je cherchais surtout de la clarté. La séance m'a aidé à séparer les mythes des faits et à structurer ma façon de penser le sujet.", themeKey: "clarity" },
      { quote: "La confidentialité comptait pour moi. Pouvoir échanger via WhatsApp a rendu beaucoup plus facile le simple fait de commencer.", themeKey: "whatsapp" },
      { quote: "J'ai apprécié que rien ne soit précipité. J'ai pu poser les questions que j'évitais et obtenir des réponses directes.", themeKey: "trust" },
      { quote: "Ce que j'ai le plus apprécié, c'est qu'on m'explique clairement les facteurs contributifs possibles, plutôt que de sauter aux conclusions.", themeKey: "clarity" },
      { quote: "Je suis arrivé sceptique. La consultation était professionnelle et ancrée, et les actions concrètes m'ont donné quelque chose de tangible.", themeKey: "trust" },
      { quote: "Je vis hors du Nigéria et je cherchais quelqu'un qui comprenne à la fois les enjeux de confidentialité et la pudeur culturelle. Cela a fait la différence.", themeKey: "privacy" },
      { quote: "Le plus grand changement pour moi a été la tranquillité d'esprit. J'ai cessé de deviner et j'ai eu une idée plus claire de la suite.", themeKey: "whatsapp" }
    ]
  },
  screener: {
    kicker: "Auto-évaluation 30 secondes",
    headlinePre: "Pas sûr par où commencer ?",
    headlineEm: "Répondez à six questions privées.",
    sub: "Rien n'est envoyé nulle part. Vos réponses restent sur cet appareil et produisent un court résumé que vous pouvez copier dans WhatsApp — pour ne pas avoir à taper deux fois ce qui est difficile.",
    privacyNote: "Aucun compte. Aucun suivi. Aucun stockage.",
    questionLabel: "Question",
    of: "sur",
    yourSummary: "Votre résumé",
    resultTitle: "Voici ce qu'il faut envoyer.",
    resultSub: "Copiez-le dans WhatsApp, ou ouvrez la conversation pré-remplie.",
    suggestedLabel: "Point de départ suggéré :",
    redFlagTitle: "Voyez un médecin en personne, rapidement",
    redFlagBody: "Une apparition soudaine peut parfois être un signal précoce d'un problème cardiovasculaire. Une consultation pharmacien reste utile — mais réservez aussi un médecin.",
    sendBtn: "Envoyer sur WhatsApp",
    copyBtn: "Copier",
    copiedBtn: "Copié",
    back: "← Retour",
    startOver: "← Recommencer",
    questions: [
      { id: "concern", question: "Qu'est-ce qui vous amène ?", options: [
        { value: "ed", label: "Difficulté érectile" },
        { value: "pe", label: "Éjaculation précoce" },
        { value: "both", label: "Les deux" },
        { value: "other", label: "Quelque chose de lié, sans savoir comment le nommer" }
      ]},
      { id: "duration", question: "Depuis combien de temps cela vous préoccupe ?", options: [
        { value: "weeks", label: "Quelques semaines" },
        { value: "months", label: "Plusieurs mois" },
        { value: "year+", label: "Un an ou plus" }
      ]},
      { id: "onset", question: "Comment cela a-t-il commencé ?", options: [
        { value: "gradual", label: "Progressivement, dans le temps" },
        { value: "sudden", label: "Soudainement, en jours ou semaines", redFlag: true },
        { value: "always", label: "C'est ainsi depuis toujours" }
      ]},
      { id: "context", question: "Dans quels moments cela apparaît ?", options: [
        { value: "partner", label: "Surtout avec un/une partenaire" },
        { value: "solo", label: "Surtout seul" },
        { value: "both", label: "Dans les deux situations" }
      ]},
      { id: "meds", question: "Prenez-vous actuellement des médicaments cardiaques, antihypertenseurs ou psychiatriques ?", helper: "Une réponse honnête compte — elle change la conversation.", options: [
        { value: "yes", label: "Oui" },
        { value: "no", label: "Non" },
        { value: "unsure", label: "Je ne sais pas" }
      ]},
      { id: "goal", question: "Qu'est-ce qui rendrait cette consultation utile pour vous ?", options: [
        { value: "clarity", label: "De la clarté — comprendre ce qui se passe" },
        { value: "options", label: "Des options — savoir ce qui pourrait aider" },
        { value: "second", label: "Un deuxième avis sur quelque chose déjà essayé" },
        { value: "support", label: "Un suivi continu dans le temps" }
      ]}
    ],
    message: {
      intro: "Bonjour — je souhaite réserver une consultation privée.",
      summaryHeading: "Bref résumé de ma situation :",
      goalPrefix: "Ce que j'espère en retirer :",
      tierPrefix: "Point de départ suggéré :",
      labels: { concern: "Préoccupation", duration: "Durée", onset: "Apparition", context: "Contexte", meds: "Sous traitement cardiaque / tension / psychiatrique" },
      dash: "—"
    },
    recommendations: {
      support: { tier: "Mensuel — Maintien", reason: "Vous cherchez un suivi continu : un format mensuel offre des points réguliers et des ajustements de protocole dans le temps." },
      premium: { tier: "Premium — Consultation approfondie", reason: "Étant donné la durée du sujet, une séance plus longue avec un protocole écrit ira plus loin qu'un échange rapide." },
      standard: { tier: "Standard — Consultation vocale 30 min", reason: "Une vraie conversation est le moyen le plus rapide d'examiner les options et de trouver celle qui vous convient." },
      starter: { tier: "Starter — Consultation écrite", reason: "Si la clarté est l'objectif principal, une consultation écrite suffit — vous pourrez toujours évoluer plus tard." }
    }
  },
  pricing: {
    kicker: "Tarifs",
    headlinePre: "Tarifs simples.",
    headlineEm: "Étapes claires.",
    payBook: "Payer & Réserver",
    tiers: [
      { name: "Starter", price: "₦10 000", desc: "Consultation écrite", features: ["Consultation par écrit", "Questions de suivi incluses", "Réponse sous 24 h"] },
      { name: "Standard", price: "₦15 000", desc: "Consultation vocale 30 min", features: ["Séance vocale privée", "Résumé écrit", "Plan d'action inclus"] },
      { name: "Premium", price: "₦27 000", desc: "Séance approfondie + protocole", features: ["Consultation longue", "Document de protocole", "Accès suivi 7 jours"] }
    ]
  },
  monthly: {
    title: "Suivi mensuel",
    sub: "Pour un accompagnement continu et l'ajustement du protocole.",
    plans: [
      { name: "Maintien", price: "₦30 000", features: ["Points hebdomadaires", "Ajustements du protocole", "Réponse prioritaire"] },
      { name: "Intensif", price: "₦40 000", features: ["Deux appels mensuels", "Accès écrit continu", "Rapports d'évolution"] }
    ]
  },
  primers: {
    kicker: "À lire avant de réserver",
    headlinePre: "Vous n'avez pas à écrire tout de suite.",
    headlineEm: "Commencez par lire.",
    sub: "Des notes en langage simple, écrites par le pharmacien qui prendrait votre consultation. Aucun argument commercial dans le texte.",
    readBtn: "Lire la note",
    closeBtn: "Fermer",
    items: [
      { kicker: "Note", readTime: "Lecture 4 min", title: "Ce qu'est vraiment la dysfonction érectile", excerpt: "La DE est bien plus fréquente — et bien moins binaire — que ce que suggère internet. Voici ce qui se passe vraiment, et ce qui ne se passe pas.", body: [
        "La dysfonction érectile est la difficulté constante à obtenir ou à maintenir une érection suffisante pour le rapport souhaité. Le mot-clé est constante — une nuit difficile n'est pas un diagnostic.",
        "Mécaniquement, une érection requiert quatre choses qui fonctionnent ensemble : signaux nerveux, bonne circulation sanguine, hormones dans la norme, et état psychologique qui ne court-circuite pas le processus. Une défaillance dans l'un de ces éléments peut se manifester comme une DE.",
        "C'est pourquoi une conversation réfléchie compte plus qu'une ordonnance rapide. Traiter seulement le symptôme — sans comprendre quel levier est bloqué — mène souvent à la déception et à un chemin de retour plus long."
      ]},
      { kicker: "Note", readTime: "Lecture 3 min", title: "Éjaculation précoce : ce qui est normal, ce qui ne l'est pas", excerpt: "Il n'y a pas de chronomètre universel. La réponse honnête tient au temps, au contrôle et à la perception du couple.", body: [
        "L'éjaculation précoce se définit habituellement comme une éjaculation qui survient plus tôt que vous ne le souhaitez, avec peu de contrôle, et qui vous gêne, vous ou votre partenaire. Ces trois éléments comptent — le temps seul ne définit rien.",
        "Elle peut être à vie (depuis les premières expériences sexuelles) ou acquise (apparue plus tard). Chaque profil oriente vers des facteurs et des points de départ différents.",
        "Techniques comportementales, prise en charge de l'anxiété et, dans certains cas, médicaments ont chacun leur rôle. La bonne combinaison dépend de votre profil, pas d'une recette unique."
      ]},
      { kicker: "Quand consulter", readTime: "Lecture 2 min", title: "Quand voir un médecin en personne", excerpt: "Certains signaux méritent une évaluation en face à face. Les connaître, c'est se prendre au sérieux.", body: [
        "Une apparition soudaine de DE — surtout en quelques jours ou semaines — peut parfois être un signe précoce de problème cardiovasculaire. Cela mérite une consultation médicale, pas un fil de forum.",
        "Douleur lors de l'érection, modification visible de la forme ou de la courbure, présence de sang là où il ne devrait pas y en avoir, ou symptômes accompagnés de douleur thoracique, malaise ou maux de tête nouveaux : autant de raisons de consulter en personne, rapidement.",
        "Si vous prenez des médicaments cardiaques, antihypertenseurs ou psychiatriques et avez remarqué un changement depuis leur démarrage, cela mérite aussi une revue structurée avec un prescripteur, plutôt qu'un ajustement personnel."
      ]},
      { kicker: "Mode de vie", readTime: "Lecture 3 min", title: "Les quatre leviers que la plupart des hommes sous-estiment", excerpt: "Sommeil, alcool, poids et stress ne sont pas des banalités — ce sont les leviers qui décident discrètement de l'efficacité du traitement.", body: [
        "Dormir moins de six heures de manière régulière abaisse la testostérone et atténue la réponse nerveuse. Beaucoup d'hommes en quête d'une pilule profiteraient d'abord d'un horaire de coucher fixe.",
        "L'alcool est dépresseur : deux verres peuvent atténuer l'anxiété, mais ils atténuent aussi tout le reste. C'est le schéma qui compte plus qu'une soirée isolée.",
        "Un excès de poids significatif autour de la taille est métaboliquement actif d'une façon qui touche hormones et vaisseaux. Une perte modeste et durable améliore souvent la fonction avant toute autre intervention.",
        "Un stress chronique maintient le corps dans un état contraire à ce qu'exige le désir. Le nommer et s'en occuper n'est pas un détail — c'est mécanique."
      ]}
    ]
  },
  faq: {
    kicker: "Questions fréquentes",
    headlinePre: "Les questions",
    headlineEm: "que les hommes ne posent pas à voix haute.",
    sub: "Si quelque chose n'est pas couvert ici, écrivez sur WhatsApp avant de réserver. Aucune obligation de poursuivre.",
    askPrivately: "Demander en privé",
    items: [
      { q: "Est-ce vraiment privé ?", a: "Oui. Les consultations se déroulent dans votre fil WhatsApp personnel avec le pharmacien. Pas de profil public, pas de salle d'attente, pas de passage par un accueil. Votre nom n'est jamais partagé, et les notes sont conservées confidentiellement, conformément aux obligations professionnelles applicables." },
      { q: "Est-ce que quelque chose apparaîtra sur mon relevé bancaire ?", a: "Les paiements sont traités par PayPal sous un libellé discret. Aucun terme médical ou spécifique à votre situation n'apparaît sur votre relevé — uniquement le nom de la plateforme." },
      { q: "Le pharmacien peut-il prescrire des médicaments ?", a: "Non. Pocketpill est un service de consultation et d'éducation pharmaceutique. Nous pouvons expliquer les options de traitement, signaler les interactions et vous dire ce qu'un prescripteur a besoin d'entendre — mais seul un médecin habilité peut émettre une ordonnance." },
      { q: "Et si mon problème s'avère plus sérieux ?", a: "Identifier les situations qui nécessitent une évaluation médicale fait partie de la consultation. Si quelque chose dans votre dépistage signale un drapeau rouge, vous recevrez des conseils clairs d'orientation et une recommandation de voir un médecin en personne." },
      { q: "Je vis hors du Nigéria. Puis-je quand même réserver ?", a: "Oui. Le service est conçu pour la communauté ouest-africaine au pays et dans la diaspora. Les séances se font sur WhatsApp et PayPal, qui fonctionnent partout. Les fuseaux horaires sont pris en compte lors de la planification." },
      { q: "Sous quel délai puis-je être vu ?", a: "Une planification le jour même est souvent possible selon la demande. Pour les consultations écrites, l'objectif de réponse est de 24 h ; les séances vocales sont fixées à un horaire qui convient aux deux parties." },
      { q: "Et si je ne sais pas quel niveau choisir ?", a: "Commencez par un message sur WhatsApp avant de payer. Un bref échange suffit pour vous orienter vers le bon format — écrit, vocal ou approfondi. Aucune pression pour passer à un niveau supérieur." },
      { q: "Dois-je communiquer mon vrai nom ?", a: "Non. Beaucoup de clients utilisent un prénom ou une initiale. Ce qui compte, c'est l'honnêteté de la conversation — pas ce que dit le dossier." }
    ]
  },

  services: {
    kicker: "What We Treat",
    headlinePre: "Specialized care",
    headlineEm: "built for men.",
    items: [
      { title: "Get stronger erections", desc: "Private pharmacist-led guidance for erectile difficulty.", link: "erectile-dysfunction" },
      { title: "Have longer sex", desc: "Actionable protocols for premature ejaculation.", link: "premature-ejaculation" },
      { title: "Understand your health", desc: "Clear answers on lifestyle, testosterone, and performance.", link: "performance" }
    ]
  },
  howItWorks: {
    kicker: "How It Works",
    headlinePre: "Getting started is",
    headlineEm: "easy and private.",
    steps: [
      { num: "01", title: "Message on WhatsApp", desc: "Start a secure, private chat. Answer a few questions about your situation." },
      { num: "02", title: "Get personalized guidance", desc: "Receive a structured review and action plan from a licensed professional." },
      { num: "03", title: "Ongoing support", desc: "Reach out anytime to adjust your protocol or ask follow-up questions." }
    ]
  },
  expertNote: {
    quote: "Our goal is to provide you with a discreet, non-judgmental and convenient space that puts you in control. Every man deserves access to safe, private, and straightforward guidance. We take a multidisciplinary approach, involving doctors, nurses, and specialists when and where necessary to ensure comprehensive care.",
    name: "Dr. J.O, PharmD",
    title: "Founder & Lead Pharmacist"
  },
  closing: {
    kicker: "Quand vous êtes prêt",
    headlinePre: "Le plus dur, c'est",
    headlinePost: "le premier message.",
    sub: "Commencez en privé sur WhatsApp. Posez la question que vous repoussez.",
    cta: "Écrire sur WhatsApp"
  },
  footer: {
    disclaimer: "Pocketpill propose des consultations pharmaceutiques et de l'éducation à la santé. Les services sont à visée informative et ne constituent ni diagnostic, ni soins d'urgence, ni service de prescription. Les utilisateurs doivent consulter un médecin habilité pour tout diagnostic, urgence ou décision de traitement. La confidentialité est gérée conformément aux obligations professionnelles applicables et aux limites des outils de communication utilisés."
  },
  langSwitcher: { label: "Langue" }
};

export const TRANSLATIONS: Record<LangCode, Translation> = { en, pcm, yo, ig, fr };
