import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Brain, Gamepad2, ListChecks } from "lucide-react";
import { SiteNav } from "@/components/site-nav";
import { CURIOSITIES, POKEDEX, spriteUrl } from "@/lib/pokemon";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PokéVerse — Pokédex, Jogos e Curiosidades Pokémon" },
      {
        name: "description",
        content:
          "Explore a Pokédex, jogue o jogo da memória, teste seus conhecimentos no quiz e descubra curiosidades do universo Pokémon.",
      },
      { property: "og:title", content: "PokéVerse — Pokédex, Jogos e Curiosidades Pokémon" },
      {
        property: "og:description",
        content:
          "Explore a Pokédex, jogue o jogo da memória, teste seus conhecimentos no quiz e descubra curiosidades do universo Pokémon.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: spriteUrl(6) },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: spriteUrl(6) },
    ],
  }),
  component: Home,
});

function Home() {
  const featured = [POKEDEX[1], POKEDEX[0], POKEDEX[4]];

  return (
    <div className="min-h-screen bg-background">
      <SiteNav />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -top-40 left-1/2 h-96 w-[42rem] -translate-x-1/2 rounded-full bg-primary/25 blur-3xl" />
        <div className="pointer-events-none absolute top-20 right-0 h-64 w-64 rounded-full bg-accent/15 blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-4 py-20 text-center sm:py-28">
          <p className="mb-4 inline-block rounded-full border border-border bg-card px-4 py-1 text-xs font-medium tracking-widest text-accent uppercase">
            O universo Pokémon em um só lugar
          </p>
          <h1 className="mx-auto max-w-3xl text-4xl font-extrabold tracking-tight text-glow sm:text-6xl">
            Explore, jogue e vire um <span className="text-primary">Mestre Pokémon</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
            Navegue pela Pokédex, desafie sua memória e prove seus conhecimentos no quiz. Tudo em um só site.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/pokedex"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground transition-transform hover:scale-105 card-glow"
            >
              Abrir a Pokédex <ArrowRight className="size-4" />
            </Link>
            <Link
              to="/quiz"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 font-semibold transition-colors hover:bg-secondary"
            >
              Fazer o quiz
            </Link>
          </div>

          <div className="mt-16 flex items-end justify-center gap-6 sm:gap-12">
            {featured.map((p, i) => (
              <img
                key={p.id}
                src={spriteUrl(p.id)}
                alt={p.name}
                className={`w-28 drop-shadow-[0_0_30px_color-mix(in_oklab,var(--primary)_40%,transparent)] sm:w-40 ${
                  i === 1 ? "sm:w-52 w-36" : "opacity-90"
                }`}
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Atalhos */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-6 sm:grid-cols-3">
          {[
            {
              to: "/pokedex",
              icon: ListChecks,
              title: "Pokédex",
              text: "Conheça os Pokémon com tipos, estatísticas e descrições.",
            },
            {
              to: "/memoria",
              icon: Gamepad2,
              title: "Jogo da Memória",
              text: "Vire as cartas e encontre os pares de Pokémon iguais.",
            },
            {
              to: "/quiz",
              icon: Brain,
              title: "Quiz Pokémon",
              text: "Oito perguntas para testar se você é um verdadeiro mestre.",
            },
          ].map((card) => (
            <Link
              key={card.to}
              to={card.to}
              className="group rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/60"
            >
              <card.icon className="mb-4 size-8 text-accent" />
              <h2 className="text-xl font-bold">{card.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{card.text}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                Acessar <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Curiosidades */}
      <section className="mx-auto max-w-6xl px-4 pb-24">
        <h2 className="mb-8 text-center text-3xl font-bold">
          Curiosidades do <span className="text-accent">mundo Pokémon</span>
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CURIOSITIES.map((c) => (
            <article key={c.title} className="rounded-2xl border border-border bg-card p-6">
              <h3 className="font-semibold text-accent">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.text}</p>
            </article>
          ))}
        </div>
      </section>

      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
        PokéVerse — feito por fãs, para fãs. Pokémon é marca da Nintendo / Game Freak.
      </footer>
    </div>
  );
}
