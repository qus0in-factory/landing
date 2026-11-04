import { useState } from "react";
import { Pause, Play } from "lucide-react";
import { Intro } from "@/components/intro";
import { EchoLink } from "@/components/echo-link";
import { SocialLinks } from "@/components/social-links";
import { Button } from "@/components/ui/button";

export default function App() {
  const [paused, setPaused] = useState(false);
  return (
    <main>
      <section className="intro" aria-label="Introduction">
        <Intro paused={paused} />
        <EchoLink />
      </section>
      <footer>
        <SocialLinks />
        <Button variant="ghost" size="icon" onClick={() => setPaused(!paused)}
          aria-label={paused ? "Play animation" : "Pause animation"} aria-pressed={paused}>
          {paused ? <Play size={14} /> : <Pause size={14} />}
        </Button>
      </footer>
    </main>
  );
}
