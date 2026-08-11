import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const footerLinks = [
  {
    title: "Care",
    links: [
      { label: "Sexual Health", to: "/services/sexual-health" },
      { label: "Hair Loss", to: "/services/hair-loss" },
      { label: "Acne", to: "/services/acne" },
      { label: "Scarring & Hyperpigmentation", to: "/services/scarring" },
      { label: "Weight Loss", to: "/services/weight-loss" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", to: "/about" },
      { label: "Pricing", to: "/pricing" },
      { label: "How it works", to: "/how-it-works" },
      { label: "Contact", to: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy policy", to: "/contact" },
      { label: "Terms of service", to: "/contact" },
      { label: "NDPR notice", to: "/contact" },
    ],
  },
];

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container-tight section-padding">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link to="/" className="flex items-center gap-2 text-xl font-bold tracking-tight text-foreground">
              <img src="/logo.png" alt="Pocketpill Logo" className="h-8 w-auto object-contain" />
              <span className="font-heading">PocketPill</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Certified doctors, pharmacists and team of healthcare professionals, on your schedule. PocketPill brings quality care to your phone — no waiting rooms, no hassle.
            </p>
            <div className="mt-6 flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3 lg:col-span-8">
            {footerLinks.map((group) => (
              <div key={group.title}>
                <h3 className="font-heading text-sm font-semibold text-foreground">{group.title}</h3>
                <ul className="mt-4 space-y-3">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <Link to={link.to} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} PocketPill. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            PocketPill is not a replacement for emergency care. If you are experiencing a medical emergency, call 112.
          </p>
        </div>
      </div>
    </footer>
  );
}
