import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import { PageHero } from "@/components/layout/ui-bits";
import { IMAGES } from "@/config/images";
import { GALLERY, GALLERY_CATEGORIES } from "@/data/gallery";
import { useLanguage } from "@/hooks/use-language";
import { l } from "@/i18n";

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
  const { lang, t } = useLanguage();
  const [cat, setCat] = useState("All");
  const items = cat === "All" ? GALLERY : GALLERY.filter((g) => g.category === cat);

  return (
    <div>
      <PageHero
        eyebrow={t("galleryPage.heroEyebrow")}
        title={t("galleryPage.heroTitle")}
        subtitle={t("galleryPage.heroSubtitle")}
        image={IMAGES.galleryLive}
      />
      <section className="px-6 pt-14">
        <div className="mx-auto max-w-350">
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
                {t(`galleryCats.${c}`)}
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
                <figcaption className="px-5 py-3 text-xs text-muted-foreground">{l(g, "alt", lang)}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
