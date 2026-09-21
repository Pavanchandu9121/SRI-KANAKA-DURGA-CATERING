import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { type ReactNode } from "react";

import appCss from "../styles.css?url";
import { BrandIntro } from "../components/layout/BrandIntro";
import { SiteHeader } from "../components/layout/SiteHeader";
import { SiteFooter } from "../components/layout/SiteFooter";
import { LanguageProvider } from "../context/LanguageContext";
import { useLanguage } from "../hooks/use-language";
import { GlobalLoader } from "../components/ui/global-loader";

function NotFoundInner() {
  const { t } = useLanguage();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">{t("error.notFoundCode")}</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">{t("error.notFoundTitle")}</h2>
        <p className="mt-2 text-sm text-muted-foreground">{t("error.notFoundDesc")}</p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {t("error.goHome")}
          </Link>
        </div>
      </div>
    </div>
  );
}

function NotFoundComponent() {
  return (
    <LanguageProvider>
      <NotFoundInner />
    </LanguageProvider>
  );
}

function ErrorInner({ reset }: { reset: () => void }) {
  const { t } = useLanguage();
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          {t("error.errorTitle")}
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">{t("error.errorDesc")}</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {t("error.tryAgain")}
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            {t("error.goHome")}
          </a>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  return (
    <LanguageProvider>
      <ErrorInner reset={reset} />
    </LanguageProvider>
  );
}

const JSON_LD = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FoodEstablishment",
  name: "Sri Kanaka Durga Caterings",
  url: "https://srikanakadurgacaterings.in",
  logo: "https://srikanakadurgacaterings.in/logo.png",
  image: "https://srikanakadurgacaterings.in/og-image.png",
  description:
    "Premium multi-cuisine catering across Andhra Pradesh for weddings, receptions, corporate events and temple functions.",
  telephone: "+919247364197",
  email: "srikanakadurgacaterings112@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Beside Sai Temple, Main Road",
    addressLocality: "Gollapudi",
    addressRegion: "Andhra Pradesh",
    postalCode: "521225",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 16.5486,
    longitude: 80.5821,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "08:00",
      closes: "21:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Sunday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  servesCuisine: ["Indian", "Andhra", "Hyderabadi", "North Indian", "Chinese"],
  priceRange: "₹₹",
  currenciesAccepted: "INR",
  paymentAccepted: "Cash, UPI, Bank Transfer",
  areaServed: {
    "@type": "State",
    name: "Andhra Pradesh",
  },
  sameAs: [
    "https://www.instagram.com/srikanakadurgacaterings",
  ],
});

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Sri Kanaka Durga Caterings — Premium Multi-Cuisine Catering" },
      {
        name: "description",
        content:
          "Premium multi-cuisine catering across Andhra Pradesh for weddings, receptions, corporate events and temple functions.",
      },
      { name: "author", content: "Sri Kanaka Durga Caterings" },
      { property: "og:title", content: "Sri Kanaka Durga Caterings" },
      {
        property: "og:description",
        content:
          "Premium multi-cuisine catering across Andhra Pradesh — weddings, receptions, corporate events and temple functions.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Sri Kanaka Durga Caterings" },
      { property: "og:url", content: "https://srikanakadurgacaterings.in" },
      { property: "og:image", content: "https://srikanakadurgacaterings.in/og-image.png" },
      { property: "og:image:width", content: "1024" },
      { property: "og:image:height", content: "1024" },
      { property: "og:image:alt", content: "Sri Kanaka Durga Caterings — Premium Multi-Cuisine Catering" },
      { property: "og:locale", content: "en_IN" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Sri Kanaka Durga Caterings" },
      { name: "twitter:description", content: "Premium multi-cuisine catering across Andhra Pradesh — weddings, receptions, corporate events and temple functions." },
      { name: "twitter:image", content: "https://srikanakadurgacaterings.in/og-image.png" },
      { name: "geo.region", content: "IN-AP" },
      { name: "geo.placename", content: "Gollapudi, Andhra Pradesh" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Jost:wght@300;400;500;600&display=swap",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "canonical", href: "https://srikanakadurgacaterings.in" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
        {/* JSON-LD structured data for Google rich results */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON_LD }}
        />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  // Home only: the intro is the landing moment, not a gate on every page.
  const isHome = useRouterState({ select: (s) => s.location.pathname === "/" });
  const isLoading = useRouterState({ select: (s) => s.status === 'pending' || s.isLoading });

  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        {/*
          Mounted here, outside <main>, on purpose: SectionStack wraps each
          landing section in a `transform-gpu` element, and a transformed
          ancestor becomes the containing block for `position: fixed` — the
          overlay would be trapped inside a section instead of covering the
          viewport.
        */}
        {isHome && <BrandIntro />}
        {isLoading && <GlobalLoader />}
        <div className="flex min-h-screen flex-col bg-forest-deep">
          <SiteHeader />
          <main className="flex-1">
            {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
            <Outlet />
          </main>
          <SiteFooter />
        </div>
      </LanguageProvider>
    </QueryClientProvider>
  );
}
