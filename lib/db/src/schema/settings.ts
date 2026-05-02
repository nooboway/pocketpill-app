import { pgTable, integer, json, timestamp } from "drizzle-orm/pg-core";

export type PricingTierData = {
  name: string;
  price: string;
  rawPrice: number;
  desc: string;
  popular?: boolean;
  features: string[];
};

export type SiteSettingsData = {
  whatsappNumber: string;
  paypalUsername: string;
  currency: string;
  consultationEmail: string;
  businessName: string;
  tiers: [PricingTierData, PricingTierData, PricingTierData];
};

export const settingsTable = pgTable("settings", {
  id: integer("id").primaryKey().default(1),
  data: json("data").notNull().$type<SiteSettingsData>(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});
