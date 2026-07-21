"use client";

import { useLanguage } from "@/i18n/language-context";
import type { Locale } from "@/i18n/types";
import { cn } from "@/lib/utils";

const OPTIONS: { value: Locale; label: string }[] = [
  { value: "pt", label: "PT" },
  { value: "en", label: "EN" },
];

export function LanguageToggle({ className }: { className?: string }) {
  const { locale, setLocale } = useLanguage();

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border border-white/10 bg-white/5 p-0.5 text-xs font-medium",
        className,
      )}
    >
      {OPTIONS.map((option) => {
        const active = locale === option.value;
        return (
          <button
            key={option.value}
            type="button"
            onClick={() => setLocale(option.value)}
            aria-pressed={active}
            className={cn(
              "rounded-full px-2.5 py-1 transition-colors",
              active
                ? "bg-cyan-500/20 text-cyan-300"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
