import type { SiteCard as Site } from "@/sites-config";

export function SiteCard({ site }: { site: Site }) {
  return (
    <li>
      <a className="site-card" href={site.url} lang="ko">
        <img {...site.image} loading="eager" fetchPriority="high" decoding="async" />
        <div className="site-details">
          <h2>{site.title}</h2>
          <p>{site.description}</p>
          {site.tags?.length ? <ul aria-label="주제">
            {site.tags.map(tag => <li key={tag}>{tag}</li>)}
          </ul> : null}
        </div>
      </a>
    </li>
  );
}
