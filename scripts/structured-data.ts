import type { Plugin } from "vite";
import { site } from "../src/config.ts";

export function structuredData(): Plugin {
  return {
    name: "structured-data",
    transformIndexHtml: () => [{
      tag: "script",
      attrs: { type: "application/ld+json" },
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        name: site.name,
        url: site.url,
        sameAs: site.socials.map(({ href }) => href),
      }).replace(/</g, "\\u003c"),
      injectTo: "head",
    }],
  };
}
