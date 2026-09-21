import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  useEffect(() => {
    try {
      setShowBanner(!localStorage.getItem("pocketpill-cookie-consent"));
    } catch {
      setShowBanner(true);
    }
    const reopen = () => setShowBanner(true);
    window.addEventListener("pocketpill:privacy-notice", reopen);
    return () => window.removeEventListener("pocketpill:privacy-notice", reopen);
  }, []);

  function dismiss() {
    try {
      localStorage.setItem("pocketpill-cookie-consent", "essential");
    } catch {
      /* The notice can still be dismissed for this visit if storage is blocked. */
    }
    setShowBanner(false);
  }

  if (!showBanner) return null;
  return (
    <aside
      aria-label="Privacy and browser storage"
      className="fixed inset-x-0 bottom-0 z-[100] border-t border-border/50 bg-background/95 p-4 shadow-2xl backdrop-blur-lg"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h2 className="text-sm font-semibold">Privacy and browser storage</h2>
          <p className="mt-1 max-w-3xl text-xs text-muted-foreground leading-relaxed">
            We store your acknowledgement in this browser until you clear this site’s data. This
            website does not currently enable analytics or advertising cookies. External services
            such as WhatsApp have their own privacy terms.{" "}
            <Link to="/privacy-policy" className="font-semibold underline underline-offset-4">
              Read our privacy policy
            </Link>
          </p>
        </div>
        <Button
          type="button"
          size="sm"
          onClick={dismiss}
          className="rounded-full bg-[#123d2d] text-white"
        >
          Understood
        </Button>
      </div>
    </aside>
  );
}
