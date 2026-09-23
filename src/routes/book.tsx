import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { CONTACT, WEB3FORMS_KEY } from "@/config/contact";
import { ArrowLeft, ArrowRight, Check, Plus, Trash2, Upload } from "lucide-react";
import { useState } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeading } from "@/components/layout/ui-bits";
import { ADDITIONAL_SERVICES, EVENT_TYPES, OCCASION_MENU, PACKAGES } from "@/data/packages";
import { DISHES, MENU_CATEGORIES } from "@/data/dishes";
import { useLanguage } from "@/hooks/use-language";
import { l } from "@/i18n";

export const Route = createFileRoute("/book")({
  validateSearch: (search: Record<string, unknown>): { event?: string } => {
    const event = typeof search["event"] === "string" ? search["event"] : undefined;
    return event ? { event } : {};
  },
  head: () => ({
    meta: [
      { title: "Book Catering — Request a Custom Quotation | Vijayawada" },
      {
        name: "description",
        content:
          "Book catering in Vijayawada in a few steps: choose your event, share venue and guest details, build a package or custom menu, add services and submit your request.",
      },
      {
        name: "keywords",
        content:
          "book catering Vijayawada, catering quotation Gollapudi, order catering near me, book event food, custom catering menu, wedding catering booking, catering estimate Vijayawada",
      },
      { property: "og:title", content: "Book Your Catering in Vijayawada" },
      {
        property: "og:description",
        content: "Build your menu and request a catering quotation in minutes.",
      },
      { property: "og:url", content: "https://srikanakadurgacaterings.in/book" },
      { property: "og:image", content: "https://srikanakadurgacaterings.in/og-image.png" },
      { name: "twitter:title", content: "Book Catering — Sri Kanaka Durga Caterings Vijayawada" },
      { name: "twitter:description", content: "Build your menu and request a catering quotation in minutes." },
      { name: "twitter:image", content: "https://srikanakadurgacaterings.in/og-image.png" },
    ],
    links: [
      { rel: "canonical", href: "https://srikanakadurgacaterings.in/book" },
    ],
  }),
  component: BookPage,
});

const STEPS = ["Event", "Your Details", "Menu", "Services", "Review"];

const field =
  "w-full rounded-2xl border border-primary/25 bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-primary focus:outline-none";

function BookPage() {
  const navigate = useNavigate();
  const { event: presetEvent } = Route.useSearch();
  const { lang, t } = useLanguage();

  const isValidPreset = presetEvent && EVENT_TYPES.includes(presetEvent);
  const [step, setStep] = useState(isValidPreset ? 1 : 0);
  const [eventType, setEventType] = useState(isValidPreset ? presetEvent : "");
  const [customer, setCustomer] = useState({
    name: "",
    phone: "",
    whatsapp: "",
    email: "",
    address1: "",
    address2: "",
    city: "",
    district: "",
    state: "Andhra Pradesh",
    pincode: "",
    contactTime: "Morning",
    instructions: "",
  });
  const [leadCaptured, setLeadCaptured] = useState(false);
  const [showMoreDetails, setShowMoreDetails] = useState(false);
  const [mode, setMode] = useState<"package" | "custom" | "">("");
  const [pkg, setPkg] = useState("");
  const [selected, setSelected] = useState<string[]>([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Breakfast");
  const [requests, setRequests] = useState<{ name: string; category: string; notes: string }[]>([]);
  const [reqForm, setReqForm] = useState<{ name: string; category: string; notes: string }>({
    name: "",
    category: MENU_CATEGORIES[0] || "",
    notes: "",
  });
  const [files, setFiles] = useState<File[]>([]);
  const [addons, setAddons] = useState<string[]>([]);

  const toggle = (list: string[], set: (v: string[]) => void, value: string) =>
    set(list.includes(value) ? list.filter((v) => v !== value) : [...list, value]);

  const applyPackage = (name: string) => {
    setPkg(name);
    if (name === "Our Special Selection" && eventType && OCCASION_MENU[eventType]) {
      setSelected(OCCASION_MENU[eventType]);
    } else {
      setSelected(DISHES.filter((d) => d.packages.includes(name)).map((d) => d.id));
    }
  };

  const duplicate = DISHES.find(
    (d) =>
      reqForm.name.trim().length > 2 &&
      d.name.toLowerCase().includes(reqForm.name.trim().toLowerCase()),
  );

  const selectedDishes = DISHES.filter((d) => selected.includes(d.id));
  const grouped = MENU_CATEGORIES.map((c) => ({
    category: c,
    items: selectedDishes.filter((d) => d.category === c),
  })).filter((g) => g.items.length);

  const visible = DISHES.filter(
    (d) =>
      (category === "All" || d.category === category) &&
      (!search || d.name.toLowerCase().includes(search.toLowerCase())),
  );

  const submit = async () => {
    const bookingId = `SKD-${Date.now().toString().slice(-6)}`;
    const summary = {
      bookingId,
      eventType,
      customer,
      mode,
      pkg,
      dishes: selectedDishes.map((d) => ({ name: d.name, category: d.category })),
      requests,
      files: files.map((f) => f.name),
      addons,
      status: "submitted",
      updatedAt: new Date().toISOString(),
    };

    const formData = new FormData();
    formData.append("access_key", WEB3FORMS_KEY);
    formData.append("subject", `New Booking Request: ${bookingId} - ${eventType}`);
    formData.append("name", customer.name);
    formData.append("phone", customer.phone);
    formData.append("email", customer.email || "Not provided");
    formData.append("eventType", eventType);
    formData.append("status", "Booking Submitted - Menu Finished");
    formData.append("bookingId", bookingId);
    formData.append("menu", selectedDishes.map((d) => d.name).join(", "));
    formData.append("addons", addons.join(", "));
    formData.append("instructions", customer.instructions || "None");

    files.forEach((file) => {
      formData.append("attachment", file);
    });

    // Send final booking details email (fire and forget so UI doesn't freeze)
    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    }).catch((error) => {
      console.error("Failed to send final email:", error);
    });

    if (typeof window !== "undefined") {
      window.sessionStorage.setItem("skd-booking", JSON.stringify(summary));
    }
    navigate({ to: "/booking-confirmed" });
  };

  const canNext =
    (step === 0 && !!eventType) ||
    (step === 1 && !!customer.name && !!customer.phone) ||
    (step === 2 && selected.length + requests.length > 0) ||
    step === 3 ||
    step === 4;

  return (
    <div className="px-4 py-10 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-300">
        <SectionHeading eyebrow={t("bookPage.heroEyebrow")} title={t("bookPage.heroTitle")} />

        <ol className="mt-10 flex flex-wrap justify-center gap-3">
          {STEPS.map((s, i) => (
            <li
              key={s}
              className={`rounded-full border px-4 py-2 text-[11px] tracking-[0.14em] uppercase ${i === step
                ? "border-primary bg-primary/15 text-primary"
                : i < step
                  ? "border-primary/40 text-primary/70"
                  : "border-primary/20 text-muted-foreground"
                }`}
            >
              {i + 1}. {t(`bookSteps.${s}`)}
            </li>
          ))}
        </ol>

        <div className="mt-8 rounded-[1.5rem] border border-primary/25 bg-card p-5 sm:mt-10 sm:rounded-[2rem] sm:p-8">
          {step === 0 && (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {EVENT_TYPES.map((e) => (
                <button
                  key={e}
                  onClick={() => setEventType(e)}
                  className={`rounded-2xl border px-5 py-6 font-display text-xl ${eventType === e
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-primary/25 text-cream hover:border-primary/60"
                    }`}
                >
                  {t(`eventTypes.${e}`)}
                </button>
              ))}
            </div>
          )}

          {step === 2 && (
            <div className="grid gap-6 lg:grid-cols-[1fr_280px] xl:grid-cols-[1fr_320px]">
              <div>
                {!mode && (
                  <div className="grid gap-5 sm:grid-cols-2">
                    <button
                      onClick={() => setMode("package")}
                      className="rounded-3xl border border-primary/30 p-8 text-left hover:border-primary"
                    >
                      <h3 className="font-display text-2xl text-cream">
                        {t("book.choosePackage")}
                      </h3>
                      <p className="mt-2 text-sm text-muted-foreground">
                        {t("book.choosePackageDesc")}
                      </p>
                    </button>
                    <button
                      onClick={() => setMode("custom")}
                      className="rounded-3xl border border-primary/30 p-8 text-left hover:border-primary"
                    >
                      <h3 className="font-display text-2xl text-cream">{t("book.buildCustom")}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">
                        {t("book.buildCustomDesc")}
                      </p>
                    </button>
                  </div>
                )}

                {mode === "package" && !pkg && (
                  <div className="grid gap-4 sm:grid-cols-2">
                    {PACKAGES.map((p) => (
                      <button
                        key={p.name}
                        onClick={() => applyPackage(p.name)}
                        className="rounded-2xl border border-primary/25 p-6 text-left hover:border-primary"
                      >
                        <h3 className="font-display text-xl text-cream">{l(p, "name", lang)}</h3>
                        <p className="mt-1 text-sm text-muted-foreground">{l(p, "note", lang)}</p>
                      </button>
                    ))}
                  </div>
                )}

                {(mode === "custom" || (mode === "package" && pkg)) && (
                  <div>
                    <div className="flex flex-wrap gap-3">
                      <input
                        placeholder="Search dishes..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className={`${field} max-w-xs`}
                      />
                      <select
                        className={`${field} max-w-xs`}
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                      >
                        {["All", ...MENU_CATEGORIES].map((c) => (
                          <option key={c} value={c}>
                            {t(`categories.${c}`)}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="mt-6 grid gap-3 sm:grid-cols-2">
                      {visible.map((d) => {
                        const on = selected.includes(d.id);
                        return (
                          <div
                            key={d.id}
                            className="flex items-start justify-between gap-3 rounded-2xl border border-primary/20 p-4"
                          >
                            <div>
                              <p className="font-display text-lg text-cream">
                                {l(d, "name", lang)}
                              </p>
                              <p className="text-xs text-muted-foreground">{l(d, "desc", lang)}</p>
                              <p className="mt-1 text-[10px] tracking-[0.14em] text-primary/80 uppercase">
                                {t(`categories.${d.category}`)}
                              </p>
                            </div>
                            <button
                              onClick={() => toggle(selected, setSelected, d.id)}
                              aria-label={on ? `Remove ${d.name}` : `Add ${d.name}`}
                              className={`grid size-9 shrink-0 place-items-center rounded-full border ${on
                                ? "border-primary bg-primary/15 text-primary"
                                : "border-primary/40 text-primary"
                                }`}
                            >
                              {on ? <Check className="size-4" /> : <Plus className="size-4" />}
                            </button>
                          </div>
                        );
                      })}
                    </div>

                    <div className="mt-8 rounded-2xl border border-primary/25 p-6">
                      <h3 className="font-display text-xl text-cream">{t("book.cantFind")}</h3>
                      <div className="mt-4 grid gap-3 sm:grid-cols-3">
                        <input
                          placeholder="Dish Name"
                          className={field}
                          value={reqForm.name}
                          onChange={(e) => setReqForm({ ...reqForm, name: e.target.value })}
                        />
                        <select
                          className={field}
                          value={reqForm.category}
                          onChange={(e) => setReqForm({ ...reqForm, category: e.target.value })}
                        >
                          {MENU_CATEGORIES.map((c) => (
                            <option key={c} value={c}>
                              {t(`categories.${c}`)}
                            </option>
                          ))}
                        </select>
                        <input
                          placeholder="Notes"
                          className={field}
                          value={reqForm.notes}
                          onChange={(e) => setReqForm({ ...reqForm, notes: e.target.value })}
                        />
                      </div>
                      {duplicate ? (
                        <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-primary">
                          {t("book.alreadyAvailable")} {l(duplicate, "name", lang)}
                          <button
                            onClick={() => {
                              if (!selected.includes(duplicate.id))
                                setSelected([...selected, duplicate.id]);
                              setReqForm({
                                name: "",
                                category: MENU_CATEGORIES[0] || "",
                                notes: "",
                              });
                            }}
                            className="btn-gold rounded-full px-4 py-2 text-[11px] tracking-[0.12em] uppercase"
                          >
                            {t("book.addExisting")}
                          </button>
                        </div>
                      ) : (
                        <button
                          onClick={() => {
                            if (!reqForm.name.trim()) return;
                            setRequests([...requests, reqForm]);
                            setReqForm({ name: "", category: MENU_CATEGORIES[0] || "", notes: "" });
                          }}
                          className="btn-gold mt-4 rounded-full px-5 py-2.5 text-[11px] tracking-[0.12em] uppercase"
                        >
                          {t("book.addCustom")}
                        </button>
                      )}
                    </div>

                    <div className="mt-6 rounded-2xl border border-dashed border-primary/40 p-6 text-center">
                      <Upload className="mx-auto size-6 text-primary" />
                      <p className="mt-2 text-sm text-muted-foreground">
                        {t("book.uploadMenu")}
                      </p>
                      <input
                        type="file"
                        multiple
                        accept="image/*,.pdf,.doc,.docx,.xls,.xlsx"
                        onChange={(e) =>
                          setFiles([
                            ...files,
                            ...Array.from(e.target.files ?? []),
                          ])
                        }
                        className="mx-auto mt-4 block text-xs text-muted-foreground"
                      />
                      {files.length > 0 && (
                        <ul className="mt-3 text-xs text-primary">
                          {files.map((f) => (
                            <li key={f.name}>{f.name}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                )}
              </div>

              <aside className="h-fit rounded-3xl border border-primary/25 p-6">
                <h3 className="font-display text-xl text-cream">{t("book.yourMenu")}</h3>
                {pkg && (
                  <p className="mt-1 text-xs text-primary uppercase">
                    {pkg} {t("book.pkg")}
                  </p>
                )}
                {grouped.length === 0 && requests.length === 0 && (
                  <p className="mt-3 text-sm text-muted-foreground">{t("book.noDishes")}</p>
                )}
                {grouped.map((g) => (
                  <div key={g.category} className="mt-4">
                    <p className="text-[10px] tracking-[0.18em] text-primary/80 uppercase">
                      {t(`categories.${g.category}`)}
                    </p>
                    <ul className="mt-1 space-y-1">
                      {g.items.map((d) => (
                        <li
                          key={d.id}
                          className="flex items-center justify-between gap-2 text-sm text-muted-foreground"
                        >
                          {l(d, "name", lang)}
                          <button
                            onClick={() => toggle(selected, setSelected, d.id)}
                            aria-label={`Remove ${d.name}`}
                          >
                            <Trash2 className="size-3.5 text-primary/70" />
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                {requests.length > 0 && (
                  <div className="mt-4">
                    <p className="text-[10px] tracking-[0.18em] text-primary/80 uppercase">
                      {t("book.requested")}
                    </p>
                    <ul className="mt-1 space-y-1 text-sm text-muted-foreground">
                      {requests.map((r) => (
                        <li key={r.name}>{r.name}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {mode && (
                  <button
                    onClick={() => {
                      setMode("");
                      setPkg("");
                    }}
                    className="mt-6 text-xs text-primary hover:underline"
                  >
                    {t("book.changeMenuType")}
                  </button>
                )}
              </aside>
            </div>
          )}

          {step === 3 && (
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {ADDITIONAL_SERVICES.map((a) => (
                <label
                  key={a}
                  className={`flex cursor-pointer items-center gap-3 rounded-2xl border px-5 py-4 text-sm ${addons.includes(a)
                    ? "border-primary text-primary"
                    : "border-primary/25 text-muted-foreground"
                    }`}
                >
                  <input
                    type="checkbox"
                    checked={addons.includes(a)}
                    onChange={() => toggle(addons, setAddons, a)}
                    className="size-4 accent-[oklch(0.75_0.13_82)]"
                  />
                  {t(`bookServices.${a}`)}
                </label>
              ))}
            </div>
          )}

          {step === 1 && (
            <div>
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  placeholder={`${t("book.fullName")} *`}
                  required
                  className={field}
                  value={customer.name}
                  onChange={(e) => setCustomer({ ...customer, name: e.target.value })}
                />
                <input
                  placeholder={`${t("book.phoneNumber")} *`}
                  required
                  className={field}
                  value={customer.phone}
                  onChange={(e) => setCustomer({ ...customer, phone: e.target.value })}
                />

                {showMoreDetails && (
                  <>
                    <input
                      placeholder={`${t("book.whatsappNumber")} (optional)`}
                      className={field}
                      value={customer.whatsapp}
                      onChange={(e) => setCustomer({ ...customer, whatsapp: e.target.value })}
                    />
                    <input
                      placeholder={`${t("book.emailAddress")} (optional)`}
                      type="email"
                      className={field}
                      value={customer.email}
                      onChange={(e) => setCustomer({ ...customer, email: e.target.value })}
                    />
                    <input
                      placeholder={t("book.address1")}
                      className={field}
                      value={customer.address1}
                      onChange={(e) => setCustomer({ ...customer, address1: e.target.value })}
                    />
                    <input
                      placeholder={t("book.address2")}
                      className={field}
                      value={customer.address2}
                      onChange={(e) => setCustomer({ ...customer, address2: e.target.value })}
                    />
                    <input
                      placeholder={t("book.villageCity")}
                      className={field}
                      value={customer.city}
                      onChange={(e) => setCustomer({ ...customer, city: e.target.value })}
                    />
                    <input
                      placeholder={t("book.district")}
                      className={field}
                      value={customer.district}
                      onChange={(e) => setCustomer({ ...customer, district: e.target.value })}
                    />
                    <input
                      placeholder={t("book.state")}
                      className={field}
                      value={customer.state}
                      onChange={(e) => setCustomer({ ...customer, state: e.target.value })}
                    />
                    <input
                      placeholder={t("book.pincode")}
                      className={field}
                      value={customer.pincode}
                      onChange={(e) => setCustomer({ ...customer, pincode: e.target.value })}
                    />
                    <select
                      className={field}
                      value={customer.contactTime}
                      onChange={(e) => setCustomer({ ...customer, contactTime: e.target.value })}
                    >
                      <option>{t("book.morning")}</option>
                      <option>{t("book.afternoon")}</option>
                      <option>{t("book.evening")}</option>
                    </select>
                    <textarea
                      rows={3}
                      placeholder={t("book.specialInstructions")}
                      className={`${field} sm:col-span-2`}
                      value={customer.instructions}
                      onChange={(e) => setCustomer({ ...customer, instructions: e.target.value })}
                    />
                  </>
                )}
              </div>

              {!showMoreDetails && (
                <div className="mt-6 text-center">
                  <button
                    onClick={() => setShowMoreDetails(true)}
                    className="inline-flex items-center gap-1.5 text-[12px] tracking-wide text-primary hover:underline"
                  >
                    <Plus className="size-3.5" /> {t("book.addMoreDetails")}
                  </button>
                </div>
              )}
            </div>
          )}

          {step === 4 && (
            <Accordion type="multiple" defaultValue={["event", "menu"]}>
              {[
                {
                  id: "customer",
                  title: t("book.customer"),
                  body: `${customer.name || "—"} • ${customer.phone || "—"} • ${customer.city || "—"}`,
                },
                { id: "event", title: t("book.event"), body: `${eventType || "—"}` },
                {
                  id: "menu",
                  title: t("book.menu"),
                  body: `${pkg ? pkg + " " + t("book.pkg") + " — " : ""}${selectedDishes.map((d) => l(d, "name", lang)).join(", ") || t("book.noDishesSelected")}`,
                },
                {
                  id: "addons",
                  title: t("book.addons"),
                  body: addons.map((a) => t(`bookServices.${a}`)).join(", ") || t("book.none"),
                },
                {
                  id: "files",
                  title: t("book.files"),
                  body: files.map((f) => f.name).join(", ") || t("book.none"),
                },
                {
                  id: "requests",
                  title: t("book.requests"),
                  body: requests.length ? requests.map((r) => r.name).join(", ") : t("book.none"),
                },
              ].map((s) => (
                <AccordionItem key={s.id} value={s.id} className="border-primary/25">
                  <AccordionTrigger className="font-display text-lg text-cream">
                    {s.title}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground">
                    {s.body}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          )}

          <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
            <button
              onClick={() => setStep(Math.max(0, step - 1))}
              disabled={step === 0}
              className="inline-flex items-center gap-2 rounded-full border border-primary/40 px-6 py-3 text-[11px] tracking-[0.14em] text-primary uppercase disabled:opacity-40"
            >
              <ArrowLeft className="size-4" /> {t("book.back")}
            </button>
            {step < STEPS.length - 1 ? (
              <button
                onClick={() => {
                  if (!canNext) return;
                  if (step === 1 && !leadCaptured) {
                    setLeadCaptured(true);
                    const leadFormData = new FormData();
                    leadFormData.append("access_key", WEB3FORMS_KEY);
                    leadFormData.append("subject", `New Lead Captured: ${customer.name} - ${eventType}`);
                    leadFormData.append("name", customer.name);
                    leadFormData.append("phone", customer.phone);
                    leadFormData.append("email", customer.email || "Not provided");
                    leadFormData.append("eventType", eventType);
                    leadFormData.append("status", "Lead Captured - Menu Not Yet Finished");

                    fetch("https://api.web3forms.com/submit", {
                      method: "POST",
                      body: leadFormData,
                    }).catch((error) => {
                      console.error("Failed to capture lead via email:", error);
                      // Reset so we can try again if needed, though they already moved to next step
                      setLeadCaptured(false);
                    });
                  }
                  setStep(step + 1);
                }}
                disabled={!canNext}
                className="btn-gold inline-flex items-center gap-2 rounded-full px-8 py-3 text-[11px] tracking-[0.14em] uppercase disabled:opacity-50"
              >
                {step === 1 ? t("book.nextSubmit") : t("book.continue")}{" "}
                <ArrowRight className="size-4" />
              </button>
            ) : (
              <button
                onClick={submit}
                className="btn-gold inline-flex items-center gap-2 rounded-full px-8 py-3 text-[11px] tracking-[0.14em] uppercase"
              >
                {t("book.submitRequest")} <Check className="size-4" />
              </button>
            )}
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-muted-foreground">
          {t("book.preferToTalk")}{" "}
          <Link to="/contact" className="text-primary hover:underline">
            {t("book.contactTeam")}
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
