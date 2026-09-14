import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useRef } from "react";
import { Camera, FileUp, X, CheckCircle2, Search, FileSignature, Truck } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Route = createFileRoute("/find")({
  component: FindMedicinePage,
  head: () => ({
    meta: [
      { title: "Find a medicine | PocketPill" },
      { name: "description", content: "Looking for a drug? Send the name or a photo. A pharmacist finds it and reverts." },
    ],
  }),
});

function FindMedicinePage() {
  const [submitted, setSubmitted] = useState(false);
  const [query, setQuery] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const [showDetails, setShowDetails] = useState(false);
  
  // Details form
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [name, setName] = useState("");
  const [duration, setDuration] = useState("");
  const [error, setError] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const hasContent = query.trim().length > 0 || files.length > 0;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles((prev) => [...prev, ...Array.from(e.target.files!)]);
      setShowDetails(true);
      setError("");
    }
  };

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
    if (query.trim().length === 0 && files.length === 1) {
      setShowDetails(false);
    }
  };

  const handleInitialInput = () => {
    if (hasContent) {
      setShowDetails(true);
      setError("");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!hasContent) {
      setError("Name or photo, one of the two is enough.");
      return;
    }
    if (!showDetails) {
      setShowDetails(true);
      return;
    }
    if (!phone) {
      setError("Please provide your WhatsApp number so we can reach you.");
      return;
    }
    
    // Simulate API call
    console.log("Lead saved tagged 'sourcing'", { query, files, phone, city, name, duration });
    setSubmitted(true);
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#f3f7f1]">
      <SiteHeader />
      
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        {submitted ? (
          <div className="max-w-2xl mx-auto bg-white rounded-3xl p-10 lg:p-16 shadow-card border border-border/40 text-center space-y-8 animate-in fade-in zoom-in-95 duration-500">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#d9f0df]">
              <CheckCircle2 className="h-10 w-10 text-[#123d2d]" />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-heading font-semibold text-foreground">We are on it.</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A pharmacist will text you on WhatsApp with availability, timeline, and cost. 
                Keep your phone close. You do not need to chase us.
              </p>
            </div>
            <div className="pt-8 mt-8 border-t border-border/50">
              <p className="text-sm text-muted-foreground">
                Ordering for a parent back home? 
                <Link to="/lineage" className="text-[#2b8a62] hover:underline font-bold ml-2 inline-flex items-center">
                  Explore Lineage &rarr;
                </Link>
              </p>
            </div>
          </div>
        ) : (
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8 lg:gap-12 items-start">
            
            {/* Left Column: The Promise */}
            <div className="bg-[#123d2d] text-white rounded-3xl p-8 lg:p-12 shadow-card relative overflow-hidden flex flex-col justify-between min-h-[500px]">
              <div className="relative z-10">
                <span className="text-[#9fd9ae] font-bold tracking-widest text-xs uppercase mb-4 block">Concierge Sourcing</span>
                <h1 className="text-4xl lg:text-5xl font-heading font-semibold mb-6 leading-tight">Stop driving from pharmacy to pharmacy.</h1>
                <p className="text-[#dce7df] text-lg mb-12 max-w-md leading-relaxed">
                  Tell us what you need. Our clinical pharmacists will source genuine medications and coordinate delivery directly to your door.
                </p>
                
                <div className="space-y-8">
                  <div className="flex gap-4">
                    <div className="bg-[#1a523d] p-3 rounded-2xl h-fit flex-shrink-0">
                      <Search className="text-[#b6e3c7] w-6 h-6"/>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">1. You request</h3>
                      <p className="text-[#dce7df] text-sm mt-1 leading-relaxed">Send the name, a photo of the box, or your prescription.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="bg-[#1a523d] p-3 rounded-2xl h-fit flex-shrink-0">
                      <FileSignature className="text-[#b6e3c7] w-6 h-6"/>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">2. Pharmacist review</h3>
                      <p className="text-[#dce7df] text-sm mt-1 leading-relaxed">We verify the prescription, check interactions, and confirm availability via WhatsApp.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="bg-[#1a523d] p-3 rounded-2xl h-fit flex-shrink-0">
                      <Truck className="text-[#b6e3c7] w-6 h-6"/>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">3. Direct delivery</h3>
                      <p className="text-[#dce7df] text-sm mt-1 leading-relaxed">Secure payment and discreet delivery to your location in Nigeria.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Background gradient effects */}
              <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#2b8a62] rounded-full blur-[100px] opacity-20 pointer-events-none"></div>
            </div>

            {/* Right Column: The Form */}
            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-card border border-border/40">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <h2 className="text-2xl font-heading font-semibold text-foreground mb-2">What do you need?</h2>
                  <p className="text-sm text-muted-foreground">Type the name or upload a photo. One of the two is enough.</p>
                </div>

                <div className="space-y-6">
                  <Input 
                    autoFocus
                    placeholder="e.g. Glucophage, Augmentin, Insulin..." 
                    className="text-lg py-7 px-5 bg-[#f9faf7] border-border/60 shadow-inner rounded-xl placeholder:text-muted-foreground/50 focus-visible:ring-[#2b8a62]"
                    value={query}
                    onChange={(e) => {
                      setQuery(e.target.value);
                      if (e.target.value.length > 2) setShowDetails(true);
                      if (error) setError("");
                    }}
                    onBlur={handleInitialInput}
                  />
                  
                  <input 
                    type="file" 
                    ref={fileInputRef} 
                    onChange={handleFileChange} 
                    className="hidden" 
                    multiple 
                    accept="image/*,.pdf" 
                  />

                  {files.length === 0 ? (
                    <div className="grid grid-cols-2 gap-4">
                      <button 
                        type="button" 
                        onClick={() => fileInputRef.current?.click()}
                        className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-border/60 rounded-xl hover:border-[#2b8a62] hover:bg-[#d9f0df]/30 transition-colors text-[#2b8a62] group"
                      >
                        <Camera className="w-6 h-6 mb-2 group-hover:scale-110 transition-transform" /> 
                        <span className="text-sm font-medium">Photo of box</span>
                      </button>
                      <button 
                        type="button" 
                        onClick={() => fileInputRef.current?.click()}
                        className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-border/60 rounded-xl hover:border-[#2b8a62] hover:bg-[#d9f0df]/30 transition-colors text-[#2b8a62] group"
                      >
                        <FileUp className="w-6 h-6 mb-2 group-hover:scale-110 transition-transform" /> 
                        <span className="text-sm font-medium">Prescription</span>
                      </button>
                    </div>
                  ) : (
                    <div className="flex flex-wrap gap-4 bg-[#f9faf7] p-4 rounded-xl border border-border/40">
                      {files.map((file, idx) => (
                        <div key={idx} className="relative group rounded-lg overflow-hidden border border-border/50 bg-white h-20 w-20 flex items-center justify-center shadow-sm">
                          {file.type.startsWith('image/') ? (
                            <img src={URL.createObjectURL(file)} alt="preview" className="object-cover h-full w-full" />
                          ) : (
                            <span className="text-xs text-center p-1 truncate w-full">{file.name}</span>
                          )}
                          <button 
                            type="button" 
                            onClick={() => removeFile(idx)}
                            className="absolute -top-1 -right-1 bg-black/70 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity scale-75"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                      <button 
                        type="button" 
                        onClick={() => fileInputRef.current?.click()}
                        className="h-20 w-20 rounded-lg border-2 border-dashed border-[#2b8a62]/40 flex flex-col items-center justify-center text-[#2b8a62] hover:bg-[#2b8a62]/5 transition-colors bg-white"
                      >
                        <Camera className="w-5 h-5 mb-1" />
                        <span className="text-[10px] font-medium uppercase tracking-wider">Add More</span>
                      </button>
                    </div>
                  )}
                </div>

                {showDetails && (
                  <div className="animate-in slide-in-from-top-4 fade-in duration-300 space-y-6 pt-6 border-t border-border/50">
                    <h3 className="font-medium text-foreground">Where should we reach you?</h3>
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-muted-foreground">WhatsApp number *</label>
                        <Input 
                          placeholder="e.g. 08012345678" 
                          value={phone} 
                          onChange={(e) => setPhone(e.target.value)} 
                          className="bg-[#f9faf7]"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-muted-foreground">City / area in Nigeria</label>
                        <Input 
                          placeholder="e.g. Ikeja, Lagos" 
                          value={city} 
                          onChange={(e) => setCity(e.target.value)} 
                          className="bg-[#f9faf7]"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-muted-foreground">Your name (optional)</label>
                        <Input 
                          placeholder="Jane" 
                          value={name} 
                          onChange={(e) => setName(e.target.value)} 
                          className="bg-[#f9faf7]"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-muted-foreground">Quantity (optional)</label>
                        <Input 
                          placeholder="e.g. 1 month supply" 
                          value={duration} 
                          onChange={(e) => setDuration(e.target.value)} 
                          className="bg-[#f9faf7]"
                        />
                      </div>
                    </div>

                    {error && <p className="text-sm font-medium text-destructive bg-destructive/10 p-3 rounded-md">{error}</p>}

                    <div className="pt-2">
                      <Button type="submit" size="lg" className="w-full bg-[#123d2d] text-white hover:bg-[#1a523d] rounded-xl h-14 text-lg font-semibold shadow-md transition-all hover:shadow-lg hover:-translate-y-0.5">
                        Send Request
                      </Button>
                      <p className="text-xs text-center text-muted-foreground mt-4">
                        By submitting, you agree to a pharmacist contacting you via WhatsApp. No payment is required yet.
                      </p>
                    </div>
                  </div>
                )}
              </form>
            </div>
            
          </div>
        )}
      </main>
      <SiteFooter />
    </div>
  );
}
