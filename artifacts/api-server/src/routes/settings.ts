import { Router, type IRouter } from "express";
import { db, settingsTable } from "@workspace/db";
import { eq } from "drizzle-orm";
import { requireAdmin } from "../middlewares/adminAuth";
import type { SiteSettingsData } from "@workspace/db";

const DEFAULT_SETTINGS: SiteSettingsData = {
  whatsappNumber: "2348000000000",
  paypalUsername: "pocketpill",
  currency: "₦",
  consultationEmail: "hello@pocketpill.health",
  businessName: "Pocketpill",
  tiers: [
    {
      name: "Quick Consult",
      price: "₦15,000",
      rawPrice: 15000,
      desc: "15-min assessment",
      features: [
        "WhatsApp consultation",
        "ED/PE assessment",
        "Prescription guidance",
        "Follow-up message",
      ],
    },
    {
      name: "Standard",
      price: "₦25,000",
      rawPrice: 25000,
      desc: "30-min full review",
      popular: true,
      features: [
        "Everything in Quick",
        "Full medical history review",
        "Personalised treatment plan",
        "Lifestyle recommendations",
        "7-day follow-up",
      ],
    },
    {
      name: "Premium Care",
      price: "₦45,000",
      rawPrice: 45000,
      desc: "Ongoing support",
      features: [
        "Everything in Standard",
        "3 months check-ins",
        "Priority response",
        "Lab interpretation",
        "Referral letter if needed",
      ],
    },
  ],
};

async function getOrCreateSettings(): Promise<SiteSettingsData> {
  const rows = await db
    .select()
    .from(settingsTable)
    .where(eq(settingsTable.id, 1))
    .limit(1);

  if (rows.length === 0) {
    await db.insert(settingsTable).values({ id: 1, data: DEFAULT_SETTINGS });
    return DEFAULT_SETTINGS;
  }
  return rows[0].data as SiteSettingsData;
}

const router: IRouter = Router();

router.get("/settings", async (req, res) => {
  try {
    const data = await getOrCreateSettings();
    res.json(data);
  } catch (err) {
    req.log.error({ err }, "Failed to fetch settings");
    res.status(500).json({ error: "Internal server error" });
  }
});

router.put("/settings", requireAdmin, async (req, res) => {
  const body = req.body as SiteSettingsData;

  if (
    !body ||
    typeof body.whatsappNumber !== "string" ||
    typeof body.paypalUsername !== "string" ||
    typeof body.currency !== "string" ||
    typeof body.consultationEmail !== "string" ||
    typeof body.businessName !== "string" ||
    !Array.isArray(body.tiers) ||
    body.tiers.length !== 3
  ) {
    res.status(400).json({ error: "Invalid settings payload" });
    return;
  }

  try {
    await db
      .insert(settingsTable)
      .values({ id: 1, data: body })
      .onConflictDoUpdate({
        target: settingsTable.id,
        set: { data: body, updatedAt: new Date() },
      });

    res.json(body);
  } catch (err) {
    req.log.error({ err }, "Failed to update settings");
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
