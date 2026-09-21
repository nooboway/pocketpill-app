// Request details stay in memory. Never append health or contact details to this URL.
export const CARE_WHATSAPP_URL = "https://wa.me/2347083725382";

export function requestSummary(title: string, fields: Record<string, string | boolean>): string {
  return [
    title,
    ...Object.entries(fields).flatMap(([label, value]) => {
      const cleaned = typeof value === "boolean" ? (value ? "Yes" : "No") : value.trim();
      return cleaned ? [`${label}: ${cleaned}`] : [];
    }),
  ].join("\n");
}

export function isValidPhone(value: string): boolean {
  return (
    /^\+?[\d\s()-]+$/.test(value.trim()) &&
    value.replace(/\D/g, "").length >= 7 &&
    value.replace(/\D/g, "").length <= 15
  );
}
