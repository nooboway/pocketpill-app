import { Router, type IRouter } from "express";
import { db, leadsTable } from "@workspace/db";
import { insertLeadSchema } from "@workspace/db";

const router: IRouter = Router();

router.post("/leads", async (req, res) => {
  const parsed = insertLeadSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({
      error: "Validation error",
      message: parsed.error.issues[0]?.message ?? "Invalid input",
    });
    return;
  }
  try {
    const [row] = await db.insert(leadsTable).values(parsed.data).returning();
    res.status(201).json(row);
  } catch (err: unknown) {
    req.log.error({ err }, "Failed to save lead");
    res.status(500).json({ error: "Internal server error" });
  }
});
export default router;
