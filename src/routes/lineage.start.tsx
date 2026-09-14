import { createFileRoute } from "@tanstack/react-router";
import { useState, useRef } from "react";
import { Camera, FileUp, X, CheckCircle2 } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

export const Route = createFileRoute("/lineage/start")({
  component: LineageStartPage,
  head: () => ({
    meta: [
      { title: "Start a Lineage Plan | PocketPill" },
      { name: "description", content: "Set up a Lineage care plan for your parent in Nigeria." },
    ],
  }),
});

function LineageStartPage() {
  const [submitted, setSubmitted] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  
  // Form fields
  const [yourName, setYourName] = useState("");
  const [yourWhatsApp, setYourWhatsApp] = useState("");
  const [yourEmail, setYourEmail] = useState("");
  const [parentName, setParentName] = useState("");
  const [city, setCity] = useState("");
  const [caregiverName, setCaregiverName] = useState("");
  const [caregiverPhone, setCaregiverPhone] = useState("");
  const [knownMedicines, setKnownMedicines] = useState("");
  const [readyToFund, setReadyToFund] = useState(false);
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles((prev) => [...prev, ...Array.from(e.target.files!)]);
    }
  };

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (files.length === 0) {
      alert("Please upload at least one photo of the prescription.");
      return;
    }
    
    // Simulate API call to save lead tagged `lineage`
    console.log("Lead saved tagged 'lineage'", { 
      yourName, yourWhatsApp, yourEmail, parentName, city, 
      caregiverName, caregiverPhone, knownMedicines, readyToFund, files 
    });
    setSubmitted(true);
  };

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1 py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-2xl mx-auto">
          {submitted ? (
            <div className="text-center space-y-8 animate-in fade-in duration-500 py-24">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#d9f0df]">
                <CheckCircle2 className="h-8 w-8 text-[#123d2d]" />
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl font-heading font-semibold text-foreground">Request received</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  A pharmacist will reply on WhatsApp. Your parent does not need to do anything.
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-8">
              <div className="text-center mb-10">
                <span className="text-[#123d2d] font-bold tracking-widest text-xs uppercase mb-4 block">Lineage Setup</span>
                <h1 className="text-3xl font-heading font-semibold text-foreground mb-4">Start a parent plan</h1>
                <p className="text-muted-foreground">Fill in the details below. We'll verify the prescription and text you back.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8 bg-cream/30 p-6 sm:p-8 rounded-2xl border border-border/40">
                
                {/* Your Details */}
                <div className="space-y-5">
                  <h3 className="font-semibold text-lg border-b border-border/50 pb-2">Your details</h3>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Your name *</label>
                      <Input value={yourName} onChange={(e) => setYourName(e.target.value)} required />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Your WhatsApp *</label>
                      <Input placeholder="Abroad is fine" value={yourWhatsApp} onChange={(e) => setYourWhatsApp(e.target.value)} required />
                    </div>
                    <div className="space-y-2 sm:col-span-2">
                      <label className="text-sm font-medium">Your email *</label>
                      <Input type="email" value={yourEmail} onChange={(e) => setYourEmail(e.target.value)} required />
                    </div>
                  </div>
                </div>

                {/* Parent Details */}
                <div className="space-y-5">
                  <h3 className="font-semibold text-lg border-b border-border/50 pb-2">Parent & Caregiver details</h3>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Parent's name *</label>
                      <Input value={parentName} onChange={(e) => setParentName(e.target.value)} required />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">City / area in Nigeria *</label>
                      <Input placeholder="e.g. Surulere, Lagos" value={city} onChange={(e) => setCity(e.target.value)} required />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Caregiver name *</label>
                      <Input value={caregiverName} onChange={(e) => setCaregiverName(e.target.value)} required />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Caregiver phone *</label>
                      <Input placeholder="Nigerian number" value={caregiverPhone} onChange={(e) => setCaregiverPhone(e.target.value)} required />
                    </div>
                  </div>
                </div>

                {/* Medical Details */}
                <div className="space-y-5">
                  <h3 className="font-semibold text-lg border-b border-border/50 pb-2">Prescription</h3>
                  
                  <div className="space-y-4">
                    <label className="text-sm font-medium block">Photo / file of current prescription *</label>
                    <input 
                      type="file" 
                      ref={fileInputRef} 
                      onChange={handleFileChange} 
                      className="hidden" 
                      multiple 
                      accept="image/*,.pdf" 
                    />
                    
                    {files.length === 0 ? (
                      <div className="flex gap-4">
                        <Button type="button" variant="outline" onClick={() => fileInputRef.current?.click()}>
                          <Camera className="w-4 h-4 mr-2" /> Take photo
                        </Button>
                        <Button type="button" variant="outline" onClick={() => fileInputRef.current?.click()}>
                          <FileUp className="w-4 h-4 mr-2" /> Upload file
                        </Button>
                      </div>
                    ) : (
                      <div className="flex flex-wrap gap-4">
                        {files.map((file, idx) => (
                          <div key={idx} className="relative group rounded-lg overflow-hidden border border-border/50 bg-white h-24 w-24 flex items-center justify-center">
                            {file.type.startsWith('image/') ? (
                              <img src={URL.createObjectURL(file)} alt="preview" className="object-cover h-full w-full" />
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
                          className="h-24 w-24 rounded-lg border border-dashed border-primary/40 flex flex-col items-center justify-center text-primary hover:bg-primary/5 transition-colors bg-white"
                        >
                          <Camera className="w-5 h-5 mb-1" />
                          <span className="text-xs">Add more</span>
                        </button>
                      </div>
                    )}
                  </div>

                  <div className="space-y-2 pt-2">
                    <label className="text-sm font-medium">Medicine names you already know (optional)</label>
                    <Input placeholder="e.g. Amlodipine 5mg" value={knownMedicines} onChange={(e) => setKnownMedicines(e.target.value)} />
                  </div>
                </div>

                <div className="pt-4 flex items-start gap-3">
                  <Checkbox 
                    id="fund-wallet" 
                    checked={readyToFund} 
                    onCheckedChange={(checked) => setReadyToFund(checked as boolean)}
                    className="mt-1"
                  />
                  <div className="grid gap-1.5 leading-none">
                    <label htmlFor="fund-wallet" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      I am ready to fund a wallet
                    </label>
                    <p className="text-sm text-muted-foreground">
                      No payment is taken now. This just tells the pharmacist you are ready to proceed once they verify the prescription.
                    </p>
                  </div>
                </div>

                <div className="pt-8 border-t border-border/50 text-center">
                  <Button type="submit" size="lg" className="w-full sm:w-auto bg-[#123d2d] text-white hover:bg-[#123d2d]/90 rounded-full px-12 h-14 text-lg">
                    Start a parent plan
                  </Button>
                </div>
              </form>
            </div>
          )}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
