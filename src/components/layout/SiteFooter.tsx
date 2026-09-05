import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Mail, MapPin, Phone, Send, Youtube } from "lucide-react";
import { useState } from "react";

import { CONTACT } from "@/config/contact";
import { SERVICES } from "@/data/services";
import { useLanguage } from "@/hooks/use-language";
import { l } from "@/i18n";

export function SiteFooter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  const { lang, t } = useLanguage();

  return (
    <footer className="mt-24 border-t border-border/40 bg-forest-deep">
      <div className="mx-auto grid max-w-375 gap-10 px-6 py-16 md:grid-cols-2 xl:grid-cols-5">
        <div className="xl:col-span-1">
          <p className="font-display text-xl tracking-[0.22em] text-accent">
            {t("header.brandName")}
          </p>
          <p className="text-[10px] tracking-[0.3em] text-primary/70">{t("header.brandMotto")}</p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            {t("footer.desc")}
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
          <h3 className="font-display text-lg text-cream">{t("footer.quickLinks")}</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {[
              { key: "aboutUs", to: "/about" },
              { key: "menuExplorer", to: "/menu" },
              { key: "gallery", to: "/gallery" },
              { key: "faq", to: "/faq" },
              { key: "contact", to: "/contact" },
              { key: "bookCatering", to: "/book" },
            ].map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="hover:text-primary">
                  {t(`footer.${link.key}`)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-lg text-cream">{t("footer.ourServices")}</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link to="/services/$slug" params={{ slug: s.slug }} className="hover:text-primary">
                  {l(s, "title", lang)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-lg text-cream">{t("footer.reachUs")}</h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
              {lang === "te" ? CONTACT.addressTe : CONTACT.address}
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
          <h4 className="mt-6 font-display text-base text-cream">{t("footer.businessHours")}</h4>
          <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
            {CONTACT.hours.map((h) => (
              <li key={h.day} className="flex justify-between gap-4">
                <span>{l(h, "day", lang)}</span>
                <span className="text-primary/80">{h.time}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-lg text-cream">{t("footer.findUs")}</h3>
          <div className="mt-4 overflow-hidden rounded-2xl border border-primary/25">
            <iframe
              title="Sri Kanaka Durga Caterings location"
              src={CONTACT.mapsEmbed}
              loading="lazy"
              className="h-40 w-full"
            />
          </div>
          <h4 className="mt-6 font-display text-base text-cream">{t("footer.newsletter")}</h4>
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
              placeholder={t("footer.emailPlaceholder")}
              className="min-w-0 flex-1 rounded-full border border-primary/30 bg-card px-4 py-2 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-primary focus:outline-none"
            />
            <button className="btn-gold grid size-10 shrink-0 place-items-center rounded-full" aria-label="Subscribe">
              <Send className="size-4" />
            </button>
          </form>
          {done && <p className="mt-2 text-xs text-primary">{t("footer.subscribed")}</p>}
        </div>
      </div>

      <div className="border-t border-border/40">
        <div className="mx-auto flex max-w-375 flex-col items-center justify-between gap-3 px-6 py-5 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} {t("footer.copyright")}</p>
          <div className="flex flex-wrap gap-5">
            <Link to="/privacy" className="hover:text-primary">
              {t("footer.privacyPolicy")}
            </Link>
            <Link to="/terms" className="hover:text-primary">
              {t("footer.termsConditions")}
            </Link>
            <Link to="/refund" className="hover:text-primary">
              {t("footer.refundPolicy")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
