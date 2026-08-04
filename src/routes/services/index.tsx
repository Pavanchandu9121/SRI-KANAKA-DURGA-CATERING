import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { PageHero } from "@/components/site/ui-bits";
import { IMAGES, SERVICES } from "@/data/site";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Catering Services — Weddings, Corporate & More" },
      {
        name: "description",
        content:
          "Wedding, reception, birthday, corporate, temple, housewarming, outdoor and festival catering across Andhra Pradesh, with sample menus for each.",
      },
      { property: "og:title", content: "Our Catering Services" },
      {
        property: "og:description",
        content: "Eight dedicated catering services, each with sample menus, galleries and booking.",
      },
    ],
  }),
  component: ServicesIndex,
});

function ServicesIndex() {
  return (
    <div>
      <PageHero
        eyebrow="Our Services"
        title="Catering for Every Occasion"
        subtitle="From intimate ceremonies to thousand-guest weddings — every service comes with its own menus, equipment and trained crew."
        image={IMAGES.galleryLive}
      />
      <section className="px-6 pt-20">
        <div className="mx-auto grid max-w-[1400px] gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <article
              key={s.slug}
              className="group flex flex-col overflow-hidden rounded-3xl border border-primary/25 bg-card transition-colors hover:border-primary/60"
            >
              <img
                src={s.img}
                alt={`${s.title} setup`}
                loading="lazy"
                width={640}
                height={512}
                className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
              <div className="flex flex-1 flex-col p-6">
                <h2 className="font-display text-2xl text-cream">{s.title}</h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {s.description}
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <Link
                    to="/services/$slug"
                    params={{ slug: s.slug }}
                    className="inline-flex items-center gap-2 rounded-full border border-primary/50 px-5 py-2.5 text-[11px] tracking-[0.14em] text-primary uppercase hover:bg-primary/10"
                  >
                    View Details <ArrowRight className="size-3.5" />
                  </Link>
                  <Link
                    to="/book"
                    search={{ event: s.title }}
                    className="btn-gold inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[11px] tracking-[0.14em] uppercase"
                  >
                    Book This Service
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
