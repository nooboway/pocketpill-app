import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Facebook, Instagram, Linkedin, Twitter, ShieldCheck } from "lucide-react";
import ndpcBadge from "@/assets/ndpc-badge.png";

const footerLinks = [
  {
    title: "Care",
    links: [
      { label: "Oncology & specialty care", to: "/services" },
      { label: "Mental health", to: "/services" },
      { label: "Clinical pharmacy", to: "/services" },
      { label: "Prescriptions", to: "/services" },
      { label: "Virtual consultations", to: "/book" },
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
    <footer className="mt-2 rounded-[2rem] bg-[#123d2d] text-white">
      <div className="container-tight section-padding">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link
              to="/"
              className="flex items-center gap-2 text-xl font-bold tracking-tight text-white transition-opacity hover:opacity-80"
            >
              <img 
                src="/pocketpill-icon-512.png" 
                alt="" 
                className="h-8 w-8 brightness-0 invert" 
              />
              <span className="font-heading">PocketPill</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/65">
              A calmer way to access trusted pharmacy care. Talk with a licensed pharmacist, shop
              confidently, and get support that meets you where you are.
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
                  alt="NDPC Certified Badge" 
                  className="h-20 w-auto rounded-md shadow-sm" 
                  loading="lazy"
                />
              </a>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3 lg:col-span-8">
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
            <p className="text-xs">
              PocketPill, Ikeja, Lagos, Nigeria
            </p>
          </div>
          <p className="text-xs text-center sm:text-right">
            PocketPill is not a replacement for emergency care. If you are experiencing a medical
            emergency, call 112.
          </p>
        </div>
      </div>
    </footer>
  );
}
