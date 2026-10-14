export type PokemonType =
  | "fire"
  | "water"
  | "grass"
  | "electric"
  | "psychic"
  | "ghost"
  | "dragon"
  | "ice"
  | "fighting"
  | "normal"
  | "poison"
  | "fairy"
  | "ground"
  | "rock"
  | "bug"
  | "steel"
  | "dark"
  | "flying";

export interface Pokemon {
  id: number;
  name: string;
  types: PokemonType[];
  hp: number;
  attack: number;
  defense: number;
  speed: number;
  description: string;
}

export const TYPE_LABELS: Record<PokemonType, string> = {
  fire: "Fogo",
  water: "Água",
  grass: "Planta",
  electric: "Elétrico",
  psychic: "Psíquico",
  ghost: "Fantasma",
  dragon: "Dragão",
  ice: "Gelo",
  fighting: "Lutador",
  normal: "Normal",
  poison: "Venenoso",
  fairy: "Fada",
  ground: "Terra",
  rock: "Pedra",
  bug: "Inseto",
  steel: "Aço",
  dark: "Sombrio",
  flying: "Voador",
};

export function spriteUrl(id: number) {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
}

export const POKEDEX: Pokemon[] = [
  { id: 25, name: "Pikachu", types: ["electric"], hp: 35, attack: 55, defense: 40, speed: 90, description: "Armazena eletricidade nas bochechas. Quando está irritado, solta raios poderosos." },
  { id: 6, name: "Charizard", types: ["fire", "flying"], hp: 78, attack: 84, defense: 78, speed: 100, description: "Suas chamas podem derreter rochas. Dizem que o fogo queima mais forte em batalhas difíceis." },
  { id: 9, name: "Blastoise", types: ["water"], hp: 79, attack: 83, defense: 100, speed: 78, description: "Os canhões de água em seu casco disparam jatos capazes de furar aço." },
  { id: 3, name: "Venusaur", types: ["grass", "poison"], hp: 80, attack: 82, defense: 83, speed: 80, description: "A flor em suas costas absorve energia solar e libera um aroma calmante." },
  { id: 150, name: "Mewtwo", types: ["psychic"], hp: 106, attack: 110, defense: 90, speed: 130, description: "Criado em laboratório a partir do DNA de Mew. É um dos Pokémon mais poderosos já conhecidos." },
  { id: 151, name: "Mew", types: ["psychic"], hp: 100, attack: 100, defense: 100, speed: 100, description: "Diz-se que possui o DNA de todos os Pokémon. Pouquíssimas pessoas já o viram." },
  { id: 94, name: "Gengar", types: ["ghost", "poison"], hp: 60, attack: 65, defense: 60, speed: 110, description: "Esconde-se nas sombras e adora pregar peças. Sua presença esfria o ambiente." },
  { id: 149, name: "Dragonite", types: ["dragon", "flying"], hp: 91, attack: 134, defense: 95, speed: 80, description: "Apesar da aparência gentil, voa mais rápido que o som e tem força incomparável." },
  { id: 143, name: "Snorlax", types: ["normal"], hp: 160, attack: 110, defense: 65, speed: 30, description: "Come quase 400 kg de comida por dia e depois dorme profundamente, bloqueando caminhos." },
  { id: 133, name: "Eevee", types: ["normal"], hp: 55, attack: 55, defense: 50, speed: 55, description: "Seu DNA instável permite evoluir de várias formas diferentes, dependendo do ambiente." },
  { id: 448, name: "Lucario", types: ["fighting", "steel"], hp: 70, attack: 110, defense: 70, speed: 90, description: "Sente a aura de todas as criaturas e luta com honra ao lado de treinadores dignos." },
  { id: 130, name: "Gyarados", types: ["water", "flying"], hp: 95, attack: 125, defense: 79, speed: 81, description: "Quando aparece, destrói tudo ao redor. Sua fúria pode durar um mês inteiro." },
  { id: 59, name: "Arcanine", types: ["fire"], hp: 90, attack: 110, defense: 80, speed: 95, description: "Lendário na China antiga, corre tão rápido que parece ter asas." },
  { id: 65, name: "Alakazam", types: ["psychic"], hp: 55, attack: 50, defense: 45, speed: 120, description: "Seu QI supera 5.000. Usa poderes psíquicos para mover as colheres que carrega." },
  { id: 68, name: "Machamp", types: ["fighting"], hp: 90, attack: 130, defense: 80, speed: 55, description: "Com quatro braços, desfere mil socos em dois segundos. Um mestre das artes marciais." },
  { id: 131, name: "Lapras", types: ["water", "ice"], hp: 130, attack: 85, defense: 80, speed: 60, description: "Gentil e inteligente, adora carregar pessoas nas costas atravessando o mar." },
];

export interface QuizQuestion {
  question: string;
  options: string[];
  answerIndex: number;
}

export const QUIZ: QuizQuestion[] = [
  {
    question: "Qual Pokémon é o número 25 da Pokédex?",
    options: ["Charmander", "Pikachu", "Eevee", "Jigglypuff"],
    answerIndex: 1,
  },
  {
    question: "Para qual tipo o Pikachu é fraco?",
    options: ["Água", "Fogo", "Terra", "Voador"],
    answerIndex: 2,
  },
  {
    question: "Qual é a evolução final do Charmander?",
    options: ["Charmeleon", "Charizard", "Arcanine", "Dragonite"],
    answerIndex: 1,
  },
  {
    question: "Quantas evoluções diferentes o Eevee pode ter?",
    options: ["3", "5", "8", "10"],
    answerIndex: 2,
  },
  {
    question: "Qual Pokémon foi criado em laboratório a partir do DNA de Mew?",
    options: ["Mewtwo", "Porygon", "Ditto", "Gengar"],
    answerIndex: 0,
  },
  {
    question: "Qual destes Pokémon é do tipo Fantasma?",
    options: ["Alakazam", "Gengar", "Lucario", "Snorlax"],
    answerIndex: 1,
  },
  {
    question: "O que o Snorlax mais gosta de fazer?",
    options: ["Lutar", "Voar", "Comer e dormir", "Nadar"],
    answerIndex: 2,
  },
  {
    question: "Qual tipo é super eficaz contra Pokémon do tipo Dragão?",
    options: ["Fogo", "Elétrico", "Gelo", "Normal"],
    answerIndex: 2,
  },
];

export const CURIOSITIES = [
  {
    title: "O nome vem de 'Pocket Monsters'",
    text: "Pokémon é a junção de 'Pocket Monsters' (monstros de bolso), porque os treinadores carregam suas criaturas em Pokébolas que cabem no bolso.",
  },
  {
    title: "Pikachu quase não foi o mascote",
    text: "O mascote original da franquia seria o Clefairy! Pikachu foi escolhido depois por ser mais carismático e popular com o público.",
  },
  {
    title: "Mais de 1.000 Pokémon",
    text: "A franquia já passou de 1.000 espécies diferentes de Pokémon, espalhadas por nove gerações de jogos.",
  },
  {
    title: "O fenômeno de 1996",
    text: "Os primeiros jogos, Pokémon Red e Green, foram lançados no Japão em 1996 para o Game Boy — e mudaram a história dos videogames.",
  },
  {
    title: "Rhydon foi o primeiro desenhado",
    text: "Embora Bulbassauro seja o número 1 da Pokédex, o Rhydon foi o primeiro Pokémon a ser desenhado pelos criadores.",
  },
  {
    title: "Pokémon GO quebrou recordes",
    text: "Lançado em 2016, Pokémon GO foi baixado mais de 500 milhões de vezes em poucos meses e fez o mundo inteiro sair às ruas caçando Pokémon.",
  },
];
