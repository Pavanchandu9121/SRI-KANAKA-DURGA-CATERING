import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, Heart, Sparkles, Target, Users } from "lucide-react";

import { PageHero, SectionHeading } from "@/components/layout/ui-bits";
import { SectionStack } from "@/components/layout/SectionStack";
import { IMAGES } from "@/config/images";
import { WHY_CHOOSE } from "@/data/services";
import { useLanguage } from "@/hooks/use-language";
import { l } from "@/i18n";

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
  { key: "t1" },
  { key: "t2" },
  { key: "t3" },
  { key: "t4" },
  { key: "t5" },
];

const TEAM = [
  { key: "m1" },
  { key: "m2" },
];

function About() {
  const { lang, t } = useLanguage();
  return (
    <SectionStack className="bg-forest-deep">
      <PageHero
        eyebrow={t("about.heroEyebrow")}
        title={t("about.heroTitle")}
        subtitle={t("about.heroSubtitle")}
        image={IMAGES.aboutKitchen}
      />

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-350 gap-6 md:grid-cols-2">
          {[
            { icon: Target, title: t("about.missionTitle"), text: t("about.missionText") },
            { icon: Heart, title: t("about.visionTitle"), text: t("about.visionText") },
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

      <section className="px-6 py-24">
        <div className="mx-auto max-w-350">
          <SectionHeading eyebrow={t("about.journeyEyebrow")} title={t("about.journeyTitle")} />
          <ol className="mt-12 space-y-6 border-l border-primary/30 pl-8">
            {TIMELINE.map((tItem) => (
              <li key={tItem.key} className="relative">
                <span className="absolute left-[-2.6rem] grid size-8 place-items-center rounded-full border border-primary/50 bg-forest-deep text-primary">
                  <Sparkles className="size-3.5" />
                </span>
                <p className="text-xs tracking-[0.28em] text-primary uppercase">{t(`about.${tItem.key}Year`)}</p>
                <h3 className="mt-1 font-display text-xl text-cream">{t(`about.${tItem.key}Title`)}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{t(`about.${tItem.key}Text`)}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-350">
          <SectionHeading eyebrow={t("about.teamEyebrow")} title={t("about.teamTitle")} />
          <div className="mt-12 flex flex-col items-center sm:flex-row sm:justify-center gap-6 sm:gap-8">
            {TEAM.map((m) => (
              <div key={m.key} className="w-full max-w-[320px] rounded-3xl border border-primary/25 bg-card p-6 text-center">
                <span className="mx-auto grid size-14 place-items-center rounded-full border border-primary/40 text-primary">
                  <Users className="size-6" />
                </span>
                <h3 className="mt-4 font-display text-xl text-cream">{t(`about.${m.key}Name`)}</h3>
                <p className="text-xs tracking-[0.18em] text-primary uppercase">{t(`about.${m.key}Role`)}</p>
                <p className="mt-2 text-sm text-muted-foreground">{t(`about.${m.key}Note`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-350">
          <SectionHeading eyebrow={t("about.achEyebrow")} title={t("about.achTitle")} />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {WHY_CHOOSE.slice(0, 4).map((w) => (
              <div key={w.title} className="rounded-3xl border border-primary/25 bg-card p-6">
                <Award className="size-6 text-primary" />
                <h3 className="mt-4 font-display text-lg text-cream">{l(w, "title", lang)}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{l(w, "copy", lang)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SectionStack>
  );
}
