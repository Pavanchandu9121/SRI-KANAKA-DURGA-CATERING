import { createFileRoute } from "@tanstack/react-router";
import { Search, Star } from "lucide-react";
import { useMemo, useState } from "react";

import { PageHero } from "@/components/site/ui-bits";
import { DISHES, IMAGES, MENU_CATEGORIES } from "@/data/site";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu Explorer — Sri Kanaka Durga Caterings" },
      {
        name: "description",
        content:
          "Browse our full multi-cuisine catering menu: breakfast, starters, biryanis, curries, live counters, desserts and beverages. Filter by veg, cuisine and category.",
      },
      { property: "og:title", content: "Our Complete Catering Menu" },
      {
        property: "og:description",
        content: "Search and filter hundreds of dishes across Andhra, Hyderabadi, North Indian and Chinese cuisines.",
      },
    ],
  }),
  component: MenuPage,
});

function MenuPage() {
  const [q, setQ] = useState("");
  const [diet, setDiet] = useState<"all" | "veg" | "nonveg">("all");
  const [category, setCategory] = useState("All");
  const [cuisine, setCuisine] = useState("All");
  const [tag, setTag] = useState<"none" | "popular" | "new">("none");

  const cuisines = useMemo(
    () => ["All", ...Array.from(new Set(DISHES.map((d) => d.cuisine)))],
    [],
  );

  const results = DISHES.filter((d) => {
    if (q && !`${d.name} ${d.desc}`.toLowerCase().includes(q.toLowerCase())) return false;
    if (diet === "veg" && !d.veg) return false;
    if (diet === "nonveg" && d.veg) return false;
    if (category !== "All" && d.category !== category) return false;
    if (cuisine !== "All" && d.cuisine !== cuisine) return false;
    if (tag === "popular" && !d.popular) return false;
    if (tag === "new" && !d.isNew) return false;
    return true;
  });

  const chip = (active: boolean) =>
    `rounded-full border px-4 py-2 text-xs tracking-[0.12em] uppercase transition-colors ${
      active
        ? "border-primary bg-primary/15 text-primary"
        : "border-primary/25 text-muted-foreground hover:text-primary"
    }`;

  return (
    <div>
      <PageHero
        eyebrow="Our Menu"
        title="Discover Our Culinary Delights"
        subtitle="A delightful spread of authentic flavors, crafted with love for every occasion."
        image={IMAGES.heroBiryani}
      />

      <section className="px-6 pt-12">
        <div className="mx-auto max-w-[1400px]">
          <div className="rounded-[2rem] border border-primary/50 bg-cream p-2">
            <div className="flex flex-wrap items-center gap-3 rounded-[1.65rem] border border-primary/25 p-4">
              <div className="relative min-w-[220px] flex-1">
                <Search className="absolute top-1/2 left-4 size-4 -translate-y-1/2 text-forest-deep/50" />
                <input
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder="Search dish..."
                  className="w-full rounded-full border border-forest-deep/15 bg-transparent py-2.5 pr-4 pl-11 text-sm text-forest-deep placeholder:text-forest-deep/50 focus:border-primary focus:outline-none"
                />
              </div>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="rounded-full border border-forest-deep/15 bg-transparent px-4 py-2.5 text-sm text-forest-deep focus:outline-none"
              >
                {["All", ...MENU_CATEGORIES].map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
              <select
                value={cuisine}
                onChange={(e) => setCuisine(e.target.value)}
                className="rounded-full border border-forest-deep/15 bg-transparent px-4 py-2.5 text-sm text-forest-deep focus:outline-none"
              >
                {cuisines.map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <button className={chip(diet === "all")} onClick={() => setDiet("all")}>
              All Items
            </button>
            <button className={chip(diet === "veg")} onClick={() => setDiet("veg")}>
              Vegetarian
            </button>
            <button className={chip(diet === "nonveg")} onClick={() => setDiet("nonveg")}>
              Non-Vegetarian
            </button>
            <button
              className={chip(tag === "popular")}
              onClick={() => setTag(tag === "popular" ? "none" : "popular")}
            >
              Popular
            </button>
            <button
              className={chip(tag === "new")}
              onClick={() => setTag(tag === "new" ? "none" : "new")}
            >
              New
            </button>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {results.map((d) => (
              <article key={d.id} className="rounded-3xl border border-primary/25 bg-card p-6">
                <div className="flex items-start justify-between gap-3">
                  <h2 className="font-display text-xl text-cream">{d.name}</h2>
                  <span
                    className={`mt-1 size-3 shrink-0 rounded-full ${d.veg ? "bg-green-500" : "bg-red-500"}`}
                    aria-label={d.veg ? "Vegetarian" : "Non-vegetarian"}
                  />
                </div>
                <p className="mt-2 text-sm leading-snug text-muted-foreground">{d.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2 text-[10px] tracking-[0.14em] uppercase">
                  <span className="rounded-full border border-primary/30 px-3 py-1 text-primary/85">
                    {d.category}
                  </span>
                  <span className="rounded-full border border-primary/20 px-3 py-1 text-muted-foreground">
                    {d.cuisine}
                  </span>
                  {d.popular && (
                    <span className="inline-flex items-center gap-1 rounded-full border border-primary/40 px-3 py-1 text-primary">
                      <Star className="size-3 fill-primary" /> Popular
                    </span>
                  )}
                </div>
                <p className="mt-4 text-xs text-muted-foreground">
                  Available in: <span className="text-primary/85">{d.packages.join(", ")}</span>
                </p>
              </article>
            ))}
          </div>
          {results.length === 0 && (
            <p className="mt-12 text-center text-sm text-muted-foreground">
              No dishes match your filters. You can request a custom dish while booking.
            </p>
          )}
        </div>
      </section>
    </div>
  );
}
