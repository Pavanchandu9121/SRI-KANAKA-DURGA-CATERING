import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { PageHero } from "@/components/layout/ui-bits";
import { IMAGES } from "@/config/images";
import { SERVICE_EVENT_TYPE } from "@/data/packages";
import { SERVICES } from "@/data/services";
import { useLanguage } from "@/hooks/use-language";
import { l } from "@/i18n";

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
        content:
          "Eight dedicated catering services, each with sample menus, galleries and booking.",
      },
      { property: "og:url", content: "https://srikanakadurgacaterings.in/services" },
      { property: "og:image", content: "https://srikanakadurgacaterings.in/og-image.png" },
      { name: "twitter:title", content: "Catering Services — Sri Kanaka Durga Caterings" },
      { name: "twitter:description", content: "Wedding, reception, birthday, corporate, temple and festival catering across Andhra Pradesh." },
      { name: "twitter:image", content: "https://srikanakadurgacaterings.in/og-image.png" },
    ],
    links: [
      { rel: "canonical", href: "https://srikanakadurgacaterings.in/services" },
    ],
  }),
  component: ServicesIndex,
});

function ServicesIndex() {
  const { lang, t } = useLanguage();
  return (
    <div>
      <PageHero
        eyebrow={t("servicesPage.heroEyebrow")}
        title={t("servicesPage.heroTitle")}
        subtitle={t("servicesPage.heroSubtitle")}
        image={IMAGES.galleryLive}
      />
      <section className="px-6 pt-20">
        <div className="mx-auto grid max-w-350 gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
                <h2 className="font-display text-2xl text-cream">{l(s, "title", lang)}</h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {l(s, "description", lang)}
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <Link
                    to="/services/$slug"
                    params={{ slug: s.slug }}
                    className="inline-flex items-center gap-2 rounded-full border border-primary/50 px-5 py-2.5 text-[11px] tracking-[0.14em] text-primary uppercase hover:bg-primary/10"
                  >
                    {t("servicesPage.viewDetails")} <ArrowRight className="size-3.5" />
                  </Link>
                  <Link
                    to="/book"
                    search={{ event: SERVICE_EVENT_TYPE[s.slug] ?? "Other" }}
                    className="btn-gold inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[11px] tracking-[0.14em] uppercase"
                  >
                    {t("servicesPage.bookThisService")}
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
