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
  history: string;
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
  { id: 25, name: "Pikachu", types: ["electric"], category: "classico", hp: 35, attack: 55, defense: 40, speed: 90, description: "Armazena eletricidade nas bochechas. Quando está irritado, solta raios poderosos.", history: "Pikachu é o rosto da franquia Pokémon desde 1996, quando estreou nos jogos Red e Green no Japão. Curiosamente, ele quase não foi o mascote: o plano original era usar o Clefairy. No anime, o Pikachu de Ash se recusou a ficar dentro da Pokébola e essa teimosia virou símbolo da amizade entre treinador e Pokémon. Hoje ele é reconhecido no mundo inteiro, de desfiles a aviões personalizados." },
  { id: 6, name: "Charizard", types: ["fire", "flying"], category: "classico", hp: 78, attack: 84, defense: 78, speed: 100, description: "Suas chamas podem derreter rochas. Dizem que o fogo queima mais forte em batalhas difíceis.", history: "Evolução final do Charmander, Charizard é um dos Pokémon mais amados de todos os tempos. No anime, o Charizard de Ash ficou famoso por ser rebelde e só obedecer quando respeitava de verdade seu treinador. Suas cartas de TCG estão entre as mais valiosas do mundo — uma primeira edição já foi vendida por centenas de milhares de dólares." },
  { id: 9, name: "Blastoise", types: ["water"], category: "classico", hp: 79, attack: 83, defense: 100, speed: 78, description: "Os canhões de água em seu casco disparam jatos capazes de furar aço.", history: "Evolução final do Squirtle, Blastoise foi a capa do jogo Pokémon Blue. Seus canhões são tão precisos que ele consegue acertar latas vazias a mais de 50 metros. No anime, o Esquadrão Squirtle — um grupo de Squirtle bombeiros de óculos escuros — virou um dos episódios mais queridos da série." },
  { id: 3, name: "Venusaur", types: ["grass", "poison"], category: "classico", hp: 80, attack: 82, defense: 83, speed: 80, description: "A flor em suas costas absorve energia solar e libera um aroma calmante.", history: "Evolução final do Bulbasaur, Venusaur carrega uma flor gigante que desabrocha com a luz do sol. Dizem que após uma chuva, seu aroma atrai outros Pokémon para perto dele. É um dos três iniciais originais de Kanto e representa o equilíbrio entre força e serenidade na natureza." },
  { id: 94, name: "Gengar", types: ["ghost", "poison"], category: "classico", hp: 60, attack: 65, defense: 60, speed: 110, description: "Esconde-se nas sombras e adora pregar peças. Sua presença esfria o ambiente.", history: "Gengar é o fantasma mais famoso da franquia. Reza a lenda que ele é a sombra de um Clefable — os dois têm formatos parecidos. Ele se diverte assustando viajantes à noite e finge ser a sombra das pessoas. Apesar da fama de assustador, no anime já mostrou um lado leal e brincalhão com treinadores que confiam nele." },
  { id: 143, name: "Snorlax", types: ["normal"], category: "classico", hp: 160, attack: 110, defense: 65, speed: 30, description: "Come quase 400 kg de comida por dia e depois dorme profundamente, bloqueando caminhos.", history: "Snorlax ficou famoso nos jogos originais por bloquear rotas inteiras dormindo — só acordava com o som da Poké Flauta. Ele não é exigente: come até comida mofada sem passar mal. Seu estômago é tão resistente que nada o faz adoecer. Dormir e comer são suas únicas prioridades na vida." },
  { id: 133, name: "Eevee", types: ["normal"], category: "classico", hp: 55, attack: 55, defense: 50, speed: 55, description: "Seu DNA instável permite evoluir de várias formas diferentes, dependendo do ambiente.", history: "Eevee é o Pokémon com mais evoluções possíveis: oito formas diferentes, como Vaporeon, Jolteon, Flareon e Sylveon. Seu DNA irregular reage ao ambiente e às pedras evolutivas. Por causa dessa versatilidade e da aparência fofa, Eevee virou quase um segundo mascote da franquia, estrelando o jogo Let's Go, Eevee!" },
  { id: 130, name: "Gyarados", types: ["water", "flying"], category: "classico", hp: 95, attack: 125, defense: 79, speed: 81, description: "Quando aparece, destrói tudo ao redor. Sua fúria pode durar um mês inteiro.", history: "Gyarados nasce do humilde Magikarp, considerado o Pokémon mais fraco e inútil de todos. Essa transformação inspirou uma lenda chinesa: a carpa que consegue subir a cachoeira vira um dragão. Por isso Gyarados simboliza perseverança — prova de que até o mais fraco pode se tornar lendário." },
  { id: 59, name: "Arcanine", types: ["fire"], category: "classico", hp: 90, attack: 110, defense: 80, speed: 95, description: "Lendário na China antiga, corre tão rápido que parece ter asas.", history: "Arcanine é classificado na Pokédex como 'Pokémon Lendário', mesmo não sendo um lendário de verdade — sua categoria vem das lendas antigas que o cercam. Na China antiga, era reverenciado como um ser mítico. Dizem que ele corre 10 mil quilômetros em um único dia e noite, com a crina flamejante ao vento." },
  { id: 65, name: "Alakazam", types: ["psychic"], category: "classico", hp: 55, attack: 50, defense: 45, speed: 120, description: "Seu QI supera 5.000. Usa poderes psíquicos para mover as colheres que carrega.", history: "Alakazam tem um cérebro que nunca para de crescer e lembra de tudo o que já viveu. Suas colheres são dobradas com poder psíquico — inspiradas no famoso ilusionista Uri Geller, que chegou a processar a Nintendo por causa do Pokémon Kadabra. Alakazam confia mais no cérebro do que nos músculos: seus poderes fazem tudo por ele." },
  { id: 68, name: "Machamp", types: ["fighting"], category: "classico", hp: 90, attack: 130, defense: 80, speed: 55, description: "Com quatro braços, desfere mil socos em dois segundos. Um mestre das artes marciais.", history: "Machamp domina todos os estilos de luta existentes. Seus quatro braços atacam de ângulos diferentes ao mesmo tempo, tornando impossível se defender. Dizem que ele consegue lançar um oponente por cima do horizonte com um único soco. Apesar da força bruta, é um Pokémon de coração nobre que adora ajudar em trabalhos pesados." },
  { id: 131, name: "Lapras", types: ["water", "ice"], category: "classico", hp: 130, attack: 85, defense: 80, speed: 60, description: "Gentil e inteligente, adora carregar pessoas nas costas atravessando o mar.", history: "Lapras quase foi extinto por caçadores que queriam seu casco. Por ser gentil demais, nunca revidava. Nos jogos, é o Pokémon que carrega o jogador sobre as águas, e no anime o Lapras de Ash protagonizou uma das despedidas mais emocionantes da série. Hoje, as populações de Lapras se recuperaram e ele voltou a cruzar os mares em manadas." },
  { id: 1, name: "Bulbasaur", types: ["grass", "poison"], category: "classico", hp: 45, attack: 49, defense: 49, speed: 45, description: "Carrega uma semente nas costas desde o nascimento, que cresce junto com ele.", history: "Bulbasaur é o número 1 da Pokédex Nacional e o primeiro Pokémon inicial de muitos treinadores. A semente em suas costas é plantada no nascimento e cresce absorvendo luz solar. No anime, um Bulbasaur abandonado virou protetor de um jardim escondido até aprender a confiar em humanos novamente." },
  { id: 4, name: "Charmander", types: ["fire"], category: "classico", hp: 39, attack: 52, defense: 43, speed: 65, description: "A chama na ponta da cauda indica suas emoções. Se apagar, sua vida corre perigo.", history: "A chama da cauda de Charmander arde desde o nascimento — dizem que se ela apagar, o Pokémon morre. No anime, o Charmander de Ash foi abandonado por um treinador cruel sob a chuva, esperando dias por alguém que nunca voltou. Esse episódio é lembrado até hoje como um dos mais emocionantes da série." },
  { id: 7, name: "Squirtle", types: ["water"], category: "classico", hp: 44, attack: 48, defense: 65, speed: 43, description: "Esconde-se dentro do casco e ataca com jatos de água de alta pressão.", history: "Squirtle é o inicial de água de Kanto. Seu casco não serve só para defesa: o formato arredondado reduz a resistência da água, fazendo dele um nadador veloz. No anime, o Esquadrão Squirtle — ex-vândalos que viraram bombeiros — mostrou que até Pokémon travessos têm bom coração." },
  { id: 39, name: "Jigglypuff", types: ["normal", "fairy"], category: "classico", hp: 115, attack: 45, defense: 20, speed: 20, description: "Sua canção de ninar faz qualquer um dormir. Depois, desenha na cara de quem dormiu.", history: "Jigglypuff infla o corpo e canta uma melodia misteriosa que faz qualquer ouvinte dormir profundamente. No anime, um Jigglypuff ficou famoso por ficar furioso quando a plateia dormia no meio da música — e desenhava na cara de todo mundo com um marcador. Seus olhos enormes e brilhantes hipnotizam quem os encara." },
  { id: 52, name: "Meowth", types: ["normal"], category: "classico", hp: 40, attack: 45, defense: 35, speed: 90, description: "Adora objetos brilhantes e moedas. É o único Pokémon que aprendeu a falar como humano.", history: "O Meowth da Equipe Rocket é o Pokémon falante mais famoso do mundo. Ele aprendeu a andar ereto e falar a língua humana para impressionar uma Meowth de quem gostava — e foi rejeitado mesmo assim. Desde então vive com Jessie e James planejando capturar o Pikachu de Ash, sem sucesso há mais de 25 anos." },
  { id: 54, name: "Psyduck", types: ["water"], category: "classico", hp: 50, attack: 52, defense: 48, speed: 55, description: "Vive com dor de cabeça. Quando a dor piora, libera poderes psíquicos sem perceber.", history: "Psyduck sofre de uma dor de cabeça eterna que ninguém consegue curar. Quando a dor atinge o limite, ele libera poderes psíquicos devastadores — mas nunca se lembra disso depois. No anime, o Psyduck da Misty saía da Pokébola sozinho nos piores momentos, virando alívio cômico e, secretamente, um dos mais poderosos do time." },
  { id: 58, name: "Growlithe", types: ["fire"], category: "classico", hp: 55, attack: 70, defense: 45, speed: 60, description: "Leal e corajoso, protege seu território com latidos e mordidas flamejantes.", history: "Growlithe é conhecido como o Pokémon policial: seu faro apurado e lealdade inabalável o tornam parceiro ideal de policiais no mundo Pokémon. Ele late e morde intrusos sem hesitar, mas é dócil e brincalhão com quem confia. Sua coragem é tanta que enfrenta oponentes muito maiores sem recuar." },
  { id: 74, name: "Geodude", types: ["rock", "ground"], category: "classico", hp: 40, attack: 80, defense: 100, speed: 20, description: "Parece uma pedra comum. Muitos tropeçam nele nas trilhas das montanhas.", history: "Geodude passa o dia parado em trilhas de montanha, confundido com uma pedra qualquer. Quanto mais velho, mais redondo e liso fica seu corpo. Alpinistas desavisados tropeçam nele o tempo todo — e ele odeia isso. Quando irritado, rola montanha abaixo derrubando tudo no caminho." },
  { id: 92, name: "Gastly", types: ["ghost", "poison"], category: "classico", hp: 30, attack: 35, defense: 30, speed: 80, description: "Feito de gás, envolve as vítimas com seu corpo gasoso e as faz desmaiar.", history: "Gastly é composto de 95% de gás venenoso e pode se infiltrar em qualquer lugar. Dizem que ele é o espírito de seres que já se foram. Apesar de frágil a ventos fortes, seu gás derrubaria até um elefante em segundos. Na Torre Pokémon de Lavender Town, Gastly e suas evoluções pregam peças nos visitantes." },
  { id: 104, name: "Cubone", types: ["ground"], category: "classico", hp: 50, attack: 50, defense: 95, speed: 35, description: "Usa o crânio de sua mãe como capacete. Chora olhando para a lua cheia.", history: "A história de Cubone é uma das mais tristes do mundo Pokémon: ele usa o crânio da mãe falecida como capacete e nunca mostra seu rosto verdadeiro. Nas noites de lua cheia, ele chora vendo nela o rosto da mãe — e as manchas no crânio são marcas de suas lágrimas. Por isso é chamado de 'Pokémon Solitário'." },
  { id: 113, name: "Chansey", types: ["normal"], category: "classico", hp: 250, attack: 5, defense: 5, speed: 50, description: "Põe ovos nutritivos todos os dias e os compartilha com quem está ferido.", history: "Chansey é a enfermeira oficial do mundo Pokémon, trabalhando ao lado da Enfermeira Joy nos Centros Pokémon. Seus ovos são tão nutritivos que dizem curar qualquer doença. Por ser rara e gentil, era caçada por seus ovos valiosos. Quem compartilha um ovo com Chansey ganha um amigo para a vida toda." },
  { id: 123, name: "Scyther", types: ["bug", "flying"], category: "classico", hp: 70, attack: 110, defense: 80, speed: 105, description: "Suas foices cortam qualquer coisa. Move-se tão rápido que parece se multiplicar.", history: "Scyther é um predador ninja das florestas. Suas foices afiadas cortam troncos de árvores grossas com um golpe só, e sua velocidade cria a ilusão de que há vários dele ao mesmo tempo. É um Pokémon orgulhoso que só respeita treinadores que provam sua força. Ao evoluir com revestimento metálico, vira o imponente Scizor." },
  { id: 137, name: "Porygon", types: ["normal"], category: "classico", hp: 65, attack: 60, defense: 70, speed: 40, description: "O primeiro Pokémon criado artificialmente por computador. Pode viajar pelo ciberespaço.", history: "Porygon foi o primeiro Pokémon 100% artificial, criado por programadores usando a tecnologia mais avançada da época. Ele pode converter seu corpo em dados e navegar pela internet. Ficou mundialmente conhecido pelo episódio banido do anime em 1997, cujas luzes piscantes causaram convulsões em centenas de crianças no Japão — e o episódio nunca mais foi exibido." },

  // ===== Raros (25) =====
  { id: 150, name: "Mewtwo", types: ["psychic"], category: "raro", hp: 106, attack: 110, defense: 90, speed: 130, description: "Criado em laboratório a partir do DNA de Mew. É um dos Pokémon mais poderosos já conhecidos.", history: "Mewtwo nasceu de experimentos genéticos na Mansão Pokémon, na Ilha Cinábrio, a partir do DNA de Mew. Criado para ser a arma definitiva, ele destruiu o laboratório e fugiu, questionando o sentido de sua existência. No primeiro filme Pokémon, sua história sobre clones e identidade emocionou uma geração inteira — e a cena das lágrimas revivendo Ash é inesquecível." },
  { id: 151, name: "Mew", types: ["psychic"], category: "raro", hp: 100, attack: 100, defense: 100, speed: 100, description: "Diz-se que possui o DNA de todos os Pokémon. Pouquíssimas pessoas já o viram.", history: "Mew é considerado o ancestral de todos os Pokémon, pois seu DNA contém o código genético de todas as espécies. Por isso consegue aprender qualquer golpe. Ele é brincalhão, curioso e invisível quando quer — por isso quase ninguém o viu. Nos jogos originais, Mew só podia ser obtido em eventos especiais, o que alimentou anos de lendas e rumores entre os jogadores." },
  { id: 149, name: "Dragonite", types: ["dragon", "flying"], category: "raro", hp: 91, attack: 134, defense: 95, speed: 80, description: "Apesar da aparência gentil, voa mais rápido que o som e tem força incomparável.", history: "Dragonite é o dragão original da primeira geração e o Pokémon assinatura de Lance, campeão da Elite 4. Apesar da força assustadora, é conhecido por resgatar marinheiros perdidos no mar e guiar navios em tempestades. Dizem que existe uma ilha secreta em algum lugar do oceano onde só Dragonites vivem." },
  { id: 448, name: "Lucario", types: ["fighting", "steel"], category: "raro", hp: 70, attack: 110, defense: 70, speed: 90, description: "Sente a aura de todas as criaturas e luta com honra ao lado de treinadores dignos.", history: "Lucario enxerga a aura — a energia vital de todos os seres — e por isso consegue ler pensamentos e prever movimentos. Ele só serve a treinadores de coração puro, pois detecta qualquer maldade na alma. Estrelou o filme 'Lucario e o Mistério de Mew', onde se sacrificou para salvar a Árvore do Começo do Mundo." },
  { id: 144, name: "Articuno", types: ["ice", "flying"], category: "raro", hp: 90, attack: 85, defense: 100, speed: 85, description: "Ave lendária do gelo. Suas asas congelam o ar e criam nevascas por onde passa.", history: "Articuno é uma das três aves lendárias de Kanto. Vive no topo de montanhas geladas e dizem que aparece para viajantes perdidos em nevascas, guiando-os para a salvação. Suas longas penas caudais congelam a umidade do ar, deixando uma trilha de neve brilhante por onde voa." },
  { id: 145, name: "Zapdos", types: ["electric", "flying"], category: "raro", hp: 90, attack: 90, defense: 85, speed: 100, description: "Ave lendária do trovão. Aparece no meio de tempestades controlando raios.", history: "Zapdos vive dentro de nuvens de tempestade e ganha força a cada raio que o atinge. Quando bate as asas, o som é como um trovão e faíscas caem do céu. Nos jogos originais, era encontrado na abandonada Usina de Energia — um dos momentos mais marcantes da exploração de Kanto." },
  { id: 146, name: "Moltres", types: ["fire", "flying"], category: "raro", hp: 90, attack: 100, defense: 90, speed: 90, description: "Ave lendária do fogo. Suas chamas são tão quentes que derretem a neve das montanhas.", history: "Moltres migra com as estações: quando chega, dizem que a primavera vem junto. Se ferido, mergulha no magma de um vulcão para curar suas feridas nas chamas. Cada batida de suas asas espalha brasas brilhantes que iluminam o céu noturno como um pôr do sol." },
  { id: 243, name: "Raikou", types: ["electric"], category: "raro", hp: 90, attack: 85, defense: 75, speed: 115, description: "Corre como um relâmpago pelas planícies. Seu rugido soa como um trovão.", history: "Raikou é uma das três bestas lendárias revividas por Ho-Oh após o incêndio da Torre Queimada de Ecruteak. Ele carrega nuvens de tempestade nas costas e seu rugido ecoa como trovão pelas planícies. Por vagar livremente pelo mapa nos jogos, caçá-lo era um dos maiores desafios dos treinadores de Johto." },
  { id: 244, name: "Entei", types: ["fire"], category: "raro", hp: 115, attack: 115, defense: 85, speed: 100, description: "Dizem que nasceu da erupção de um vulcão. Seu rugido faz vulcões entrarem em erupção.", history: "Entei também nasceu das cinzas da Torre Queimada, revivido por Ho-Oh. A lenda diz que um novo Entei nasce toda vez que um vulcão entra em erupção. No filme 'O Feitiço dos Unown', um Entei ilusório se torna pai protetor da pequena Molly, mostrando seu lado gentil e protetor." },
  { id: 245, name: "Suicune", types: ["water"], category: "raro", hp: 100, attack: 75, defense: 115, speed: 85, description: "Corre pelo mundo purificando águas poluídas. É a encarnação do vento norte.", history: "Suicune, a terceira besta lendária, tem o poder de purificar qualquer água contaminada com um simples toque. Ele corre pelo mundo seguindo o vento norte em busca de águas puras. É o lendário mais ligado a Ho-Oh e só se revela a treinadores de coração verdadeiramente puro." },
  { id: 249, name: "Lugia", types: ["psychic", "flying"], category: "raro", hp: 106, attack: 90, defense: 130, speed: 110, description: "Guardião dos mares. Vive no fundo do oceano porque suas asas são poderosas demais.", history: "Lugia é o guardião dos mares e líder das três aves lendárias — só ele pode acalmar Articuno, Zapdos e Moltres quando brigam. Vive isolado no fundo do oceano porque um único bater de suas asas pode destruir casas inteiras. No filme Pokémon 2000, sua canção salvou o mundo do caos climático." },
  { id: 250, name: "Ho-Oh", types: ["fire", "flying"], category: "raro", hp: 106, attack: 130, defense: 90, speed: 90, description: "Suas penas brilham em sete cores. Dizem que quem o vê terá felicidade eterna.", history: "Ho-Oh foi o primeiro lendário a aparecer no anime, no episódio 1, voando sobre Ash após uma tempestade — um momento que marcou milhões de fãs. Suas penas de sete cores formam arco-íris por onde passa. Foi Ho-Oh quem reviveu Raikou, Entei e Suicune das cinzas da Torre Queimada. Quem o vê, diz a lenda, terá felicidade eterna." },
  { id: 251, name: "Celebi", types: ["psychic", "grass"], category: "raro", hp: 100, attack: 100, defense: 100, speed: 100, description: "Viaja pelo tempo e aparece apenas em eras de paz, deixando florestas floridas.", history: "Celebi é o guardião do tempo e das florestas. Ele viaja entre épocas e só aparece em tempos de paz — por isso sua presença é considerada um bom presságio. No filme 'Pokémon 4Ever', sua história com o jovem Sam, que viaja 40 anos no futuro, é uma das mais comoventes da franquia." },
  { id: 384, name: "Rayquaza", types: ["dragon", "flying"], category: "raro", hp: 105, attack: 150, defense: 90, speed: 95, description: "Vive na camada de ozônio há milhões de anos. Acalma Kyogre e Groudon quando lutam.", history: "Rayquaza vive na camada de ozônio há centenas de milhões de anos, alimentando-se de meteoritos. Quando Kyogre e Groudon despertam e ameaçam destruir o mundo, Rayquaza desce dos céus para encerrar a batalha. Foi o primeiro Pokémon capaz de Mega Evoluir sem pedra, apenas com o poder do movimento Ascensão do Dragão." },
  { id: 382, name: "Kyogre", types: ["water"], category: "raro", hp: 100, attack: 100, defense: 90, speed: 90, description: "Lendário que expandiu os oceanos com chuvas torrenciais. Dorme no fundo do mar.", history: "Na mitologia de Hoenn, Kyogre criou os oceanos com chuvas que duraram eras. Ele dorme em uma fenda abissal até ser despertado. A Equipe Aqua tentou usá-lo para expandir os mares e quase afogou o mundo. Em sua forma Primitiva, Kyogre recupera o poder original da criação." },
  { id: 383, name: "Groudon", types: ["ground"], category: "raro", hp: 100, attack: 150, defense: 140, speed: 90, description: "Lendário que ergueu os continentes. Seu calor intenso faz a chuva evaporar.", history: "Groudon é o rival eterno de Kyogre: enquanto um expandia os mares, o outro erguia os continentes. Seu corpo irradia calor capaz de evaporar tempestades e criar desertos. A Equipe Magma tentou despertá-lo para expandir as terras, mas sem a Esfera Vermelha ele saiu de controle. Seu duelo com Kyogre é a lenda central de Hoenn." },
  { id: 483, name: "Dialga", types: ["steel", "dragon"], category: "raro", hp: 100, attack: 120, defense: 120, speed: 90, description: "Controla o tempo. Dizem que o tempo começou a fluir quando Dialga nasceu.", history: "Segundo os mitos de Sinnoh, Dialga nasceu quando o tempo começou a fluir — seu coração bate no ritmo do tempo. Ele pode acelerar, parar ou rebobinar o fluxo temporal. A Equipe Galáctica tentou capturá-lo para criar um universo novo. Seu rugido, o Rugido do Tempo, é poderoso o suficiente para distorcer a própria realidade." },
  { id: 484, name: "Palkia", types: ["water", "dragon"], category: "raro", hp: 90, attack: 120, defense: 100, speed: 100, description: "Controla o espaço e vive em uma dimensão paralela. Pode distorcer a realidade.", history: "Palkia é o mestre do espaço: cada respiração sua estabiliza o tecido do universo. Ele vive em uma fenda entre dimensões e pode teleportar mundos inteiros. Dizem que seu nascimento deu origem ao próprio conceito de espaço. Quando encontra Dialga, a batalha entre tempo e espaço ameaça rasgar a realidade." },
  { id: 491, name: "Darkrai", types: ["dark"], category: "raro", hp: 70, attack: 90, defense: 90, speed: 125, description: "Provoca pesadelos em quem dorme por perto. Aparece nas noites de lua nova.", history: "Darkrai causa pesadelos involuntariamente — é seu mecanismo de defesa, não maldade. Por isso vive isolado na Ilha Newmoon, longe de todos. No filme 'A Ascensão de Darkrai', ele se revela um herói incompreendido que se sacrifica para proteger a cidade de Alamos. Sua única companhia é Cresselia, cuja pena lunar afasta seus pesadelos." },
  { id: 492, name: "Shaymin", types: ["grass"], category: "raro", hp: 100, attack: 100, defense: 100, speed: 100, description: "Pokémon da gratidão. Transforma terras devastadas em campos de flores.", history: "Shaymin é o Pokémon da Gratidão. Tímido e pequeno, ele enrola o corpo e se disfarça de arbusto florido. Quando sente gratidão verdadeira, as flores de seu corpo desabrocham e ele ganha a forma Celeste, capaz de voar. Dizem que onde Shaymin passa, terras devastadas florescem novamente." },
  { id: 493, name: "Arceus", types: ["normal"], category: "raro", hp: 120, attack: 120, defense: 120, speed: 120, description: "Diz a lenda que criou o universo com seus mil braços. É conhecido como O Original.", history: "Arceus é o deus do mundo Pokémon. A mitologia conta que ele emergiu de um ovo no vazio e moldou o universo com seus mil braços, criando Dialga, Palkia e Giratina para governar tempo, espaço e antimatéria. Com suas Placas elementais, pode assumir qualquer tipo. É simplesmente o Pokémon mais poderoso que existe." },
  { id: 644, name: "Zekrom", types: ["dragon", "electric"], category: "raro", hp: 100, attack: 150, defense: 120, speed: 90, description: "Dragão lendário que incinera o mundo com raios. Auxilia quem busca o ideal.", history: "Zekrom é o dragão do ideal. A lenda de Unova conta que ele e Reshiram eram um único dragão, dividido quando dois irmãos heróis discordaram sobre verdades e ideais. Zekrom se aliou ao irmão que buscava um mundo ideal e, desde então, só aparece para heróis dispostos a lutar por seus sonhos. Sua cauda é um gerador de eletricidade capaz de incinerar o mundo." },
  { id: 643, name: "Reshiram", types: ["dragon", "fire"], category: "raro", hp: 100, attack: 120, defense: 100, speed: 90, description: "Dragão lendário que queima o mundo com chamas. Auxilia quem busca a verdade.", history: "Reshiram é o dragão da verdade, a outra metade do dragão original de Unova. Ele se aliou ao irmão que buscava a verdade e queima com suas chamas tudo o que é falso. Quando sua cauda turbo entra em ignição, o calor altera o clima do planeta inteiro. Só se revela a heróis de coração verdadeiro." },
  { id: 716, name: "Xerneas", types: ["fairy"], category: "raro", hp: 126, attack: 131, defense: 95, speed: 99, description: "Dizem que compartilha vida eterna. Suas chifres brilham em sete cores.", history: "Xerneas é o Pokémon da vida. Quando seus chifres brilham em sete cores, ele compartilha vida eterna com os seres ao redor. Há mil anos, após uma guerra devastadora em Kalos, Xerneas liberou toda sua energia vital para reviver a região e dormiu por milênios em forma de árvore. Seu oposto é Yveltal, o Pokémon da destruição." },
  { id: 717, name: "Yveltal", types: ["dark", "flying"], category: "raro", hp: 126, attack: 131, defense: 95, speed: 99, description: "Quando abre as asas, absorve a energia vital de tudo ao redor.", history: "Yveltal é o Pokémon da destruição. Quando sua vida chega ao fim, ele abre as asas e absorve a energia vital de todos os seres vivos ao redor, voltando a dormir em forma de casulo. Ele e Xerneas formam o ciclo eterno de vida e morte de Kalos — um não pode existir sem o outro." },
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
