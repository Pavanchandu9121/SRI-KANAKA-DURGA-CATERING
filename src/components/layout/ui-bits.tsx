import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export function Flourish() {
  return (
    <span aria-hidden className="text-primary/70 tracking-[0.3em] text-xs">
      ❧
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}) {
  return (
    <div className={cn(align === "center" ? "text-center" : "text-left")}>
      {eyebrow && (
        <p
          className={cn(
            "flex items-center gap-4 text-[12px] tracking-[0.32em] text-accent/90 uppercase",
            align === "center" && "justify-center",
          )}
        >
          <Flourish /> {eyebrow} <Flourish />
        </p>
      )}
      <h2 className="mt-4 font-display text-4xl text-cream md:text-5xl">{title}</h2>
      <div
        className={cn(
          "mt-4 flex w-40 items-center gap-2",
          align === "center" ? "mx-auto" : "",
        )}
      >
        <span className="h-px flex-1 bg-primary/40" />
        <Flourish />
        <span className="h-px flex-1 bg-primary/40" />
      </div>
      {subtitle && (
        <p
          className={cn(
            "mt-5 text-sm leading-relaxed text-muted-foreground",
            align === "center" && "mx-auto max-w-2xl",
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  children,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  image?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border/40">
      {image && (
        <>
          <img
            src={image}
            alt=""
            aria-hidden
            className="absolute inset-y-0 right-0 h-full w-[60%] object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-r from-forest-deep via-forest-deep/95 to-forest-deep/40" />
        </>
      )}
      <div className="relative mx-auto max-w-375 px-6 py-20">
        {eyebrow && (
          <p className="flex items-center gap-4 text-[12px] tracking-[0.32em] text-accent/90 uppercase">
            <Flourish /> {eyebrow}
          </p>
        )}
        <h1 className="mt-5 font-display text-5xl text-cream md:text-6xl">{title}</h1>
        {subtitle && (
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground">{subtitle}</p>
        )}
        {children}
      </div>
    </section>
  );
}
