import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CheckCircle2, RotateCcw, XCircle } from "lucide-react";
import { SiteNav } from "@/components/site-nav";
import { QUIZ, QUIZ_STAGE_LABELS } from "@/lib/pokemon";

export const Route = createFileRoute("/quiz")({
  head: () => ({
    meta: [
      { title: "Quiz Pokémon — PokéDX" },
      {
        name: "description",
        content:
          "Teste seus conhecimentos no quiz do PokéDX: 25 perguntas sobre o universo Pokémon, em 3 etapas.",
      },
      { property: "og:title", content: "Quiz Pokémon — PokéDX" },
      {
        property: "og:description",
        content:
          "Teste seus conhecimentos no quiz do PokéDX: 25 perguntas sobre o universo Pokémon, em 3 etapas.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Quiz,
});

function Quiz() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [done, setDone] = useState(false);

  const question = QUIZ[current]!;
  const stage = question.stage;
  const isLastOfStage = current + 1 === QUIZ.length || QUIZ[current + 1]!.stage !== stage;

  function pick(index: number) {
    if (picked !== null) return;
    setPicked(index);
    if (index === question.answerIndex) setScore((s) => s + 1);
    setTimeout(() => {
      if (current + 1 < QUIZ.length) {
        setCurrent((c) => c + 1);
        setPicked(null);
      } else {
        setDone(true);
      }
    }, 1100);
  }

  function reset() {
    setCurrent(0);
    setScore(0);
    setPicked(null);
    setDone(false);
  }

  const verdict =
    score === QUIZ.length
      ? "Perfeito! Você é um verdadeiro Mestre Pokémon!"
      : score >= 18
        ? "Muito bem! Você conhece bastante o mundo Pokémon."
        : score >= 10
          ? "Nada mal! Continue treinando para virar um mestre."
          : "Hora de revisitar a Pokédex e tentar de novo!";

  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <main className="mx-auto max-w-2xl px-4 py-12">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-glow">
            Quiz <span className="text-primary">Pokémon</span>
          </h1>
          <p className="mt-3 text-muted-foreground">
            {QUIZ.length} perguntas em 3 etapas para testar seus conhecimentos.
          </p>
        </div>

        {done ? (
          <div className="rounded-2xl border border-border bg-card p-10 text-center card-glow">
            <p className="text-6xl font-extrabold text-primary">
              {score}/{QUIZ.length}
            </p>
            <p className="mt-4 text-lg font-semibold">{verdict}</p>
            <button
              onClick={reset}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground transition-transform hover:scale-105"
            >
              <RotateCcw className="size-4" /> Jogar de novo
            </button>
          </div>
        ) : (
          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-2 text-sm text-muted-foreground">
              <span className="rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                Etapa {stage} — {QUIZ_STAGE_LABELS[stage]}
              </span>
              <span>
                Pergunta {current + 1} de {QUIZ.length} · Pontos:{" "}
                <strong className="text-accent">{score}</strong>
              </span>
            </div>
            <div className="mb-6 h-1.5 overflow-hidden rounded-full bg-secondary">
              <div
                className="h-full rounded-full bg-gradient-to-r from-primary to-accent transition-all"
                style={{ width: `${((current + 1) / QUIZ.length) * 100}%` }}
              />
            </div>
            <h2 className="text-xl font-bold">{question.question}</h2>
            <div className="mt-6 grid gap-3">
              {question.options.map((option, i) => {
                const isCorrect = i === question.answerIndex;
                const isPicked = i === picked;
                let style = "border-border bg-secondary/50 hover:border-primary/50 hover:bg-secondary";
                if (picked !== null) {
                  if (isCorrect) style = "border-accent bg-accent/15";
                  else if (isPicked) style = "border-destructive bg-destructive/15";
                  else style = "border-border bg-secondary/30 opacity-60";
                }
                return (
                  <button
                    key={option}
                    onClick={() => pick(i)}
                    disabled={picked !== null}
                    className={`flex items-center justify-between rounded-xl border px-5 py-3.5 text-left font-medium transition-all ${style}`}
                  >
                    {option}
                    {picked !== null && isCorrect && <CheckCircle2 className="size-5 text-accent" />}
                    {picked !== null && isPicked && !isCorrect && (
                      <XCircle className="size-5 text-destructive" />
                    )}
                  </button>
                );
              })}
            </div>
            {picked !== null && isLastOfStage && stage < 3 && (
              <p className="mt-4 text-center text-sm font-medium text-accent">
                Preparando a Etapa {stage + 1} — {QUIZ_STAGE_LABELS[stage + 1]}...
              </p>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
