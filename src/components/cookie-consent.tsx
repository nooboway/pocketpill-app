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
    <div className="fixed inset-x-0 bottom-0 z-[100] p-4 pb-6 sm:p-6 sm:pb-8 animate-in slide-in-from-bottom-full duration-500">
      <div className="mx-auto flex max-w-4xl flex-col items-start justify-between gap-4 rounded-xl border border-border/50 bg-background/95 p-6 shadow-2xl backdrop-blur-lg sm:flex-row sm:items-center">
        <div className="flex flex-col gap-2">
          <h3 className="font-heading text-lg font-bold">Cookie Preferences</h3>
          <p className="text-sm text-muted-foreground max-w-2xl text-balance">
            We use cookies to improve your experience, personalize content, and analyze site traffic. By clicking "Accept All", you consent to our use of cookies in accordance with NDPC guidelines.
          </p>
        </div>
        <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row sm:items-center">
          <Button variant="outline" onClick={() => handleConsent("essential")} className="whitespace-nowrap rounded-full">
            Reject Non-Essential
          </Button>
          <Button onClick={() => handleConsent("all")} className="whitespace-nowrap rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
            Accept All
          </Button>
        </div>
      </div>
    </div>
  );
}
