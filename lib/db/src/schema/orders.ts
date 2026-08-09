import { pgTable, serial, text, integer, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";
import { productsTable } from "./products";

export const ordersTable = pgTable("orders", {
  id: serial("id").primaryKey(),
  paystackRef: text("paystack_ref").unique(),
  productId: integer("product_id").references(() => productsTable.id),
  buyerEmail: text("buyer_email").notNull(),
  amount: integer("amount").notNull(),
  status: text("status").notNull().default("pending"), // pending, success, failed
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const insertOrderSchema = createInsertSchema(ordersTable).omit({ id: true, createdAt: true });
export type InsertOrder = z.infer<typeof insertOrderSchema>;
export type Order = typeof ordersTable.$inferSelect;
