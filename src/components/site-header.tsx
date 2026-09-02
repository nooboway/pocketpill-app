import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Care", to: "/services" },
  { label: "Pharmacy", to: "/shop" },
  { label: "How it works", to: "/how-it-works" },
  { label: "Pricing", to: "/pricing" },
];

export function SiteHeader({
  className,
  overlay = false,
}: {
  className?: string;
  overlay?: boolean;
}) {
  const [open, setOpen] = useState(false);

  return (
    <header
      className={cn(
        "z-50 w-full",
        overlay
          ? "absolute left-0 top-0 border-transparent bg-transparent text-white"
          : "sticky top-0 border-b border-border/70 bg-[#fffefa]/90 text-foreground backdrop-blur-xl",
        className,
      )}
    >
      <div className="container-tight flex h-[76px] items-center justify-between">
        <Link
          to="/"
          className={cn(
            "flex items-center gap-2.5 text-xl font-bold tracking-[-0.06em]",
            overlay ? "text-white" : "text-foreground",
          )}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-current text-lg font-extrabold">
            P
          </span>
          <span className="font-heading">PocketPill</span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeProps={{ className: overlay ? "text-white" : "text-foreground" }}
              className={cn(
                "text-[13px] font-semibold transition-colors",
                overlay
                  ? "text-white/75 hover:text-white"
                  : "text-muted-foreground hover:text-primary",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            to="/contact"
            className={cn(
              "hidden text-[13px] font-semibold transition-colors hover:text-primary sm:inline-flex",
              overlay ? "text-white/75 hover:text-white" : "text-muted-foreground",
            )}
          >
            Talk to us
          </Link>
          <Button
            size="sm"
            className={cn(
              "rounded-full px-5 shadow-none",
              overlay
                ? "bg-white text-[#123d2d] hover:bg-[#d9f0df]"
                : "bg-primary text-primary-foreground hover:bg-primary/90",
            )}
            asChild
          >
            <Link to="/book">
              Start care <ArrowUpRight className="ml-1.5 h-3.5 w-3.5" />
            </Link>
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              aria-label="Open menu"
              className={overlay ? "text-white hover:bg-white/15 hover:text-white" : undefined}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full max-w-sm bg-background">
            <div className="flex flex-col gap-8 pt-8">
              <Link
                to="/"
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 text-xl font-bold"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-lg font-extrabold text-primary-foreground">
                  P
                </span>
                <span className="font-heading">PocketPill</span>
              </Link>
              <nav className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setOpen(false)}
                    className="text-lg font-semibold text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <div className="flex flex-col gap-3">
                <Button variant="outline" asChild>
                  <Link to="/contact" onClick={() => setOpen(false)}>
                    Talk to us
                  </Link>
                </Button>
                <Button
                  className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
                  asChild
                >
                  <Link to="/book" onClick={() => setOpen(false)}>
                    Start care <ArrowUpRight className="ml-1.5 h-4 w-4" />
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
