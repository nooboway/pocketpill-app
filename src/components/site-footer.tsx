import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import ndpcBadge from "@/assets/ndpc-badge.png";

const footerLinks = [
  {
    title: "Care",
    links: [
      { label: "Find a Medicine", to: "/find" },
      { label: "Talk to a Pharmacist", to: "/telepharmacy" },
      { label: "Specialty Care", to: "/specialty" },
      { label: "Mental Health Care", to: "/mental-health" },
      { label: "Lineage", to: "/lineage" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", to: "/about" },
      { label: "How it works", to: "/how-it-works" },
      { label: "Partners", to: "/partners" },
      { label: "Trust & Compliance", to: "/trust" },
      { label: "Privacy Policy", to: "/privacy-policy" },
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
    <footer className="ds-footer">
      <div className="ds-footer__inner">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link
              to="/"
              className="pocketpill-brand text-xl text-white transition-opacity hover:opacity-80"
            >
              <img
                src="/pocketpill-icon-512.png"
                alt=""
                className="h-[1.2cap] w-auto shrink-0 pocketpill-wordmark brightness-0 invert"
              />
              <span className="pocketpill-wordmark">PocketPill</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/65">
              <strong>Care beyond the prescription.</strong> Find medicines, access pharmacist
              support, source difficult treatments and stay on track with ongoing medication care.
            </p>
            <div className="mt-6 flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="text-white/60 transition-colors hover:text-white"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>

            <div className="mt-8">
              <a
                href="/ndpc-certificate.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-block transition-opacity hover:opacity-80"
              >
                <img
                  src={ndpcBadge}
                  alt="NDPC registration document"
                  className="h-20 w-auto rounded-md shadow-sm"
                  loading="lazy"
                />
              </a>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-2">
            {footerLinks.map((group) => (
              <div key={group.title}>
                <h3 className="font-heading text-xs font-semibold uppercase tracking-[.18em] text-white/50">
                  {group.title}
                </h3>
                <ul className="mt-4 space-y-3">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.to}
                        className="text-sm text-white/75 transition-colors hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/15 pt-8 text-white/60 sm:flex-row">
          <div className="flex flex-col items-center gap-1 sm:items-start">
            <p className="text-xs">
              &copy; {new Date().getFullYear()} PocketPill. All rights reserved.
            </p>
            <button
              type="button"
              className="text-xs underline underline-offset-4 hover:text-white"
              onClick={() => window.dispatchEvent(new Event("pocketpill:privacy-notice"))}
            >
              Cookie &amp; privacy notice
            </button>
          </div>
          <p className="text-xs text-center sm:text-right">Built by Sylens™</p>
        </div>
      </div>
    </footer>
  );
}
