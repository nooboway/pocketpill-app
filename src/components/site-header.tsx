import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Specialty Care", to: "/specialty" },
  { label: "Mental Health Care", to: "/mental-health" },
  { label: "Lineage", to: "/lineage" },
  { label: "How It Works", to: "/how-it-works" },
  { label: "About", to: "/about" },
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
          : "sticky top-0 border-b border-border/70 bg-background/90 text-foreground backdrop-blur-xl",
        className,
      )}
    >
      <div className="ds-header-inner">
        <Link
          to="/"
          className={cn(
            "flex items-center gap-2.5 text-xl font-semibold transition-opacity hover:opacity-80",
            overlay ? "text-white" : "text-foreground",
          )}
        >
          <img
            src="/pocketpill-icon-512.png"
            alt=""
            className={cn(
              "h-[1cap] w-auto shrink-0 pocketpill-wordmark",
              overlay && "brightness-0 invert",
            )}
          />
          <span className="pocketpill-wordmark leading-none">PocketPill</span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
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
          <Button
            size="sm"
            className={cn(
              "rounded-full px-5 shadow-none",
              overlay
                ? "bg-white text-[#123d2d] hover:bg-[#d9f0df]"
                : "bg-[#123d2d] text-white hover:bg-[#123d2d]/90",
            )}
            asChild
          >
            <Link to="/find">
              Find a medicine <ArrowUpRight className="ml-1.5 h-3.5 w-3.5" />
            </Link>
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              aria-label="Open menu"
              className={overlay ? "text-white hover:bg-white/15 hover:text-white" : undefined}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-full max-w-sm overflow-y-auto bg-background"
            aria-describedby={undefined}
          >
            <SheetTitle className="sr-only">PocketPill navigation</SheetTitle>
            <div className="flex flex-col gap-8 pt-8">
              <Link
                to="/"
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 text-xl font-bold tracking-tight transition-opacity hover:opacity-80"
              >
                <img
                  src="/pocketpill-icon-512.png"
                  alt=""
                  className="h-[1cap] w-auto shrink-0 pocketpill-wordmark"
                />
                <span className="pocketpill-wordmark">PocketPill</span>
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
                <Button
                  className="rounded-full bg-[#123d2d] text-white hover:bg-[#123d2d]/90"
                  asChild
                >
                  <Link to="/find" onClick={() => setOpen(false)}>
                    Find a medicine <ArrowUpRight className="ml-1.5 h-4 w-4" />
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
