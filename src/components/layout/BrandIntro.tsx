"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

/*
 * Cinematic brand intro.
 *
 * Beat 1  the SKD mark settles in, small and gold, over a forest-deep field.
 * Beat 2  the gold fill dissolves and the letters become windows onto the live
 *         homepage behind the veil.
 * Beat 3  the camera accelerates into the mark until the bowl of the "D" fills
 *         the screen — at which point the veil is nothing but that aperture,
 *         and the hero section is simply already there.
 *
 * The letters are a real SVG mask cut out of the veil, not an image of the
 * hero, so what shows through is the actual page (hero video included). That is
 * what makes the hand-off seamless: there is never a frame where one picture is
 * swapped for another.
 */

/*
 * True once the intro has run in this JS context. The first load gets the full
 * sequence; coming back to Home client-side replays it fast rather than making
 * the visitor sit through it again.
 */
let introPlayed = false;

/* Unmount regardless if GSAP never reports completion. */
const FAILSAFE_MS = 7000;
/* Don't wait on a slow font forever — the fallback serif still reads well. */
const FONT_TIMEOUT_MS = 1200;

/*
 * Horizontal position, as a fraction of the mark's width, of the point the zoom
 * flies into: the inside of the "D" bowl, the last of the three letters. The
 * zoom is anchored here and the mark drifts so this point reaches the middle of
 * the screen, so the sequence ends inside an open counter instead of on top of
 * a solid stroke.
 */
const TARGET_X = 0.82;
/* That counter's width, also as a fraction of the mark — sets how far to zoom. */
const COUNTER_RATIO = 0.085;

function whenFontReady(): Promise<unknown> {
  const fonts = document.fonts as FontFaceSet | undefined;
  if (!fonts?.ready) return Promise.resolve();
  return Promise.race([
    fonts.ready,
    new Promise((resolve) => setTimeout(resolve, FONT_TIMEOUT_MS)),
  ]);
}

export function BrandIntro() {
  const rootRef = useRef<HTMLDivElement>(null);
  const markRef = useRef<SVGGElement>(null);

  const [visible, setVisible] = useState(() => {
    // The server always renders the veil, so the first client render matches it
    // (introPlayed is still false during hydration). Later mounts see true.
    if (typeof window === "undefined") return true;
    return !introPlayed;
  });

  useEffect(() => {
    if (!visible) return;
    const root = rootRef.current;
    const mark = markRef.current;
    if (!root || !mark) return;

    const replay = introPlayed;
    introPlayed = true;

    let cancelled = false;
    const ctx = gsap.context(() => {}, root);
    const dismiss = () => setVisible(false);

    // Keep the homepage still underneath, so it is still at the top of the hero
    // when the veil opens onto it.
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const failsafe = window.setTimeout(dismiss, FAILSAFE_MS);
    window.addEventListener("keydown", dismiss);

    const build = () => {
      if (cancelled) return;

      ctx.add(() => {
        const zooms = root.querySelectorAll(".brand-intro__zoom");
        const inks = root.querySelectorAll(".brand-intro__ink");
        const gold = root.querySelector(".brand-intro__ink--gold");

        // Measured after the display font has loaded, so the aim is based on
        // the real letterforms rather than the fallback's metrics.
        const width = mark.getBBox().width || window.innerWidth * 0.4;
        // Bring the "D" bowl from where it sits to the centre of the screen.
        const drift = -(TARGET_X - 0.5) * width;
        // Zoom until that bowl comfortably covers the viewport's diagonal.
        const cover = Math.hypot(window.innerWidth, window.innerHeight);
        const scale = gsap.utils.clamp(30, 120, (cover / (width * COUNTER_RATIO)) * 1.2);

        const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        const tl = gsap.timeline({ onComplete: dismiss });
        /* Proxy for the flight: see the exponential zoom note in beat 3. */
        const flight = { p: 0 };

        gsap.set(zooms, { transformOrigin: `${TARGET_X * 100}% 50%` });

        if (reduced) {
          // No flight, no blur: show the mark, let the letters open onto the
          // page, then lift the veil.
          tl.to(inks, { opacity: 1, duration: 0.35, ease: "none" }, 0)
            .to(".brand-intro__caption", { opacity: 1, duration: 0.35, ease: "none" }, 0)
            .to(".brand-intro__caption", { opacity: 0, duration: 0.3, ease: "none" }, 0.95)
            .to(gold, { opacity: 0, duration: 0.4, ease: "none" }, 0.85)
            .to(root, { opacity: 0, duration: 0.4, ease: "none" }, 1.3);
          return;
        }

        tl
          // Beat 1 — the mark arrives, unhurried.
          .fromTo(zooms, { scale: 0.68 }, { scale: 1, duration: 1.2, ease: "power3.out" }, 0)
          .to(inks, { opacity: 1, duration: 0.8, ease: "power2.out" }, 0)
          .to(".brand-intro__caption", { opacity: 1, duration: 0.7, ease: "power2.out" }, 0.25)
          .to(".brand-intro__skip", { opacity: 1, duration: 0.5, ease: "power2.out" }, 0.7)
          // Beat 2 — the gold burns off and the letters turn into windows.
          .to(".brand-intro__caption", { opacity: 0, duration: 0.4, ease: "power2.in" }, 1.3)
          .to(".brand-intro__skip", { opacity: 0, duration: 0.4, ease: "power2.in" }, 1.3)
          .to(gold, { opacity: 0, duration: 0.6, ease: "power1.inOut" }, 1.35)
          /*
           * Beat 3 — the flight into the "D".
           *
           * Scale is driven exponentially rather than tweened directly: zoom is
           * multiplicative, so a linear scale tween reads as decelerating even
           * though the number climbs steadily. Interpolating the exponent keeps
           * the *apparent* rate constant, and easing the exponent in makes it a
           * camera gathering speed. This is the difference between a cinematic
           * dolly and an obvious CSS scale.
           */
          .to(
            flight,
            {
              p: 1,
              duration: 1.6,
              ease: "power1.in",
              onUpdate: () => {
                gsap.set(zooms, { scale: Math.exp(flight.p * Math.log(scale)) });
              },
            },
            1.3,
          )
          .to(zooms, { x: drift, duration: 1.2, ease: "power1.inOut" }, 1.3)
          // By now the aperture already covers the viewport; this only clears
          // any sliver left at the very edges.
          .to(root, { opacity: 0, duration: 0.22, ease: "none" }, 2.68);

        // Returning to Home: same motion, briskly.
        if (replay) tl.timeScale(1.9);
      });
    };

    whenFontReady().then(build, build);

    return () => {
      cancelled = true;
      window.clearTimeout(failsafe);
      window.removeEventListener("keydown", dismiss);
      document.body.style.overflow = previousOverflow;
      ctx.revert();
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      ref={rootRef}
      className="brand-intro"
      // Decorative: screen readers get the homepage underneath instead.
      aria-hidden="true"
      onClick={() => setVisible(false)}
    >
      {/* Without scripting nothing can lift the veil, so never raise it. */}
      <noscript>
        <style>{".brand-intro{display:none}"}</style>
      </noscript>

      <svg className="brand-intro__svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="brand-intro-gold" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" className="brand-intro__stop-from" />
            <stop offset="100%" className="brand-intro__stop-to" />
          </linearGradient>

          {/*
            Luminance mask: white keeps the veil, black cuts through it. The
            region is deliberately oversized so the mark can grow far past the
            viewport without the mask clipping its edges.
          */}
          <mask
            id="brand-intro-mask"
            maskUnits="userSpaceOnUse"
            x="-50%"
            y="-50%"
            width="200%"
            height="200%"
          >
            <rect x="-50%" y="-50%" width="200%" height="200%" fill="#fff" />
            <g className="brand-intro__zoom">
              <text
                className="brand-intro__glyph brand-intro__ink"
                x="50%"
                y="50%"
                textAnchor="middle"
                dominantBaseline="central"
                fill="#000"
              >
                SKD
              </text>
            </g>
          </mask>
        </defs>

        <rect
          className="brand-intro__veil"
          width="100%"
          height="100%"
          mask="url(#brand-intro-mask)"
        />

        {/* The gold face, sitting exactly over its own hole — as it fades out
            the homepage behind the veil comes through the letterforms. */}
        <g className="brand-intro__zoom" ref={markRef}>
          <text
            className="brand-intro__glyph brand-intro__ink brand-intro__ink--gold"
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="central"
            fill="url(#brand-intro-gold)"
          >
            SKD
          </text>
        </g>
      </svg>

      <div className="brand-intro__caption">
        <span className="brand-intro__rule" />
        <span className="brand-intro__caption-text">Sri Kanaka Durga Caterings</span>
      </div>
      <span className="brand-intro__skip">Tap to skip</span>
    </div>
  );
}
