import { Link } from "@tanstack/react-router";
import { Sparkles } from "lucide-react";

const LINKS = [
  { to: "/", label: "Início" },
  { to: "/pokedex", label: "PokéDX" },
  { to: "/memoria", label: "Jogo da Memória" },
  { to: "/quiz", label: "Quiz" },
] as const;

export function SiteNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2 font-bold tracking-tight">
          <span className="flex size-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <Sparkles className="size-4" />
          </span>
          <span className="text-lg">
            Poké<span className="text-primary">DX</span>
          </span>
        </Link>
        <div className="flex items-center gap-1 sm:gap-2">
          {LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeOptions={{ exact: link.to === "/" }}
              className="rounded-full px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "bg-secondary text-foreground" }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
