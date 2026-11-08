import { useLayoutEffect, useRef } from "react";

export function useQuoteFit(index: number) {
  const ref = useRef<HTMLSpanElement>(null);
  useLayoutEffect(() => {
    const element = ref.current;
    if (!element) return;
    const fit = () => {
      element.style.removeProperty("font-size");
      let size = parseFloat(getComputedStyle(element).fontSize);
      while (size > 10 && (element.scrollHeight > element.clientHeight + 1 ||
        element.scrollWidth > element.clientWidth + 1)) {
        element.style.fontSize = `${--size}px`;
      }
    };
    const observer = new ResizeObserver(fit);
    observer.observe(element.parentElement!);
    let active = true;
    document.fonts.ready.then(() => { if (active) fit(); });
    fit();
    return () => { active = false; observer.disconnect(); };
  }, [index]);
  return ref;
}
