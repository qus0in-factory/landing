import { useEffect } from "react";
import { ads } from "@/ads-config";

declare global {
  interface Window { adsbygoogle?: object[] }
}

export function AdUnit({ unit }: { unit: { unit: string; w: number; h: number } }) {
  useEffect(() => {
    if (ads.provider === "adsense") (window.adsbygoogle ??= []).push({});
    window.dispatchEvent(new Event("ads-ready"));
  }, []);
  return ads.provider === "adfit" ? (
    <ins className="kakao_ad_area" style={{ display: "none" }}
      data-ad-unit={unit.unit} data-ad-width={unit.w} data-ad-height={unit.h} />
  ) : (
    <ins className="adsbygoogle" style={{ display: "block", width: unit.w, height: unit.h }}
      data-ad-client={ads.adsenseClient} data-ad-slot={unit.unit}
      data-ad-format="horizontal" data-full-width-responsive="false" />
  );
}
