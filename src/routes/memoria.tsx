import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { RotateCcw, Trophy } from "lucide-react";
import { SiteNav } from "@/components/site-nav";
import { POKEDEX, spriteUrl } from "@/lib/pokemon";

export const Route = createFileRoute("/memoria")({
  head: () => ({
    meta: [
      { title: "Jogo da Memória — PokéVerse" },
      {
        name: "description",
        content: "Vire as cartas e encontre todos os pares de Pokémon no menor número de jogadas.",
      },
      { property: "og:title", content: "Jogo da Memória — PokéVerse" },
      {
        property: "og:description",
        content: "Vire as cartas e encontre todos os pares de Pokémon no menor número de jogadas.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: MemoryGame,
});

interface Card {
  key: string;
  pokemonId: number;
  name: string;
}

function buildDeck(): Card[] {
  const chosen = [...POKEDEX].sort(() => Math.random() - 0.5).slice(0, 8);
  const doubled = chosen.flatMap((p) => [
    { key: `${p.id}-a`, pokemonId: p.id, name: p.name },
    { key: `${p.id}-b`, pokemonId: p.id, name: p.name },
  ]);
  return doubled.sort(() => Math.random() - 0.5);
}

function MemoryGame() {
  const [deck, setDeck] = useState<Card[]>(() => buildDeck());
  const [flipped, setFlipped] = useState<string[]>([]);
  const [matched, setMatched] = useState<Set<number>>(new Set());
  const [moves, setMoves] = useState(0);
  const [locked, setLocked] = useState(false);

  const won = matched.size === 8;

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

  function reset() {
    setDeck(buildDeck());
    setFlipped([]);
    setMatched(new Set());
    setMoves(0);
    setLocked(false);
  }

  const best = useMemo(() => moves, [moves]);

  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <main className="mx-auto max-w-4xl px-4 py-12">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-glow">
            Jogo da <span className="text-primary">Memória</span>
          </h1>
          <p className="mt-3 text-muted-foreground">
            Encontre os 8 pares de Pokémon. Jogadas: <strong className="text-foreground">{moves}</strong>
          </p>
          <button
            onClick={reset}
            className="mt-4 inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2 text-sm font-semibold transition-colors hover:bg-secondary"
          >
            <RotateCcw className="size-4" /> Reiniciar
          </button>
        </div>

        {won && (
          <div className="mb-8 rounded-2xl border border-accent/50 bg-accent/10 p-6 text-center">
            <Trophy className="mx-auto mb-2 size-8 text-accent" />
            <p className="text-xl font-bold">Parabéns, você venceu!</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Todos os pares encontrados em {best} jogadas.
            </p>
          </div>
        )}

        <div className="grid grid-cols-4 gap-3 sm:gap-4">
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
