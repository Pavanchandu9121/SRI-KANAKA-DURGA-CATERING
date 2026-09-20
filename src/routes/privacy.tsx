import { createFileRoute } from "@tanstack/react-router";

import { PageHero } from "@/components/layout/ui-bits";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Sri Kanaka Durga Caterings" },
      { name: "description", content: "How we collect, use and protect the information you share when booking catering with us." },
      { property: "og:title", content: "Privacy Policy" },
      { property: "og:description", content: "Our commitment to protecting your personal information." },
    ],
  }),
  component: () => (
    <div>
      <PageHero eyebrow="Legal" title="Privacy Policy" />
      <section className="mx-auto max-w-3xl space-y-5 px-6 pt-12 text-sm leading-relaxed text-muted-foreground">
        <p>We collect only the details required to plan and deliver your event — name, contact numbers, email, venue address and menu preferences.</p>
        <p>Your information is never sold or shared with third parties, except with our own staff and vendors involved in servicing your event.</p>
        <p>Uploaded menu files are used solely to prepare your quotation and are deleted once your event is completed.</p>
        <p>To request deletion of your data, contact us at srikanakadurgacaterings112@gmail.com.</p>
      </section>
    </div>
  ),
});
