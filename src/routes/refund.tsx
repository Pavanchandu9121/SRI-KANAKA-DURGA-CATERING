import { createFileRoute } from "@tanstack/react-router";

import { PageHero } from "@/components/layout/ui-bits";

export const Route = createFileRoute("/refund")({
  head: () => ({
    meta: [
      { title: "Refund Policy — Sri Kanaka Durga Caterings" },
      { name: "description", content: "Cancellation windows, advance refunds and rescheduling options for catering bookings." },
      { property: "og:title", content: "Refund Policy" },
      { property: "og:description", content: "How cancellations, refunds and rescheduling work." },
    ],
  }),
  component: () => (
    <div>
      <PageHero eyebrow="Legal" title="Refund Policy" />
      <section className="mx-auto max-w-3xl space-y-5 px-6 pt-12 text-sm leading-relaxed text-muted-foreground">
        <p>Cancellations made more than 15 days before the event receive a full refund of the advance.</p>
        <p>Cancellations between 7 and 15 days receive a 50% refund of the advance.</p>
        <p>Cancellations within 7 days of the event are non-refundable, as ingredients and staff are already committed.</p>
        <p>Rescheduling to another date within six months is free of charge, subject to availability.</p>
      </section>
    </div>
  ),
});
