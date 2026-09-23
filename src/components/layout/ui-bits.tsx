import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export function Flourish() {
  return (
    <span aria-hidden className="text-primary/70 tracking-[0.3em] text-xs">
      ❧
    </span>
  );
}

/*
 * Laurel wreath for the "Years Experience" highlight. Hand-drawn because lucide
 * has no laurel — its `award` rosette reads as a medal, not the classical wreath
 * the brand uses. Two mirrored halves of five leaves each, sized and stroked to
 * sit alongside the lucide icons in the same row.
 */
export function LaurelWreath({ className }: { className?: string }) {
  // One half: the arc plus five leaves fanning off it, drawn for the left side
  // and mirrored for the right so both halves stay identical.
  const half = (
    <>
      <path d="M11.2 3.4C6.5 5.1 3.6 9.2 3.6 13.4c0 3.4 1.9 6.1 4.6 7.2" />
      <path d="M7.4 6.6c-1.7.1-3 .9-3.6 2.2.8 1.1 2.2 1.6 3.7 1.2" />
      <path d="M5.2 10.5c-1.6.4-2.7 1.4-3 2.8 1 .9 2.5 1.1 3.9.4" />
      <path d="M4.6 14.4c-1.4.7-2.2 1.9-2.2 3.3 1.2.6 2.7.4 3.8-.6" />
      <path d="M5.5 18c-1.1 1-1.5 2.4-1 3.7 1.3.2 2.6-.4 3.4-1.7" />
      <path d="M9.4 4.6c-1.5-.5-3-.3-4 .7.4 1.3 1.6 2.2 3.1 2.4" />
    </>
  );

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={className}
    >
      {half}
      {/* Mirror across the vertical centre line rather than re-drawing. */}
      <g transform="translate(24,0) scale(-1,1)">{half}</g>
    </svg>
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
      <h2 className="mt-4 font-display text-3xl text-cream sm:text-4xl md:text-5xl">{title}</h2>
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
            className="absolute inset-y-0 right-0 h-full w-full object-cover sm:w-[60%]"
          />
          <div className="absolute inset-0 bg-forest-deep/80 sm:bg-linear-to-r sm:from-forest-deep sm:via-forest-deep/95 sm:to-forest-deep/40" />
        </>
      )}
      <div className="relative mx-auto max-w-375 px-4 py-14 sm:px-6 sm:py-20">
        {eyebrow && (
          <p className="flex items-center gap-3 text-[10px] tracking-[0.25em] text-accent/90 uppercase sm:gap-4 sm:text-[12px] sm:tracking-[0.32em]">
            <Flourish /> {eyebrow}
          </p>
        )}
        <h1 className="mt-4 font-display text-3xl text-cream sm:mt-5 sm:text-5xl md:text-6xl">{title}</h1>
        {subtitle && (
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground">{subtitle}</p>
        )}
        {children}
      </div>
    </section>
  );
}
