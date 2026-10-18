import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ChevronRight, RotateCcw, Trophy } from "lucide-react";
import { SiteNav } from "@/components/site-nav";
import { POKEDEX, spriteUrl } from "@/lib/pokemon";

export const Route = createFileRoute("/memoria")({
  head: () => ({
    meta: [
      { title: "Jogo da Memória — PokéDX" },
      {
        name: "description",
        content:
          "No PokéDX, vire as cartas e encontre todos os pares de Pokémon em 25 fases cada vez mais difíceis.",
      },
      { property: "og:title", content: "Jogo da Memória — PokéDX" },
      {
        property: "og:description",
        content:
          "No PokéDX, vire as cartas e encontre todos os pares de Pokémon em 25 fases cada vez mais difíceis.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: MemoryGame,
});

const TOTAL_PHASES = 25;

// Fase 1 começa com 4 pares e vai subindo até 12 pares na fase 25.
function pairsForPhase(phase: number) {
  return Math.min(12, 4 + Math.floor((phase - 1) / 3));
}

interface Card {
  key: string;
  pokemonId: number;
  name: string;
}

function buildDeck(phase: number): Card[] {
  const count = pairsForPhase(phase);
  const chosen = [...POKEDEX].sort(() => Math.random() - 0.5).slice(0, count);
  const doubled = chosen.flatMap((p) => [
    { key: `${p.id}-a`, pokemonId: p.id, name: p.name },
    { key: `${p.id}-b`, pokemonId: p.id, name: p.name },
  ]);
  return doubled.sort(() => Math.random() - 0.5);
}

function MemoryGame() {
  const [phase, setPhase] = useState(1);
  const [deck, setDeck] = useState<Card[]>(() => buildDeck(1));
  const [flipped, setFlipped] = useState<string[]>([]);
  const [matched, setMatched] = useState<Set<number>>(new Set());
  const [moves, setMoves] = useState(0);
  const [locked, setLocked] = useState(false);

  const pairs = pairsForPhase(phase);
  const won = matched.size === pairs;
  const lastPhase = phase === TOTAL_PHASES;

  useEffect(() => {
    if (flipped.length !== 2) return;
    setLocked(true);
    const [a, b] = flipped;
    const cardA = deck.find((c) => c.key === a)!;
    const cardB = deck.find((c) => c.key === b)!;
    const timer = setTimeout(() => {
      if (cardA.pokemonId === cardB.pokemonId) {
        setMatched((prev) => new Set(prev).add(cardA.pokemonId));
      }
      setFlipped([]);
      setLocked(false);
    }, 800);
    return () => clearTimeout(timer);
  }, [flipped, deck]);

  function flip(card: Card) {
    if (locked || flipped.includes(card.key) || matched.has(card.pokemonId)) return;
    setFlipped((prev) => {
      const next = [...prev, card.key];
      if (next.length === 2) setMoves((m) => m + 1);
      return next;
    });
  }

  function startPhase(nextPhase: number) {
    setPhase(nextPhase);
    setDeck(buildDeck(nextPhase));
    setFlipped([]);
    setMatched(new Set());
    setMoves(0);
    setLocked(false);
  }

  const cols = pairs <= 6 ? "grid-cols-4" : pairs <= 9 ? "grid-cols-4 sm:grid-cols-6" : "grid-cols-4 sm:grid-cols-6 lg:grid-cols-8";

  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <main className="mx-auto max-w-5xl px-4 py-12">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-glow">
            Jogo da <span className="text-primary">Memória</span>
          </h1>
          <p className="mt-3 text-muted-foreground">
            Fase <strong className="text-foreground">{phase}</strong> de {TOTAL_PHASES} — encontre os{" "}
            <strong className="text-foreground">{pairs}</strong> pares. Jogadas:{" "}
            <strong className="text-foreground">{moves}</strong>
          </p>
          <div className="mx-auto mt-4 h-1.5 max-w-md overflow-hidden rounded-full bg-secondary">
            <div
              className="h-full rounded-full bg-gradient-to-r from-primary to-accent transition-all"
              style={{ width: `${(phase / TOTAL_PHASES) * 100}%` }}
            />
          </div>
          <button
            onClick={() => startPhase(phase)}
            className="mt-4 inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2 text-sm font-semibold transition-colors hover:bg-secondary"
          >
            <RotateCcw className="size-4" /> Reiniciar fase
          </button>
        </div>

        {won && (
          <div className="mb-8 rounded-2xl border border-accent/50 bg-accent/10 p-6 text-center">
            <Trophy className="mx-auto mb-2 size-8 text-accent" />
            {lastPhase ? (
              <>
                <p className="text-xl font-bold">Incrível! Você completou todas as {TOTAL_PHASES} fases!</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Você é um verdadeiro Mestre da Memória Pokémon.
                </p>
                <button
                  onClick={() => startPhase(1)}
                  className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground transition-transform hover:scale-105"
                >
                  <RotateCcw className="size-4" /> Jogar de novo
                </button>
              </>
            ) : (
              <>
                <p className="text-xl font-bold">Fase {phase} completa!</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Todos os pares encontrados em {moves} jogadas.
                </p>
                <button
                  onClick={() => startPhase(phase + 1)}
                  className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground transition-transform hover:scale-105"
                >
                  Próxima fase <ChevronRight className="size-4" />
                </button>
              </>
            )}
          </div>
        )}

        <div className={`grid gap-3 sm:gap-4 ${cols}`}>
          {deck.map((card) => {
            const isUp = flipped.includes(card.key) || matched.has(card.pokemonId);
            return (
              <button
                key={card.key}
                onClick={() => flip(card)}
                aria-label={isUp ? card.name : "Carta virada"}
                className={`aspect-square rounded-2xl border transition-all duration-300 ${
                  isUp
                    ? "border-primary/60 bg-card card-glow"
                    : "border-border bg-secondary hover:border-primary/40 hover:bg-muted"
                }`}
              >
                {isUp ? (
                  <img
                    src={spriteUrl(card.pokemonId)}
                    alt={card.name}
                    className="mx-auto size-3/4 object-contain"
                  />
                ) : (
                  <span className="text-3xl font-extrabold text-primary/70">?</span>
                )}
              </button>
            );
          })}
        </div>
      </main>
    </div>
  );
}
