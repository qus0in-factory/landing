import { useEffect, useState } from "react";
import { timing } from "@/config";

export function useTypewriter(text: string, paused: boolean) {
  const [visible, setVisible] = useState(text.length);
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    let timer: ReturnType<typeof setTimeout>;
    let length = text.length;
    let deleting = true;
    const step = () => {
      if (paused || reduced.matches) return setVisible(text.length);
      length += deleting ? -1 : 1;
      setVisible(length);
      let delay = deleting ? timing.deleting : timing.typing;
      if (length === 0) { deleting = false; delay = timing.empty; }
      if (length === text.length) { deleting = true; delay = timing.hold; }
      timer = setTimeout(step, delay);
    };
    timer = setTimeout(step, timing.hold);
    return () => clearTimeout(timer);
  }, [text, paused]);
  return paused ? text : text.slice(0, visible);
}
