import { createFileRoute, Link, notFound } from "@tanstack/react-router";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PageHero, SectionHeading } from "@/components/site/ui-bits";
import { GALLERY, SERVICES } from "@/data/site";

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

  return (
    <div>
      <PageHero
        eyebrow="Service"
        title={service.title}
        subtitle={service.description}
        image={service.img}
      >
        <Link
          to="/book"
          search={{ event: service.title }}
          className="btn-gold mt-8 inline-flex items-center gap-2 rounded-full px-8 py-4 text-[12px] tracking-[0.16em] uppercase"
        >
          Book This Service
        </Link>
      </PageHero>

      <section className="px-6 pt-20">
        <div className="mx-auto max-w-[1400px]">
          <SectionHeading eyebrow="Sample Menus" title="A Suggested Spread" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {service.sampleMenu.map((sec) => (
              <div key={sec.section} className="rounded-3xl border border-primary/25 bg-card p-6">
                <h3 className="font-display text-xl text-cream">{sec.section}</h3>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  {sec.items.map((i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-primary">•</span> {i}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pt-24">
        <div className="mx-auto max-w-[1400px]">
          <SectionHeading eyebrow="Gallery" title="From Similar Events" />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {GALLERY.slice(0, 6).map((g) => (
              <img
                key={g.alt}
                src={g.src}
                alt={g.alt}
                loading="lazy"
                width={640}
                height={512}
                className="h-56 w-full rounded-3xl border border-primary/25 object-cover"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pt-24">
        <div className="mx-auto max-w-3xl">
          <SectionHeading eyebrow="FAQ" title="Good to Know" />
          <Accordion type="single" collapsible className="mt-10">
            {service.faqs.map((f) => (
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
