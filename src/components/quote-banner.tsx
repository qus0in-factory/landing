import type { CSSProperties } from "react";
import data from "@/quote-banner.json";
import { useQuote } from "@/hooks/use-quote";
import { useQuoteFit } from "@/hooks/use-quote-fit";

export function QuoteBanner() {
  const index = useQuote();
  const quote = data.quotes[index];
  const ref = useQuoteFit(index);
  const style = { "--quote-interval": `${data.intervalMs}ms` } as CSSProperties;
  return (
    <a className="quote-banner" href={data.link} target="_blank"
      rel="noopener noreferrer" lang="de" style={style}>
      <span className="quote-content" key={index}>
        <span className="quote-text" ref={ref}>{quote.text}</span>
        <small>{quote.source}</small>
      </span>
    </a>
  );
}
