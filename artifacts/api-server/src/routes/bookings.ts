import { Router, type IRouter } from "express";
import { db, bookingsTable, insertBookingSchema } from "@workspace/db";
import { desc } from "drizzle-orm";
import { requireAdmin } from "../middlewares/adminAuth";

const router: IRouter = Router();

router.post("/bookings", async (req, res) => {
  const parsed = insertBookingSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({
      error: "Validation error",
      message: parsed.error.issues[0]?.message ?? "Invalid input",
    });
    return;
  }

  try {
    const [row] = await db
      .insert(bookingsTable)
      .values(parsed.data)
      .returning();

    res.status(201).json(row);
  } catch (err: unknown) {
    const pg = err as { code?: string };
    if (pg.code === "23505") {
      res.status(409).json({ error: "Booking reference already exists" });
      return;
    }
    req.log.error({ err }, "Failed to create booking");
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/bookings", requireAdmin, async (req, res) => {
  try {
    const rows = await db
      .select()
      .from(bookingsTable)
      .orderBy(desc(bookingsTable.createdAt));

    res.json(rows);
  } catch (err) {
    req.log.error({ err }, "Failed to fetch bookings");
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
