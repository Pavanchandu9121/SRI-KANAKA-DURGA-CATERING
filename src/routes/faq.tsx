import { createFileRoute } from "@tanstack/react-router";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PageHero } from "@/components/layout/ui-bits";
import { IMAGES } from "@/config/images";
import { FAQS } from "@/data/services";
import { useLanguage } from "@/hooks/use-language";
import { l } from "@/i18n";

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
      { property: "og:url", content: "https://srikanakadurgacaterings.in/faq" },
      { property: "og:image", content: "https://srikanakadurgacaterings.in/og-image.png" },
      { name: "twitter:title", content: "FAQ — Sri Kanaka Durga Caterings" },
      { name: "twitter:description", content: "Everything you need to know before booking your catering." },
      { name: "twitter:image", content: "https://srikanakadurgacaterings.in/og-image.png" },
    ],
    links: [
      { rel: "canonical", href: "https://srikanakadurgacaterings.in/faq" },
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  const { lang, t } = useLanguage();
  return (
    <div>
      <PageHero
        eyebrow={t("faqPage.heroEyebrow")}
        title={t("faqPage.heroTitle")}
        subtitle={t("faqPage.heroSubtitle")}
        image={IMAGES.aboutKitchen}
      />
      <section className="px-6 pt-14">
        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible>
            {FAQS.map((f) => (
              <AccordionItem key={f.q} value={f.q} className="border-primary/25">
                <AccordionTrigger className="text-left font-display text-lg text-cream">
                  {l(f, "q", lang)}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">{l(f, "a", lang)}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
}
