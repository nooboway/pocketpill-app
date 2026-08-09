import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const leadsTable = pgTable("leads", {
  id: serial("id").primaryKey(),
  email: text("email").notNull(),
  resourceId: text("resource_id").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const insertLeadSchema = createInsertSchema(leadsTable, {
  email: z.string().email() as any,
  resourceId: z.string().min(1) as any,
}).omit({ id: true, createdAt: true });

export type InsertLead = Omit<typeof leadsTable.$inferInsert, "id" | "createdAt">;
export type Lead = typeof leadsTable.$inferSelect;
