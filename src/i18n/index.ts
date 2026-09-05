import { en } from "./en.ts";
import { te } from "./te.ts";

export type Locale = "en" | "te";

const translations: Record<Locale, Record<string, unknown>> = { en, te };

/**
 * Look up a dotted key (e.g. "nav.home") in the active locale.
 * Falls back to English, then returns the raw key if nothing is found.
 */
export function getTranslation(locale: Locale, key: string): string {
  const keys = key.split(".");

  let result: unknown = translations[locale];
  for (const k of keys) {
    if (result && typeof result === "object" && k in (result as Record<string, unknown>)) {
      result = (result as Record<string, unknown>)[k];
    } else {
      result = undefined;
      break;
    }
  }
  if (typeof result === "string") return result;

  // Fallback to English
  let fallback: unknown = translations.en;
  for (const k of keys) {
    if (fallback && typeof fallback === "object" && k in (fallback as Record<string, unknown>)) {
      fallback = (fallback as Record<string, unknown>)[k];
    } else {
      return key;
    }
  }
  return typeof fallback === "string" ? fallback : key;
}

/**
 * Pick a localized field from a data object.
 * `l(dish, "name", "te")` → returns `dish.nameTe` when available, else `dish.name`.
 */
export function l<T, R = string>(item: T, field: string, lang: Locale): R {
  if (lang === "te") {
    const teValue = (item as Record<string, unknown>)[field + "Te"];
    if (teValue) return teValue as R;
  }
  return (item as Record<string, unknown>)[field] as R;
}
