import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check, Plus, Trash2, Upload } from "lucide-react";
import { useState } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeading } from "@/components/site/ui-bits";
import {
  ADDITIONAL_SERVICES,
  DISHES,
  EVENT_TYPES,
  MENU_CATEGORIES,
  PACKAGES,
} from "@/data/site";

export const Route = createFileRoute("/book")({
  validateSearch: (search: Record<string, unknown>) => ({
    event: typeof search.event === "string" ? search.event : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Book Catering — Request a Custom Quotation" },
      {
        name: "description",
        content:
          "Book catering in a few steps: choose your event, share venue and guest details, build a package or custom menu, add services and submit your request.",
      },
      { property: "og:title", content: "Book Your Catering" },
      { property: "og:description", content: "Build your menu and request a quotation in minutes." },
    ],
  }),
  component: BookPage,
});

const STEPS = ["Event", "Details", "Menu", "Services", "Your Details", "Review"];

const field =
  "w-full rounded-2xl border border-primary/25 bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-primary focus:outline-none";

function BookPage() {
  const navigate = useNavigate();
  const { event: presetEvent } = Route.useSearch();

  const [step, setStep] = useState(0);
  const [eventType, setEventType] = useState(presetEvent ?? "");
  const [details, setDetails] = useState({
    date: "",
    time: "",
    venue: "",
    address: "",
    district: "",
    state: "Andhra Pradesh",
    maps: "",
    guests: "",
    setting: "Indoor",
  });
  const [mode, setMode] = useState<"package" | "custom" | "">("");
  const [pkg, setPkg] = useState("");
  const [selected, setSelected] = useState<string[]>([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [requests, setRequests] = useState<{ name: string; category: string; notes: string }[]>([]);
  const [reqForm, setReqForm] = useState({ name: "", category: MENU_CATEGORIES[0], notes: "" });
  const [files, setFiles] = useState<string[]>([]);
  const [addons, setAddons] = useState<string[]>([]);
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

  const toggle = (list: string[], set: (v: string[]) => void, value: string) =>
    set(list.includes(value) ? list.filter((v) => v !== value) : [...list, value]);

  const applyPackage = (name: string) => {
    setPkg(name);
    setSelected(DISHES.filter((d) => d.packages.includes(name)).map((d) => d.id));
  };

  const duplicate = DISHES.find(
    (d) => reqForm.name.trim().length > 2 && d.name.toLowerCase().includes(reqForm.name.trim().toLowerCase()),
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

  const submit = () => {
    const bookingId = `SKD-${Date.now().toString().slice(-6)}`;
    const summary = {
      bookingId,
      eventType,
      details,
      mode,
      pkg,
      dishes: selectedDishes.map((d) => ({ name: d.name, category: d.category })),
      requests,
      files,
      addons,
      customer,
    };
    if (typeof window !== "undefined") {
      window.sessionStorage.setItem("skd-booking", JSON.stringify(summary));
    }
    navigate({ to: "/booking-confirmed" });
  };

  const canNext =
    (step === 0 && !!eventType) ||
    (step === 1 && !!details.date && !!details.guests) ||
    (step === 2 && selected.length + requests.length > 0) ||
    step === 3 ||
    (step === 4 && !!customer.name && !!customer.phone) ||
    step === 5;

  return (
    <div className="px-6 py-16">
      <div className="mx-auto max-w-[1200px]">
        <SectionHeading eyebrow="Booking" title="Plan Your Catering" />

        <ol className="mt-10 flex flex-wrap justify-center gap-3">
          {STEPS.map((s, i) => (
            <li
              key={s}
              className={`rounded-full border px-4 py-2 text-[11px] tracking-[0.14em] uppercase ${
                i === step
                  ? "border-primary bg-primary/15 text-primary"
                  : i < step
                    ? "border-primary/40 text-primary/70"
                    : "border-primary/20 text-muted-foreground"
              }`}
            >
              {i + 1}. {s}
            </li>
          ))}
        </ol>

        <div className="mt-10 rounded-[2rem] border border-primary/25 bg-card p-8">
          {step === 0 && (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {EVENT_TYPES.map((e) => (
                <button
                  key={e}
                  onClick={() => setEventType(e)}
                  className={`rounded-2xl border px-5 py-6 font-display text-xl ${
                    eventType === e
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-primary/25 text-cream hover:border-primary/60"
                  }`}
                >
                  {e}
                </button>
              ))}
            </div>
          )}

          {step === 1 && (
            <div className="grid gap-4 sm:grid-cols-2">
              <input type="date" className={field} value={details.date} onChange={(e) => setDetails({ ...details, date: e.target.value })} />
              <input type="time" className={field} value={details.time} onChange={(e) => setDetails({ ...details, time: e.target.value })} />
              <input placeholder="Venue Name" className={field} value={details.venue} onChange={(e) => setDetails({ ...details, venue: e.target.value })} />
              <input placeholder="Venue Address" className={field} value={details.address} onChange={(e) => setDetails({ ...details, address: e.target.value })} />
              <input placeholder="District" className={field} value={details.district} onChange={(e) => setDetails({ ...details, district: e.target.value })} />
              <input placeholder="State" className={field} value={details.state} onChange={(e) => setDetails({ ...details, state: e.target.value })} />
              <input placeholder="Google Maps Location (optional)" className={field} value={details.maps} onChange={(e) => setDetails({ ...details, maps: e.target.value })} />
              <input placeholder="Expected Guests" type="number" className={field} value={details.guests} onChange={(e) => setDetails({ ...details, guests: e.target.value })} />
              <select className={field} value={details.setting} onChange={(e) => setDetails({ ...details, setting: e.target.value })}>
                <option>Indoor</option>
                <option>Outdoor</option>
              </select>
            </div>
          )}

          {step === 2 && (
            <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
              <div>
                {!mode && (
                  <div className="grid gap-5 sm:grid-cols-2">
                    <button onClick={() => setMode("package")} className="rounded-3xl border border-primary/30 p-8 text-left hover:border-primary">
                      <h3 className="font-display text-2xl text-cream">Choose a Package</h3>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Start from a ready menu and modify every dish freely.
                      </p>
                    </button>
                    <button onClick={() => setMode("custom")} className="rounded-3xl border border-primary/30 p-8 text-left hover:border-primary">
                      <h3 className="font-display text-2xl text-cream">Build a Custom Menu</h3>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Pick dishes category by category, just the way you like.
                      </p>
                    </button>
                  </div>
                )}

                {mode === "package" && !pkg && (
                  <div className="grid gap-4 sm:grid-cols-2">
                    {PACKAGES.map((p) => (
                      <button key={p.name} onClick={() => applyPackage(p.name)} className="rounded-2xl border border-primary/25 p-6 text-left hover:border-primary">
                        <h3 className="font-display text-xl text-cream">{p.name}</h3>
                        <p className="mt-1 text-sm text-muted-foreground">{p.note}</p>
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
                      <select className={`${field} max-w-xs`} value={category} onChange={(e) => setCategory(e.target.value)}>
                        {["All", ...MENU_CATEGORIES].map((c) => (
                          <option key={c}>{c}</option>
                        ))}
                      </select>
                    </div>
                    <div className="mt-6 grid gap-3 sm:grid-cols-2">
                      {visible.map((d) => {
                        const on = selected.includes(d.id);
                        return (
                          <div key={d.id} className="flex items-start justify-between gap-3 rounded-2xl border border-primary/20 p-4">
                            <div>
                              <p className="font-display text-lg text-cream">{d.name}</p>
                              <p className="text-xs text-muted-foreground">{d.desc}</p>
                              <p className="mt-1 text-[10px] tracking-[0.14em] text-primary/80 uppercase">{d.category}</p>
                            </div>
                            <button
                              onClick={() => toggle(selected, setSelected, d.id)}
                              aria-label={on ? `Remove ${d.name}` : `Add ${d.name}`}
                              className={`grid size-9 shrink-0 place-items-center rounded-full border ${
                                on ? "border-primary bg-primary/15 text-primary" : "border-primary/40 text-primary"
                              }`}
                            >
                              {on ? <Check className="size-4" /> : <Plus className="size-4" />}
                            </button>
                          </div>
                        );
                      })}
                    </div>

                    <div className="mt-8 rounded-2xl border border-primary/25 p-6">
                      <h3 className="font-display text-xl text-cream">Can't find a dish?</h3>
                      <div className="mt-4 grid gap-3 sm:grid-cols-3">
                        <input placeholder="Dish Name" className={field} value={reqForm.name} onChange={(e) => setReqForm({ ...reqForm, name: e.target.value })} />
                        <select className={field} value={reqForm.category} onChange={(e) => setReqForm({ ...reqForm, category: e.target.value })}>
                          {MENU_CATEGORIES.map((c) => (
                            <option key={c}>{c}</option>
                          ))}
                        </select>
                        <input placeholder="Notes" className={field} value={reqForm.notes} onChange={(e) => setReqForm({ ...reqForm, notes: e.target.value })} />
                      </div>
                      {duplicate ? (
                        <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-primary">
                          Already available: {duplicate.name}
                          <button
                            onClick={() => {
                              if (!selected.includes(duplicate.id)) setSelected([...selected, duplicate.id]);
                              setReqForm({ name: "", category: MENU_CATEGORIES[0], notes: "" });
                            }}
                            className="btn-gold rounded-full px-4 py-2 text-[11px] tracking-[0.12em] uppercase"
                          >
                            Add Existing Dish
                          </button>
                        </div>
                      ) : (
                        <button
                          onClick={() => {
                            if (!reqForm.name.trim()) return;
                            setRequests([...requests, reqForm]);
                            setReqForm({ name: "", category: MENU_CATEGORIES[0], notes: "" });
                          }}
                          className="btn-gold mt-4 rounded-full px-5 py-2.5 text-[11px] tracking-[0.12em] uppercase"
                        >
                          Add as Custom Request
                        </button>
                      )}
                    </div>

                    <div className="mt-6 rounded-2xl border border-dashed border-primary/40 p-6 text-center">
                      <Upload className="mx-auto size-6 text-primary" />
                      <p className="mt-2 text-sm text-muted-foreground">
                        Have an existing menu? Upload an image, PDF, Excel or Word file.
                      </p>
                      <input
                        type="file"
                        multiple
                        accept="image/*,.pdf,.doc,.docx,.xls,.xlsx"
                        onChange={(e) =>
                          setFiles([...files, ...Array.from(e.target.files ?? []).map((f) => f.name)])
                        }
                        className="mx-auto mt-4 block text-xs text-muted-foreground"
                      />
                      {files.length > 0 && (
                        <ul className="mt-3 text-xs text-primary">
                          {files.map((f) => (
                            <li key={f}>{f}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                )}
              </div>

              <aside className="h-fit rounded-3xl border border-primary/25 p-6">
                <h3 className="font-display text-xl text-cream">Your Menu</h3>
                {pkg && <p className="mt-1 text-xs text-primary uppercase">{pkg} package</p>}
                {grouped.length === 0 && requests.length === 0 && (
                  <p className="mt-3 text-sm text-muted-foreground">No dishes selected yet.</p>
                )}
                {grouped.map((g) => (
                  <div key={g.category} className="mt-4">
                    <p className="text-[10px] tracking-[0.18em] text-primary/80 uppercase">{g.category}</p>
                    <ul className="mt-1 space-y-1">
                      {g.items.map((d) => (
                        <li key={d.id} className="flex items-center justify-between gap-2 text-sm text-muted-foreground">
                          {d.name}
                          <button onClick={() => toggle(selected, setSelected, d.id)} aria-label={`Remove ${d.name}`}>
                            <Trash2 className="size-3.5 text-primary/70" />
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                {requests.length > 0 && (
                  <div className="mt-4">
                    <p className="text-[10px] tracking-[0.18em] text-primary/80 uppercase">Requested</p>
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
                    Change menu type
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
                  className={`flex cursor-pointer items-center gap-3 rounded-2xl border px-5 py-4 text-sm ${
                    addons.includes(a) ? "border-primary text-primary" : "border-primary/25 text-muted-foreground"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={addons.includes(a)}
                    onChange={() => toggle(addons, setAddons, a)}
                    className="size-4 accent-[oklch(0.75_0.13_82)]"
                  />
                  {a}
                </label>
              ))}
            </div>
          )}

          {step === 4 && (
            <div className="grid gap-4 sm:grid-cols-2">
              <input placeholder="Full Name" className={field} value={customer.name} onChange={(e) => setCustomer({ ...customer, name: e.target.value })} />
              <input placeholder="Phone Number" className={field} value={customer.phone} onChange={(e) => setCustomer({ ...customer, phone: e.target.value })} />
              <input placeholder="WhatsApp Number" className={field} value={customer.whatsapp} onChange={(e) => setCustomer({ ...customer, whatsapp: e.target.value })} />
              <input placeholder="Email" type="email" className={field} value={customer.email} onChange={(e) => setCustomer({ ...customer, email: e.target.value })} />
              <input placeholder="Address Line 1" className={field} value={customer.address1} onChange={(e) => setCustomer({ ...customer, address1: e.target.value })} />
              <input placeholder="Address Line 2" className={field} value={customer.address2} onChange={(e) => setCustomer({ ...customer, address2: e.target.value })} />
              <input placeholder="Village / City" className={field} value={customer.city} onChange={(e) => setCustomer({ ...customer, city: e.target.value })} />
              <input placeholder="District" className={field} value={customer.district} onChange={(e) => setCustomer({ ...customer, district: e.target.value })} />
              <input placeholder="State" className={field} value={customer.state} onChange={(e) => setCustomer({ ...customer, state: e.target.value })} />
              <input placeholder="Pincode" className={field} value={customer.pincode} onChange={(e) => setCustomer({ ...customer, pincode: e.target.value })} />
              <select className={field} value={customer.contactTime} onChange={(e) => setCustomer({ ...customer, contactTime: e.target.value })}>
                <option>Morning</option>
                <option>Afternoon</option>
                <option>Evening</option>
              </select>
              <textarea rows={3} placeholder="Special Instructions" className={`${field} sm:col-span-2`} value={customer.instructions} onChange={(e) => setCustomer({ ...customer, instructions: e.target.value })} />
            </div>
          )}

          {step === 5 && (
            <Accordion type="multiple" defaultValue={["customer", "event", "menu"]}>
              {[
                { id: "customer", title: "Customer", body: `${customer.name || "—"} • ${customer.phone || "—"} • ${customer.city || "—"}` },
                { id: "event", title: "Event", body: `${eventType || "—"} • ${details.date || "—"} ${details.time} • ${details.guests || "—"} guests • ${details.venue || "—"}, ${details.district}` },
                { id: "menu", title: "Menu", body: `${pkg ? pkg + " package — " : ""}${selectedDishes.map((d) => d.name).join(", ") || "No dishes selected"}` },
                { id: "addons", title: "Additional Services", body: addons.join(", ") || "None" },
                { id: "files", title: "Uploaded Files", body: files.join(", ") || "None" },
                { id: "requests", title: "Custom Requests", body: requests.map((r) => r.name).join(", ") || "None" },
              ].map((s) => (
                <AccordionItem key={s.id} value={s.id} className="border-primary/25">
                  <AccordionTrigger className="font-display text-lg text-cream">{s.title}</AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground">{s.body}</AccordionContent>
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
              <ArrowLeft className="size-4" /> Back
            </button>
            {step < STEPS.length - 1 ? (
              <button
                onClick={() => canNext && setStep(step + 1)}
                disabled={!canNext}
                className="btn-gold inline-flex items-center gap-2 rounded-full px-8 py-3 text-[11px] tracking-[0.14em] uppercase disabled:opacity-50"
              >
                Continue <ArrowRight className="size-4" />
              </button>
            ) : (
              <button
                onClick={submit}
                className="btn-gold inline-flex items-center gap-2 rounded-full px-8 py-3 text-[11px] tracking-[0.14em] uppercase"
              >
                Submit Request <Check className="size-4" />
              </button>
            )}
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-muted-foreground">
          Prefer to talk?{" "}
          <Link to="/contact" className="text-primary hover:underline">
            Contact our team
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
