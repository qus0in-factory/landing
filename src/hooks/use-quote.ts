import { useEffect, useState } from "react";
import data from "@/quote-banner.json";

export function useQuote() {
  const [index, setIndex] = useState(() => Math.floor(Math.random() * data.quotes.length));
  useEffect(() => {
    const motion = matchMedia("(prefers-reduced-motion: reduce)");
    let timer: ReturnType<typeof setInterval> | undefined;
    const update = () => {
      clearInterval(timer);
      if (!motion.matches) timer = setInterval(() => {
        setIndex(value => (value + 1) % data.quotes.length);
      }, data.intervalMs);
    };
    update();
    motion.addEventListener("change", update);
    return () => {
      clearInterval(timer);
      motion.removeEventListener("change", update);
    };
  }, []);
  return index;
}
