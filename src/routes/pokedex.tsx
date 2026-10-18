import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { Search, X } from "lucide-react";
import { SiteNav } from "@/components/site-nav";
import { TypeBadge } from "@/components/type-badge";
import {
  CATEGORY_LABELS,
  POKEDEX,
  spriteUrl,
  type Pokemon,
  type PokemonCategory,
} from "@/lib/pokemon";

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

const STAT_LEGEND = [
  { abbr: "HP", name: "Pontos de Vida", hint: "Quanto dano o Pokémon aguenta antes de desmaiar." },
  { abbr: "ATQ", name: "Ataque", hint: "A força dos golpes do Pokémon." },
  { abbr: "DEF", name: "Defesa", hint: "Quanto dano ele consegue bloquear." },
  { abbr: "VEL", name: "Velocidade", hint: "Quem ataca primeiro na batalha." },
] as const;

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

function PokemonDetail({ pokemon, onClose }: { pokemon: Pokemon; onClose: () => void }) {
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Detalhes de ${pokemon.name}`}
    >
      <div
        className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-3xl border border-border bg-card p-6 card-glow sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between">
          <div>
            <span className="text-xs font-bold text-muted-foreground">
              #{String(pokemon.id).padStart(3, "0")}
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight">{pokemon.name}</h2>
            <p
              className={`mt-1 text-xs font-semibold tracking-wide uppercase ${
                pokemon.category === "raro" ? "text-accent" : "text-muted-foreground"
              }`}
            >
              {CATEGORY_LABELS[pokemon.category]}
            </p>
          </div>
          <button
            onClick={onClose}
            aria-label="Fechar"
            className="rounded-full border border-border p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          >
            <X className="size-4" />
          </button>
        </div>

        <img
          src={spriteUrl(pokemon.id)}
          alt={pokemon.name}
          className="mx-auto my-4 size-44 drop-shadow-[0_0_30px_color-mix(in_oklab,var(--primary)_35%,transparent)]"
        />

        <div className="flex justify-center gap-2">
          {pokemon.types.map((t) => (
            <TypeBadge key={t} type={t} />
          ))}
        </div>

        <p className="mt-4 text-center text-sm leading-relaxed text-muted-foreground">
          {pokemon.description}
        </p>

        <div className="mt-6 space-y-2">
          {STAT_LEGEND.map((s) => (
            <StatBar key={s.abbr} label={s.abbr} value={pokemon[s.abbr === "HP" ? "hp" : s.abbr === "ATQ" ? "attack" : s.abbr === "DEF" ? "defense" : "speed"]} />
          ))}
        </div>

        <div className="mt-6 rounded-2xl border border-border bg-secondary/40 p-4">
          <h3 className="text-xs font-bold tracking-widest text-muted-foreground uppercase">
            O que significam as siglas?
          </h3>
          <dl className="mt-3 space-y-2.5">
            {STAT_LEGEND.map((s) => (
              <div key={s.abbr} className="flex gap-3 text-sm">
                <dt className="w-12 shrink-0 font-bold text-primary">{s.abbr}</dt>
                <dd className="text-muted-foreground">
                  <strong className="text-foreground">{s.name}</strong> — {s.hint}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
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
  const [selected, setSelected] = useState<Pokemon | null>(null);

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
                onClick={() => setSelected(p)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") setSelected(p);
                }}
                className="group cursor-pointer rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-1 hover:border-primary/60 hover:card-glow"
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

        {selected && <PokemonDetail pokemon={selected} onClose={() => setSelected(null)} />}
      </main>
    </div>
  );
}
