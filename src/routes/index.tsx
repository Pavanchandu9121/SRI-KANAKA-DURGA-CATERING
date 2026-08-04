import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  BookOpen,
  ChefHat,
  Clock,
  Images,
  MapPin,
  Phone,
  Quote,
  Sparkles,
  Star,
  UtensilsCrossed,
} from "lucide-react";

import { Flourish, SectionHeading } from "@/components/site/ui-bits";
import {
  CONTACT,
  DISHES,
  GALLERY,
  IMAGES,
  SERVICES,
  TESTIMONIALS,
  WHY_CHOOSE,
} from "@/data/site";

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

const HIGHLIGHT_CARDS = [
  { icon: Award, value: "10+", label: "Years Experience", note: "Of culinary excellence and trusted service" },
  { icon: UtensilsCrossed, value: "1000+", label: "Successful Events", note: "Celebrations delivered across the state" },
  { icon: ChefHat, value: "Multi-Cuisine", label: "Specialists", note: "Andhra, North Indian, Chinese & more" },
  { icon: Clock, value: "24×7", label: "Support", note: "We're here for you, anytime, anywhere" },
  { icon: MapPin, value: "Statewide", label: "Service", note: "Delivering happiness to every district" },
];

const TIMELINE = [
  { year: "Started", text: "A small family kitchen serving neighbourhood functions in Vijayawada." },
  { year: "Growth", text: "Grew into a full catering house with dedicated chefs, transport and serving crew." },
  { year: "Today", text: "1000+ events delivered across Andhra Pradesh with multi-cuisine kitchens." },
];

const MENU_SECTIONS = [
  "Breakfast",
  "Lunch",
  "Dinner",
  "Snacks",
  "Desserts",
  "Live Counters",
];

function Index() {
  const popular = DISHES.filter((d) => d.popular).slice(0, 8);

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <img
          src={IMAGES.heroBiryani}
          alt="Traditional biryani served in ornate brass vessels"
          width={1408}
          height={1008}
          className="absolute inset-y-0 right-0 h-full w-[62%] object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-r from-forest-deep via-forest-deep/95 to-transparent" />
        <div className="relative mx-auto max-w-[1500px] px-6 pt-20 pb-32">
          <div className="max-w-2xl">
            <p className="flex items-center gap-4 text-[12px] tracking-[0.32em] text-accent/90 uppercase">
              <Flourish /> Premium Multi-Cuisine Catering <Flourish />
            </p>
            <h1 className="mt-6 font-display text-5xl leading-[1.1] text-cream md:text-6xl">
              Delicious Food, Exceptional Service,
              <br />
              <span className="text-gradient-gold">Memorable Celebrations</span>
            </h1>
            <div className="mt-6 flex items-center gap-3">
              <span className="h-px w-40 bg-primary/50" />
              <Flourish />
            </div>
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground">
              Trusted multi-cuisine catering for weddings, corporate events, festivals, birthdays,
              housewarming ceremonies and more. Serving customers across the state for over 10 years.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                to="/book"
                className="btn-gold inline-flex items-center gap-3 rounded-full px-8 py-4 text-[12px] font-medium tracking-[0.16em] uppercase"
              >
                Book Catering <ArrowRight className="size-4" />
              </Link>
              <Link
                to="/menu"
                className="inline-flex items-center gap-3 rounded-full border border-cream/50 px-8 py-4 text-[12px] tracking-[0.16em] text-cream uppercase transition-colors hover:border-primary hover:text-primary"
              >
                Explore Menu <BookOpen className="size-4" />
              </Link>
              <Link
                to="/gallery"
                className="inline-flex items-center gap-3 rounded-full border border-cream/50 px-8 py-4 text-[12px] tracking-[0.16em] text-cream uppercase transition-colors hover:border-primary hover:text-primary"
              >
                View Gallery <Images className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights card — cream, curved, gold-bordered */}
      <section className="relative z-10 mx-auto -mt-16 max-w-[1400px] px-6">
        <div className="rounded-[2rem] border border-primary/60 bg-cream p-2 shadow-[0_30px_70px_-40px_oklch(0_0_0/0.9)]">
          <div className="grid grid-cols-1 gap-y-8 rounded-[1.65rem] border border-primary/25 px-4 py-8 text-forest-deep sm:grid-cols-2 lg:grid-cols-5">
            {HIGHLIGHT_CARDS.map(({ icon: Icon, value, label, note }, i) => (
              <div
                key={label}
                className={`flex flex-col items-center gap-3 px-6 text-center ${
                  i > 0 ? "lg:border-l lg:border-forest-deep/15" : ""
                }`}
              >
                <span className="grid size-14 place-items-center rounded-full border border-[oklch(0.62_0.12_78)]/45 bg-[oklch(0.62_0.12_78)]/8">
                  <Icon className="size-6 text-[oklch(0.55_0.11_78)]" />
                </span>
                <div>
                  <p className="font-display text-2xl leading-tight text-[oklch(0.52_0.12_70)]">
                    {value}
                  </p>
                  <p className="font-display text-lg leading-tight">{label}</p>
                  <p className="mt-1 text-xs leading-snug text-forest-deep/65">{note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About preview */}
      <section className="px-6 pt-28">
        <div className="mx-auto grid max-w-[1400px] items-center gap-12 lg:grid-cols-2">
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
              eyebrow="Our Story"
              title="A Decade of Serving Happiness"
              align="left"
              subtitle="Sri Kanaka Durga Caterings began as a small family kitchen with one belief — Atithi Devo Bhava. Today, that same care goes into every event we cater, whether it's fifty guests or five thousand."
            />
            <ol className="mt-8 space-y-5">
              {TIMELINE.map((t) => (
                <li key={t.year} className="flex gap-4">
                  <span className="mt-1 grid size-9 shrink-0 place-items-center rounded-full border border-primary/50 text-primary">
                    <Sparkles className="size-4" />
                  </span>
                  <div>
                    <p className="font-display text-lg text-cream">{t.year}</p>
                    <p className="text-sm text-muted-foreground">{t.text}</p>
                  </div>
                </li>
              ))}
            </ol>
            <Link
              to="/about"
              className="btn-gold mt-8 inline-flex items-center gap-2 rounded-full px-7 py-3 text-[12px] tracking-[0.16em] uppercase"
            >
              Learn More <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="px-6 pt-28">
        <div className="mx-auto max-w-[1400px]">
          <SectionHeading eyebrow="Why Choose Us" title="Reasons Families Keep Coming Back" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {WHY_CHOOSE.map((w) => (
              <div
                key={w.title}
                className="rounded-3xl border border-primary/25 bg-card p-6 transition-colors hover:border-primary/60"
              >
                <span className="grid size-11 place-items-center rounded-full border border-primary/40 text-primary">
                  <Sparkles className="size-5" />
                </span>
                <h3 className="mt-4 font-display text-xl text-cream">{w.title}</h3>
                <p className="mt-2 text-sm leading-snug text-muted-foreground">{w.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="px-6 pt-28">
        <div className="mx-auto max-w-[1400px]">
          <SectionHeading eyebrow="Our Services" title="Catering for Every Occasion" />
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
                  <h3 className="font-display text-xl text-cream">{s.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-snug text-muted-foreground">{s.copy}</p>
                  <div className="mt-5 flex items-center justify-between">
                    <Link
                      to="/services/$slug"
                      params={{ slug: s.slug }}
                      className="text-xs tracking-wide text-primary hover:underline"
                    >
                      Explore More
                    </Link>
                    <Link
                      to="/book"
                      search={{ event: s.title }}
                      className="btn-gold inline-flex items-center gap-2 rounded-full px-4 py-2 text-[11px] tracking-[0.12em] uppercase"
                    >
                      Book This
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Featured menu */}
      <section className="px-6 pt-28">
        <div className="mx-auto max-w-[1400px]">
          <SectionHeading eyebrow="Featured Menu" title="A Taste of What We Serve" />
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {MENU_SECTIONS.map((m) => (
              <span
                key={m}
                className="rounded-full border border-primary/35 px-5 py-2 text-xs tracking-[0.14em] text-primary uppercase"
              >
                {m}
              </span>
            ))}
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {popular.map((dish) => (
              <div key={dish.id} className="rounded-3xl border border-primary/25 bg-card p-5">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-lg text-cream">{dish.name}</h3>
                  <span
                    className={`size-2.5 rounded-full ${dish.veg ? "bg-green-500" : "bg-red-500"}`}
                    aria-label={dish.veg ? "Vegetarian" : "Non-vegetarian"}
                  />
                </div>
                <p className="mt-2 text-xs leading-snug text-muted-foreground">{dish.desc}</p>
                <p className="mt-3 text-[11px] tracking-[0.14em] text-primary/80 uppercase">
                  {dish.category}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/menu"
              className="btn-gold inline-flex items-center gap-2 rounded-full px-8 py-4 text-[12px] tracking-[0.16em] uppercase"
            >
              Explore Complete Menu <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery preview */}
      <section className="px-6 pt-28">
        <div className="mx-auto max-w-[1400px]">
          <SectionHeading eyebrow="Gallery" title="Moments From Our Events" />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {GALLERY.slice(0, 6).map((g) => (
              <figure key={g.alt} className="overflow-hidden rounded-3xl border border-primary/25">
                <img
                  src={g.src}
                  alt={g.alt}
                  loading="lazy"
                  width={640}
                  height={512}
                  className="h-56 w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </figure>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 rounded-full border border-primary/50 px-8 py-4 text-[12px] tracking-[0.16em] text-primary uppercase hover:bg-primary/10"
            >
              View Gallery <Images className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 pt-28">
        <div className="mx-auto max-w-[1400px]">
          <SectionHeading eyebrow="Testimonials" title="What Our Customers Say" />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {TESTIMONIALS.map((t) => (
              <blockquote key={t.name} className="rounded-3xl border border-primary/25 bg-card p-6">
                <Quote className="size-6 text-primary/70" />
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t.text}</p>
                <div className="mt-4 flex items-center gap-1">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="size-4 fill-primary text-primary" />
                  ))}
                </div>
                <footer className="mt-3 font-display text-lg text-cream">
                  {t.name}
                  <span className="ml-2 text-xs tracking-wide text-muted-foreground">{t.place}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pt-28">
        <div className="mx-auto max-w-[1400px] rounded-[2rem] border border-primary/40 bg-card px-8 py-14 text-center">
          <h2 className="font-display text-4xl text-cream md:text-5xl">
            Ready to Make Your Event Memorable?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground">
            Share your date and guest count — our team will craft a menu and quotation for you within
            24 hours.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/book"
              className="btn-gold inline-flex items-center gap-2 rounded-full px-8 py-4 text-[12px] tracking-[0.16em] uppercase"
            >
              Book Catering <ArrowRight className="size-4" />
            </Link>
            <a
              href={CONTACT.phoneHref}
              className="inline-flex items-center gap-2 rounded-full border border-primary/50 px-8 py-4 text-[12px] tracking-[0.16em] text-primary uppercase hover:bg-primary/10"
            >
              Call Now <Phone className="size-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
