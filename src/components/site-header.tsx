import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Services", to: "/services", external: false },
  { label: "Shop", to: "https://shop.pocketpill.co", external: true },
  { label: "How it works", to: "/how-it-works", external: false },
  { label: "Pricing", to: "/pricing", external: false },
  { label: "About", to: "/about", external: false },
  { label: "Blog", to: "/blog", external: false },
  { label: "Contact", to: "/contact", external: false },
];

export function SiteHeader({ className }: { className?: string }) {
  const [open, setOpen] = useState(false);

  return (
    <header className={cn("sticky top-0 z-50 w-full border-b border-border/60 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60", className)}>
      <div className="container-tight flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-xl font-bold tracking-tight text-foreground">
          <img src="/logo.png" alt="Pocketpill Logo" className="h-8 w-auto object-contain" />
          <span className="font-heading">PocketPill</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            link.external ? (
              <a
                key={link.to}
                href={link.to}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.to}
                to={link.to}
                activeProps={{ className: "text-foreground" }}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            )
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button size="sm" className="bg-black text-white hover:bg-black/90" asChild>
            <Link to="/book">Book a visit</Link>
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" aria-label="Open menu">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full max-w-sm bg-background">
            <div className="flex flex-col gap-8 pt-8">
              <Link to="/" onClick={() => setOpen(false)} className="flex items-center gap-2 text-xl font-bold">
                <img src="/logo.png" alt="Pocketpill Logo" className="h-8 w-auto object-contain" />
                <span className="font-heading">PocketPill</span>
              </Link>
              <nav className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  link.external ? (
                    <a
                      key={link.to}
                      href={link.to}
                      onClick={() => setOpen(false)}
                      className="text-lg font-medium text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      key={link.to}
                      to={link.to}
                      onClick={() => setOpen(false)}
                      className="text-lg font-medium text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  )
                ))}
              </nav>
              <div className="flex flex-col gap-3">
                <Button className="bg-black text-white hover:bg-black/90" asChild>
                  <Link to="/book" onClick={() => setOpen(false)}>
                    Book a visit
                  </Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
