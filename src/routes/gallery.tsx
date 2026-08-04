import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import { PageHero } from "@/components/site/ui-bits";
import { GALLERY, GALLERY_CATEGORIES, IMAGES } from "@/data/site";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Catering Events, Buffets & Live Counters" },
      {
        name: "description",
        content:
          "Photos from our weddings, receptions, buffets, live counters and kitchens across Andhra Pradesh.",
      },
      { property: "og:title", content: "Sri Kanaka Durga Caterings Gallery" },
      { property: "og:description", content: "Moments from a decade of celebrations we've catered." },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  const [cat, setCat] = useState("All");
  const items = cat === "All" ? GALLERY : GALLERY.filter((g) => g.category === cat);

  return (
    <div>
      <PageHero
        eyebrow="Gallery"
        title="Moments Worth Savouring"
        subtitle="Food, buffets, events, kitchens and live counters — a glimpse of how we work."
        image={IMAGES.galleryLive}
      />
      <section className="px-6 pt-14">
        <div className="mx-auto max-w-[1400px]">
          <div className="flex flex-wrap gap-3">
            {["All", ...GALLERY_CATEGORIES].map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`rounded-full border px-5 py-2 text-xs tracking-[0.12em] uppercase ${
                  cat === c
                    ? "border-primary bg-primary/15 text-primary"
                    : "border-primary/25 text-muted-foreground hover:text-primary"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((g) => (
              <figure key={g.alt} className="overflow-hidden rounded-3xl border border-primary/25">
                <img
                  src={g.src}
                  alt={g.alt}
                  loading="lazy"
                  width={640}
                  height={512}
                  className="h-60 w-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <figcaption className="px-5 py-3 text-xs text-muted-foreground">{g.alt}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
