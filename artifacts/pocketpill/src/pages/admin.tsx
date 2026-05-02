import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Save, RotateCcw, Lock, ChevronRight, AlertTriangle, Check, Eye, EyeOff, Settings, ExternalLink, DollarSign } from "lucide-react";
import {
  loadSettings,
  saveSettings,
  resetSettings,
  DEFAULT_SETTINGS,
  type AdminSettings,
} from "@/lib/adminSettings";

const ADMIN_PASSWORD = "pocketpill2025";

export default function AdminPage() {
  const [authed, setAuthed] = useState(false);
  const [pw, setPw] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [pwError, setPwError] = useState(false);
  const [saved, setSaved] = useState(false);
  const [reset, setReset] = useState(false);
  const [settings, setSettings] = useState<AdminSettings>(DEFAULT_SETTINGS);

  useEffect(() => {
    const s = sessionStorage.getItem("pp_admin_authed");
    if (s === "1") setAuthed(true);
    setSettings(loadSettings());
  }, []);

  function login() {
    if (pw === ADMIN_PASSWORD) {
      setAuthed(true);
      sessionStorage.setItem("pp_admin_authed", "1");
    } else {
      setPwError(true);
      setTimeout(() => setPwError(false), 1800);
    }
  }

  function logout() {
    sessionStorage.removeItem("pp_admin_authed");
    setAuthed(false);
  }

  function handleSave() {
    saveSettings(settings);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  function handleReset() {
    resetSettings();
    setSettings(DEFAULT_SETTINGS);
    setReset(true);
    setTimeout(() => setReset(false), 2000);
  }

  function updateTier(idx: number, field: string, value: string | number) {
    setSettings((s) => {
      const tiers = [...s.tiers] as AdminSettings["tiers"];
      tiers[idx] = { ...tiers[idx], [field]: value };
      if (field === "rawPrice") {
        tiers[idx].price = `${s.currency}${Number(value).toLocaleString()}`;
      }
      return { ...s, tiers };
    });
  }

  function updateCurrency(val: string) {
    setSettings((s) => ({
      ...s,
      currency: val,
      tiers: s.tiers.map((t) => ({
        ...t,
        price: `${val}${t.rawPrice.toLocaleString()}`,
      })) as AdminSettings["tiers"],
    }));
  }

  if (!authed) {
    return (
      <div className="min-h-[100dvh] bg-background flex items-center justify-center px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="w-full max-w-sm">
          <div className="text-center mb-10">
            <a href="/" className="font-serif text-2xl tracking-wide text-foreground">
              Pocket<span className="text-primary italic">pill</span>
            </a>
            <div className="mt-8 w-12 h-12 rounded-full border border-border/60 flex items-center justify-center mx-auto mb-5">
              <Lock className="w-5 h-5 text-muted-foreground" strokeWidth={1.5} />
            </div>
            <h1 className="font-serif text-3xl mb-2">Admin Access</h1>
            <p className="text-muted-foreground text-sm">Enter your admin password to continue.</p>
          </div>

          <div className="relative mb-4">
            <input
              type={showPw ? "text" : "password"}
              placeholder="Admin password"
              value={pw}
              onChange={(e) => setPw(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && login()}
              className={`w-full bg-background border ${pwError ? "border-destructive/60 animate-shake" : "border-border/50 focus:border-primary/50"} rounded-sm px-4 py-4 text-foreground placeholder:text-muted-foreground/40 focus:outline-none transition-colors pr-12`}
            />
            <button type="button" onClick={() => setShowPw((v) => !v)} className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground/50 hover:text-muted-foreground transition-colors">
              {showPw ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>
          {pwError && <p className="text-xs text-destructive/80 mb-4 text-center">Incorrect password. Try again.</p>}
          <button type="button" onClick={login} className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground py-4 rounded-sm font-medium tracking-wide transition-colors">
            <span>Sign in</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-[100dvh] bg-background">
      {/* Top bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/40">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <a href="/" className="font-serif text-xl tracking-wide text-foreground">
              Pocket<span className="text-primary italic">pill</span>
            </a>
            <span className="text-muted-foreground/40 text-sm">|</span>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Settings className="w-3.5 h-3.5" />
              <span>Admin Panel</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a href="/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors">
              <ExternalLink className="w-3.5 h-3.5" />
              <span>View site</span>
            </a>
            <button type="button" onClick={logout} className="text-xs text-muted-foreground hover:text-foreground transition-colors border border-border/40 px-3 py-1.5 rounded-sm">
              Sign out
            </button>
          </div>
        </div>
      </div>

      <main className="pt-24 pb-20">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          {/* Placeholder notice */}
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="flex items-start gap-3 bg-amber-500/[0.08] border border-amber-500/20 rounded-sm px-5 py-4 mb-10 text-sm text-amber-200/80">
            <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <span>Settings are currently stored in your browser (localStorage). A database backend will sync these globally once connected. For now, changes apply to this browser only.</span>
          </motion.div>

          <div className="flex items-end justify-between mb-10">
            <div>
              <h1 className="font-serif text-4xl mb-2">Settings</h1>
              <p className="text-muted-foreground text-sm">Update your booking links, pricing, and contact info.</p>
            </div>
            <div className="flex gap-3">
              <button type="button" onClick={handleReset} className="flex items-center gap-2 border border-border/50 hover:border-destructive/40 hover:text-destructive text-muted-foreground px-4 py-2.5 rounded-sm text-sm transition-colors">
                <RotateCcw className="w-3.5 h-3.5" />
                <span>{reset ? "Reset!" : "Reset to defaults"}</span>
              </button>
              <button type="button" onClick={handleSave} className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-5 py-2.5 rounded-sm text-sm font-medium transition-colors">
                {saved ? <Check className="w-3.5 h-3.5" /> : <Save className="w-3.5 h-3.5" />}
                <span>{saved ? "Saved!" : "Save changes"}</span>
              </button>
            </div>
          </div>

          <div className="space-y-8">
            {/* Contact & Identity */}
            <Section title="Contact & Identity" desc="Your public-facing contact points.">
              <div className="grid md:grid-cols-2 gap-5">
                <AdminField label="Business name" hint="Shown in booking confirmations">
                  <input type="text" value={settings.businessName} onChange={(e) => setSettings((s) => ({ ...s, businessName: e.target.value }))} className={inputCls} />
                </AdminField>
                <AdminField label="Consultation email" hint="Where booking receipts are sent">
                  <input type="email" value={settings.consultationEmail} onChange={(e) => setSettings((s) => ({ ...s, consultationEmail: e.target.value }))} className={inputCls} />
                </AdminField>
              </div>
            </Section>

            {/* WhatsApp */}
            <Section title="WhatsApp" desc="The number clients message for consultations.">
              <AdminField label="WhatsApp number" hint="Include country code, no spaces or dashes — e.g. 2348001234567">
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground/60 text-sm">+</span>
                  <input
                    type="tel"
                    value={settings.whatsappNumber}
                    onChange={(e) => setSettings((s) => ({ ...s, whatsappNumber: e.target.value.replace(/\D/g, "") }))}
                    className={inputCls + " pl-7"}
                    placeholder="2348001234567"
                  />
                </div>
                <div className="mt-2 text-xs text-muted-foreground/60">
                  Preview:{" "}
                  <a href={`https://wa.me/${settings.whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    wa.me/{settings.whatsappNumber}
                  </a>
                </div>
              </AdminField>
            </Section>

            {/* PayPal */}
            <Section title="PayPal" desc="Your PayPal.Me username. Payment links are constructed automatically from the tier prices below.">
              <div className="grid md:grid-cols-2 gap-5">
                <AdminField label="PayPal username" hint="The part after paypal.com/paypalme/">
                  <input
                    type="text"
                    value={settings.paypalUsername}
                    onChange={(e) => setSettings((s) => ({ ...s, paypalUsername: e.target.value }))}
                    className={inputCls}
                    placeholder="yourusername"
                  />
                </AdminField>
                <AdminField label="Currency symbol" hint="Shown next to prices on the site">
                  <input
                    type="text"
                    value={settings.currency}
                    onChange={(e) => updateCurrency(e.target.value)}
                    className={inputCls}
                    placeholder="₦"
                    maxLength={4}
                  />
                </AdminField>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-3">
                {settings.tiers.map((t, i) => (
                  <div key={i} className="text-[11px] bg-card/50 border border-border/40 rounded-sm p-3 text-muted-foreground">
                    <div className="font-medium text-foreground/70 mb-0.5">{t.name}</div>
                    <a href={`https://www.paypal.com/paypalme/${settings.paypalUsername}/${t.rawPrice}`} target="_blank" rel="noopener noreferrer" className="text-primary/70 hover:text-primary truncate block transition-colors">
                      paypal.me/{settings.paypalUsername}/{t.rawPrice}
                    </a>
                  </div>
                ))}
              </div>
            </Section>

            {/* Pricing tiers */}
            <Section title="Pricing Tiers" desc="Adjust the name, price, and features for each tier. Feature lines are separated by newlines.">
              <div className="grid md:grid-cols-3 gap-5">
                {settings.tiers.map((tier, i) => (
                  <div key={i} className={`border rounded-sm p-5 ${i === 1 ? "border-primary/20 bg-card/50" : "border-border/40 bg-background"}`}>
                    <div className="text-xs tracking-[0.15em] uppercase text-primary/70 font-medium mb-4">Tier {i + 1}</div>

                    <AdminField label="Name">
                      <input type="text" value={tier.name} onChange={(e) => updateTier(i, "name", e.target.value)} className={inputCls} />
                    </AdminField>

                    <AdminField label="Price (number only)" className="mt-3">
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground/60 text-sm flex items-center">
                          <DollarSign className="w-3.5 h-3.5" />
                        </span>
                        <input
                          type="number"
                          value={tier.rawPrice}
                          onChange={(e) => updateTier(i, "rawPrice", Number(e.target.value))}
                          className={inputCls + " pl-8"}
                        />
                      </div>
                      <div className="text-[11px] text-muted-foreground/50 mt-1">Displays as: {tier.price}</div>
                    </AdminField>

                    <AdminField label="Short description" className="mt-3">
                      <input type="text" value={tier.desc} onChange={(e) => updateTier(i, "desc", e.target.value)} className={inputCls} />
                    </AdminField>

                    <AdminField label="Features (one per line)" className="mt-3">
                      <textarea
                        rows={4}
                        value={tier.features.join("\n")}
                        onChange={(e) => updateTier(i, "features", e.target.value.split("\n") as unknown as string)}
                        className={inputCls + " resize-none"}
                      />
                    </AdminField>
                  </div>
                ))}
              </div>
            </Section>
          </div>

          {/* Sticky save bar */}
          <div className="mt-10 flex justify-end gap-3 sticky bottom-6">
            <button type="button" onClick={handleSave} className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3.5 rounded-sm font-medium shadow-lg transition-colors">
              {saved ? <Check className="w-4 h-4" /> : <Save className="w-4 h-4" />}
              <span>{saved ? "Changes saved!" : "Save changes"}</span>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

const inputCls = "w-full bg-background border border-border/50 focus:border-primary/50 rounded-sm px-4 py-3 text-foreground placeholder:text-muted-foreground/40 focus:outline-none transition-colors text-sm";

function Section({ title, desc, children }: { title: string; desc?: string; children: React.ReactNode }) {
  return (
    <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="bg-card/30 border border-border/40 rounded-sm overflow-hidden">
      <div className="px-7 py-5 border-b border-border/40">
        <h2 className="text-base font-medium text-foreground">{title}</h2>
        {desc && <p className="text-sm text-muted-foreground mt-0.5">{desc}</p>}
      </div>
      <div className="p-7">{children}</div>
    </motion.div>
  );
}

function AdminField({ label, hint, className = "", children }: { label: string; hint?: string; className?: string; children: React.ReactNode }) {
  return (
    <div className={className}>
      <label className="block text-xs font-medium text-foreground/70 mb-1.5 uppercase tracking-wider">{label}</label>
      {children}
      {hint && <p className="text-[11px] text-muted-foreground/50 mt-1">{hint}</p>}
    </div>
  );
}
