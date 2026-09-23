import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, Download, Home } from "lucide-react";
import { useEffect, useState } from "react";

import { useLanguage } from "@/hooks/use-language";

export const Route = createFileRoute("/booking-confirmed")({
  head: () => ({
    meta: [
      { title: "Booking Request Received — Sri Kanaka Durga Caterings" },
      {
        name: "description",
        content:
          "Your catering request has been received. Our team will contact you shortly with a detailed quotation.",
      },
      { property: "og:title", content: "Booking Request Received" },
      { property: "og:description", content: "Thank you — we'll be in touch within 24 hours." },
    ],
  }),
  component: Confirmed,
});

type Summary = {
  bookingId: string;
  eventType: string;
  details: Record<string, string>;
  pkg: string;
  dishes: { name: string; category: string }[];
  requests: { name: string }[];
  addons: string[];
  customer: Record<string, string>;
};

function Confirmed() {
  const { t } = useLanguage();
  const [data, setData] = useState<Summary | null>(null);

  useEffect(() => {
    const raw = window.sessionStorage.getItem("skd-booking");
    if (raw) setData(JSON.parse(raw) as Summary);
  }, []);

  return (
    <div className="px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-3xl rounded-[2rem] border border-primary/30 bg-card p-6 text-center sm:p-10">
        <CheckCircle2 className="mx-auto size-16 animate-bounce text-primary" />
        <h1 className="mt-6 font-display text-4xl text-cream">{t("bookingConfirmed.title")}</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          {t("bookingConfirmed.thankYou")}{data?.customer?.["name"] ? `, ${data.customer["name"]}` : ""}! {t("bookingConfirmed.message")}
        </p>
        {data && (
          <p className="mt-6 inline-block rounded-full border border-primary/40 px-6 py-2 text-sm tracking-[0.18em] text-primary uppercase">
            {t("bookingConfirmed.bookingId")}: {data.bookingId}
          </p>
        )}

        {data && (
          <div className="mt-8 rounded-3xl border border-primary/20 p-6 text-left text-sm text-muted-foreground">
            <p><span className="text-cream">{t("bookingConfirmed.event")}:</span> {t(`eventTypes.${data.eventType}`) || data.eventType}</p>
            <p><span className="text-cream">{t("bookingConfirmed.date")}:</span> {data.details?.["date"] || "—"}</p>
            <p><span className="text-cream">{t("bookingConfirmed.guests")}:</span> {data.details?.["guests"] || "—"}</p>
            <p className="mt-2">
              <span className="text-cream">{t("bookingConfirmed.menu")}:</span>{" "}
              {data.pkg ? `${data.pkg} ${t("bookingConfirmed.package")} — ` : ""}
              {data.dishes?.map((d) => d.name).join(", ") || "—"}
            </p>
            {data.requests?.length > 0 && (
              <p className="mt-2">
                <span className="text-cream">{t("bookingConfirmed.requestedDishes")}:</span>{" "}
                {data.requests.map((r) => r.name).join(", ")}
              </p>
            )}
            {data.addons?.length > 0 && (
              <p className="mt-2">
                <span className="text-cream">{t("bookingConfirmed.additionalServices")}:</span> {data.addons.map((a) => t(`bookServices.${a}`)).join(", ")}
              </p>
            )}
          </div>
        )}

        <div className="mt-9 flex flex-wrap justify-center gap-4 print:hidden">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full border border-primary/50 px-7 py-3 text-[11px] tracking-[0.14em] text-primary uppercase hover:bg-primary/10"
          >
            <Home className="size-4" /> {t("bookingConfirmed.backHome")}
          </Link>
          <button
            onClick={() => window.print()}
            className="btn-gold inline-flex items-center gap-2 rounded-full px-7 py-3 text-[11px] tracking-[0.14em] uppercase"
          >
            <Download className="size-4" /> {t("bookingConfirmed.downloadSummary")}
          </button>
        </div>
      </div>
    </div>
  );
}
