import { createFileRoute, Link, notFound } from "@tanstack/react-router";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PageHero, SectionHeading } from "@/components/layout/ui-bits";
import { SERVICE_EVENT_TYPE } from "@/data/packages";
import { SERVICES } from "@/data/services";
import { useLanguage } from "@/hooks/use-language";
import { l } from "@/i18n";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = SERVICES.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return { slug: service.slug };
  },
  head: ({ params }) => {
    const service = SERVICES.find((s) => s.slug === params.slug);
    const title = service ? `${service.title} — Sri Kanaka Durga Caterings` : "Catering Service";
    const description =
      service?.description ?? "Premium catering service across Andhra Pradesh.";
    return {
      meta: [
        { title },
        { name: "description", content: description.slice(0, 155) },
        { property: "og:title", content: title },
        { property: "og:description", content: description.slice(0, 155) },
      ],
    };
  },
  component: ServiceDetail,
});

function ServiceDetail() {
  const { slug } = Route.useLoaderData();
  const service = SERVICES.find((s) => s.slug === slug)!;
  const { lang, t } = useLanguage();

  return (
    <div>
      <PageHero
        eyebrow={t("serviceDetail.heroEyebrow")}
        title={l(service, "title", lang)}
        subtitle={l(service, "description", lang)}
        image={service.img}
      >
        <Link
          to="/book"
          search={{ event: SERVICE_EVENT_TYPE[service.slug] ?? "Other" }}
          className="btn-gold mt-8 inline-flex items-center gap-2 rounded-full px-8 py-4 text-[12px] tracking-[0.16em] uppercase"
        >
          {t("serviceDetail.bookThisService")}
        </Link>
      </PageHero>

      <section className="px-6 pt-20">
        <div className="mx-auto max-w-350">
          <SectionHeading eyebrow={t("serviceDetail.sampleEyebrow")} title={t("serviceDetail.sampleTitle")} />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {service.sampleMenu.map((sec) => (
              <div key={sec.section} className="rounded-3xl border border-primary/25 bg-card p-6">
                <h3 className="font-display text-xl text-cream">{l(sec, "section", lang)}</h3>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  {l<typeof sec, string[]>(sec, "items", lang).map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-primary">•</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pt-24">
        <div className="mx-auto max-w-3xl">
          <SectionHeading eyebrow={t("serviceDetail.faqEyebrow")} title={t("serviceDetail.faqTitle")} />
          <Accordion type="single" collapsible className="mt-10">
            {service.faqs.map((f) => (
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
