import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { useState } from "react";

import { PageHero } from "@/components/site/ui-bits";
import { CONTACT, IMAGES } from "@/data/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Sri Kanaka Durga Caterings" },
      {
        name: "description",
        content:
          "Call, WhatsApp or email our catering team in Vijayawada, Andhra Pradesh. Business hours, location map and enquiry form.",
      },
      { property: "og:title", content: "Contact Us" },
      { property: "og:description", content: "Reach our catering team 24×7 for enquiries and quotations." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  const field =
    "w-full rounded-2xl border border-primary/25 bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-primary focus:outline-none";

  return (
    <div>
      <PageHero
        eyebrow="Contact"
        title="Let's Plan Your Celebration"
        subtitle="Tell us your date and guest count — we'll come back with a menu and quotation."
        image={IMAGES.heroBiryani}
      />
      <section className="px-6 pt-14">
        <div className="mx-auto grid max-w-[1400px] gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-primary/25 bg-card p-8">
            <h2 className="font-display text-2xl text-cream">Send an Enquiry</h2>
            <form
              className="mt-6 grid gap-4"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              <input required placeholder="Full Name" className={field} />
              <input required placeholder="Phone Number" className={field} />
              <input type="email" placeholder="Email" className={field} />
              <input placeholder="Event Type & Date" className={field} />
              <textarea rows={4} placeholder="Tell us about your event" className={field} />
              <button className="btn-gold rounded-full px-8 py-4 text-[12px] tracking-[0.16em] uppercase">
                Send Enquiry
              </button>
              {sent && (
                <p className="text-sm text-primary">
                  Thank you! Our team will contact you shortly.
                </p>
              )}
            </form>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-primary/25 bg-card p-8">
              <ul className="space-y-4 text-sm text-muted-foreground">
                <li className="flex gap-3">
                  <MapPin className="size-5 shrink-0 text-primary" /> {CONTACT.address}
                </li>
                <li className="flex gap-3">
                  <Phone className="size-5 shrink-0 text-primary" />
                  <a href={CONTACT.phoneHref} className="hover:text-primary">
                    {CONTACT.phone}
                  </a>
                </li>
                <li className="flex gap-3">
                  <MessageCircle className="size-5 shrink-0 text-primary" />
                  <a href={CONTACT.whatsapp} target="_blank" rel="noreferrer" className="hover:text-primary">
                    WhatsApp Us
                  </a>
                </li>
                <li className="flex gap-3">
                  <Mail className="size-5 shrink-0 text-primary" />
                  <a href={`mailto:${CONTACT.email}`} className="hover:text-primary">
                    {CONTACT.email}
                  </a>
                </li>
              </ul>
              <h3 className="mt-6 font-display text-xl text-cream">Business Hours</h3>
              <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                {CONTACT.hours.map((h) => (
                  <li key={h.day} className="flex justify-between gap-4">
                    <span>{h.day}</span>
                    <span className="text-primary/80">{h.time}</span>
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
