import { ArrowUpRight } from "lucide-react";
import { site } from "@/config";
import { Button } from "./ui/button";

export function EchoLink() {
  return (
    <Button asChild className="echo-link group">
      <a href={site.echo}>
        <span className="echo-dot" aria-hidden="true" />
        <span>Echo</span>
        <ArrowUpRight size={16} aria-hidden="true"
          className="ml-6 text-neutral-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </a>
    </Button>
  );
}
