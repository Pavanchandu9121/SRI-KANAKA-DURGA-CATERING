import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, Heart, Sparkles, Target, Users } from "lucide-react";

import { PageHero, SectionHeading } from "@/components/site/ui-bits";
import { GALLERY, IMAGES, WHY_CHOOSE } from "@/data/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Sri Kanaka Durga Caterings" },
      {
        name: "description",
        content:
          "Our story, mission, team and achievements: a decade of multi-cuisine catering across Andhra Pradesh with hygienic kitchens and experienced chefs.",
      },
      { property: "og:title", content: "About Sri Kanaka Durga Caterings" },
      {
        property: "og:description",
        content: "A decade of serving happiness — our history, mission, kitchens and team.",
      },
    ],
  }),
  component: About,
});

const TIMELINE = [
  { year: "2014", title: "Humble Beginnings", text: "Started as a family kitchen catering local housewarming and temple functions in Vijayawada." },
  { year: "2017", title: "First Big Weddings", text: "Expanded to full wedding catering with dedicated chefs, transport and serving staff." },
  { year: "2020", title: "Hygiene First", text: "Invested in a modern central kitchen with strict hygiene and safe packaging protocols." },
  { year: "2023", title: "Statewide Reach", text: "Began serving all districts of Andhra Pradesh with mobile cooking units and live counters." },
  { year: "Today", title: "1000+ Celebrations", text: "A trusted name for weddings, corporate events, festivals and community annadanam." },
];

const TEAM = [
  { name: "Srinivas Rao", role: "Founder & Head Chef", note: "25 years of Andhra and Hyderabadi cuisine." },
  { name: "Padmavathi", role: "Operations Lead", note: "Coordinates every event from kitchen to venue." },
  { name: "Naveen Kumar", role: "Live Counter Chef", note: "Chaat, dosa and continental counters." },
  { name: "Anjali Devi", role: "Client Relations", note: "Menus, tastings and event planning." },
];

function About() {
  return (
    <div>
      <PageHero
        eyebrow="About Us"
        title="Atithi Devo Bhava, In Every Meal"
        subtitle="For over ten years, Sri Kanaka Durga Caterings has treated every guest as a divine guest — with fresh ingredients, respectful service and food that tastes like home."
        image={IMAGES.aboutKitchen}
      />

      <section className="px-6 pt-20">
        <div className="mx-auto grid max-w-[1400px] gap-6 md:grid-cols-2">
          {[
            { icon: Target, title: "Our Mission", text: "To make every celebration effortless for our customers by delivering authentic, hygienically prepared food and warm, dependable service — on time, every time." },
            { icon: Heart, title: "Our Vision", text: "To be the most trusted catering house in Andhra Pradesh, known equally for the taste of our food and the integrity of our team." },
          ].map((c) => (
            <div key={c.title} className="rounded-3xl border border-primary/25 bg-card p-8">
              <span className="grid size-12 place-items-center rounded-full border border-primary/40 text-primary">
                <c.icon className="size-5" />
              </span>
              <h2 className="mt-5 font-display text-2xl text-cream">{c.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 pt-24">
        <div className="mx-auto max-w-[1400px]">
          <SectionHeading eyebrow="Our Journey" title="A Photo Timeline" />
          <ol className="mt-12 space-y-6 border-l border-primary/30 pl-8">
            {TIMELINE.map((t) => (
              <li key={t.year} className="relative">
                <span className="absolute -left-[2.6rem] grid size-8 place-items-center rounded-full border border-primary/50 bg-forest-deep text-primary">
                  <Sparkles className="size-3.5" />
                </span>
                <p className="text-xs tracking-[0.28em] text-primary uppercase">{t.year}</p>
                <h3 className="mt-1 font-display text-xl text-cream">{t.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{t.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="px-6 pt-24">
        <div className="mx-auto max-w-[1400px]">
          <SectionHeading eyebrow="Our Team" title="The People Behind the Feast" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM.map((m) => (
              <div key={m.name} className="rounded-3xl border border-primary/25 bg-card p-6 text-center">
                <span className="mx-auto grid size-14 place-items-center rounded-full border border-primary/40 text-primary">
                  <Users className="size-6" />
                </span>
                <h3 className="mt-4 font-display text-xl text-cream">{m.name}</h3>
                <p className="text-xs tracking-[0.18em] text-primary uppercase">{m.role}</p>
                <p className="mt-2 text-sm text-muted-foreground">{m.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pt-24">
        <div className="mx-auto max-w-[1400px]">
          <SectionHeading eyebrow="Achievements" title="Standards We Hold Ourselves To" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {WHY_CHOOSE.slice(0, 4).map((w) => (
              <div key={w.title} className="rounded-3xl border border-primary/25 bg-card p-6">
                <Award className="size-6 text-primary" />
                <h3 className="mt-4 font-display text-lg text-cream">{w.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{w.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pt-24">
        <div className="mx-auto max-w-[1400px]">
          <SectionHeading eyebrow="Inside Our Kitchens" title="Where It All Happens" />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {GALLERY.slice(3, 9).map((g) => (
              <img
                key={g.alt}
                src={g.src}
                alt={g.alt}
                loading="lazy"
                width={640}
                height={512}
                className="h-56 w-full rounded-3xl border border-primary/25 object-cover"
              />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/book"
              className="btn-gold inline-flex items-center gap-2 rounded-full px-8 py-4 text-[12px] tracking-[0.16em] uppercase"
            >
              Book Catering
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
