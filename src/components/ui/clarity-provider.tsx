"use client";

import Clarity from "@microsoft/clarity";
import { useEffect } from "react";
import { CONSENT_EVENT, hasAnalyticsConsent } from "./cookie-consent";

const PROJECT_ID = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID;

export function ClarityProvider() {
  useEffect(() => {
    if (!PROJECT_ID) return;

    let started = false;
    const start = () => {
      if (started || !hasAnalyticsConsent()) return;
      started = true;
      Clarity.init(PROJECT_ID);
    };

    start();

    const onConsent = (event: Event) => {
      if ((event as CustomEvent).detail === "accepted") start();
    };
    window.addEventListener(CONSENT_EVENT, onConsent);
    return () => window.removeEventListener(CONSENT_EVENT, onConsent);
  }, []);

  return null;
}
