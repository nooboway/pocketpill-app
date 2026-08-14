import { useState, useEffect } from "react";
import { Cookie } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Small delay to ensure smooth rendering after page load
      const timer = setTimeout(() => setShowBanner(true), 1000);
      return () => clearTimeout(timer);
    } else {
      try {
        setPreferences(JSON.parse(consent));
      } catch {
        // If localStorage data is corrupted, show the banner again
        localStorage.removeItem("cookie-consent");
        const timer = setTimeout(() => setShowBanner(true), 1000);
        return () => clearTimeout(timer);
      }
    }
  }, []);

  const handleAcceptAll = () => {
    const newPrefs = { necessary: true, analytics: true, marketing: true };
    setPreferences(newPrefs);
    localStorage.setItem("cookie-consent", JSON.stringify(newPrefs));
    setShowBanner(false);
    setShowDialog(false);
  };

  const handleDeclineAll = () => {
    const newPrefs = { necessary: true, analytics: false, marketing: false };
    setPreferences(newPrefs);
    localStorage.setItem("cookie-consent", JSON.stringify(newPrefs));
    setShowBanner(false);
    setShowDialog(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem("cookie-consent", JSON.stringify(preferences));
    setShowBanner(false);
    setShowDialog(false);
  };

  if (!showBanner) return null;

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-50 animate-in slide-in-from-bottom-full border-t bg-background p-4 shadow-2xl duration-500">
        <div className="container mx-auto flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div className="flex items-start gap-3 text-sm">
            <Cookie className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
            <p className="max-w-[600px] text-muted-foreground">
              We use cookies to enhance your experience. Read our{" "}
              <Link to="/privacy-policy" className="text-primary underline hover:text-primary/80">privacy policy</Link>.
            </p>
          </div>
          <div className="flex w-full items-center gap-2 sm:w-auto">
            <Button variant="ghost" size="sm" onClick={() => setShowDialog(true)}>
              Customize
            </Button>
            <Button variant="outline" size="sm" onClick={handleDeclineAll}>
              Decline
            </Button>
            <Button size="sm" onClick={handleAcceptAll}>
              Accept All
            </Button>
          </div>
        </div>
      </div>

      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Cookie Preferences</DialogTitle>
            <DialogDescription>
              Manage your cookie settings. You can enable or disable different types of cookies below.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="flex items-center justify-between space-x-2">
              <div className="flex flex-col space-y-1">
                <Label htmlFor="necessary">Strictly Necessary</Label>
                <span className="text-xs text-muted-foreground">
                  Required for the website to function properly.
                </span>
              </div>
              <Switch id="necessary" checked={true} disabled />
            </div>
            <div className="flex items-center justify-between space-x-2">
              <div className="flex flex-col space-y-1">
                <Label htmlFor="analytics">Analytics</Label>
                <span className="text-xs text-muted-foreground">
                  Help us understand how visitors interact with our website.
                </span>
              </div>
              <Switch 
                id="analytics" 
                checked={preferences.analytics}
                onCheckedChange={(checked) => setPreferences({ ...preferences, analytics: checked })}
              />
            </div>
            <div className="flex items-center justify-between space-x-2">
              <div className="flex flex-col space-y-1">
                <Label htmlFor="marketing">Marketing</Label>
                <span className="text-xs text-muted-foreground">
                  Used to deliver advertising relevant to your interests.
                </span>
              </div>
              <Switch 
                id="marketing" 
                checked={preferences.marketing}
                onCheckedChange={(checked) => setPreferences({ ...preferences, marketing: checked })}
              />
            </div>
          </div>
          <DialogFooter>
            <Button onClick={handleSavePreferences}>Save Preferences</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
