"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactLenis } from "lenis/react";
import { Children, ReactNode, useRef } from "react";

import { cn } from "@/lib/utils";

interface SectionStackProps {
  children: ReactNode;
  className?: string;
  enableLenis?: boolean;
}

export function SectionStack({ children, className, enableLenis = true }: SectionStackProps) {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      const sections = gsap.utils.toArray<HTMLElement>(".section-wrapper");

      sections.forEach((section, i) => {
        if (i === sections.length - 1) return; // Last section doesn't pin/scale

        const nextSection = sections[i + 1];
        if (!nextSection) return;

        const innerContent = section.querySelector(".section-inner");
        if (!innerContent) return;

        // 1. Pin the current section when its natural scrolling finishes
        ScrollTrigger.create({
          trigger: section,
          start: () =>
            section.offsetHeight < window.innerHeight
              ? "top top"
              : "bottom bottom",
          endTrigger: nextSection,
          end: "top top", // unpin when the next section is fully covering it
          pin: true,
          pinSpacing: false, // next section scrolls over it naturally
        });

        // 2. Animate the scale and rotation as the next section scrolls up over it
        gsap.to(innerContent, {
          scale: 0.95,
          rotation: i % 2 === 0 ? -1.5 : 1.5,
          opacity: 0.6,
          ease: "none",
          scrollTrigger: {
            trigger: nextSection,
            start: "top bottom", // Starts animating when next section comes into view from bottom
            end: "top top", // Finishes when next section reaches the top
            scrub: true,
          },
        });
      });

      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    },
    { scope: container },
  );

  const childrenArray = Children.toArray(children);

  const Content = (
    <div ref={container} className={cn("relative w-full", className)}>
      {childrenArray.map((child, i) => (
        <div
          key={i}
          className={cn(
            "section-wrapper relative z-0 w-full",
            // Give sections a solid background to prevent transparency overlap
            // and hide overflow so scaling doesn't cause weird edges
          )}
        >
          <div className="section-inner w-full origin-top transform-gpu shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
            <div className="bg-forest-deep">
              {child}
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  if (enableLenis) {
    return <ReactLenis root>{Content}</ReactLenis>;
  }

  return Content;
}
