import { createFileRoute } from "@tanstack/react-router";

import { PageHero } from "@/components/layout/ui-bits";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — Sri Kanaka Durga Caterings" },
      { name: "description", content: "Booking terms, confirmation, guest counts, menu changes and service conditions for our catering services." },
      { property: "og:title", content: "Terms & Conditions" },
      { property: "og:description", content: "The terms under which we accept and deliver catering bookings." },
    ],
  }),
  component: () => (
    <div>
      <PageHero eyebrow="Legal" title="Terms & Conditions" />
      <section className="mx-auto max-w-3xl space-y-5 px-6 pt-12 text-sm leading-relaxed text-muted-foreground">
        <p>A booking is confirmed only after an advance payment and written confirmation of the date, venue and guest count.</p>
        <p>Final guest counts and menu changes must be communicated at least 72 hours before the event.</p>
        <p>Venue access, water, power and space for cooking or serving setups are to be arranged by the customer.</p>
        <p>We are not liable for delays caused by circumstances outside our control, such as weather, strikes or venue restrictions.</p>
      </section>
    </div>
  ),
});
