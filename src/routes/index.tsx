import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpen,
  ChefHat,
  Clock,
  ConciergeBell,
  Images,
  MapPin,
  Phone,
  Quote,
  Sparkles,
  Star,
} from "lucide-react";

import { Flourish, LaurelWreath, SectionHeading } from "@/components/layout/ui-bits";
import { SectionStack } from "@/components/layout/SectionStack";
import { CONTACT } from "@/config/contact";
import { IMAGES } from "@/config/images";
import heroVideo from "@/assets/hero.mp4";
import { DISHES } from "@/data/dishes";
import { SERVICE_EVENT_TYPE } from "@/data/packages";
import { HIGHLIGHTS, SERVICES, TESTIMONIALS, WHY_CHOOSE } from "@/data/services";
import { useLanguage } from "@/hooks/use-language";
import { l } from "@/i18n";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sri Kanaka Durga Caterings — Premium Multi-Cuisine Catering" },
      {
        name: "description",
        content:
          "Premium multi-cuisine catering across Andhra Pradesh for weddings, receptions, corporate events and temple functions. 10+ years, 1000+ celebrations.",
      },
      { property: "og:title", content: "Sri Kanaka Durga Caterings" },
      {
        property: "og:description",
        content:
          "Crafting unforgettable celebrations through exceptional cuisine — weddings, receptions and grand events across Andhra Pradesh.",
      },
    ],
  }),
  component: Index,
});

/*
 * Parallel to HIGHLIGHTS. `undefined` in the first slot is deliberate — that row
 * uses the hand-drawn LaurelWreath, since lucide has no laurel icon.
 */
const HIGHLIGHT_ICONS = [
  undefined,
  ConciergeBell,
  ChefHat,
  Clock,
  MapPin,
];

const TIMELINE = [
  { key: "started" },
  { key: "growth" },
  { key: "today" },
];

const MENU_SECTIONS = [
  "breakfast",
  "lunch",
  "dinner",
  "snacks",
  "desserts",
  "liveCounters",
];

function Index() {
  const { lang, t } = useLanguage();
  const popular = DISHES.filter((d) => d.popular).slice(0, 8);

  return (
    <SectionStack className="bg-forest-deep">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster={IMAGES.heroFeast}
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-linear-to-r from-forest-deep/75 via-forest-deep/40 to-forest-deep/20" />
        <div className="relative mx-auto max-w-375 px-20 pt-20 pb-20">
          <div className="max-w-2xl">
            <p className="flex items-center gap-4 text-[12px] tracking-[0.32em] text-accent/90 uppercase">
              <Flourish /> {t("home.heroEyebrow")} <Flourish />
            </p>
            <h1 className="mt-6 font-display text-5xl leading-[1.1] text-cream md:text-6xl">
              {t("home.heroTitle")}
              <br />
              <span className="text-gradient-gold">{t("home.heroHighlight")}</span>
            </h1>
            <div className="mt-6 flex items-center gap-3">
              <span className="h-px w-40 bg-primary/50" />
              <Flourish />
            </div>
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground">
              {t("home.heroDesc")}
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                to="/book"
                className="btn-gold inline-flex items-center gap-3 rounded-full px-8 py-4 text-[12px] font-medium tracking-[0.16em] uppercase"
              >
                {t("home.bookCatering")} <ArrowRight className="size-4" />
              </Link>
              <Link
                to="/menu"
                className="inline-flex items-center gap-3 rounded-full border border-cream/50 px-8 py-4 text-[12px] tracking-[0.16em] text-cream uppercase transition-colors hover:border-primary hover:text-primary"
              >
                {t("home.exploreMenu")} <BookOpen className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights card — cream, curved, gold-bordered */}
      <section className="relative z-10 mx-auto py-16 max-w-350 px-6">
        <div className="rounded-[2rem] border border-primary/60 bg-cream p-2 shadow-[0_30px_70px_-40px_oklch(0_0_0/0.9)]">
          <div className="grid grid-cols-1 gap-y-9 rounded-[1.65rem] border border-primary/25 px-2 py-9 text-forest-deep sm:grid-cols-2 lg:grid-cols-5">
            {HIGHLIGHTS.map((h, i) => {
              const Icon = HIGHLIGHT_ICONS[i];

              return (
                <div
                  key={h.label}
                  /*
                   * Icon sits beside the text, both left-aligned. The divider is
                   * a left border on every item but the first, so it falls
                   * between columns — and only at lg, where the row is a single
                   * five-across strip.
                   */
                  className={`flex items-center justify-center gap-4 px-5 ${
                    i > 0 ? "lg:border-l lg:border-forest-deep/12" : ""
                  }`}
                >
                  <span className="shrink-0 text-[oklch(0.58_0.12_74)]">
                    {Icon ? (
                      <Icon className="size-11" strokeWidth={1.3} />
                    ) : (
                      <LaurelWreath className="size-11" />
                    )}
                  </span>
                  <div className="min-w-0">
                    <p className="font-display text-[1.6rem] leading-[1.15] text-[oklch(0.58_0.12_74)]">
                      {h.value}
                    </p>
                    <p className="font-display text-[1.05rem] leading-tight text-forest-deep">
                      {l(h, "label", lang)}
                    </p>
                    <p className="mt-2 text-[0.78rem] leading-[1.45] text-forest-deep/60">
                      {l(h, "note", lang)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About preview */}
      <section className="px-6 py-28">
        <div className="mx-auto grid max-w-350 items-center gap-12 lg:grid-cols-2">
          <img
            src={IMAGES.aboutKitchen}
            alt="Our chefs preparing food in the central kitchen"
            loading="lazy"
            width={1024}
            height={768}
            className="w-full rounded-[2rem] border border-primary/30 object-cover"
          />
          <div>
            <SectionHeading
              eyebrow={t("home.aboutEyebrow")}
              title={t("home.aboutTitle")}
              align="left"
              subtitle={t("home.aboutSubtitle")}
            />
            <ol className="mt-8 space-y-5">
              {TIMELINE.map((tItem) => (
                <li key={tItem.key} className="flex gap-4">
                  <span className="mt-1 grid size-9 shrink-0 place-items-center rounded-full border border-primary/50 text-primary">
                    <Sparkles className="size-4" />
                  </span>
                  <div>
                    <p className="font-display text-lg text-cream">{t(`home.${tItem.key}`)}</p>
                    <p className="text-sm text-muted-foreground">{t(`home.${tItem.key}Text`)}</p>
                  </div>
                </li>
              ))}
            </ol>
            <Link
              to="/about"
              className="btn-gold mt-8 inline-flex items-center gap-2 rounded-full px-7 py-3 text-[12px] tracking-[0.16em] uppercase"
            >
              {t("home.learnMore")} <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="px-6 py-28">
        <div className="mx-auto max-w-350">
          <SectionHeading eyebrow={t("home.whyEyebrow")} title={t("home.whyTitle")} />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {WHY_CHOOSE.map((w) => (
              <div
                key={w.title}
                className="rounded-3xl border border-primary/25 bg-card p-6 transition-colors hover:border-primary/60"
              >
                <span className="grid size-11 place-items-center rounded-full border border-primary/40 text-primary">
                  <Sparkles className="size-5" />
                </span>
                <h3 className="mt-4 font-display text-xl text-cream">{l(w, "title", lang)}</h3>
                <p className="mt-2 text-sm leading-snug text-muted-foreground">{l(w, "copy", lang)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="px-6 py-28">
        <div className="mx-auto max-w-350">
          <SectionHeading eyebrow={t("home.svcEyebrow")} title={t("home.svcTitle")} />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
                  className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-xl text-cream">{l(s, "title", lang)}</h3>
                  <p className="mt-2 flex-1 text-sm leading-snug text-muted-foreground">{l(s, "copy", lang)}</p>
                  <div className="mt-5 flex items-center justify-between">
                    <Link
                      to="/services/$slug"
                      params={{ slug: s.slug }}
                      className="text-xs tracking-wide text-primary hover:underline"
                    >
                      {t("home.exploreMore")}
                    </Link>
                    <Link
                      to="/book"
                      search={{ event: SERVICE_EVENT_TYPE[s.slug] ?? "Other" }}
                      className="btn-gold inline-flex items-center gap-2 rounded-full px-4 py-2 text-[11px] tracking-[0.12em] uppercase"
                    >
                      {t("home.bookThis")}
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Featured menu */}
      <section className="px-6 py-28">
        <div className="mx-auto max-w-350">
          <SectionHeading eyebrow={t("home.menuEyebrow")} title={t("home.menuTitle")} />
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {MENU_SECTIONS.map((m) => (
              <span
                key={m}
                className="rounded-full border border-primary/35 px-5 py-2 text-xs tracking-[0.14em] text-primary uppercase"
              >
                {t(`home.${m}`)}
              </span>
            ))}
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {popular.map((dish) => (
              <div key={dish.id} className="rounded-3xl border border-primary/25 bg-card p-5">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-lg text-cream">{l(dish, "name", lang)}</h3>
                  <span
                    className={`size-2.5 rounded-full ${dish.veg ? "bg-green-500" : "bg-red-500"}`}
                    aria-label={dish.veg ? "Vegetarian" : "Non-vegetarian"}
                  />
                </div>
                <p className="mt-2 text-xs leading-snug text-muted-foreground">{l(dish, "desc", lang)}</p>
                <p className="mt-3 text-[11px] tracking-[0.14em] text-primary/80 uppercase">
                  {t(`categories.${dish.category}`)}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/menu"
              className="btn-gold inline-flex items-center gap-2 rounded-full px-8 py-4 text-[12px] tracking-[0.16em] uppercase"
            >
              {t("home.exploreCompleteMenu")} <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 py-28">
        <div className="mx-auto max-w-350">
          <SectionHeading eyebrow={t("home.testEyebrow")} title={t("home.testTitle")} />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {TESTIMONIALS.map((tData) => (
              <blockquote key={tData.name} className="rounded-3xl border border-primary/25 bg-card p-6">
                <Quote className="size-6 text-primary/70" />
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{l(tData, "text", lang)}</p>
                <div className="mt-4 flex items-center gap-1">
                  {Array.from({ length: tData.rating }).map((_, i) => (
                    <Star key={i} className="size-4 fill-primary text-primary" />
                  ))}
                </div>
                <footer className="mt-3 font-display text-lg text-cream">
                  {tData.name}
                  <span className="ml-2 text-xs tracking-wide text-muted-foreground">{l(tData, "place", lang)}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-28">
        <div className="mx-auto max-w-350 rounded-[2rem] border border-primary/40 bg-card px-8 py-14 text-center">
          <h2 className="font-display text-4xl text-cream md:text-5xl">
            {t("home.ctaTitle")}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground">
            {t("home.ctaDesc")}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/book"
              className="btn-gold inline-flex items-center gap-2 rounded-full px-8 py-4 text-[12px] tracking-[0.16em] uppercase"
            >
              {t("home.bookCatering")} <ArrowRight className="size-4" />
            </Link>
            <a
              href={CONTACT.phoneHref}
              className="inline-flex items-center gap-2 rounded-full border border-primary/50 px-8 py-4 text-[12px] tracking-[0.16em] text-primary uppercase hover:bg-primary/10"
            >
              {t("home.callNow")} <Phone className="size-4" />
            </a>
          </div>
        </div>
      </section>
    </SectionStack>
  );
}
