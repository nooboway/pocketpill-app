import { useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { CARE_WHATSAPP_URL } from "@/lib/care-request";

export function RequestHandoff({
  summary,
  onEdit,
  onClear,
}: {
  summary: string;
  onEdit: () => void;
  onClear: () => void;
}) {
  const [copyStatus, setCopyStatus] = useState("");
  const summaryRef = useRef<HTMLTextAreaElement>(null);

  async function copyRequest() {
    try {
      await navigator.clipboard.writeText(summary);
      setCopyStatus(
        "Copied. Open WhatsApp, paste your request, attach any prescription, and press Send.",
      );
    } catch {
      summaryRef.current?.focus();
      summaryRef.current?.select();
      setCopyStatus(
        "Automatic copying is unavailable. Copy the selected text manually, then paste it in WhatsApp.",
      );
    }
  }

  return (
    <section
      aria-labelledby="handoff-title"
      className="mx-auto max-w-2xl rounded-3xl border border-border/40 bg-white p-6 sm:p-10 space-y-6"
    >
      <h2 id="handoff-title" className="font-heading text-2xl font-semibold text-[#123d2d]">
        Finish sending in WhatsApp
      </h2>
      <p className="text-muted-foreground">
        Your request has not been sent. Review the details below, copy them, then open PocketPill’s
        chat at +234 708 372 5382.
      </p>
      <ol className="list-decimal pl-5 space-y-2 text-sm text-muted-foreground">
        <li>Copy your request.</li>
        <li>Open WhatsApp and paste the request into the chat.</li>
        <li>Attach your prescription or medicine photo in WhatsApp, if needed, and press Send.</li>
      </ol>
      <div>
        <label htmlFor="request-summary" className="block text-sm font-medium mb-2">
          Your request to review and copy
        </label>
        <textarea
          id="request-summary"
          ref={summaryRef}
          readOnly
          value={summary}
          rows={12}
          className="w-full rounded-xl border border-border bg-[#f3f7f1] p-4 text-sm leading-6"
        />
      </div>
      <div className="flex flex-col sm:flex-row gap-3">
        <Button type="button" onClick={copyRequest} className="bg-[#123d2d] text-white">
          1. Copy request
        </Button>
        <Button asChild className="bg-[#123d2d] text-white">
          <a href={CARE_WHATSAPP_URL} target="_blank" rel="noreferrer">
            2. Open WhatsApp
          </a>
        </Button>
      </div>
      <p role="status" aria-live="polite" className="text-sm text-[#123d2d]">
        {copyStatus}
      </p>
      <p className="text-sm text-muted-foreground">
        This page cannot confirm delivery. Check your WhatsApp chat and wait for the team’s reply.
        Your details are not included in the WhatsApp link. Copying places them on your device’s
        clipboard.
      </p>
      <div className="flex flex-wrap gap-3">
        <Button variant="outline" type="button" onClick={onEdit}>
          Edit details
        </Button>
        <Button variant="outline" type="button" onClick={onClear}>
          Clear this request
        </Button>
      </div>
      <p className="text-xs text-muted-foreground">
        Clearing removes the draft from this page, not your clipboard or WhatsApp messages.{" "}
        <Link to="/privacy-policy" className="underline">
          Privacy policy
        </Link>
      </p>
    </section>
  );
}
