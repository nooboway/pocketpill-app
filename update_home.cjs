const fs = require('fs');
const path = require('path');

const filePath = path.resolve('artifacts/pocketpill/src/pages/home.tsx');
let content = fs.readFileSync(filePath, 'utf-8');

const newComponents = `
function ServicesSection() {
  const t = useT();
  return (
    <section className="py-20 md:py-32 bg-card/10 border-t border-border/40 relative">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={STAGGER} className="mb-16 md:mb-24">
          <motion.div variants={FADE_UP} className="flex items-center gap-3 mb-6">
            <div className="w-8 h-[1px] bg-primary" />
            <span className="text-xs tracking-[0.2em] uppercase text-primary font-medium">{t.services.kicker}</span>
          </motion.div>
          <motion.h2 variants={FADE_UP} className="font-serif text-4xl md:text-5xl leading-[1.1]">
            {t.services.headlinePre} <br className="hidden sm:block" /><em className="text-primary italic">{t.services.headlineEm}</em>
          </motion.h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {t.services.items.map((item, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, delay: idx * 0.15 }} className="group p-8 lg:p-10 rounded-sm bg-background border border-border/40 hover:border-primary/40 transition-all duration-300">
              <h3 className="text-2xl font-serif font-medium mb-4 text-foreground group-hover:text-primary transition-colors">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">{item.desc}</p>
              <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-primary/80 group-hover:text-primary">
                <span>Learn more</span>
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorksSection() {
  const t = useT();
  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={STAGGER} className="mb-16 md:mb-24 text-center">
          <motion.div variants={FADE_UP} className="flex justify-center items-center gap-3 mb-6">
            <span className="text-xs tracking-[0.2em] uppercase text-primary font-medium">{t.howItWorks.kicker}</span>
          </motion.div>
          <motion.h2 variants={FADE_UP} className="font-serif text-4xl md:text-5xl leading-[1.1]">
            {t.howItWorks.headlinePre} <br className="hidden sm:block" /><em className="text-primary italic">{t.howItWorks.headlineEm}</em>
          </motion.h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 relative">
          <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-[1px] bg-border/50 -z-10" />
          {t.howItWorks.steps.map((step, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, delay: idx * 0.15 }} className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center font-serif text-2xl text-primary font-bold mb-6 border border-primary/20">{step.num}</div>
              <h3 className="text-xl font-medium mb-4 text-foreground">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExpertNoteSection() {
  const t = useT();
  return (
    <section className="py-20 md:py-32 relative">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="bg-card/40 border border-border/50 rounded-sm p-8 md:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px]" />
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={STAGGER} className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
            <div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-muted overflow-hidden border border-border/50 shrink-0">
               <img src="/hero-texture.png" alt="Expert" className="w-full h-full object-cover opacity-60 mix-blend-overlay" />
            </div>
            <div>
              <div className="text-primary font-serif text-5xl leading-none absolute -top-4 -left-6 md:left-48 md:top-8 select-none">"</div>
              <p className="font-serif text-xl md:text-2xl italic leading-relaxed text-foreground mb-8">
                {t.expertNote.quote}
              </p>
              <div>
                <div className="font-medium text-foreground text-lg">{t.expertNote.name}</div>
                <div className="text-muted-foreground text-sm">{t.expertNote.title}</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
`;

content = content.replace(/function HeroSection\(\) \{/, newComponents + '\nfunction HeroSection() {');

// Insert them into the Home component
const homeInsertion = `      <HeroSection />
      <ServicesSection />
      <TrustStrip />
      <HowItWorksSection />
      <ExpertNoteSection />`;

content = content.replace(/      <HeroSection \/>\s+<TrustStrip \/>/, homeInsertion);

fs.writeFileSync(filePath, content);
console.log("Updated home.tsx");
