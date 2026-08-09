import { Router, type IRouter } from "express";
import { db, ordersTable, productsTable } from "@workspace/db";
import { eq } from "drizzle-orm";

const router: IRouter = Router();

router.post("/checkout/initialize", async (req, res) => {
  const { productId, email } = req.body;
  if (!productId || !email) {
    res.status(400).json({ error: "Missing required fields" });
    return;
  }
  try {
    const [product] = await db.select().from(productsTable).where(eq(productsTable.id, parseInt(productId, 10)));
    if (!product) {
      res.status(404).json({ error: "Product not found" });
      return;
    }

    const [order] = await db
      .insert(ordersTable)
      .values({
        productId: product.id,
        buyerEmail: email,
        amount: product.price,
        status: "pending",
        paystackRef: `ref_${Date.now()}_${Math.floor(Math.random() * 1000)}` 
      })
      .returning();

    res.json({ order });
  } catch (err) {
    req.log.error({ err }, "Failed to initialize checkout");
    res.status(500).json({ error: "Internal server error" });
  }
});

router.post("/checkout/webhook", async (req, res) => {
  const { reference, email, productId, amount } = req.body;
  if (!reference) {
    res.status(400).json({ error: "Missing reference" });
    return;
  }
  try {
    const [order] = await db.insert(ordersTable).values({
      paystackRef: reference,
      buyerEmail: email,
      productId: parseInt(productId, 10),
      amount: parseInt(amount, 10) || 10780,
      status: "success",
    }).onConflictDoUpdate({
      target: ordersTable.paystackRef,
      set: { status: "success" }
    }).returning();
    
    req.log.info({ order }, "Order successful, delivery email queued.");
    
    res.json({ success: true, order });
  } catch (err) {
    req.log.error({ err }, "Failed to process webhook");
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
