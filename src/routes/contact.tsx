import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Mail, MapPin, Phone, Send } from "lucide-react";

import { SectionHeader } from "@/components/section-header";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact — PocketPill" },
      { name: "description", content: "Book a visit or get in touch with the PocketPill care team. We're here to help." },
      { property: "og:title", content: "Contact — PocketPill" },
      { property: "og:description", content: "Book a visit or get in touch with the PocketPill care team. We're here to help." },
      { property: "og:url", content: "/contact" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
});

const formSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  reason: z.string().min(1, "Please select a reason"),
  message: z.string().min(10, "Please tell us a bit more about what you need"),
});

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+234 708 372 5382",
    href: "tel:+2347083725382",
  },
  {
    icon: Mail,
    label: "Email",
    value: "care@pocketpill.co",
    href: "mailto:care@pocketpill.co",
  },
  {
    icon: MapPin,
    label: "Office",
    value: "Ikeja, Lagos, Nigeria",
    href: "#",
  },
];

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      reason: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    setSubmitted(true);
  }

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="section-padding bg-background">
          <div className="container-tight">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <SectionHeader
                  align="left"
                  eyebrow="Contact"
                  title="Book a visit or get in touch"
                  description="Fill out the form and our care team will reach out within one business day to confirm your appointment."
                />
                <div className="mt-8 space-y-6">
                  {contactInfo.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="flex items-center gap-4 text-foreground transition-colors hover:text-primary"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-soft">
                        <item.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{item.label}</p>
                        <p className="font-medium">{item.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-border/60 bg-cream p-8">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white">
                      <Send className="h-7 w-7" />
                    </div>
                    <h3 className="mt-6 font-heading text-2xl font-semibold text-foreground">Request received</h3>
                    <p className="mt-2 max-w-sm text-muted-foreground">
                      Thank you for reaching out. Our care team will contact you within one business day to confirm your appointment.
                    </p>
                    <Button className="mt-6 bg-black text-white hover:bg-black/90" onClick={() => setSubmitted(false)}>
                      Send another message
                    </Button>
                  </div>
                ) : (
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                      <div className="grid gap-5 sm:grid-cols-2">
                        <FormField
                          control={form.control}
                          name="firstName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>First name</FormLabel>
                              <FormControl>
                                <Input placeholder="Jane" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="lastName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Last name</FormLabel>
                              <FormControl>
                                <Input placeholder="Doe" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="jane@example.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone</FormLabel>
                            <FormControl>
                              <Input type="tel" placeholder="(555) 123-4567" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="reason"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Reason for visit</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select a reason" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="urgent-care">Urgent care</SelectItem>
                                <SelectItem value="mental-health">Mental health</SelectItem>
                                <SelectItem value="prescription">Prescription refill</SelectItem>
                                <SelectItem value="chronic-care">Chronic care</SelectItem>
                                <SelectItem value="dermatology">Dermatology</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                              <Textarea placeholder="Tell us about your symptoms or questions" rows={4} {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button type="submit" className="w-full bg-black text-white hover:bg-black/90">
                        Book appointment <Send className="ml-2 h-4 w-4" />
                      </Button>
                      <p className="text-xs text-muted-foreground">
                        By submitting, you agree to our privacy policy. This form is for appointment requests only. For emergencies, call 112.
                      </p>
                    </form>
                  </Form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
