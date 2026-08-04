import { createFileRoute } from "@tanstack/react-router";
import {
  Phone,
  MessageCircle,
  Globe,
  Crown,
  Users,
  Sparkles,
  CalendarDays,
  ArrowRight,
  BookOpen,
  Award,
  UtensilsCrossed,
  ChefHat,
  Clock,
  MapPin,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import heroImg from "@/assets/hero-biryani.jpg";
import svcWedding from "@/assets/svc-wedding.jpg";
import svcReception from "@/assets/svc-reception.jpg";
import svcBirthday from "@/assets/svc-birthday.jpg";
import svcCorporate from "@/assets/svc-corporate.jpg";
import svcTemple from "@/assets/svc-temple.jpg";
import svcHousewarming from "@/assets/svc-housewarming.jpg";

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

const navLinks = [
  "Home",
  "About Us",
  "Services",
  "Menu",
  "Gallery",
  "Reviews",
  "Enquiries",
  "Contact",
];

const stats = [
  {
    icon: Award,
    value: "10+",
    label: "Years Experience",
    note: "Of culinary excellence and trusted service",
  },
  {
    icon: UtensilsCrossed,
    value: "1000+",
    label: "Events Completed",
    note: "Successful celebrations across the state",
  },
  {
    icon: ChefHat,
    value: "Multi-Cuisine",
    label: "Specialists",
    note: "Wide range of cuisines to suit every taste",
  },
  {
    icon: Clock,
    value: "24/7",
    label: "Support",
    note: "We're here for you, anytime, anywhere",
  },
  {
    icon: MapPin,
    value: "Across",
    label: "Andhra Pradesh",
    note: "Delivering happiness to every corner",
  },
];

const services = [
  {
    title: "Weddings",
    copy: "Make your big day truly unforgettable.",
    img: svcWedding,
  },
  {
    title: "Receptions",
    copy: "Celebrate love with delicious cuisine.",
    img: svcReception,
  },
  {
    title: "Birthday Parties",
    copy: "Delicious food for memorable birthdays.",
    img: svcBirthday,
  },
  {
    title: "Corporate Events",
    copy: "Professional catering for every occasion.",
    img: svcCorporate,
  },
  {
    title: "Temple Functions",
    copy: "Traditional taste for auspicious occasions.",
    img: svcTemple,
  },
  {
    title: "Housewarming",
    copy: "Warm meals for your new beginnings.",
    img: svcHousewarming,
  },
];

function Flourish() {
  return (
    <span aria-hidden className="text-primary/70 tracking-[0.3em] text-xs">
      ❧
    </span>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-forest-deep">
      {/* Announcement bar */}
      <div className="border-b border-border/60 bg-forest-deep/95">
        <div className="mx-auto flex max-w-[1500px] flex-wrap items-center justify-between gap-3 px-6 py-2.5 text-[11px] tracking-wide text-muted-foreground">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-1">
            <span className="flex items-center gap-2">
              <Sparkles className="size-3.5 text-primary" />
              Serving Happiness Across Andhra Pradesh
            </span>
            <span className="hidden items-center gap-2 sm:flex">
              <Crown className="size-3.5 text-primary" />
              10+ Years of Excellence
            </span>
            <span className="hidden items-center gap-2 md:flex">
              <Users className="size-3.5 text-primary" />
              1000+ Celebrations
            </span>
          </div>
          <div className="flex items-center gap-x-6">
            <span className="flex items-center gap-2">
              <Phone className="size-3.5 text-primary" />
              +91 91234 56789
            </span>
            <span className="hidden items-center gap-2 sm:flex">
              <MessageCircle className="size-3.5 text-primary" />
              WhatsApp Us
            </span>
            <span className="flex items-center gap-1.5">
              <Globe className="size-3.5 text-primary" />
              EN
            </span>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="border-b border-border/40">
        <div className="mx-auto flex max-w-[1500px] items-center justify-between gap-6 px-6 py-5">
          <div className="flex items-center gap-3">
            <div className="grid size-12 place-items-center rounded-full border border-primary/50 text-primary">
              <Sparkles className="size-5" />
            </div>
            <div className="leading-tight">
              <p className="font-display text-[11px] tracking-[0.35em] text-primary/80">
                SRI KANAKA DURGA
              </p>
              <p className="font-display text-2xl tracking-[0.22em] text-accent">
                CATERINGS
              </p>
              <p className="text-[9px] tracking-[0.3em] text-primary/70">
                • ATITHI DEVO BHAVA •
              </p>
            </div>
          </div>

          <nav className="hidden items-center gap-7 text-[12px] tracking-[0.14em] uppercase xl:flex">
            {navLinks.map((link, i) => (
              <a
                key={link}
                href="#"
                className={
                  i === 0
                    ? "border-b-2 border-primary pb-1 text-primary"
                    : "pb-1 text-foreground/85 transition-colors hover:text-primary"
                }
              >
                {link}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button className="btn-gold inline-flex items-center gap-2 rounded-sm px-6 py-3 text-[12px] font-medium tracking-[0.14em] uppercase">
              <CalendarDays className="size-4" />
              Book Catering
            </button>
            <button className="hidden items-center gap-2 rounded-sm border border-primary/50 px-4 py-3 text-[12px] tracking-[0.14em] text-primary sm:inline-flex">
              <Globe className="size-4" />
              EN
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <img
          src={heroImg}
          alt="Traditional biryani served in ornate brass vessels"
          width={1408}
          height={1008}
          className="absolute inset-y-0 right-0 h-full w-[62%] object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-r from-forest-deep via-forest-deep/95 to-transparent" />
        <div className="relative mx-auto max-w-[1500px] px-6 pt-20 pb-28">
          <div className="max-w-xl">
            <p className="flex items-center gap-4 text-[12px] tracking-[0.32em] text-accent/90 uppercase">
              <Flourish /> Premium Multi-Cuisine Catering <Flourish />
            </p>
            <h1 className="mt-6 font-display text-5xl leading-[1.1] text-cream md:text-6xl">
              Crafting Unforgettable
              <br />
              Celebrations Through
              <br />
              <span className="text-gradient-gold">Exceptional Cuisine</span>
            </h1>
            <div className="mt-6 flex items-center gap-3">
              <span className="h-px w-40 bg-primary/50" />
              <Flourish />
            </div>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
              From intimate gatherings to grand celebrations, we bring authentic
              flavors, impeccable service and memorable experiences to your special
              occasions.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <button className="btn-gold inline-flex items-center gap-3 rounded-sm px-8 py-4 text-[12px] font-medium tracking-[0.16em] uppercase">
                Plan Your Event <ArrowRight className="size-4" />
              </button>
              <button className="inline-flex items-center gap-3 rounded-sm border border-cream/50 px-8 py-4 text-[12px] tracking-[0.16em] text-cream uppercase transition-colors hover:border-primary hover:text-primary">
                Explore Our Menu <BookOpen className="size-4" />
              </button>
            </div>
            <div className="mt-14 flex items-center gap-2">
              <span className="h-0.5 w-8 bg-primary" />
              <span className="h-0.5 w-4 bg-cream/30" />
              <span className="h-0.5 w-4 bg-cream/30" />
              <span className="h-0.5 w-4 bg-cream/30" />
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="relative mx-auto -mb-16 max-w-[1400px] translate-y-8 px-6">
          <div className="grid grid-cols-1 gap-y-8 rounded-sm bg-cream px-8 py-9 text-forest-deep sm:grid-cols-2 lg:grid-cols-5">
            {stats.map(({ icon: Icon, value, label, note }, i) => (
              <div
                key={label}
                className={`flex items-start gap-4 px-4 ${
                  i > 0 ? "lg:border-l lg:border-forest-deep/15" : ""
                }`}
              >
                <Icon className="mt-1 size-8 shrink-0 text-[oklch(0.55_0.11_78)]" />
                <div>
                  <p className="font-display text-2xl leading-tight text-[oklch(0.52_0.12_70)]">
                    {value}
                  </p>
                  <p className="font-display text-lg leading-tight">{label}</p>
                  <p className="mt-1 max-w-[11rem] text-xs leading-snug text-forest-deep/65">
                    {note}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="px-6 pt-32 pb-24">
        <div className="mx-auto max-w-[1500px]">
          <p className="flex items-center justify-center gap-4 text-[12px] tracking-[0.32em] text-accent/90 uppercase">
            <Flourish /> Our Services <Flourish />
          </p>
          <h2 className="mt-4 text-center font-display text-4xl text-cream md:text-5xl">
            Catering for Every Occasion
          </h2>
          <div className="mx-auto mt-4 flex w-40 items-center gap-2">
            <span className="h-px flex-1 bg-primary/40" />
            <Flourish />
            <span className="h-px flex-1 bg-primary/40" />
          </div>

          <div className="relative mt-14">
            <button
              aria-label="Previous services"
              className="btn-gold absolute -left-2 top-1/2 z-10 hidden size-11 -translate-y-1/2 place-items-center rounded-full lg:grid"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              aria-label="Next services"
              className="btn-gold absolute -right-2 top-1/2 z-10 hidden size-11 -translate-y-1/2 place-items-center rounded-full lg:grid"
            >
              <ChevronRight className="size-5" />
            </button>

            <div className="grid gap-5 px-0 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 lg:px-12">
              {services.map(({ title, copy, img }) => (
                <article
                  key={title}
                  className="group flex flex-col rounded-sm border border-primary/25 bg-card p-4 transition-colors hover:border-primary/60"
                >
                  <div className="flex items-start gap-3">
                    <span className="grid size-9 shrink-0 place-items-center rounded-full border border-primary/40 text-primary">
                      <Sparkles className="size-4" />
                    </span>
                    <div>
                      <h3 className="font-display text-lg text-cream">{title}</h3>
                      <p className="mt-1 text-xs leading-snug text-muted-foreground">
                        {copy}
                      </p>
                    </div>
                  </div>
                  <img
                    src={img}
                    alt={`${title} catering setup`}
                    loading="lazy"
                    width={640}
                    height={512}
                    className="mt-4 h-32 w-full rounded-sm object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <a
                    href="#"
                    className="mt-4 inline-flex items-center gap-2 text-xs tracking-wide text-primary"
                  >
                    Explore More <ArrowRight className="size-3.5" />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border/40 px-6 py-8">
        <div className="mx-auto flex max-w-[1500px] flex-col items-center gap-2 text-center">
          <p className="font-display text-xl tracking-[0.22em] text-accent">
            SRI KANAKA DURGA CATERINGS
          </p>
          <p className="text-xs text-muted-foreground">
            Atithi Devo Bhava • +91 91234 56789 • Andhra Pradesh
          </p>
        </div>
      </footer>
    </div>
  );
}
