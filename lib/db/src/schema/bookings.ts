import { pgTable, serial, text, integer, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";

export const bookingsTable = pgTable("bookings", {
  id: serial("id").primaryKey(),
  reference: text("reference").notNull().unique(),
  planName: text("plan_name").notNull(),
  planPrice: text("plan_price").notNull(),
  planIndex: integer("plan_index").notNull(),
  clientName: text("client_name").notNull(),
  clientEmail: text("client_email").notNull(),
  clientWhatsapp: text("client_whatsapp").notNull(),
  concern: text("concern").notNull(),
  appointmentDate: text("appointment_date"),
  appointmentTime: text("appointment_time"),
  status: text("status").notNull().default("pending"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const insertBookingSchema = createInsertSchema(bookingsTable, {
  reference: z.string().min(3).max(20),
  planName: z.string().min(1).max(80),
  planPrice: z.string().min(1).max(40),
  planIndex: z.int().min(0).max(2),
  clientName: z.string().min(1).max(160),
  clientEmail: z.email(),
  clientWhatsapp: z.string().min(7).max(20),
  concern: z.string().min(1).max(2000),
  appointmentDate: z.string().optional(),
  appointmentTime: z.string().optional(),
}).omit({ id: true, status: true, createdAt: true });

export type InsertBooking = z.infer<typeof insertBookingSchema>;
export type Booking = typeof bookingsTable.$inferSelect;
