import type { Plugin } from "vite";
import { analytics } from "../src/analytics-config.ts";

export function googleAnalytics(): Plugin {
  const id = analytics.measurementId;
  return {
    name: "google-analytics",
    transformIndexHtml: () => [
      {
        tag: "script",
        attrs: { async: true, src: `https://www.googletagmanager.com/gtag/js?id=${id}` },
        injectTo: "head",
      },
      {
        tag: "script",
        children: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', ${JSON.stringify(id)});`,
        injectTo: "head",
      },
    ],
  };
}
