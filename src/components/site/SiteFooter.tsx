import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Mail, MapPin, Phone, Send, Youtube } from "lucide-react";
import { useState } from "react";

import { CONTACT, SERVICES } from "@/data/site";

export function SiteFooter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <footer className="mt-24 border-t border-border/40 bg-forest-deep">
      <div className="mx-auto grid max-w-[1500px] gap-10 px-6 py-16 md:grid-cols-2 xl:grid-cols-5">
        <div className="xl:col-span-1">
          <p className="font-display text-xl tracking-[0.22em] text-accent">
            SRI KANAKA DURGA
          </p>
          <p className="text-[10px] tracking-[0.3em] text-primary/70">• ATITHI DEVO BHAVA •</p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Premium multi-cuisine catering across Andhra Pradesh for over a decade. Weddings,
            receptions, corporate events, temple functions and every celebration in between.
          </p>
          <div className="mt-5 flex gap-3">
            {[Facebook, Instagram, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social media"
                className="grid size-9 place-items-center rounded-full border border-primary/40 text-primary transition-colors hover:bg-primary/10"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-display text-lg text-cream">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {[
              { label: "About Us", to: "/about" },
              { label: "Menu Explorer", to: "/menu" },
              { label: "Gallery", to: "/gallery" },
              { label: "Reviews", to: "/reviews" },
              { label: "FAQ", to: "/faq" },
              { label: "Contact", to: "/contact" },
              { label: "Book Catering", to: "/book" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-primary">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-lg text-cream">Our Services</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link to="/services/$slug" params={{ slug: s.slug }} className="hover:text-primary">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-lg text-cream">Reach Us</h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
              {CONTACT.address}
            </li>
            <li className="flex gap-2">
              <Phone className="size-4 shrink-0 text-primary" />
              <a href={CONTACT.phoneHref} className="hover:text-primary">
                {CONTACT.phone}
              </a>
            </li>
            <li className="flex gap-2">
              <Mail className="size-4 shrink-0 text-primary" />
              <a href={`mailto:${CONTACT.email}`} className="hover:text-primary">
                {CONTACT.email}
              </a>
            </li>
          </ul>
          <h4 className="mt-6 font-display text-base text-cream">Business Hours</h4>
          <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
            {CONTACT.hours.map((h) => (
              <li key={h.day} className="flex justify-between gap-4">
                <span>{h.day}</span>
                <span className="text-primary/80">{h.time}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-lg text-cream">Find Us</h3>
          <div className="mt-4 overflow-hidden rounded-2xl border border-primary/25">
            <iframe
              title="Sri Kanaka Durga Caterings location"
              src={CONTACT.mapsEmbed}
              loading="lazy"
              className="h-40 w-full"
            />
          </div>
          <h4 className="mt-6 font-display text-base text-cream">Newsletter</h4>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setDone(true);
              setEmail("");
            }}
            className="mt-3 flex gap-2"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              className="min-w-0 flex-1 rounded-full border border-primary/30 bg-card px-4 py-2 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-primary focus:outline-none"
            />
            <button className="btn-gold grid size-10 shrink-0 place-items-center rounded-full" aria-label="Subscribe">
              <Send className="size-4" />
            </button>
          </form>
          {done && <p className="mt-2 text-xs text-primary">Thank you for subscribing!</p>}
        </div>
      </div>

      <div className="border-t border-border/40">
        <div className="mx-auto flex max-w-[1500px] flex-col items-center justify-between gap-3 px-6 py-5 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Sri Kanaka Durga Caterings. All rights reserved.</p>
          <div className="flex flex-wrap gap-5">
            <Link to="/privacy" className="hover:text-primary">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-primary">
              Terms &amp; Conditions
            </Link>
            <Link to="/refund" className="hover:text-primary">
              Refund Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
