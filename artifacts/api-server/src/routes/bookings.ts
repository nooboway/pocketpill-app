import { Router, type IRouter } from "express";
import { db, bookingsTable, insertBookingSchema, settingsTable } from "@workspace/db";
import { desc, eq } from "drizzle-orm";
import { requireAdmin } from "../middlewares/adminAuth";
import { sendBookingConfirmation, sendBookingAdminAlert } from "../lib/email";
import type { SiteSettingsData } from "@workspace/db";

const router: IRouter = Router();

const VALID_STATUSES = ["pending", "confirmed", "completed", "cancelled"] as const;
type BookingStatus = (typeof VALID_STATUSES)[number];

function isValidStatus(s: unknown): s is BookingStatus {
  return typeof s === "string" && (VALID_STATUSES as readonly string[]).includes(s);
}

async function getSettings(): Promise<SiteSettingsData | null> {
  try {
    const rows = await db
      .select()
      .from(settingsTable)
      .where(eq(settingsTable.id, 1))
      .limit(1);
    return (rows[0]?.data as SiteSettingsData) ?? null;
  } catch {
    return null;
  }
}

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

    // Fire emails after responding — non-blocking
    const settings = await getSettings();
    if (settings) void sendBookingConfirmation(row, settings);
    void sendBookingAdminAlert(row);
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

router.patch("/bookings/:id/status", requireAdmin, async (req, res) => {
  const id = parseInt(String(req.params.id), 10);
  if (isNaN(id)) {
    res.status(400).json({ error: "Invalid booking id" });
    return;
  }

  const incoming = (req.body as Record<string, unknown>).status;
  if (!isValidStatus(incoming)) {
    res.status(400).json({
      error: "Invalid status",
      message: `Status must be one of: ${VALID_STATUSES.join(", ")}`,
    });
    return;
  }

  try {
    const [updated] = await db
      .update(bookingsTable)
      .set({ status: incoming })
      .where(eq(bookingsTable.id, id))
      .returning();

    if (!updated) {
      res.status(404).json({ error: "Booking not found" });
      return;
    }

    req.log.info({ id, status: incoming }, "Booking status updated");
    res.json(updated);
  } catch (err) {
    req.log.error({ err }, "Failed to update booking status");
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
