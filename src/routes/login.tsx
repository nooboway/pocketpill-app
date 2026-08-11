import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Lock, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Route = createFileRoute("/login")({
  component: LoginPage,
  head: () => ({
    meta: [
      { title: "Log in — PocketPill" },
      { name: "description", content: "Sign in to your PocketPill account to manage your protocols and consultations." },
    ],
  }),
});

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder login action
    alert(`Attempting to log in with ${email}`);
  };

  return (
    <div className="flex min-h-screen bg-black">
      {/* Left Side: Branding / Motivation */}
      <div className="hidden lg:flex w-1/2 flex-col justify-between bg-gradient-to-br from-black via-zinc-900 to-black p-12 text-white border-r border-white/10">
        <div>
          <Link to="/" className="flex items-center gap-2 text-2xl font-bold tracking-tight">
            <img src="/logo.png" alt="Pocketpill Logo" className="h-8 w-auto object-contain brightness-0 invert" />
            <span className="font-heading">PocketPill</span>
          </Link>
        </div>
        
        <div className="max-w-md">
          <blockquote className="font-heading text-3xl font-semibold leading-tight text-white/90">
            "The problem is often not the condition. It is the silence."
          </blockquote>
          <p className="mt-6 text-lg text-white/60">
            Access your personalized protocols, chat securely with your pharmacist, and manage your monthly refills in one private space.
          </p>
        </div>
        
        <div className="text-sm text-white/40">
          &copy; {new Date().getFullYear()} PocketPill. Secure & Confidential.
        </div>
      </div>

      {/* Right Side: Login Form */}
      <div className="flex w-full lg:w-1/2 flex-col items-center justify-center p-8 bg-[#0a0a0a]">
        {/* Mobile Logo */}
        <div className="mb-12 lg:hidden">
          <Link to="/" className="flex items-center gap-2 text-2xl font-bold tracking-tight text-white">
            <img src="/logo.png" alt="Pocketpill Logo" className="h-8 w-auto object-contain brightness-0 invert" />
            <span className="font-heading">PocketPill</span>
          </Link>
        </div>

        <div className="w-full max-w-md space-y-8">
          <div className="text-center lg:text-left">
            <h1 className="font-heading text-3xl font-bold text-white">Welcome back</h1>
            <p className="mt-2 text-sm text-white/60">Sign in to your account to continue.</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80" htmlFor="email">
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-white/40" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="pl-10 bg-white/5 border-white/10 text-white placeholder:text-white/30 focus-visible:ring-primary h-11"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium text-white/80" htmlFor="password">
                    Password
                  </label>
                  <a href="#" className="text-xs text-primary hover:underline font-medium">
                    Forgot password?
                  </a>
                </div>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-white/40" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="pl-10 bg-white/5 border-white/10 text-white placeholder:text-white/30 focus-visible:ring-primary h-11"
                  />
                </div>
              </div>
            </div>

            <Button type="submit" className="w-full h-11 bg-primary text-primary-foreground hover:bg-primary/90 font-medium text-base">
              Sign In
            </Button>
            
            <div className="text-center text-sm text-white/60">
              Don't have an account?{" "}
              <Link to="/contact" className="text-primary hover:underline font-medium">
                Book a consult
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
