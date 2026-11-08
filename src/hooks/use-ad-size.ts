import { useSyncExternalStore } from "react";

const query = matchMedia("(min-width: 768px)");
const subscribe = (notify: () => void) => {
  query.addEventListener("change", notify);
  return () => query.removeEventListener("change", notify);
};

export function useAdSize() {
  const snapshot = () => query.matches;
  return useSyncExternalStore(subscribe, snapshot, snapshot) ? "desktop" : "mobile";
}
