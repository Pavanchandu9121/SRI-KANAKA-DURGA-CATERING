import { Utensils } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";

export function GlobalLoader() {
  const { lang } = useLanguage();

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-forest-deep/80 backdrop-blur-sm transition-opacity duration-300">
      <div className="flex flex-col items-center">
        <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-forest text-gold shadow-lg shadow-gold/20">
          <Utensils className="h-10 w-10 animate-bounce" />
          <svg
            className="absolute inset-0 h-full w-full animate-spin text-gold"
            viewBox="0 0 100 100"
          >
            <circle
              className="opacity-25"
              cx="50"
              cy="50"
              r="45"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M50 5 a45 45 0 0 1 45 45 h-4 a41 41 0 0 0 -41 -41 z"
            />
          </svg>
        </div>
        <p className="mt-4 animate-pulse text-sm font-medium uppercase tracking-widest text-gold">
          {lang === "te" ? "లోడ్ అవుతోంది..." : "Loading..."}
        </p>
      </div>
    </div>
  );
}
