import { useTypewriter } from "@/hooks/use-typewriter";
import { site } from "@/config";

export function Intro({ paused }: { paused: boolean }) {
  const text = useTypewriter(site.greeting, paused);
  return (
    <h1 className="greeting" aria-label={site.greeting}>
      <span className="greeting-space" aria-hidden="true">{site.greeting}</span>
      <span className="greeting-live" aria-hidden="true">
        {text}<span className={paused ? "cursor paused" : "cursor"} />
      </span>
    </h1>
  );
}
