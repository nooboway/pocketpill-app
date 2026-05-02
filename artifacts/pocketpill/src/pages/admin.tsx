import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import {
  Save, RotateCcw, Lock, ChevronRight, Check, Eye, EyeOff,
  Settings, ExternalLink, DollarSign, Users, BookOpen, RefreshCw,
  Clock, ChevronDown, MessageSquare, Mail, AlertCircle,
} from "lucide-react";
import { DEFAULT_SETTINGS, type AdminSettings } from "@/lib/adminSettings";

const ADMIN_PASSWORD = "pocketpill2025";

type Booking = {
  id: number;
  reference: string;
  planName: string;
  planPrice: string;
  clientName: string;
  clientEmail: string;
  clientWhatsapp: string;
  concern: string;
  appointmentDate: string | null;
  appointmentTime: string | null;
  status: string;
  createdAt: string;
};

type Subscriber = {
  id: number;
  email: string;
  name: string | null;
  createdAt: string;
};

type Tab = "settings" | "bookings" | "subscribers";

export default function AdminPage() {
  const [authed, setAuthed] = useState(false);
  const [pw, setPw] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [pwError, setPwError] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>("settings");

  const [saved, setSaved] = useState(false);
  const [saving, setSaving] = useState(false);
  const [reset, setReset] = useState(false);
  const [loadingSettings, setLoadingSettings] = useState(false);
  const [settingsError, setSettingsError] = useState("");
  const [settings, setSettings] = useState<AdminSettings>(DEFAULT_SETTINGS);

  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loadingBookings, setLoadingBookings] = useState(false);

  const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
  const [loadingSubscribers, setLoadingSubscribers] = useState(false);

  const [expandedBooking, setExpandedBooking] = useState<number | null>(null);
  const [updatingStatus, setUpdatingStatus] = useState<number | null>(null);

  const getToken = useCallback(() => sessionStorage.getItem("pp_admin_token") ?? "", []);

  const fetchSettings = useCallback(async () => {
    setLoadingSettings(true);
    setSettingsError("");
    try {
      const res = await fetch("/api/settings", {
        headers: { Authorization: `Bearer ${getToken()}` },
      });
      if (!res.ok) throw new Error("Failed to load settings");
      const data = await res.json() as AdminSettings;
      setSettings(data);
    } catch {
      setSettingsError("Could not load settings from server.");
    } finally {
      setLoadingSettings(false);
    }
  }, [getToken]);

  const fetchBookings = useCallback(async () => {
    setLoadingBookings(true);
    try {
      const res = await fetch("/api/bookings", {
        headers: { Authorization: `Bearer ${getToken()}` },
      });
      if (res.ok) setBookings(await res.json() as Booking[]);
    } finally {
      setLoadingBookings(false);
    }
  }, [getToken]);

  const fetchSubscribers = useCallback(async () => {
    setLoadingSubscribers(true);
    try {
      const res = await fetch("/api/newsletter/subscribers", {
        headers: { Authorization: `Bearer ${getToken()}` },
      });
      if (res.ok) setSubscribers(await res.json() as Subscriber[]);
    } finally {
      setLoadingSubscribers(false);
    }
  }, [getToken]);

  useEffect(() => {
    const s = sessionStorage.getItem("pp_admin_authed");
    if (s === "1") {
      setAuthed(true);
    }
  }, []);

  useEffect(() => {
    if (!authed) return;
    void fetchSettings();
    void fetchBookings();
    void fetchSubscribers();
  }, [authed, fetchSettings, fetchBookings, fetchSubscribers]);

  function login() {
    if (pw === ADMIN_PASSWORD) {
      setAuthed(true);
      sessionStorage.setItem("pp_admin_authed", "1");
      sessionStorage.setItem("pp_admin_token", pw);
    } else {
      setPwError(true);
      setTimeout(() => setPwError(false), 1800);
    }
  }

  function logout() {
    sessionStorage.removeItem("pp_admin_authed");
    sessionStorage.removeItem("pp_admin_token");
    setAuthed(false);
    setPw("");
  }

  async function handleSave() {
    setSaving(true);
    try {
      const res = await fetch("/api/settings", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getToken()}`,
        },
        body: JSON.stringify(settings),
      });
      if (!res.ok) throw new Error("Save failed");
      setSaved(true);
      setTimeout(() => setSaved(false), 2500);
    } catch {
      setSettingsError("Failed to save. Please try again.");
      setTimeout(() => setSettingsError(""), 3000);
    } finally {
      setSaving(false);
    }
  }

  async function updateBookingStatus(id: number, status: string) {
    setUpdatingStatus(id);
    // Optimistic update
    setBookings((prev) => prev.map((b) => b.id === id ? { ...b, status } : b));
    try {
      const res = await fetch(`/api/bookings/${id}/status`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getToken()}`,
        },
        body: JSON.stringify({ status }),
      });
      if (!res.ok) throw new Error("Update failed");
      const updated = await res.json() as Booking;
      setBookings((prev) => prev.map((b) => b.id === id ? updated : b));
    } catch {
      // Revert on failure by re-fetching
      void fetchBookings();
    } finally {
      setUpdatingStatus(null);
    }
  }

  async function handleReset() {
    setSettings(DEFAULT_SETTINGS);
    setReset(true);
    setTimeout(() => setReset(false), 2000);
    await fetch("/api/settings", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getToken()}`,
      },
      body: JSON.stringify(DEFAULT_SETTINGS),
    }).catch(() => {});
  }

  function updateTier(idx: number, field: string, value: string | number | string[]) {
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
            <div className="mt-8 w-12 h-12 rounded-full border border-border/60 flex items-center justify-center mx-auto mb-5" aria-hidden="true">
              <Lock className="w-5 h-5 text-muted-foreground" strokeWidth={1.5} />
            </div>
            <h1 className="font-serif text-3xl mb-2">Admin Access</h1>
            <p className="text-muted-foreground text-sm">Enter your admin password to continue.</p>
          </div>

          <form onSubmit={(e) => { e.preventDefault(); login(); }} noValidate>
            {/* Hidden username field satisfies browser password manager heuristics */}
            <input type="text" name="username" value="admin" autoComplete="username" readOnly aria-hidden="true" className="hidden" tabIndex={-1} />
            <div className="relative mb-4">
              <input
                type={showPw ? "text" : "password"}
                placeholder="Admin password"
                value={pw}
                onChange={(e) => setPw(e.target.value)}
                autoComplete="current-password"
                aria-label="Admin password"
                aria-invalid={pwError}
                aria-describedby={pwError ? "pw-error" : undefined}
                className={`w-full bg-background border ${pwError ? "border-destructive/60" : "border-border/50 focus:border-primary/50"} rounded-sm px-4 py-4 text-foreground placeholder:text-muted-foreground/40 focus:outline-none transition-colors pr-12`}
              />
              <button
                type="button"
                onClick={() => setShowPw((v) => !v)}
                aria-label={showPw ? "Hide password" : "Show password"}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground/50 hover:text-muted-foreground transition-colors"
              >
                {showPw ? <EyeOff className="w-4 h-4" aria-hidden="true" /> : <Eye className="w-4 h-4" aria-hidden="true" />}
              </button>
            </div>
            {pwError && <p id="pw-error" role="alert" className="text-xs text-destructive/80 mb-4 text-center">Incorrect password. Try again.</p>}
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground py-4 rounded-sm font-medium tracking-wide transition-colors"
            >
              <span>Sign in</span>
              <ChevronRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-[100dvh] bg-background">
      <div className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/40">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <a href="/" className="font-serif text-xl tracking-wide text-foreground">
              Pocket<span className="text-primary italic">pill</span>
            </a>
            <span className="text-muted-foreground/40 text-sm" aria-hidden="true">|</span>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Settings className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Admin Panel</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a href="/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors">
              <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
              <span>View site</span>
            </a>
            <button type="button" onClick={logout} className="text-xs text-muted-foreground hover:text-foreground transition-colors border border-border/40 px-3 py-1.5 rounded-sm">
              Sign out
            </button>
          </div>
        </div>

        {/* Tab bar */}
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          <div className="flex gap-1" role="tablist" aria-label="Admin sections">
            {(
              [
                { id: "settings", label: "Settings", icon: <Settings className="w-3.5 h-3.5" aria-hidden="true" /> },
                { id: "bookings", label: "Bookings", icon: <BookOpen className="w-3.5 h-3.5" aria-hidden="true" />, badge: bookings.length },
                { id: "subscribers", label: "Subscribers", icon: <Users className="w-3.5 h-3.5" aria-hidden="true" />, badge: subscribers.length },
              ] as { id: Tab; label: string; icon: React.ReactNode; badge?: number }[]
            ).map((tab) => (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={activeTab === tab.id}
                aria-controls={`panel-${tab.id}`}
                id={`tab-${tab.id}`}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? "border-primary text-primary"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
                {tab.badge !== undefined && tab.badge > 0 && (
                  <span className="bg-primary/15 text-primary text-[10px] px-1.5 py-0.5 rounded-full font-semibold min-w-[20px] text-center">
                    {tab.badge}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">

          {/* ── Settings Tab ────────────────────────────────────── */}
          {activeTab === "settings" && (
            <div id="panel-settings" role="tabpanel" aria-labelledby="tab-settings">
              {settingsError && (
                <div role="alert" className="mb-6 bg-destructive/10 border border-destructive/30 text-destructive text-sm px-5 py-3 rounded-sm">
                  {settingsError}
                </div>
              )}

              <div className="flex items-end justify-between mb-10">
                <div>
                  <h1 className="font-serif text-4xl mb-2">Settings</h1>
                  <p className="text-muted-foreground text-sm">Update your booking links, pricing, and contact info.</p>
                </div>
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => void fetchSettings()}
                    disabled={loadingSettings}
                    aria-label="Reload settings from server"
                    className="flex items-center gap-2 border border-border/50 hover:border-border text-muted-foreground px-3 py-2.5 rounded-sm text-sm transition-colors disabled:opacity-50"
                  >
                    <RefreshCw className={`w-3.5 h-3.5 ${loadingSettings ? "animate-spin" : ""}`} aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    onClick={() => void handleReset()}
                    className="flex items-center gap-2 border border-border/50 hover:border-destructive/40 hover:text-destructive text-muted-foreground px-4 py-2.5 rounded-sm text-sm transition-colors"
                  >
                    <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>{reset ? "Reset!" : "Reset to defaults"}</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => void handleSave()}
                    disabled={saving}
                    className="flex items-center gap-2 bg-primary hover:bg-primary/90 disabled:opacity-60 text-primary-foreground px-5 py-2.5 rounded-sm text-sm font-medium transition-colors"
                  >
                    {saving ? (
                      <span className="w-3.5 h-3.5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" aria-hidden="true" />
                    ) : saved ? (
                      <Check className="w-3.5 h-3.5" aria-hidden="true" />
                    ) : (
                      <Save className="w-3.5 h-3.5" aria-hidden="true" />
                    )}
                    <span>{saved ? "Saved!" : "Save changes"}</span>
                  </button>
                </div>
              </div>

              {loadingSettings ? (
                <div className="flex items-center justify-center py-24">
                  <span className="w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin" aria-label="Loading settings" />
                </div>
              ) : (
                <div className="space-y-8">
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

                  <Section title="WhatsApp" desc="The number clients message for consultations.">
                    <AdminField label="WhatsApp number" hint="Include country code, no spaces or dashes — e.g. 2348001234567">
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground/60 text-sm" aria-hidden="true">+</span>
                        <input
                          type="tel"
                          value={settings.whatsappNumber}
                          onChange={(e) => setSettings((s) => ({ ...s, whatsappNumber: e.target.value.replace(/\D/g, "") }))}
                          className={inputCls + " pl-7"}
                          placeholder="2348001234567"
                          aria-label="WhatsApp number with country code"
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
                          aria-label="Currency symbol"
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

                  <Section title="Pricing Tiers" desc="Adjust the name, price, and features for each tier. Feature lines are separated by newlines.">
                    <div className="grid md:grid-cols-3 gap-5">
                      {settings.tiers.map((tier, i) => (
                        <div key={i} className={`border rounded-sm p-5 ${i === 1 ? "border-primary/20 bg-card/50" : "border-border/40 bg-background"}`}>
                          <div className="text-xs tracking-[0.15em] uppercase text-primary/70 font-medium mb-4">Tier {i + 1}</div>

                          <AdminField label="Name">
                            <input type="text" value={tier.name} onChange={(e) => updateTier(i, "name", e.target.value)} className={inputCls} aria-label={`Tier ${i + 1} name`} />
                          </AdminField>

                          <AdminField label="Price (number only)" className="mt-3">
                            <div className="relative">
                              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground/60 text-sm flex items-center" aria-hidden="true">
                                <DollarSign className="w-3.5 h-3.5" />
                              </span>
                              <input
                                type="number"
                                value={tier.rawPrice}
                                onChange={(e) => updateTier(i, "rawPrice", Number(e.target.value))}
                                className={inputCls + " pl-8"}
                                aria-label={`Tier ${i + 1} price`}
                              />
                            </div>
                            <div className="text-[11px] text-muted-foreground/50 mt-1">Displays as: {tier.price}</div>
                          </AdminField>

                          <AdminField label="Short description" className="mt-3">
                            <input type="text" value={tier.desc} onChange={(e) => updateTier(i, "desc", e.target.value)} className={inputCls} aria-label={`Tier ${i + 1} description`} />
                          </AdminField>

                          <AdminField label="Features (one per line)" className="mt-3">
                            <textarea
                              rows={4}
                              value={tier.features.join("\n")}
                              onChange={(e) => updateTier(i, "features", e.target.value.split("\n"))}
                              className={inputCls + " resize-none"}
                              aria-label={`Tier ${i + 1} features`}
                            />
                          </AdminField>
                        </div>
                      ))}
                    </div>
                  </Section>
                </div>
              )}

              <div className="mt-10 flex justify-end gap-3 sticky bottom-6">
                <button
                  type="button"
                  onClick={() => void handleSave()}
                  disabled={saving}
                  className="flex items-center gap-2 bg-primary hover:bg-primary/90 disabled:opacity-60 text-primary-foreground px-6 py-3.5 rounded-sm font-medium shadow-lg transition-colors"
                >
                  {saving ? (
                    <span className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" aria-hidden="true" />
                  ) : saved ? (
                    <Check className="w-4 h-4" aria-hidden="true" />
                  ) : (
                    <Save className="w-4 h-4" aria-hidden="true" />
                  )}
                  <span>{saved ? "Changes saved!" : "Save changes"}</span>
                </button>
              </div>
            </div>
          )}

          {/* ── Bookings Tab ────────────────────────────────────── */}
          {activeTab === "bookings" && (
            <div id="panel-bookings" role="tabpanel" aria-labelledby="tab-bookings">
              <div className="flex items-end justify-between mb-10">
                <div>
                  <h1 className="font-serif text-4xl mb-2">Bookings</h1>
                  <p className="text-muted-foreground text-sm">{bookings.length} consultation{bookings.length !== 1 ? "s" : ""} total.</p>
                </div>
                <button
                  type="button"
                  onClick={() => void fetchBookings()}
                  disabled={loadingBookings}
                  aria-label="Refresh bookings"
                  className="flex items-center gap-2 border border-border/50 text-muted-foreground hover:text-foreground px-4 py-2.5 rounded-sm text-sm transition-colors disabled:opacity-50"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${loadingBookings ? "animate-spin" : ""}`} aria-hidden="true" />
                  <span>Refresh</span>
                </button>
              </div>

              {/* Status legend */}
              <div className="flex flex-wrap gap-3 mb-6">
                {STATUS_CONFIG.map(({ value, label, cls }) => (
                  <span key={value} className={`flex items-center gap-1.5 text-[11px] uppercase tracking-wider px-2.5 py-1.5 rounded-sm font-medium ${cls}`}>
                    <span className="w-1.5 h-1.5 rounded-full bg-current opacity-70" aria-hidden="true" />
                    {label} · {bookings.filter((b) => b.status === value).length}
                  </span>
                ))}
              </div>

              {loadingBookings ? (
                <div className="flex items-center justify-center py-24">
                  <span className="w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin" aria-label="Loading bookings" />
                </div>
              ) : bookings.length === 0 ? (
                <div className="text-center py-24 text-muted-foreground">
                  <BookOpen className="w-10 h-10 mx-auto mb-4 opacity-30" aria-hidden="true" />
                  <p className="text-sm">No bookings yet.</p>
                </div>
              ) : (
                <div className="space-y-2">
                  {bookings.map((b) => {
                    const statusCfg = STATUS_CONFIG.find((s) => s.value === b.status) ?? STATUS_CONFIG[0];
                    const isExpanded = expandedBooking === b.id;
                    const isUpdating = updatingStatus === b.id;
                    return (
                      <div key={b.id} className="bg-card/30 border border-border/40 rounded-sm overflow-hidden">
                        {/* Row header */}
                        <button
                          type="button"
                          onClick={() => setExpandedBooking(isExpanded ? null : b.id)}
                          aria-expanded={isExpanded}
                          aria-controls={`booking-${b.id}`}
                          className="w-full flex items-center justify-between px-6 py-4 hover:bg-card/50 transition-colors text-left"
                        >
                          <div className="flex items-center gap-5 flex-1 min-w-0">
                            <span className="font-mono text-primary font-semibold text-sm shrink-0">{b.reference}</span>
                            <span className="text-sm text-foreground font-medium truncate">{b.clientName}</span>
                            <span className="text-xs text-muted-foreground hidden md:block truncate">{b.planName}</span>
                            <span className="text-xs font-medium text-foreground/70 hidden lg:block">{b.planPrice}</span>
                          </div>
                          <div className="flex items-center gap-3 shrink-0 ml-4">
                            <div className="flex items-center gap-1.5 text-xs text-muted-foreground hidden sm:flex">
                              <Clock className="w-3 h-3" aria-hidden="true" />
                              <span>{new Date(b.createdAt).toLocaleDateString()}</span>
                            </div>
                            <span className={`text-[10px] uppercase tracking-wider px-2 py-1 rounded-sm font-medium ${statusCfg.cls}`}>
                              {isUpdating ? "…" : statusCfg.label}
                            </span>
                            <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform ${isExpanded ? "rotate-180" : ""}`} aria-hidden="true" />
                          </div>
                        </button>

                        {/* Expanded detail */}
                        <AnimatePresence initial={false}>
                          {isExpanded && (
                            <motion.div
                              id={`booking-${b.id}`}
                              key="detail"
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.22, ease: "easeInOut" }}
                              className="overflow-hidden"
                            >
                              <div className="border-t border-border/40 px-6 py-5 space-y-5">
                                {/* Client details */}
                                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                                  <DataPointLink
                                    label="Email"
                                    value={b.clientEmail}
                                    href={`mailto:${b.clientEmail}`}
                                    icon={<Mail className="w-3 h-3" />}
                                  />
                                  <DataPointLink
                                    label="WhatsApp"
                                    value={b.clientWhatsapp}
                                    href={`https://wa.me/${b.clientWhatsapp.replace(/\D/g, "")}`}
                                    icon={<MessageSquare className="w-3 h-3" />}
                                  />
                                  <DataPoint label="Plan" value={`${b.planName} — ${b.planPrice}`} />
                                  <DataPoint
                                    label="Appointment"
                                    value={b.appointmentDate ? `${b.appointmentDate}${b.appointmentTime ? ` at ${b.appointmentTime}` : ""}` : "Not scheduled"}
                                  />
                                  <DataPoint label="Booked" value={new Date(b.createdAt).toLocaleString()} />
                                </div>

                                {/* Concern */}
                                <div>
                                  <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1.5">Concern</div>
                                  <p className="text-sm text-foreground/80 leading-relaxed bg-background/50 border border-border/30 rounded-sm px-4 py-3">{b.concern}</p>
                                </div>

                                {/* Status management */}
                                <div>
                                  <div className="text-xs uppercase tracking-wider text-muted-foreground mb-2.5 flex items-center gap-2">
                                    <AlertCircle className="w-3 h-3" aria-hidden="true" />
                                    Update status
                                  </div>
                                  <div className="flex flex-wrap gap-2" role="group" aria-label={`Update status for booking ${b.reference}`}>
                                    {STATUS_CONFIG.map(({ value, label, cls, activeCls }) => (
                                      <button
                                        key={value}
                                        type="button"
                                        disabled={isUpdating || b.status === value}
                                        onClick={() => void updateBookingStatus(b.id, value)}
                                        aria-pressed={b.status === value}
                                        className={`text-[11px] uppercase tracking-wider px-3 py-2 rounded-sm font-medium border transition-all disabled:cursor-not-allowed ${
                                          b.status === value
                                            ? `${activeCls} border-current/30`
                                            : "border-border/40 text-muted-foreground hover:border-border hover:text-foreground disabled:opacity-40"
                                        }`}
                                      >
                                        {isUpdating && b.status !== value ? (
                                          <span className="flex items-center gap-1.5">
                                            <span className="w-2.5 h-2.5 border border-current/40 border-t-current rounded-full animate-spin" aria-hidden="true" />
                                            {label}
                                          </span>
                                        ) : (
                                          <span className="flex items-center gap-1.5">
                                            {b.status === value && <Check className="w-3 h-3" aria-hidden="true" />}
                                            {label}
                                          </span>
                                        )}
                                      </button>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )}

          {/* ── Subscribers Tab ─────────────────────────────────── */}
          {activeTab === "subscribers" && (
            <div id="panel-subscribers" role="tabpanel" aria-labelledby="tab-subscribers">
              <div className="flex items-end justify-between mb-10">
                <div>
                  <h1 className="font-serif text-4xl mb-2">Newsletter</h1>
                  <p className="text-muted-foreground text-sm">{subscribers.length} subscriber{subscribers.length !== 1 ? "s" : ""}.</p>
                </div>
                <button
                  type="button"
                  onClick={() => void fetchSubscribers()}
                  disabled={loadingSubscribers}
                  aria-label="Refresh subscribers"
                  className="flex items-center gap-2 border border-border/50 text-muted-foreground hover:text-foreground px-4 py-2.5 rounded-sm text-sm transition-colors disabled:opacity-50"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${loadingSubscribers ? "animate-spin" : ""}`} aria-hidden="true" />
                  <span>Refresh</span>
                </button>
              </div>

              {loadingSubscribers ? (
                <div className="flex items-center justify-center py-24">
                  <span className="w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin" aria-label="Loading subscribers" />
                </div>
              ) : subscribers.length === 0 ? (
                <div className="text-center py-24 text-muted-foreground">
                  <Users className="w-10 h-10 mx-auto mb-4 opacity-30" aria-hidden="true" />
                  <p className="text-sm">No subscribers yet.</p>
                </div>
              ) : (
                <div className="bg-card/30 border border-border/40 rounded-sm overflow-hidden">
                  <div className="grid grid-cols-3 gap-4 px-6 py-3 border-b border-border/40 text-xs uppercase tracking-wider text-muted-foreground font-medium">
                    <span>Email</span>
                    <span>Name</span>
                    <span>Subscribed</span>
                  </div>
                  {subscribers.map((s) => (
                    <div key={s.id} className="grid grid-cols-3 gap-4 px-6 py-4 border-b border-border/20 last:border-0 hover:bg-card/50 transition-colors text-sm">
                      <span className="text-foreground/90 truncate">{s.email}</span>
                      <span className="text-muted-foreground">{s.name ?? "—"}</span>
                      <span className="text-muted-foreground text-xs">{new Date(s.createdAt).toLocaleDateString()}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

        </div>
      </main>
    </div>
  );
}

const STATUS_CONFIG = [
  { value: "pending",   label: "Pending",   cls: "bg-amber-500/10 text-amber-400",   activeCls: "bg-amber-500/15 text-amber-400" },
  { value: "confirmed", label: "Confirmed", cls: "bg-blue-500/10 text-blue-400",     activeCls: "bg-blue-500/15 text-blue-400" },
  { value: "completed", label: "Completed", cls: "bg-emerald-500/10 text-emerald-400", activeCls: "bg-emerald-500/15 text-emerald-400" },
  { value: "cancelled", label: "Cancelled", cls: "bg-muted/40 text-muted-foreground", activeCls: "bg-muted/50 text-muted-foreground" },
] as const;

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

function DataPoint({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-xs uppercase tracking-wider text-muted-foreground mb-0.5">{label}</div>
      <div className="text-foreground/90">{value}</div>
    </div>
  );
}

function DataPointLink({ label, value, href, icon }: { label: string; value: string; href: string; icon: React.ReactNode }) {
  return (
    <div>
      <div className="text-xs uppercase tracking-wider text-muted-foreground mb-0.5">{label}</div>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 text-primary hover:text-primary/80 transition-colors text-sm"
      >
        {icon}
        <span className="truncate">{value}</span>
      </a>
    </div>
  );
}
