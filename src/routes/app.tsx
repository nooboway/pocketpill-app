import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, ArrowRight, CheckCircle2, Smartphone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Route = createFileRoute("/app")({
  component: AppComingSoonPage,
  head: () => ({
    meta: [
      { title: "App Coming Soon — PocketPill" },
      { name: "description", content: "The PocketPill mobile app is currently being built. Join the waitlist today." },
    ],
  }),
});

function AppComingSoonPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    // Simulate submission
    setTimeout(() => {
      setSubmitted(true);
    }, 400);
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#123d2d] text-white">
      {/* Minimal Header */}
      <header className="absolute inset-x-0 top-0 z-50 flex items-center justify-between px-6 py-6 lg:px-12">
        <Link to="/" className="flex items-center gap-2 text-xl font-bold tracking-tight text-white hover:opacity-80 transition-opacity">
          <img src="/pocketpill-icon-512.png" alt="PocketPill" className="h-8 w-8 brightness-0 invert" />
          <span className="font-heading">PocketPill</span>
        </Link>
        <Link to="/" className="text-sm font-medium text-white/80 hover:text-white flex items-center transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to home
        </Link>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center relative overflow-hidden">
        
        {/* Background glow effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#258257] rounded-full blur-[120px] opacity-30 mix-blend-screen pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-orange-soft/40 rounded-full blur-[150px] opacity-20 pointer-events-none" />

        <div className="container px-6 py-24 relative z-10 mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center justify-center p-3 bg-white/10 rounded-2xl backdrop-blur-md mb-8 border border-white/20">
            <Smartphone className="h-8 w-8 text-white" />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold font-heading tracking-tight mb-6 text-balance">
            Your health, <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-orange-200">
              handled in your pocket.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed text-balance">
            Our beautifully designed mobile app is currently being built. 
            We're working hard to bring the full PocketPill pharmacy and telehealth experience directly to your smartphone.
          </p>

          <div className="max-w-md mx-auto">
            {submitted ? (
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 animate-in fade-in zoom-in duration-500">
                <CheckCircle2 className="h-12 w-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold font-heading mb-2">You're on the list!</h3>
                <p className="text-white/70">
                  Thank you for joining. We'll notify you as soon as the PocketPill app is ready for download.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:flex-row animate-in fade-in slide-in-from-bottom-4 duration-700">
                <Input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="h-14 bg-white/10 border-white/20 text-white placeholder:text-white/50 focus-visible:ring-white/50 rounded-xl px-5 text-base flex-1"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Button type="submit" size="lg" className="h-14 rounded-xl bg-white text-[#123d2d] hover:bg-white/90 font-semibold px-8 whitespace-nowrap transition-transform hover:scale-105 active:scale-95">
                  Join Waitlist <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            )}
            
            {!submitted && (
              <p className="text-xs text-white/50 mt-4">
                No spam, ever. We'll only email you when the app launches.
              </p>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
