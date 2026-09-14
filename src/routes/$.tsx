import { createFileRoute } from "@tanstack/react-router";
import { NotFoundComponent } from "./__root";

export const Route = createFileRoute("/$")({
  head: () => ({
    meta: [{ name: "robots", content: "noindex, nofollow" }],
  }),
  component: NotFoundComponent,
});
