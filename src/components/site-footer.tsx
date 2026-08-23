import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const footerLinks = [
  {
    title: "Care",
    links: [
      { label: "Urgent care", to: "/services" },
      { label: "Mental health", to: "/mental-health" },
      { label: "Prescriptions", to: "/services" },
      { label: "Chronic care", to: "/services" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", to: "/about" },
      { label: "Blog", to: "/blog" },
      { label: "Pricing", to: "/pricing" },
      { label: "How it works", to: "/how-it-works" },
      { label: "Contact", to: "/contact" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help center", to: "/help-center" },
      { label: "FAQ", to: "/help-center" },
      { label: "Community", to: "https://t.me/pocketpill" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy policy", to: "/privacy-policy" },
      { label: "Terms of use", to: "/terms-of-use" },
      { label: "NDPR notice", to: "/privacy-policy#ndpr" },
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
              Certified doctors, pharmacists and team of healthcare professionals, on your schedule. PocketPill brings quality care to your phone.
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

          <div className="grid gap-8 sm:grid-cols-4 lg:col-span-8">
            {footerLinks.map((group) => (
              <div key={group.title}>
                <h3 className="font-heading text-sm font-semibold text-foreground">{group.title}</h3>
                <ul className="mt-4 space-y-3">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      {link.to.startsWith('http') ? (
                        <a href={link.to} target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                          {link.label}
                        </a>
                      ) : (
                        <Link to={link.to} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                          {link.label}
                        </Link>
                      )}
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
          <p className="text-xs text-muted-foreground text-center sm:text-right">
            PocketPill is not a replacement for emergency care.<br className="hidden sm:block" /> If you are experiencing a medical emergency, call 112.
          </p>
        </div>
      </div>
    </footer>
  );
}
