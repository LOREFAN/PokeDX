import { TYPE_LABELS, type PokemonType } from "@/lib/pokemon";

export function TypeBadge({ type }: { type: PokemonType }) {
  return (
    <span
      className="rounded-full px-2.5 py-0.5 text-xs font-semibold text-background"
      style={{ backgroundColor: `var(--type-${type})` }}
    >
      {TYPE_LABELS[type]}
    </span>
  );
}
