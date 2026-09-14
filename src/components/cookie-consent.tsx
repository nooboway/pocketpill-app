import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("pocketpill-cookie-consent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleConsent = (decision: "all" | "essential") => {
    localStorage.setItem("pocketpill-cookie-consent", decision);
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[100] border-t border-border/50 bg-background/95 p-4 shadow-2xl backdrop-blur-lg animate-in slide-in-from-bottom-full duration-500">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div className="flex flex-col gap-1">
          <h3 className="font-heading text-sm font-bold">Cookie Preferences</h3>
          <p className="text-xs text-muted-foreground max-w-3xl text-balance leading-relaxed">
            PocketPill respects your privacy. We use essential cookies to provide our core telepharmacy services, and non-essential cookies to analyze site traffic. By clicking "Accept All", you consent to our use of cookies in compliance with the Nigeria Data Protection Act (NDPA) 2023 and GAID 2025.
          </p>
        </div>
        <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row sm:items-center">
          <Button variant="outline" size="sm" onClick={() => handleConsent("essential")} className="whitespace-nowrap rounded-full">
            Reject Non-Essential
          </Button>
          <Button size="sm" onClick={() => handleConsent("all")} className="whitespace-nowrap rounded-full bg-[#123d2d] text-white hover:bg-[#123d2d]/90">
            Accept All
          </Button>
        </div>
      </div>
    </div>
  );
}
