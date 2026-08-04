import { Link } from "@tanstack/react-router";
import { CalendarDays, Globe, MessageCircle, Menu as MenuIcon, Phone, Sparkles, X } from "lucide-react";
import { useState } from "react";

import { CONTACT } from "@/data/site";

const NAV = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Menu", to: "/menu" },
  { label: "Gallery", to: "/gallery" },
  { label: "Reviews", to: "/reviews" },
  { label: "FAQ", to: "/faq" },
  { label: "Contact", to: "/contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState<"EN" | "TE">("EN");

  return (
    <div className="sticky top-0 z-50 bg-forest-deep/95 backdrop-blur-md">
      <div className="border-b border-border/60">
        <div className="mx-auto flex max-w-[1500px] flex-wrap items-center justify-between gap-3 px-6 py-2 text-[11px] tracking-wide text-muted-foreground">
          <span className="flex items-center gap-2">
            <Sparkles className="size-3.5 text-primary" />
            Serving Happiness Across Andhra Pradesh
          </span>
          <div className="flex items-center gap-x-6">
            <a href={CONTACT.phoneHref} className="flex items-center gap-2 hover:text-primary">
              <Phone className="size-3.5 text-primary" />
              {CONTACT.phone}
            </a>
            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="hidden items-center gap-2 hover:text-primary sm:flex"
            >
              <MessageCircle className="size-3.5 text-primary" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      <header className="border-b border-border/40">
        <div className="mx-auto flex max-w-[1500px] items-center justify-between gap-6 px-6 py-4">
          <Link to="/" className="flex items-center gap-3">
            <div className="grid size-11 place-items-center rounded-full border border-primary/50 text-primary">
              <Sparkles className="size-5" />
            </div>
            <div className="leading-tight">
              <p className="font-display text-[10px] tracking-[0.35em] text-primary/80">
                SRI KANAKA DURGA
              </p>
              <p className="font-display text-xl tracking-[0.22em] text-accent">CATERINGS</p>
              <p className="text-[8px] tracking-[0.3em] text-primary/70">• ATITHI DEVO BHAVA •</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 text-[12px] tracking-[0.14em] uppercase xl:flex">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                className="pb-1 text-foreground/85 transition-colors hover:text-primary [&.active]:border-b-2 [&.active]:border-primary [&.active]:text-primary"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setLang(lang === "EN" ? "TE" : "EN")}
              className="hidden items-center gap-2 rounded-full border border-primary/50 px-3 py-2 text-[11px] tracking-[0.14em] text-primary sm:inline-flex"
            >
              <Globe className="size-4" />
              {lang === "EN" ? "English" : "తెలుగు"}
            </button>
            <a
              href={CONTACT.phoneHref}
              className="hidden items-center gap-2 rounded-full border border-primary/50 px-3 py-2 text-[11px] tracking-[0.14em] text-primary lg:inline-flex"
            >
              <Phone className="size-4" /> Call Now
            </a>
            <Link
              to="/book"
              className="btn-gold inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[11px] font-medium tracking-[0.14em] uppercase"
            >
              <CalendarDays className="size-4" />
              Book Catering
            </Link>
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className="grid size-10 place-items-center rounded-full border border-primary/40 text-primary xl:hidden"
            >
              {open ? <X className="size-5" /> : <MenuIcon className="size-5" />}
            </button>
          </div>
        </div>

        {open && (
          <nav className="mx-auto grid max-w-[1500px] gap-1 px-6 pb-5 text-sm xl:hidden">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-foreground/85 hover:bg-card hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </header>
    </div>
  );
}
