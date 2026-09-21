import { createFileRoute } from "@tanstack/react-router";
import { handleLineageRequest } from "@/server-fns/lineage-email";

export const Route = createFileRoute("/api/public/lineage-request")({
  server: { handlers: { POST: ({ request }) => handleLineageRequest(request) } },
});
