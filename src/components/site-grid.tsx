import type { SiteCard as Site } from "@/sites-config";
import { SiteCard } from "./site-card";

export function SiteGrid({ sites }: { sites: Site[] }) {
  return (
    <ul role="list" className="site-grid">
      {sites.map(site => <SiteCard key={site.id} site={site} />)}
    </ul>
  );
}
