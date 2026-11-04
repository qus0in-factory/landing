import { site } from "@/config";
import { Button } from "./ui/button";
import { BrandIcon } from "./brand-icon";

export function SocialLinks() {
  return (
    <nav aria-label="Social profiles" className="flex items-center gap-2">
      {site.socials.map(({ label, href, icon }) => (
        <Button key={label} asChild variant="ghost" size="icon">
          <a href={href} aria-label={label} target="_blank" rel="noopener noreferrer">
            <BrandIcon name={icon} />
          </a>
        </Button>
      ))}
    </nav>
  );
}
