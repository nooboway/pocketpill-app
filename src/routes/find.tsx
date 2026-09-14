import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useRef } from "react";
import { Camera, FileUp, X, CheckCircle2 } from "lucide-react";
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
    
    // Simulate API call to save lead tagged `sourcing`
    console.log("Lead saved tagged 'sourcing'", { query, files, phone, city, name, duration });
    setSubmitted(true);
  };

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1 flex flex-col items-center justify-center py-24 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-2xl mx-auto">
          {submitted ? (
            <div className="text-center space-y-8 animate-in fade-in duration-500">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#d9f0df]">
                <CheckCircle2 className="h-8 w-8 text-[#123d2d]" />
              </div>
              <div className="space-y-6">
                <p className="text-xl font-medium text-foreground leading-relaxed">
                  Looking for it. A pharmacist will text you on WhatsApp with whether we can get it, how long, and what it costs.
                </p>
                <p className="text-lg text-muted-foreground">
                  Keep your phone on. You do not need to chase us.
                </p>
              </div>
              <div className="pt-8 border-t border-border/50">
                <p className="text-sm text-muted-foreground">
                  If this is for someone else or a parent, they might not be able to use this site.
                  <br />
                  <Link to="/lineage" className="text-primary hover:underline font-medium mt-2 inline-block">
                    Lineage is the loop that keeps the calendar. &rarr;
                  </Link>
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-8">
              <div className="text-center">
                <h1 className="text-3xl font-heading font-semibold text-foreground mb-4">Find a medicine</h1>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <Input 
                    autoFocus
                    placeholder="What are you looking for?" 
                    className="text-lg py-6 shadow-sm placeholder:text-muted-foreground/60"
                    value={query}
                    onChange={(e) => {
                      setQuery(e.target.value);
                      if (e.target.value.length > 2) setShowDetails(true);
                      if (error) setError("");
                    }}
                    onBlur={handleInitialInput}
                  />
                  
                  {!showDetails && (
                    <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-primary">
                      <button 
                        type="button" 
                        onClick={() => fileInputRef.current?.click()}
                        className="flex items-center hover:underline"
                      >
                        <Camera className="w-4 h-4 mr-2" /> Add a photo of the box
                      </button>
                      <button 
                        type="button" 
                        onClick={() => fileInputRef.current?.click()}
                        className="flex items-center hover:underline"
                      >
                        <FileUp className="w-4 h-4 mr-2" /> Add a photo of the prescription
                      </button>
                    </div>
                  )}

                  {!showDetails && (
                    <div className="text-center text-sm text-muted-foreground pt-4">
                      <span className="font-medium text-foreground">Examples:</span> Glucophage &middot; Augmentin &middot; insulin
                    </div>
                  )}

                  <input 
                    type="file" 
                    ref={fileInputRef} 
                    onChange={handleFileChange} 
                    className="hidden" 
                    multiple 
                    accept="image/*,.pdf" 
                  />

                  {files.length > 0 && (
                    <div className="flex flex-wrap gap-4 pt-4">
                      {files.map((file, idx) => (
                        <div key={idx} className="relative group rounded-lg overflow-hidden border border-border/50 bg-cream h-24 w-24 flex items-center justify-center">
                          {file.type.startsWith('image/') ? (
                            <img src={URL.createObjectURL(file)} alt="upload preview" className="object-cover h-full w-full" />
                          ) : (
                            <span className="text-xs text-center p-2 truncate w-full">{file.name}</span>
                          )}
                          <button 
                            type="button" 
                            onClick={() => removeFile(idx)}
                            className="absolute top-1 right-1 bg-black/60 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <X className="w-3 h-3" />
                          </button>
                        </div>
                      ))}
                      <button 
                        type="button" 
                        onClick={() => fileInputRef.current?.click()}
                        className="h-24 w-24 rounded-lg border border-dashed border-primary/40 flex flex-col items-center justify-center text-primary hover:bg-primary/5 transition-colors"
                      >
                        <Camera className="w-5 h-5 mb-1" />
                        <span className="text-xs">Add more</span>
                      </button>
                    </div>
                  )}
                  {files.length > 0 && (
                    <p className="text-xs text-muted-foreground mt-2">We’ll read the pack and come back.</p>
                  )}
                </div>

                {showDetails && (
                  <div className="animate-in slide-in-from-top-4 fade-in duration-300 space-y-5 bg-cream/30 p-6 rounded-2xl border border-border/40">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">WhatsApp number *</label>
                        <Input 
                          placeholder="e.g. 08012345678" 
                          value={phone} 
                          onChange={(e) => setPhone(e.target.value)} 
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">City / area in Nigeria</label>
                        <Input 
                          placeholder="e.g. Ikeja, Lagos" 
                          value={city} 
                          onChange={(e) => setCity(e.target.value)} 
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Your name (optional)</label>
                        <Input 
                          placeholder="Jane" 
                          value={name} 
                          onChange={(e) => setName(e.target.value)} 
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">How much / how long (optional)</label>
                        <Input 
                          placeholder="e.g. 1 month supply" 
                          value={duration} 
                          onChange={(e) => setDuration(e.target.value)} 
                        />
                      </div>
                    </div>

                    {error && <p className="text-sm font-medium text-destructive">{error}</p>}

                    <div className="pt-4 text-center">
                      <Button type="submit" size="lg" className="w-full sm:w-auto bg-[#123d2d] text-white hover:bg-[#123d2d]/90 rounded-full px-12 h-14 text-lg">
                        Help me find this
                      </Button>
                      <p className="text-sm text-muted-foreground mt-4">
                        A pharmacist will revert on WhatsApp. You are not placing an order yet.
                      </p>
                    </div>
                  </div>
                )}
              </form>
            </div>
          )}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
