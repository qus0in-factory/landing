import type { CSSProperties } from "react";
import { ads } from "@/ads-config";
import { useAdSize } from "@/hooks/use-ad-size";
import { AdUnit } from "./ad-unit";
import { QuoteBanner } from "./quote-banner";

export function AdSlot({ name }: { name: keyof typeof ads.slots }) {
  const size = useAdSize();
  const slot = ads.slots[name];
  const unit = slot[size];
  const live = ads.enabled && !!unit.unit;
  if (!slot.enabled || (!live && !ads.showPlaceholder)) return null;
  const style = {
    "--ad-mobile": `${slot.mobile.h}px`,
    "--ad-desktop": `${slot.desktop.h}px`,
  } as CSSProperties;
  return (
    <aside className="ad-slot" style={style} aria-label="광고" role="complementary">
      <span className="ad-label">광고</span>
      {live ? <AdUnit key={size} unit={unit} /> :
        <QuoteBanner />}
    </aside>
  );
}
