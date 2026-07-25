"use client";

import { getCookie, setCookie } from "cookies-next";
import { useEffect, useState } from "react";
import { useLanguage } from "@/i18n/language-context";
import { cn } from "@/lib/utils";

const CONSENT_COOKIE = "delta-consent";
export const CONSENT_EVENT = "delta-consent-change";
type ConsentValue = "accepted" | "rejected";

export function hasAnalyticsConsent(): boolean {
  return getCookie(CONSENT_COOKIE) === "accepted";
}

export function CookieConsent() {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const current = getCookie(CONSENT_COOKIE);
    if (current !== "accepted" && current !== "rejected") setVisible(true);
  }, []);

  const decide = (value: ConsentValue) => {
    setCookie(CONSENT_COOKIE, value, {
      maxAge: 60 * 60 * 24 * 365,
      sameSite: "lax",
      secure: window.location.protocol === "https:",
    });
    setVisible(false);
    window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: value }));
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-30 flex justify-center p-3 sm:p-4">
      <div className="flex w-full max-w-2xl flex-col items-center gap-3 rounded-xl border border-[#2a2a35] bg-[#0a0a0f]/95 p-4 text-sm text-[#c0c0c8] shadow-lg backdrop-blur-md sm:flex-row sm:justify-between">
        <p className="text-center sm:text-left">{t.consent.message}</p>
        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            onClick={() => decide("rejected")}
            className={cn(
              "rounded-lg border border-[#2a2a35] px-3 py-1.5 text-[#999] transition-colors hover:text-white",
            )}
          >
            {t.consent.reject}
          </button>
          <button
            type="button"
            onClick={() => decide("accepted")}
            className="rounded-lg bg-[#00d9ff]/15 px-3 py-1.5 font-medium text-[#00d9ff] transition-colors hover:bg-[#00d9ff]/25"
          >
            {t.consent.accept}
          </button>
        </div>
      </div>
    </div>
  );
}
