import { Router, type IRouter } from "express";
import { db, newsletterSubscribersTable } from "@workspace/db";
import { desc } from "drizzle-orm";
import { requireAdmin } from "../middlewares/adminAuth";
import { insertNewsletterSubscriberSchema } from "@workspace/db";

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
  } catch (err: unknown) {
    const pg = err as { code?: string };
    if (pg.code === "23505") {
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
