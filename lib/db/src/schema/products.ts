import { pgTable, serial, text, integer, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const productsTable = pgTable("products", {
  id: serial("id").primaryKey(),
  slug: text("slug").notNull().unique(),
  title: text("title").notNull(),
  description: text("description"),
  coverImage: text("cover_image"),
  price: integer("price").notNull(), // stored in lowest denomination, e.g., kobo for NGN
  originalPrice: integer("original_price"),
  fileUrl: text("file_url"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const insertProductSchema = createInsertSchema(productsTable).omit({ id: true, createdAt: true });
export type InsertProduct = Omit<typeof productsTable.$inferInsert, "id" | "createdAt">;
export type Product = typeof productsTable.$inferSelect;
