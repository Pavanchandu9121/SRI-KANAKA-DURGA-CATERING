import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { type ChangeEvent, type FormEvent, useState } from "react";

import { PageHero } from "@/components/layout/ui-bits";
import { IMAGES } from "@/config/images";
import { CONTACT, WEB3FORMS_KEY } from "@/config/contact";
import { useLanguage } from "@/hooks/use-language";
import { l } from "@/i18n";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Sri Kanaka Durga Caterings" },
      {
        name: "description",
        content:
          "Call, WhatsApp or email our catering team in Gollapudi, Andhra Pradesh. Business hours, location map and enquiry form.",
      },
      { property: "og:title", content: "Contact Us" },
      {
        property: "og:description",
        content: "Reach our catering team 24×7 for enquiries and quotations.",
      },
      { property: "og:url", content: "https://srikanakadurgacaterings.in/contact" },
      { property: "og:image", content: "https://srikanakadurgacaterings.in/og-image.png" },
      { name: "twitter:title", content: "Contact Sri Kanaka Durga Caterings" },
      { name: "twitter:description", content: "Reach our catering team 24×7 for enquiries and quotations." },
      { name: "twitter:image", content: "https://srikanakadurgacaterings.in/og-image.png" },
    ],
    links: [
      { rel: "canonical", href: "https://srikanakadurgacaterings.in/contact" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { lang, t } = useLanguage();
  const [form, setForm] = useState({ name: "", phone: "", email: "", event: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const field =
    "w-full rounded-2xl border border-primary/25 bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-primary focus:outline-none";

  const update =
    (key: keyof typeof form) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((prev) => ({ ...prev, [key]: e.target.value }));

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: "New Contact Enquiry from Sri Kanaka Durga Caterings",
          name: form.name,
          phone: form.phone,
          email: form.email || "Not provided",
          eventType: form.event || "General enquiry",
          message: form.message || "No message provided",
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatus("sent");
        setForm({ name: "", phone: "", email: "", event: "", message: "" });
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      console.error("Failed to send enquiry:", error);
      setStatus("error");
    }
  };

  return (
    <div>
      <PageHero
        eyebrow={t("contactPage.heroEyebrow")}
        title={t("contactPage.heroTitle")}
        subtitle={t("contactPage.heroSubtitle")}
        image={IMAGES.heroFeast}
      />
      <section className="px-6 pt-14">
        <div className="mx-auto grid max-w-350 gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-primary/25 bg-card p-8">
            <h2 className="font-display text-2xl text-cream">{t("contactPage.sendEnquiry")}</h2>
            <form className="mt-6 grid gap-4" onSubmit={handleSubmit}>
              <input
                required
                placeholder={t("contactPage.fullName")}
                className={field}
                value={form.name}
                onChange={update("name")}
              />
              <input
                required
                placeholder={t("contactPage.phoneNumber")}
                className={field}
                value={form.phone}
                onChange={update("phone")}
              />
              <input
                type="email"
                placeholder={t("contactPage.email")}
                className={field}
                value={form.email}
                onChange={update("email")}
              />
              <input
                placeholder={t("contactPage.eventTypeDate")}
                className={field}
                value={form.event}
                onChange={update("event")}
              />
              <textarea
                rows={4}
                placeholder={t("contactPage.tellUs")}
                className={field}
                value={form.message}
                onChange={update("message")}
              />
              <button
                type="submit"
                disabled={status === "sending"}
                className="btn-gold rounded-full px-8 py-4 text-[12px] tracking-[0.16em] uppercase disabled:opacity-60"
              >
                {status === "sending" ? t("contactPage.sending") : t("contactPage.sendBtn")}
              </button>
              {status === "sent" && (
                <p className="text-sm text-primary">{t("contactPage.thankYou")}</p>
              )}
              {status === "error" && (
                <p className="text-sm text-red-400">{t("contactPage.submitError")}</p>
              )}
            </form>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-primary/25 bg-card p-8">
              <ul className="space-y-4 text-sm text-muted-foreground">
                <li className="flex gap-3">
                  <MapPin className="size-5 shrink-0 text-primary" /> {l(CONTACT, "address", lang)}
                </li>
                <li className="flex gap-3">
                  <Phone className="size-5 shrink-0 text-primary" />
                  <a href={CONTACT.phoneHref} className="hover:text-primary">
                    {CONTACT.phone}
                  </a>
                </li>
                <li className="flex gap-3">
                  <MessageCircle className="size-5 shrink-0 text-primary" />
                  <a
                    href={CONTACT.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-primary"
                  >
                    {t("contactPage.whatsappUs")}
                  </a>
                </li>
                <li className="flex gap-3">
                  <Mail className="size-5 shrink-0 text-primary" />
                  <a href={`mailto:${CONTACT.email}`} className="hover:text-primary">
                    {CONTACT.email}
                  </a>
                </li>
              </ul>
              <h3 className="mt-6 font-display text-xl text-cream">
                {t("contactPage.businessHours")}
              </h3>
              <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                {CONTACT.hours.map((h) => (
                  <li key={h.day} className="flex justify-between gap-4">
                    <span>{l(h, "day", lang)}</span>
                    <span className="text-primary/80">{l(h, "time", lang)}</span>
                  </li>
                ))}
              </ul>
            </div>
            <iframe
              title="Our location"
              src={CONTACT.mapsEmbed}
              loading="lazy"
              className="h-72 w-full rounded-3xl border border-primary/25"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
