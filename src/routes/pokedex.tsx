import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { SiteNav } from "@/components/site-nav";
import { TypeBadge } from "@/components/type-badge";
import { CATEGORY_LABELS, POKEDEX, spriteUrl, type PokemonCategory } from "@/lib/pokemon";

export const Route = createFileRoute("/pokedex")({
  head: () => ({
    meta: [
      { title: "Pokédex — PokéVerso" },
      {
        name: "description",
        content: "Navegue pelo catálogo de Pokémon clássicos e raros, com tipos, estatísticas e descrições.",
      },
      { property: "og:title", content: "Pokédex — PokéVerso" },
      {
        property: "og:description",
        content: "Navegue pelo catálogo de Pokémon clássicos e raros, com tipos, estatísticas e descrições.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Pokedex,
});

function StatBar({ label, value }: { label: string; value: number }) {
  const max = 160;
  return (
    <div className="flex items-center gap-2 text-xs">
      <span className="w-10 text-muted-foreground">{label}</span>
      <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-secondary">
        <div
          className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
          style={{ width: `${Math.min(100, (value / max) * 100)}%` }}
        />
      </div>
      <span className="w-7 text-right font-medium">{value}</span>
    </div>
  );
}

type Filter = "todos" | PokemonCategory;

const FILTERS: { value: Filter; label: string }[] = [
  { value: "todos", label: "Todos" },
  { value: "classico", label: CATEGORY_LABELS.classico },
  { value: "raro", label: CATEGORY_LABELS.raro },
];

function Pokedex() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<Filter>("todos");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return POKEDEX.filter((p) => {
      if (filter !== "todos" && p.category !== filter) return false;
      if (q && !p.name.toLowerCase().includes(q)) return false;
      return true;
    });
  }, [query, filter]);

  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <main className="mx-auto max-w-6xl px-4 py-12">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-glow">
            Poké<span className="text-primary">dex</span>
          </h1>
          <p className="mt-3 text-muted-foreground">
            {POKEDEX.length} Pokémon no catálogo — pesquise pelo nome ou filtre por categoria.
          </p>
          <div className="relative mx-auto mt-6 max-w-md">
            <Search className="absolute top-1/2 left-4 size-4 -translate-y-1/2 text-muted-foreground" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar Pokémon..."
              className="w-full rounded-full border border-border bg-card py-3 pr-4 pl-11 text-sm outline-none placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/30"
            />
          </div>
          <div className="mt-4 flex justify-center gap-2">
            {FILTERS.map((f) => (
              <button
                key={f.value}
                onClick={() => setFilter(f.value)}
                className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
                  filter === f.value
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-card text-muted-foreground hover:text-foreground"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {filtered.length === 0 ? (
          <p className="py-20 text-center text-muted-foreground">
            Nenhum Pokémon encontrado para “{query}”.
          </p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((p) => (
              <article
                key={p.id}
                className="group rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-1 hover:border-primary/60 hover:card-glow"
              >
                <div className="flex items-start justify-between">
                  <span className="text-xs font-bold text-muted-foreground">
                    #{String(p.id).padStart(3, "0")}
                  </span>
                  <div className="flex gap-1.5">
                    {p.types.map((t) => (
                      <TypeBadge key={t} type={t} />
                    ))}
                  </div>
                </div>
                <img
                  src={spriteUrl(p.id)}
                  alt={p.name}
                  loading="lazy"
                  className="mx-auto my-3 size-32 transition-transform group-hover:scale-110"
                />
                <h2 className="text-center text-lg font-bold">{p.name}</h2>
                <p
                  className={`mt-1 text-center text-xs font-semibold tracking-wide uppercase ${
                    p.category === "raro" ? "text-accent" : "text-muted-foreground"
                  }`}
                >
                  {CATEGORY_LABELS[p.category]}
                </p>
                <p className="mt-2 line-clamp-3 text-center text-xs leading-relaxed text-muted-foreground">
                  {p.description}
                </p>
                <div className="mt-4 space-y-1.5">
                  <StatBar label="HP" value={p.hp} />
                  <StatBar label="ATQ" value={p.attack} />
                  <StatBar label="DEF" value={p.defense} />
                  <StatBar label="VEL" value={p.speed} />
                </div>
              </article>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
