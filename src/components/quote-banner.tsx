import quote from "@/quote-banner.json";

export function QuoteBanner() {
  return (
    <picture className="ad-placeholder">
      <source media="(min-width: 768px)" srcSet={quote.desktop} />
      <img src={quote.mobile} alt={quote.text} width="320" height="100" />
    </picture>
  );
}
