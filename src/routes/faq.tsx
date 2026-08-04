import { createFileRoute } from "@tanstack/react-router";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PageHero } from "@/components/site/ui-bits";
import { FAQS, IMAGES } from "@/data/site";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Catering Questions Answered" },
      {
        name: "description",
        content:
          "Answers about service areas, minimum guest counts, staff and equipment, tastings, satvik menus and how to get a catering quotation.",
      },
      { property: "og:title", content: "Frequently Asked Questions" },
      { property: "og:description", content: "Everything you need to know before booking your catering." },
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <div>
      <PageHero
        eyebrow="FAQ"
        title="Frequently Asked Questions"
        subtitle="Still unsure about something? Call us any time — we answer 24×7."
        image={IMAGES.aboutKitchen}
      />
      <section className="px-6 pt-14">
        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible>
            {FAQS.map((f) => (
              <AccordionItem key={f.q} value={f.q} className="border-primary/25">
                <AccordionTrigger className="text-left font-display text-lg text-cream">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
}
