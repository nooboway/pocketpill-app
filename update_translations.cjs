const fs = require('fs');
const path = require('path');

const filePath = path.resolve('artifacts/pocketpill/src/i18n/translations.ts');
let content = fs.readFileSync(filePath, 'utf-8');

const newEnKeys = `
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
    quote: "Our goal is to provide you with a discreet, non-judgmental and convenient space that puts you in control. Every man deserves access to safe, private, and straightforward guidance.",
    name: "Dr. O. Ajidahun",
    title: "Lead Pharmacist"
  },
`;

content = content.replace(/  closing: \{/g, newEnKeys + '  closing: {');

const newTestimonial = `      { quote: "I encouraged my partner to seek help for his bedroom issues, and Pocketpill provided a safe and supportive space for him to do so. No awkwardness, just help. I am grateful!", themeKey: "trust" },\n`;
content = content.replace(/(      \{ quote: "The biggest change for me was peace of mind.*?\n)/g, '$1' + newTestimonial);

content = content.replace(/num: "1 in 4"/g, 'num: "500+"');
content = content.replace(/Many younger men report erectile difficulties at some point./g, 'Trusted by over 500 men across West Africa and the diaspora.');

fs.writeFileSync(filePath, content);
console.log("Updated translations.ts");
