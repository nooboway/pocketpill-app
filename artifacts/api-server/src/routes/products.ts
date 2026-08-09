import { Router, type IRouter } from "express";
import { db, productsTable } from "@workspace/db";
import { eq } from "drizzle-orm";

const router: IRouter = Router();

router.get("/products", async (req, res) => {
  try {
    const rows = await db.select().from(productsTable);
    res.json(rows);
  } catch (err) {
    req.log.error({ err }, "Failed to fetch products");
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/products/:slug", async (req, res) => {
  try {
    const [row] = await db
      .select()
      .from(productsTable)
      .where(eq(productsTable.slug, req.params.slug));
    if (!row) {
      res.status(404).json({ error: "Product not found" });
      return;
    }
    res.json(row);
  } catch (err) {
    req.log.error({ err }, "Failed to fetch product");
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
