import { createFileRoute } from "@tanstack/react-router";
import { Quote, Star } from "lucide-react";

import { PageHero } from "@/components/site/ui-bits";
import { IMAGES, TESTIMONIALS } from "@/data/site";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Reviews — What Our Customers Say" },
      {
        name: "description",
        content:
          "Read reviews and ratings from families and companies who trusted Sri Kanaka Durga Caterings with their celebrations.",
      },
      { property: "og:title", content: "Customer Reviews" },
      { property: "og:description", content: "5-star feedback from weddings, receptions and corporate events." },
    ],
  }),
  component: ReviewsPage,
});

function ReviewsPage() {
  return (
    <div>
      <PageHero
        eyebrow="Reviews"
        title="Rated 4.9 by 600+ Customers"
        subtitle="Every rating below comes from a real event we catered across Andhra Pradesh."
        image={IMAGES.galleryLive}
      />
      <section className="px-6 pt-14">
        <div className="mx-auto grid max-w-[1400px] gap-5 md:grid-cols-2">
          {[...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
            <blockquote key={i} className="rounded-3xl border border-primary/25 bg-card p-7">
              <Quote className="size-6 text-primary/70" />
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t.text}</p>
              <div className="mt-4 flex items-center gap-1">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="size-4 fill-primary text-primary" />
                ))}
              </div>
              <footer className="mt-3 font-display text-lg text-cream">
                {t.name}
                <span className="ml-2 text-xs tracking-wide text-muted-foreground">{t.place}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </section>
    </div>
  );
}
