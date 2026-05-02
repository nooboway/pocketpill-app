const STORAGE_KEY = "pocketpill_admin_settings_v1";

export type AdminTier = {
  name: string;
  price: string;
  rawPrice: number;
  desc: string;
  features: string[];
  popular?: boolean;
};

export type AdminSettings = {
  whatsappNumber: string;
  paypalUsername: string;
  currency: string;
  tiers: [AdminTier, AdminTier, AdminTier];
  consultationEmail: string;
  businessName: string;
};

export const DEFAULT_SETTINGS: AdminSettings = {
  whatsappNumber: "2348000000000",
  paypalUsername: "yourusername",
  currency: "₦",
  consultationEmail: "hello@pocketpill.co",
  businessName: "Pocketpill",
  tiers: [
    {
      name: "Starter",
      price: "₦10,000",
      rawPrice: 10000,
      desc: "One-time consultation",
      features: [
        "45-minute WhatsApp consultation",
        "Written summary with next steps",
        "3-day follow-up window",
      ],
    },
    {
      name: "Standard",
      price: "₦15,000",
      rawPrice: 15000,
      desc: "Full assessment + guidance plan",
      popular: true,
      features: [
        "90-minute structured consultation",
        "Written guidance plan",
        "7-day follow-up window",
        "Medication context review",
      ],
    },
    {
      name: "Premium",
      price: "₦27,000",
      rawPrice: 27000,
      desc: "Deep-dive + 30-day support",
      features: [
        "Two 60-minute sessions",
        "30-day WhatsApp check-in access",
        "Full written care summary",
        "Medication context review",
        "Referral letter if needed",
      ],
    },
  ],
};

export function loadSettings(): AdminSettings {
  if (typeof window === "undefined") return DEFAULT_SETTINGS;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_SETTINGS;
    return { ...DEFAULT_SETTINGS, ...JSON.parse(raw) };
  } catch {
    return DEFAULT_SETTINGS;
  }
}

export function saveSettings(s: AdminSettings): void {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(s));
  } catch {}
}

export function resetSettings(): void {
  try {
    window.localStorage.removeItem(STORAGE_KEY);
  } catch {}
}

export function getWhatsappUrl(settings: AdminSettings): string {
  return `https://wa.me/${settings.whatsappNumber.replace(/\D/g, "")}`;
}

export function getPaypalLink(settings: AdminSettings, tierIndex: number): string {
  return `https://www.paypal.com/paypalme/${settings.paypalUsername}/${settings.tiers[tierIndex]?.rawPrice ?? 10000}`;
}
