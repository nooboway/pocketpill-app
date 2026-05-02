import { Router, type IRouter } from "express";
import { db, newsletterSubscribersTable } from "@workspace/db";
import { desc } from "drizzle-orm";
import { requireAdmin } from "../middlewares/adminAuth";
import { insertNewsletterSubscriberSchema } from "@workspace/db";
import { sendNewsletterWelcome, sendNewsletterAdminAlert } from "../lib/email";

const router: IRouter = Router();

router.post("/newsletter/subscribe", async (req, res) => {
  const parsed = insertNewsletterSubscriberSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({
      error: "Validation error",
      message: parsed.error.issues[0]?.message ?? "Invalid input",
    });
    return;
  }

  try {
    const [row] = await db
      .insert(newsletterSubscribersTable)
      .values(parsed.data)
      .returning();

    res.status(201).json({
      id: row.id,
      email: row.email,
      name: row.name ?? null,
      createdAt: row.createdAt,
    });

    // Fire emails after responding to avoid blocking the client
    void sendNewsletterWelcome(row.email, row.name);
    void sendNewsletterAdminAlert(row.email, row.name);
  } catch (err: unknown) {
    // drizzle-orm wraps pg errors in _DrizzleQueryError; the pg code lives on err.cause
    const pgCode =
      (err as { code?: string })?.code ??
      (err as { cause?: { code?: string } })?.cause?.code;
    if (pgCode === "23505") {
      res.status(409).json({ error: "Already subscribed" });
      return;
    }
    req.log.error({ err }, "Failed to subscribe");
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/newsletter/subscribers", requireAdmin, async (req, res) => {
  try {
    const rows = await db
      .select()
      .from(newsletterSubscribersTable)
      .orderBy(desc(newsletterSubscribersTable.createdAt));

    res.json(
      rows.map((r) => ({
        id: r.id,
        email: r.email,
        name: r.name ?? null,
        createdAt: r.createdAt,
      })),
    );
  } catch (err) {
    req.log.error({ err }, "Failed to fetch subscribers");
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
