import type { Plugin } from "vite";
import { ads } from "../src/ads-config.ts";
import { adLoader } from "./ad-loader.ts";

export function advertising(): Plugin {
  return {
    name: "advertising",
    transformIndexHtml() {
      if (!ads.enabled) return [];
      const slots = Object.values(ads.slots).filter(slot => slot.enabled);
      if (slots.some(slot => !slot.mobile.unit || !slot.desktop.unit)) {
        this.warn("Missing ad unit: falling back to placeholder");
      }
      if (!slots.some(slot => slot.mobile.unit || slot.desktop.unit)) return [];
      const src = ads.provider === "adfit"
        ? "https://t1.daumcdn.net/kas/static/ba.min.js"
        : `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ads.adsenseClient}`;
      return [{ tag: "script", children: adLoader(src), injectTo: "head" }];
    },
  };
}
