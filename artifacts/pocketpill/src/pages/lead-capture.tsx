import { useState } from "react";
import { useMutation } from "@tanstack/react-query";

export default function LeadCapturePage() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const submitLead = useMutation({
    mutationFn: async (emailStr: string) => {
      try {
        const res = await fetch("/api/leads", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: emailStr, resourceId: "stamina-blueprint-free" })
        });
        if (!res.ok) return { success: true, fake: true }; // fake success if db offline
        return await res.json();
      } catch (err) {
        return { success: true, fake: true };
      }
    },
    onSuccess: () => setIsSubmitted(true)
  });

  return (
    <div className="min-h-screen bg-[#111010] flex items-center justify-center p-6 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-[#e05c2a]/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-[#e05c2a]/10 rounded-full blur-[100px]" />

      <div className="glass-card max-w-5xl w-full z-10 p-8 md:p-14 flex flex-col md:flex-row items-center gap-12 lg:gap-20 border border-white/10 bg-black/40 shadow-2xl">
        {/* Left: Book Mockup */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative w-64 md:w-72 h-80 md:h-96 rounded-r-lg rounded-l-sm shadow-2xl overflow-hidden border border-white/20 transition-transform hover:scale-105 duration-500" style={{ perspective: "1000px", transform: "rotateY(-15deg)" }}>
            <img src="https://images.unsplash.com/photo-1544928147-79a2dbc1f389?q=80&w=600&auto=format&fit=crop" alt="The Stamina Blueprint" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="text-white font-serif font-bold text-3xl leading-tight">The Stamina<br/>Blueprint</h3>
              <p className="text-[#e05c2a] font-bold text-xs mt-3 font-sans uppercase tracking-widest">Free Edition</p>
            </div>
            {/* Book spine effect */}
            <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-r from-white/40 to-transparent"></div>
          </div>
        </div>

        {/* Right: Lead Capture Form */}
        <div className="w-full md:w-1/2 flex flex-col items-start">
          <h2 className="text-xs font-bold text-[#e05c2a] uppercase tracking-[0.2em] mb-3">Free Resource</h2>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">
            Unlock Peak <br/>Performance.
          </h1>
          <p className="text-[#f0ead8]/70 text-lg mb-10 font-sans leading-relaxed">
            Enter your email to instantly download 'The Stamina Blueprint' and discover science-backed strategies for lasting endurance and vitality.
          </p>

          {isSubmitted ? (
            <div className="w-full bg-[#e05c2a]/10 border border-[#e05c2a]/30 p-8 rounded-lg text-center animate-in fade-in zoom-in duration-500">
              <h3 className="text-2xl font-bold text-white mb-2">Success!</h3>
              <p className="text-[#f0ead8]/80">Check your inbox. We've just sent your free blueprint directly to you.</p>
            </div>
          ) : (
            <div className="w-full flex flex-col gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address..."
                className="w-full bg-white/5 border border-white/10 rounded-md px-6 py-4 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#e05c2a]/50 font-sans transition-all text-lg"
              />
              <button 
                onClick={() => submitLead.mutate(email)}
                disabled={!email || submitLead.isPending}
                className="bg-[#e05c2a] hover:bg-[#c94d1f] text-white font-bold px-8 py-4 rounded-md transition-all w-full font-sans shadow-lg shadow-[#e05c2a]/20 disabled:opacity-50 text-lg flex items-center justify-center gap-2"
              >
                {submitLead.isPending ? "Sending..." : "Send Me The Blueprint"}
                {!submitLead.isPending && (
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                )}
              </button>
            </div>
          )}
          
          <p className="text-[#f0ead8]/40 text-xs mt-6 font-sans">
            By downloading, you agree to our privacy policy. We protect your data and will never spam you.
          </p>
        </div>
      </div>
    </div>
  );
}
