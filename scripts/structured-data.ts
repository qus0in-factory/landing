import type { Plugin } from "vite";
import { site } from "../src/config.ts";
import { sites } from "../src/sites-config.ts";

export function structuredData(): Plugin {
  return {
    name: "structured-data",
    transformIndexHtml: () => [{
      tag: "script",
      attrs: { type: "application/ld+json" },
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [{
        "@type": "Person",
        name: site.name,
        url: site.url,
        sameAs: site.socials.map(({ href }) => href),
      }, {
        "@type": "ItemList",
        itemListElement: sites.map((entry, index) => ({
          "@type": "ListItem", position: index + 1,
          item: { "@type": "WebSite", name: entry.title,
            url: entry.url, description: entry.description },
        })),
      }],
      }).replace(/</g, "\\u003c"),
      injectTo: "head",
    }],
  };
}
