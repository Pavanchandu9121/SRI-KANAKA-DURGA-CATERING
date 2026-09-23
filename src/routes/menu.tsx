import { createFileRoute } from "@tanstack/react-router";
import { Search, SlidersHorizontal, Star, UtensilsCrossed, X } from "lucide-react";
import { useMemo, useState } from "react";

import { PageHero } from "@/components/layout/ui-bits";
import { IMAGES } from "@/config/images";
import { DISHES, MENU_CATEGORIES } from "@/data/dishes";
import { useLanguage } from "@/hooks/use-language";
import { l } from "@/i18n";
import type { Dish } from "@/types";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Catering Menu — Veg & Non-Veg Food | Sri Kanaka Durga Caterings Vijayawada" },
      {
        name: "description",
        content:
          "Browse 300+ veg and non-veg catering dishes in Vijayawada: biryanis, Andhra chicken, mutton, prawns, sweets, starters, curries, dals, fries, 65 varieties. South Indian, Andhra, Hyderabadi, North Indian & Chinese cuisines.",
      },
      {
        name: "keywords",
        content:
          "catering menu Vijayawada, veg catering menu, non-veg catering menu, Andhra food menu, South Indian catering menu, biryani catering, wedding food menu, catering food list Vijayawada, party food menu, corporate food menu, best food for events, bulk food menu Vijayawada",
      },
      { property: "og:title", content: "Catering Menu — Sri Kanaka Durga Caterings" },
      {
        property: "og:description",
        content:
          "300+ dishes across Andhra, South Indian, Hyderabadi, North Indian and Chinese cuisines — filter by category to build your catering spread in Vijayawada.",
      },
      { property: "og:url", content: "https://srikanakadurgacaterings.in/menu" },
      { property: "og:image", content: "https://srikanakadurgacaterings.in/og-image.png" },
      { name: "twitter:title", content: "Catering Menu — Sri Kanaka Durga Caterings Vijayawada" },
      { name: "twitter:description", content: "300+ dishes across Andhra, South Indian, Hyderabadi, North Indian and Chinese cuisines." },
      { name: "twitter:image", content: "https://srikanakadurgacaterings.in/og-image.png" },
    ],
    links: [
      { rel: "canonical", href: "https://srikanakadurgacaterings.in/menu" },
    ],
  }),
  component: MenuPage,
});

const dishImages = import.meta.glob("../assets/dishes/*.jpg", { eager: true, import: "default" });

/*
 * Photos are matched by convention: assets/dishes/<id>.jpg, or <photo>.jpg when
 * a dish borrows another's picture. Anything without a file gets the brand tile
 * below rather than a broken <img>, so the grid stays intact while the
 * photography catches up with the menu.
 */
function dishPhoto(dish: Dish): string | undefined {
  const key = `../assets/dishes/${dish.photo ?? dish.id}.jpg`;
  return dishImages[key] as string | undefined;
}

function MenuPage() {
  const { lang, t } = useLanguage();
  const [q, setQ] = useState("");
  const [diet, setDiet] = useState<"all" | "veg" | "nonveg">("all");
  const [category, setCategory] = useState(MENU_CATEGORIES[0]);
  const [cuisine, setCuisine] = useState("All");
  const [tag, setTag] = useState<"none" | "popular" | "new">("none");
  const [filtersOpen, setFiltersOpen] = useState(false);

  const cuisines = useMemo(() => ["All", ...Array.from(new Set(DISHES.map((d) => d.cuisine)))], []);

  /*
   * Every filter except the category one. The sidebar counts are built from
   * this so each category shows how many dishes you would actually get if you
   * clicked it — a category that would come back empty reads as 0 instead of
   * looking available.
   */
  const matchesRest = (d: Dish) => {
    if (q && !`${d.name} ${d.nameTe} ${d.desc}`.toLowerCase().includes(q.toLowerCase())) return false;
    if (diet === "veg" && !d.veg) return false;
    if (diet === "nonveg" && d.veg) return false;
    if (cuisine !== "All") {
      if (cuisine === "South Indian") {
        if (!["South Indian", "Andhra", "Hyderabadi"].includes(d.cuisine)) return false;
      } else if (cuisine === "Andhra" || cuisine === "Hyderabadi") {
        if (d.cuisine !== cuisine && d.cuisine !== "South Indian") return false;
      } else if (cuisine === "Indian") {
        if (["Chinese", "Continental"].includes(d.cuisine)) return false;
      } else {
        if (d.cuisine !== cuisine) return false;
      }
    }
    if (tag === "popular" && !d.popular) return false;
    if (tag === "new" && !d.isNew) return false;
    return true;
  };

  const pool = DISHES.filter(matchesRest);
  const results = category === "All" ? pool : pool.filter((d) => d.category === category);

  const counts = useMemo(() => {
    const map = new Map<string, number>();
    for (const d of pool) map.set(d.category, (map.get(d.category) ?? 0) + 1);
    return map;
  }, [pool]);

  const filtered = q !== "" || diet !== "all" || category !== MENU_CATEGORIES[0] || cuisine !== "All" || tag !== "none";

  const resetAll = () => {
    setQ("");
    setDiet("all");
    setCategory(MENU_CATEGORIES[0]);
    setCuisine("All");
    setTag("none");
  };

  const chip = (active: boolean) =>
    `rounded-full border px-4 py-2 text-xs tracking-[0.12em] uppercase transition-colors ${
      active
        ? "border-primary bg-primary/15 text-primary"
        : "border-primary/25 text-muted-foreground hover:text-primary"
    }`;

  const catRow = (name: string, label: string, count: number) => {
    const active = category === name;
    return (
      <button
        key={name}
        onClick={() => {
          setCategory(name);
          setFiltersOpen(false);
        }}
        aria-pressed={active}
        className={`flex w-full items-center justify-between gap-3 rounded-xl px-3 py-2 text-left text-sm transition-colors ${
          active
            ? "bg-primary/15 text-primary"
            : count === 0
              ? "text-muted-foreground/45"
              : "text-muted-foreground hover:bg-primary/8 hover:text-primary"
        }`}
      >
        <span className="truncate">{label}</span>
        <span
          className={`shrink-0 text-[11px] tabular-nums ${active ? "text-primary/80" : "text-muted-foreground/60"}`}
        >
          {count}
        </span>
      </button>
    );
  };

  /* Rendered twice — as the desktop rail and inside the mobile panel. */
  const categoryNav = (
    <nav className="space-y-6">
      <div>
        {catRow("All", t("categories.All"), pool.length)}
      </div>
      <div className="space-y-0.5">
        {MENU_CATEGORIES.map((c) => catRow(c, t(`categories.${c}`), counts.get(c) ?? 0))}
      </div>
    </nav>
  );

  return (
    <div>
      <PageHero
        eyebrow={t("menuPage.heroEyebrow")}
        title={t("menuPage.heroTitle")}
        subtitle={t("menuPage.heroSubtitle")}
        image={IMAGES.heroFeast}
      />

      <section className="px-4 pt-10 pb-4 sm:px-6 sm:pt-12">
        <div className="mx-auto grid max-w-350 gap-6 lg:grid-cols-[17rem_1fr] lg:gap-10">
          {/* ── Category rail ── */}
          <aside className="lg:sticky lg:top-28 lg:max-h-[calc(100vh-9rem)] lg:self-start lg:overflow-y-auto">
            <div className="hidden rounded-[1.75rem] border border-primary/25 bg-card/60 p-4 lg:block">
              <div className="flex items-center justify-between px-3 pb-3">
                <p className="font-display text-lg text-cream">{t("menuPage.categoriesLabel")}</p>
                {filtered && (
                  <button
                    onClick={resetAll}
                    className="text-[10px] tracking-[0.16em] text-primary/80 uppercase hover:text-primary"
                  >
                    {t("menuPage.clearAll")}
                  </button>
                )}
              </div>
              {categoryNav}
            </div>

            {/* On narrow screens the rail collapses into a togglable panel so it
                never pushes the grid a full screen down. */}
            <button
              onClick={() => setFiltersOpen((v) => !v)}
              className="flex w-full items-center justify-between rounded-2xl border border-primary/30 bg-card/60 px-5 py-3.5 text-sm text-cream lg:hidden"
              aria-expanded={filtersOpen}
            >
              <span className="inline-flex items-center gap-2.5">
                {filtersOpen ? (
                  <X className="size-4 text-primary" />
                ) : (
                  <SlidersHorizontal className="size-4 text-primary" />
                )}
                {t("menuPage.browseCategories")}
              </span>
              <span className="text-xs text-primary/80">
                {category === "All" ? t("categories.All") : t(`categories.${category}`)}
              </span>
            </button>
            {filtersOpen && (
              <div className="mt-3 rounded-2xl border border-primary/25 bg-card/60 p-4 lg:hidden">
                {categoryNav}
              </div>
            )}
          </aside>

          {/* ── Results ── */}
          <div>
            <div className="rounded-[2rem] border border-primary/50 bg-cream p-2">
              <div className="flex flex-wrap items-center gap-3 rounded-[1.65rem] border border-primary/25 p-4">
                <div className="relative min-w-0 flex-1">
                  <Search className="absolute top-1/2 left-4 size-4 -translate-y-1/2 text-forest-deep/50" />
                  <input
                    value={q}
                    onChange={(e) => setQ(e.target.value)}
                    placeholder={t("menuPage.searchPlaceholder")}
                    className="w-full rounded-full border border-forest-deep/15 bg-transparent py-2.5 pr-4 pl-11 text-sm text-forest-deep placeholder:text-forest-deep/50 focus:border-primary focus:outline-none"
                  />
                </div>
                <select
                  value={cuisine}
                  onChange={(e) => setCuisine(e.target.value)}
                  className="rounded-full border border-forest-deep/15 bg-transparent px-4 py-2.5 text-sm text-forest-deep focus:outline-none"
                >
                  {cuisines.map((c) => (
                    <option key={c} value={c}>
                      {t(`cuisines.${c}`)}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button className={chip(diet === "all")} onClick={() => setDiet("all")}>
                {t("menuPage.allItems")}
              </button>
              <button className={chip(diet === "veg")} onClick={() => setDiet("veg")}>
                {t("menuPage.vegetarian")}
              </button>
              <button className={chip(diet === "nonveg")} onClick={() => setDiet("nonveg")}>
                {t("menuPage.nonVegetarian")}
              </button>
              <button
                className={chip(tag === "popular")}
                onClick={() => setTag(tag === "popular" ? "none" : "popular")}
              >
                {t("menuPage.popular")}
              </button>
              <button
                className={chip(tag === "new")}
                onClick={() => setTag(tag === "new" ? "none" : "new")}
              >
                {t("menuPage.new")}
              </button>
              <span className="ml-auto text-xs tracking-[0.14em] text-muted-foreground uppercase">
                {results.length} {t("menuPage.dishCount")}
              </span>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {results.map((d) => {
                const photo = dishPhoto(d);
                return (
                  <article
                    key={d.id}
                    className="group flex flex-col overflow-hidden rounded-3xl border border-primary/25 bg-card"
                  >
                    <div className="relative aspect-4/3 w-full overflow-hidden bg-muted">
                      {photo ? (
                        <img
                          src={photo}
                          alt={l(d, "name", lang)}
                          className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                      ) : (
                        /* Brand tile stands in until the dish is photographed. */
                        <div className="flex size-full flex-col items-center justify-center gap-3 bg-[radial-gradient(circle_at_50%_35%,var(--forest),var(--forest-deep))]">
                          <UtensilsCrossed className="size-8 text-primary/45" strokeWidth={1.25} />
                          <span className="px-6 text-center font-display text-sm text-primary/55">
                            {t("menuPage.photoSoon")}
                          </span>
                        </div>
                      )}
                      {/* Veg/Non-veg dot */}
                      <div className="absolute top-4 right-4">
                        <span
                          className={`block size-3 shrink-0 rounded-full ${d.veg ? "bg-green-500" : "bg-red-500"} shadow-sm ring-2 ring-black/20`}
                          aria-label={d.veg ? "Vegetarian" : "Non-vegetarian"}
                        />
                      </div>
                      {/* Tags */}
                      <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                        {d.popular && (
                          <span className="inline-flex items-center gap-1 rounded-full bg-black/70 px-3 py-1 text-[10px] font-medium tracking-[0.14em] text-primary uppercase backdrop-blur-sm">
                            <Star className="size-3 fill-primary" /> {t("menuPage.popular")}
                          </span>
                        )}
                        {d.isNew && (
                          <span className="inline-flex items-center gap-1 rounded-full bg-black/70 px-3 py-1 text-[10px] font-medium tracking-[0.14em] text-primary uppercase backdrop-blur-sm">
                            {t("menuPage.new")}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-1 flex-col p-6">
                      <h2 className="font-display text-xl text-cream">{l(d, "name", lang)}</h2>
                      <p className="mt-2 text-sm leading-snug text-muted-foreground">
                        {l(d, "desc", lang)}
                      </p>

                      <div className="mt-auto flex flex-wrap gap-2 pt-6 text-[10px] tracking-[0.14em] uppercase">
                        <span className="rounded-full border border-primary/30 px-3 py-1 text-primary/85">
                          {t(`categories.${d.category}`)}
                        </span>
                        <span className="rounded-full border border-primary/20 px-3 py-1 text-muted-foreground">
                          {t(`cuisines.${d.cuisine}`)}
                        </span>
                      </div>

                      <p className="mt-4 text-xs text-muted-foreground">
                        {t("menuPage.availableIn")}{" "}
                        <span className="text-primary/85">
                          {d.packages.map((p) => t(`packages.${p}`)).join(", ")}
                        </span>
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>

            {results.length === 0 && (
              <p className="mt-12 text-center text-sm text-muted-foreground">
                {t("menuPage.noResults")}
              </p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
