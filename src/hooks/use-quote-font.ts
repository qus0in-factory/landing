import { useEffect, useState } from "react";

export function useQuoteFont() {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    let active = true;
    const show = () => { if (active) setReady(true); };
    const timer = setTimeout(show, 1500);
    document.fonts.load("1em Caveat").then(show, () => {});
    return () => { active = false; clearTimeout(timer); };
  }, []);
  return ready;
}
