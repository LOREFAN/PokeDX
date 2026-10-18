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

export type PokemonCategory = "classico" | "raro";

export interface Pokemon {
  id: number;
  name: string;
  types: PokemonType[];
  category: PokemonCategory;
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

export const CATEGORY_LABELS: Record<PokemonCategory, string> = {
  classico: "Clássicos",
  raro: "Raros",
};

export function spriteUrl(id: number) {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
}

export const POKEDEX: Pokemon[] = [
  // ===== Clássicos (25) =====
  { id: 25, name: "Pikachu", types: ["electric"], category: "classico", hp: 35, attack: 55, defense: 40, speed: 90, description: "Armazena eletricidade nas bochechas. Quando está irritado, solta raios poderosos." },
  { id: 6, name: "Charizard", types: ["fire", "flying"], category: "classico", hp: 78, attack: 84, defense: 78, speed: 100, description: "Suas chamas podem derreter rochas. Dizem que o fogo queima mais forte em batalhas difíceis." },
  { id: 9, name: "Blastoise", types: ["water"], category: "classico", hp: 79, attack: 83, defense: 100, speed: 78, description: "Os canhões de água em seu casco disparam jatos capazes de furar aço." },
  { id: 3, name: "Venusaur", types: ["grass", "poison"], category: "classico", hp: 80, attack: 82, defense: 83, speed: 80, description: "A flor em suas costas absorve energia solar e libera um aroma calmante." },
  { id: 94, name: "Gengar", types: ["ghost", "poison"], category: "classico", hp: 60, attack: 65, defense: 60, speed: 110, description: "Esconde-se nas sombras e adora pregar peças. Sua presença esfria o ambiente." },
  { id: 143, name: "Snorlax", types: ["normal"], category: "classico", hp: 160, attack: 110, defense: 65, speed: 30, description: "Come quase 400 kg de comida por dia e depois dorme profundamente, bloqueando caminhos." },
  { id: 133, name: "Eevee", types: ["normal"], category: "classico", hp: 55, attack: 55, defense: 50, speed: 55, description: "Seu DNA instável permite evoluir de várias formas diferentes, dependendo do ambiente." },
  { id: 130, name: "Gyarados", types: ["water", "flying"], category: "classico", hp: 95, attack: 125, defense: 79, speed: 81, description: "Quando aparece, destrói tudo ao redor. Sua fúria pode durar um mês inteiro." },
  { id: 59, name: "Arcanine", types: ["fire"], category: "classico", hp: 90, attack: 110, defense: 80, speed: 95, description: "Lendário na China antiga, corre tão rápido que parece ter asas." },
  { id: 65, name: "Alakazam", types: ["psychic"], category: "classico", hp: 55, attack: 50, defense: 45, speed: 120, description: "Seu QI supera 5.000. Usa poderes psíquicos para mover as colheres que carrega." },
  { id: 68, name: "Machamp", types: ["fighting"], category: "classico", hp: 90, attack: 130, defense: 80, speed: 55, description: "Com quatro braços, desfere mil socos em dois segundos. Um mestre das artes marciais." },
  { id: 131, name: "Lapras", types: ["water", "ice"], category: "classico", hp: 130, attack: 85, defense: 80, speed: 60, description: "Gentil e inteligente, adora carregar pessoas nas costas atravessando o mar." },
  { id: 1, name: "Bulbasaur", types: ["grass", "poison"], category: "classico", hp: 45, attack: 49, defense: 49, speed: 45, description: "Carrega uma semente nas costas desde o nascimento, que cresce junto com ele." },
  { id: 4, name: "Charmander", types: ["fire"], category: "classico", hp: 39, attack: 52, defense: 43, speed: 65, description: "A chama na ponta da cauda indica suas emoções. Se apagar, sua vida corre perigo." },
  { id: 7, name: "Squirtle", types: ["water"], category: "classico", hp: 44, attack: 48, defense: 65, speed: 43, description: "Esconde-se dentro do casco e ataca com jatos de água de alta pressão." },
  { id: 39, name: "Jigglypuff", types: ["normal", "fairy"], category: "classico", hp: 115, attack: 45, defense: 20, speed: 20, description: "Sua canção de ninar faz qualquer um dormir. Depois, desenha na cara de quem dormiu." },
  { id: 52, name: "Meowth", types: ["normal"], category: "classico", hp: 40, attack: 45, defense: 35, speed: 90, description: "Adora objetos brilhantes e moedas. É o único Pokémon que aprendeu a falar como humano." },
  { id: 54, name: "Psyduck", types: ["water"], category: "classico", hp: 50, attack: 52, defense: 48, speed: 55, description: "Vive com dor de cabeça. Quando a dor piora, libera poderes psíquicos sem perceber." },
  { id: 58, name: "Growlithe", types: ["fire"], category: "classico", hp: 55, attack: 70, defense: 45, speed: 60, description: "Leal e corajoso, protege seu território com latidos e mordidas flamejantes." },
  { id: 74, name: "Geodude", types: ["rock", "ground"], category: "classico", hp: 40, attack: 80, defense: 100, speed: 20, description: "Parece uma pedra comum. Muitos tropeçam nele nas trilhas das montanhas." },
  { id: 92, name: "Gastly", types: ["ghost", "poison"], category: "classico", hp: 30, attack: 35, defense: 30, speed: 80, description: "Feito de gás, envolve as vítimas com seu corpo gasoso e as faz desmaiar." },
  { id: 104, name: "Cubone", types: ["ground"], category: "classico", hp: 50, attack: 50, defense: 95, speed: 35, description: "Usa o crânio de sua mãe como capacete. Chora olhando para a lua cheia." },
  { id: 113, name: "Chansey", types: ["normal"], category: "classico", hp: 250, attack: 5, defense: 5, speed: 50, description: "Põe ovos nutritivos todos os dias e os compartilha com quem está ferido." },
  { id: 123, name: "Scyther", types: ["bug", "flying"], category: "classico", hp: 70, attack: 110, defense: 80, speed: 105, description: "Suas foices cortam qualquer coisa. Move-se tão rápido que parece se multiplicar." },
  { id: 137, name: "Porygon", types: ["normal"], category: "classico", hp: 65, attack: 60, defense: 70, speed: 40, description: "O primeiro Pokémon criado artificialmente por computador. Pode viajar pelo ciberespaço." },

  // ===== Raros (25) =====
  { id: 150, name: "Mewtwo", types: ["psychic"], category: "raro", hp: 106, attack: 110, defense: 90, speed: 130, description: "Criado em laboratório a partir do DNA de Mew. É um dos Pokémon mais poderosos já conhecidos." },
  { id: 151, name: "Mew", types: ["psychic"], category: "raro", hp: 100, attack: 100, defense: 100, speed: 100, description: "Diz-se que possui o DNA de todos os Pokémon. Pouquíssimas pessoas já o viram." },
  { id: 149, name: "Dragonite", types: ["dragon", "flying"], category: "raro", hp: 91, attack: 134, defense: 95, speed: 80, description: "Apesar da aparência gentil, voa mais rápido que o som e tem força incomparável." },
  { id: 448, name: "Lucario", types: ["fighting", "steel"], category: "raro", hp: 70, attack: 110, defense: 70, speed: 90, description: "Sente a aura de todas as criaturas e luta com honra ao lado de treinadores dignos." },
  { id: 144, name: "Articuno", types: ["ice", "flying"], category: "raro", hp: 90, attack: 85, defense: 100, speed: 85, description: "Ave lendária do gelo. Suas asas congelam o ar e criam nevascas por onde passa." },
  { id: 145, name: "Zapdos", types: ["electric", "flying"], category: "raro", hp: 90, attack: 90, defense: 85, speed: 100, description: "Ave lendária do trovão. Aparece no meio de tempestades controlando raios." },
  { id: 146, name: "Moltres", types: ["fire", "flying"], category: "raro", hp: 90, attack: 100, defense: 90, speed: 90, description: "Ave lendária do fogo. Suas chamas são tão quentes que derretem a neve das montanhas." },
  { id: 243, name: "Raikou", types: ["electric"], category: "raro", hp: 90, attack: 85, defense: 75, speed: 115, description: "Corre como um relâmpago pelas planícies. Seu rugido soa como um trovão." },
  { id: 244, name: "Entei", types: ["fire"], category: "raro", hp: 115, attack: 115, defense: 85, speed: 100, description: "Dizem que nasceu da erupção de um vulcão. Seu rugido faz vulcões entrarem em erupção." },
  { id: 245, name: "Suicune", types: ["water"], category: "raro", hp: 100, attack: 75, defense: 115, speed: 85, description: "Corre pelo mundo purificando águas poluídas. É a encarnação do vento norte." },
  { id: 249, name: "Lugia", types: ["psychic", "flying"], category: "raro", hp: 106, attack: 90, defense: 130, speed: 110, description: "Guardião dos mares. Vive no fundo do oceano porque suas asas são poderosas demais." },
  { id: 250, name: "Ho-Oh", types: ["fire", "flying"], category: "raro", hp: 106, attack: 130, defense: 90, speed: 90, description: "Suas penas brilham em sete cores. Dizem que quem o vê terá felicidade eterna." },
  { id: 251, name: "Celebi", types: ["psychic", "grass"], category: "raro", hp: 100, attack: 100, defense: 100, speed: 100, description: "Viaja pelo tempo e aparece apenas em eras de paz, deixando florestas floridas." },
  { id: 384, name: "Rayquaza", types: ["dragon", "flying"], category: "raro", hp: 105, attack: 150, defense: 90, speed: 95, description: "Vive na camada de ozônio há milhões de anos. Acalma Kyogre e Groudon quando lutam." },
  { id: 382, name: "Kyogre", types: ["water"], category: "raro", hp: 100, attack: 100, defense: 90, speed: 90, description: "Lendário que expandiu os oceanos com chuvas torrenciais. Dorme no fundo do mar." },
  { id: 383, name: "Groudon", types: ["ground"], category: "raro", hp: 100, attack: 150, defense: 140, speed: 90, description: "Lendário que ergueu os continentes. Seu calor intenso faz a chuva evaporar." },
  { id: 483, name: "Dialga", types: ["steel", "dragon"], category: "raro", hp: 100, attack: 120, defense: 120, speed: 90, description: "Controla o tempo. Dizem que o tempo começou a fluir quando Dialga nasceu." },
  { id: 484, name: "Palkia", types: ["water", "dragon"], category: "raro", hp: 90, attack: 120, defense: 100, speed: 100, description: "Controla o espaço e vive em uma dimensão paralela. Pode distorcer a realidade." },
  { id: 491, name: "Darkrai", types: ["dark"], category: "raro", hp: 70, attack: 90, defense: 90, speed: 125, description: "Provoca pesadelos em quem dorme por perto. Aparece nas noites de lua nova." },
  { id: 492, name: "Shaymin", types: ["grass"], category: "raro", hp: 100, attack: 100, defense: 100, speed: 100, description: "Pokémon da gratidão. Transforma terras devastadas em campos de flores." },
  { id: 493, name: "Arceus", types: ["normal"], category: "raro", hp: 120, attack: 120, defense: 120, speed: 120, description: "Diz a lenda que criou o universo com seus mil braços. É conhecido como O Original." },
  { id: 644, name: "Zekrom", types: ["dragon", "electric"], category: "raro", hp: 100, attack: 150, defense: 120, speed: 90, description: "Dragão lendário que incinera o mundo com raios. Auxilia quem busca o ideal." },
  { id: 643, name: "Reshiram", types: ["dragon", "fire"], category: "raro", hp: 100, attack: 120, defense: 100, speed: 90, description: "Dragão lendário que queima o mundo com chamas. Auxilia quem busca a verdade." },
  { id: 716, name: "Xerneas", types: ["fairy"], category: "raro", hp: 126, attack: 131, defense: 95, speed: 99, description: "Dizem que compartilha vida eterna. Suas chifres brilham em sete cores." },
  { id: 717, name: "Yveltal", types: ["dark", "flying"], category: "raro", hp: 126, attack: 131, defense: 95, speed: 99, description: "Quando abre as asas, absorve a energia vital de tudo ao redor." },
];

export interface QuizQuestion {
  question: string;
  options: string[];
  answerIndex: number;
  stage: 1 | 2 | 3;
}

export const QUIZ: QuizQuestion[] = [
  // Etapa 1 — Treinador Iniciante (fáceis)
  { question: "Qual Pokémon é o número 25 da Pokédex?", options: ["Charmander", "Pikachu", "Eevee", "Jigglypuff"], answerIndex: 1, stage: 1 },
  { question: "Qual é a evolução final do Charmander?", options: ["Charmeleon", "Charizard", "Arcanine", "Dragonite"], answerIndex: 1, stage: 1 },
  { question: "Qual destes Pokémon é do tipo Água?", options: ["Growlithe", "Squirtle", "Geodude", "Gastly"], answerIndex: 1, stage: 1 },
  { question: "O que o Snorlax mais gosta de fazer?", options: ["Lutar", "Voar", "Comer e dormir", "Nadar"], answerIndex: 2, stage: 1 },
  { question: "Qual Pokémon canta para fazer os outros dormirem?", options: ["Meowth", "Psyduck", "Jigglypuff", "Cubone"], answerIndex: 2, stage: 1 },
  { question: "Qual destes é um Pokémon inicial da primeira geração?", options: ["Lucario", "Bulbasaur", "Scyther", "Lapras"], answerIndex: 1, stage: 1 },
  { question: "Qual tipo é o Pikachu?", options: ["Fogo", "Água", "Elétrico", "Normal"], answerIndex: 2, stage: 1 },
  { question: "Qual Pokémon tem um casco com canhões de água?", options: ["Venusaur", "Blastoise", "Lapras", "Gyarados"], answerIndex: 1, stage: 1 },
  // Etapa 2 — Treinador Experiente (médias)
  { question: "Para qual tipo o Pikachu é fraco?", options: ["Água", "Fogo", "Terra", "Voador"], answerIndex: 2, stage: 2 },
  { question: "Quantas evoluções diferentes o Eevee pode ter?", options: ["3", "5", "8", "10"], answerIndex: 2, stage: 2 },
  { question: "Qual Pokémon foi criado em laboratório a partir do DNA de Mew?", options: ["Mewtwo", "Porygon", "Ditto", "Gengar"], answerIndex: 0, stage: 2 },
  { question: "Qual destes Pokémon é do tipo Fantasma?", options: ["Alakazam", "Gengar", "Lucario", "Snorlax"], answerIndex: 1, stage: 2 },
  { question: "Qual tipo é super eficaz contra Pokémon do tipo Dragão?", options: ["Fogo", "Elétrico", "Gelo", "Normal"], answerIndex: 2, stage: 2 },
  { question: "Qual Pokémon usa o crânio da mãe como capacete?", options: ["Geodude", "Machamp", "Cubone", "Chansey"], answerIndex: 2, stage: 2 },
  { question: "Qual Pokémon é conhecido por sua dor de cabeça constante?", options: ["Psyduck", "Slowpoke", "Drowzee", "Abra"], answerIndex: 0, stage: 2 },
  { question: "Qual destes Pokémon tem quatro braços?", options: ["Machop", "Machamp", "Hitmonlee", "Primeape"], answerIndex: 1, stage: 2 },
  // Etapa 3 — Mestre Pokémon (difíceis)
  { question: "Qual ave lendária controla os raios e as tempestades?", options: ["Articuno", "Moltres", "Zapdos", "Ho-Oh"], answerIndex: 2, stage: 3 },
  { question: "Qual Pokémon lendário é conhecido como 'O Original', criador do universo?", options: ["Mew", "Arceus", "Dialga", "Celebi"], answerIndex: 1, stage: 3 },
  { question: "Qual lendário controla o tempo?", options: ["Palkia", "Darkrai", "Dialga", "Giratina"], answerIndex: 2, stage: 3 },
  { question: "Qual Pokémon viaja pelo tempo e só aparece em eras de paz?", options: ["Celebi", "Mew", "Jirachi", "Shaymin"], answerIndex: 0, stage: 3 },
  { question: "Qual lendário vive na camada de ozônio e acalma Kyogre e Groudon?", options: ["Lugia", "Rayquaza", "Ho-Oh", "Zekrom"], answerIndex: 1, stage: 3 },
  { question: "Qual Pokémon provoca pesadelos em noites de lua nova?", options: ["Gengar", "Darkrai", "Hypno", "Yveltal"], answerIndex: 1, stage: 3 },
  { question: "Qual lendário purifica águas poluídas e é a encarnação do vento norte?", options: ["Suicune", "Kyogre", "Lapras", "Articuno"], answerIndex: 0, stage: 3 },
  { question: "Quais são as três bestas lendárias da região de Johto?", options: ["Articuno, Zapdos e Moltres", "Raikou, Entei e Suicune", "Dialga, Palkia e Giratina", "Mewtwo, Mew e Lugia"], answerIndex: 1, stage: 3 },
  { question: "Qual Pokémon foi o primeiro a ser desenhado pelos criadores?", options: ["Pikachu", "Bulbasaur", "Rhydon", "Mew"], answerIndex: 2, stage: 3 },
];

export const QUIZ_STAGE_LABELS: Record<number, string> = {
  1: "Treinador Iniciante",
  2: "Treinador Experiente",
  3: "Mestre Pokémon",
};

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
