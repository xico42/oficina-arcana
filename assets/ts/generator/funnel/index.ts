import {CharAttributes, Gender} from "../types";
import {nd6, ndx} from "../dice";
import {randomGender, randomName} from "../helper";

export interface Craft {
    craft: string;
    equipment: string;
}

const crafts: Craft[] = [
    {craft: "Açougueiro", equipment: "Cutelo, 5 rações e um coelho de estimação"},
    {craft: "Acrobata", equipment: "Corda, uma vara de 10' e uma calça bicolor apertada"},
    {craft: "Afiador de láminas", equipment: "Espada curta, pedra de amolar e 1 P.O."},
    {craft: "Agiota", equipment: "Porrete, lista de devedores e 5 P.O."},
    {craft: "Alfaiate", equipment: "Tesoura afiada, Kit de costura e estilo a frente de seu tempo"},
    {craft: "Alquimista", equipment: "Colher de pau, frasco com urina de morcego e um elixir instável"},
    {craft: "Apostador", equipment: "Dados viciados, dente de ouro e uma faca"},
    {craft: "Apotecário", equipment: "Cajado, poção de alteração de voz e 3 P.O."},
    {craft: "Arauto", equipment: "Adaga, manto com capuz e conhecimento de uma sociedade secreta na região"},
    {craft: "Arquiteto", equipment: "Régua de madeira, pergaminho com estojo e 4 P.O."},
    {craft: "Astrólogo", equipment: "Luneta, uma leitura de signo de um membro do grupo e um livro de profecias"},
    {craft: "Ator", equipment: "Disfarce, espada de madeira e acabou de apresentar uma peça que foi um fiasco na cidade"},
    {craft: "Bêbado", equipment: "Garrafa de vidro, vestes gorfadas e deve 1 P.O. na taverna"},
    {craft: "Bobo da corte", equipment: "Cetro, roupas festivas e ofendeu alguém importante recentemente"},
    {craft: "Burocrata", equipment: "Pena e tinteiro, 5 P.O. e uma herança falsificada"},
    {craft: "Caçador", equipment: "Arco curto, 5 flechas e um cão"},
    {craft: "Caçador de ratos", equipment: "Porrete, ratoeira e um gato"},
    {craft: "Capanga", equipment: "Porrete de duas mãos, uma cicatriz no rosto e 1 P.O."},
    {craft: "Caravaneiro", equipment: "Mula, tempero afrodisíaco e 3 P.O."},
    {craft: "Carcereiro", equipment: "Algemas, corselete de couro e um chicote"},
    {craft: "Carpinteiro", equipment: "Serra, martelo e tábua de madeira"},
    {craft: "Carrasco", equipment: "Machado de duas mãos, capuz de carrasco, uma cabeça de gnomo e 2 P.O."},
    {craft: "Carteador", equipment: "Baralho viciado, uma faca e é procurado em uma cidade"},
    {craft: "Carvoeiro", equipment: "Pá, saco de carvão e pederneira"},
    {craft: "Cavaleiro", equipment: "Mangual, cavalo selado e um ajudante desaparecido"},
    {craft: "Cervejeiro", equipment: "Caneco de pedra e um barril de cerveja"},
    {craft: "Chaveiro", equipment: "Chave-mestra e martelo"},
    {craft: "Cigano", equipment: "Baralho de Tarot, uma viola e besta de uma mão com 5 virotes"},
    {craft: "Cocheiro", equipment: "Chicote, botas com esporas e 2 P.Ο."},
    {craft: "Coletor de Fossas", equipment: "Pá, carrinho de mão com dejetos humanos e uma bandana"},
    {craft: "Coletor de Impostos", equipment: "Pena, tinteiro, lista de aldeões que não pagaram impostos e 5 P.O."},
    {craft: "Comerciante", equipment: "Besta de uma mão, 5 virotes e 5 P.O."},
    {craft: "Contador de Histórias", equipment: "Lamparina, óleo, acredita piamente em uma de suas lendas"},
    {craft: "Contrabandista", equipment: "Soco inglês e mercadoria ilícita"},
    {craft: "Coveiro", equipment: "Pá, Lamparina e uma rabeca"},
    {craft: "Cozinheiro", equipment: "Garfo de ferro, kit de panelas e uma galinha"},
    {craft: "Cronista", equipment: "Livro, pena com tinteiro e uma biografia duvidosa de um guerreiro santo"},
    {craft: "Curandeiro Charlatão", equipment: "Cajado, sangue falso, visceras de animais e óleo \"miraculoso\" que provoca brotoejas"},
    {craft: "Curtidor de Couro", equipment: "Faca, um saco de couro e a galhada de um alce"},
    {craft: "Domesticador de animal exótico", equipment: "Chicote, uma gaiola de bambu e um espeto de ferro"},
    {craft: "Encantador de Serpentes", equipment: "Flauta, cesto de vime e uma serpente banguela"},
    {craft: "Eremita", equipment: "Bengala, pederneira e ração"},
    {craft: "Escriba", equipment: "Livro, pena, tinteiro e conhecimento de uma lingua adicional"},
    {craft: "Escultor", equipment: "Cinzel, argila e um busto mal-feito de si mesmo"},
    {craft: "Espião", equipment: "Faca, disfarce e corda"},
    {craft: "Estivador", equipment: "Corda, machado e uma tatuagem"},
    {craft: "Faquir", equipment: "Sabre, turbante e um tapete de pregos"},
    {craft: "Fazendeiro", equipment: "Forquilha e um leitão"},
    {craft: "Ferreiro", equipment: "Martelo, avental de couro e elmo"},
    {craft: "Flecheiro", equipment: "Arco curto, um saco de penas e Ud4 flechas"},
    {craft: "Frade", equipment: "Um livro biográfico dos santos, um símbolo sagrado e uma barriquinha de cerveja"},
    {craft: "Golpista", equipment: "Adaga e 5 P.O. falsos"},
    {craft: "Guarda", equipment: "Alabarda e corselete de couro"},
    {craft: "Guia", equipment: "Saco de dormir e um cantil"},
    {craft: "Herbalista", equipment: "Foice curta, saco de ervas alucinógenas e cachimbo"},
    {craft: "Inquisidor destituído", equipment: "Cajado, símbolo sagrado e uma lista de pecados"},
    {craft: "Jardineiro", equipment: "Foice longa, saco com muda e 2 P.O."},
    {craft: "Joalheiro", equipment: "Martelo de uma mão, uma lupa e uma gema de 10 P.O."},
    {craft: "Leiteiro", equipment: "Garrafa de leite e um carrinho de mão"},
    {craft: "Lenhador", equipment: "Machado, pederneira e barba magnífica ou belas tranças"},
    {craft: "Lixeiro", equipment: "Saco grande, um espeto de ferro e um amuleto misterioso encontrado"},
    {craft: "Malabarista", equipment: "4 Facas de Arremesso, vestes circenses e uma venda."},
    {craft: "Marujo", equipment: "Arpão, uma ocarina e um olho de vidro"},
    {craft: "Matador de aluguel", equipment: "Adaga, manto com capuz e um frasco de veneno."},
    {craft: "Médico", equipment: "Punhal, 10 bandagens e máscara contra praga"},
    {craft: "Mendigo", equipment: "Chapéu de coleta e muleta"},
    {craft: "Menestrel", equipment: "Alaúde, uma corneta e um chapéu com penas de pavão"},
    {craft: "Mercenário", equipment: "Um sabre e um corselete de couro"},
    {craft: "Miche/Prostituta", equipment: "Vestes sedutoras e 2 P.O."},
    {craft: "Minerador", equipment: "Picareta, um chapéu com vela e uma pepita de ouro dos tolos"},
    {craft: "Moleiro", equipment: "Pilão, saco de farinha e um livro sobre um cavaleiro lunático"},
    {craft: "Navegador", equipment: "Uma luneta, um sabre, pergaminho, pena e tinteiro"},
    {craft: "Nobre decadente", equipment: "Uma rapieira, um comprovante de nobreza e 5 P.O."},
    {craft: "Oleiro", equipment: "Um bloco de argila, ferramentas de escultor e uma ânfora de óleo"},
    {craft: "Orfão fugitivo", equipment: "Estilingue e roupas rasgadas"},
    {craft: "Padeiro", equipment: "Uma på de padeiro, rolo de massa e 2 påes"},
    {craft: "Pastor de ovelhas", equipment: "Cajado, um casaco de là e uma ovelha pelada"},
    {craft: "Pedreiro", equipment: "Marreta, martelo e cinzel"},
    {craft: "Pescador", equipment: "Vara de pesca, saco com minhocas e rede"},
    {craft: "Pintor", equipment: "Pincel, estojo de couro com pigmentos em pó e 2 P.Ο."},
    {craft: "Pirata", equipment: "Gancho com corda de 50', faca e um papagaio"},
    {craft: "Poeta", equipment: "Pergaminho, pena, tinteiro e um poema romântico"},
    {craft: "Político em desfavor", equipment: "Uma adaga, vestes luxuosas e 5 Р.О."},
    {craft: "Pregador religioso", equipment: "Dedo de um santo, túnica alva e uma banqueta"},
    {craft: "Produtor de Velas", equipment: "3 velas, castiçal de prata e 2 P.O."},
    {craft: "Provador", equipment: "4x Queijos nobres, 4x vinhos raros e um frasco de arsènio."},
    {craft: "Queijeiro", equipment: "Uma roda de queijo fedido, uma faca e 2 P.O."},
    {craft: "Renegado de uma religião obscura", equipment: "Adaga cerimonial e uma marca maldita no corpo"},
    {craft: "Sapateiro", equipment: "Sapatos de bico, martelo e 4 P.O."},
    {craft: "Saqueador", equipment: "Cimitarra, escudo pequeno e 5 tochas"},
    {craft: "Servo", equipment: "Vestes encardidas, cicatrizes nas costas e 3 Tochas"},
    {craft: "Soprador de vidros", equipment: "4x frascos de vidro, tubo de sopro (como zarabatana) e 5 dardos e 5 P.O."},
    {craft: "Taverneiro", equipment: "Avental, 4 Rações e Garrafa de hidromel"},
    {craft: "Telheiro", equipment: "Machadinha, 3 telhas e 2 Ρ.Ο."},
    {craft: "Tingidor", equipment: "Bastão, tecido branco, frasco de pigmento e 3 P.O."},
    {craft: "Tocheiro", equipment: "4 tochas e pederneira"},
    {craft: "Treinador de Cavalos", equipment: "Chicote, corda e 4 P.O."},
    {craft: "Valete", equipment: "Uniforme, escovão de prata e 2 P.Ο."},
    {craft: "Vendedor ambulante", equipment: "Vara de 10', dois cestos com quinquilharias e 4 P.O."},
    {craft: "Vidente", equipment: "Bola de cristal, runas de adivinhação e 2 P.O."},

    {craft: "Acadêmico", equipment: "Livro, pena, tinteiro e um retrato de seu mestre"},
    {craft: "Advogado trambiqueiro", equipment: "Faca, pena com tinteiro, uma túnica luxuosa e 2 P.O."},
    {craft: "Agitador", equipment: "Forquilha, 5 tochas e um apito"},
    {craft: "Ajudante de cozinha", equipment: "Panelão de ferro, 5 rações e uma concha de ferro grande"},
    {craft: "Amaldiçoado", equipment: "Alma condenada por feitiçaria obscura, um símbolo profano e uma marca maldita no corpo"},
    {craft: "Andarilho", equipment: "Cajado, um manto e um passarinho de estimação"},
    {craft: "Antiquário", equipment: "Adaga de bronze, uma mochila e uma tapeçaria nobre"},
    {craft: "Aparicionista", equipment: "Uma lamparina com vidro azulado, um manto com estrelas e chapéu pontudo"},
    {craft: "Apicultor", equipment: "Máscara de vime, cesto com colmeia e frasco de mel"},
    {craft: "Bandido", equipment: "Balaclava, tacape e um anúncio de recompensa por sua cabeça"},
    {craft: "Barbeiro", equipment: "Navalha e um alicate"},
    {craft: "Barqueiro", equipment: "Remo e uma corda"},
    {craft: "Batedor de Carteira", equipment: "Faca, manto com capuz, uma carta roubada e I P.O."},
    {craft: "Boémio", equipment: "Garrafa de hidromel, cachimbo longo e ervas de fumo"},
    {craft: "Bucaneiro", equipment: "Alfanje e 5 rações"},
    {craft: "Caçador de Recompensas", equipment: "Besta leve, 10 virotes e 2 P.O."},
    {craft: "Camponês", equipment: "Foice longa, saco de farinha e um carrinho de mão"},
    {craft: "Carpideiro", equipment: "Lenço, vestes negras, um anel furtado"},
    {craft: "Carroceiro", equipment: "Mula e carroça"},
    {craft: "Cavador de Valas", equipment: "Pá, balde e botas de cano alto"},
    {craft: "Cavalarico", equipment: "Corda, chicote e 5 rações"},
    {craft: "Chapeleiro", equipment: "Barbante, tesoura, um chapéu exótico e 3 P.O."},
    {craft: "Colheiteiro", equipment: "Cesto, vara colhedora de frutas e 5 maçãs"},
    {craft: "Colono", equipment: "Uma enxada, chapéu de palha e fumo de mascar"},
    {craft: "Construtor Naval", equipment: "Martelo, tábua de madeira e um projeto de escuna"},
    {craft: "Contorcionista", equipment: "Aro de madeira, um collant bicolor e um corpo elástico"},
    {craft: "Corneteiro", equipment: "Corneta, tabarda e chapéu plumado"},
    {craft: "Cortesão", equipment: "Adaga, 5 P.O. e um favor devido a ele"},
    {craft: "Costureiro", equipment: "Agulha longa, linha de costura, tesoura e uma luva de malha"},
    {craft: "Cultista", equipment: "Corrente, manto carmesim e um idolo maldito"},
    {craft: "Dançarino", equipment: "Vestes de luxo, bastão com fitas e pandeiro"},
    {craft: "Destilador", equipment: "Fole, barril pequeno e funil de latão"},
    {craft: "Devoto", equipment: "Símbolo sagrado, maça e uma batina"},
    {craft: "Diabolista", equipment: "Chicote e 5 velas negras"},
    {craft: "Dramaturgo", equipment: "Disfarce, maquiagem e um fantoche"},
    {craft: "Duelista", equipment: "Rapieira, adaga e uma carta de amor"},
    {craft: "Engenheiro de cerco", equipment: "Besta pesada, 10 virotes e uma corda"},
    {craft: "Enterrado vivo", equipment: "Mortalha e 5 pregos enferrujados"},
    {craft: "Escapista", equipment: "Corrente, cadeado, algemas, 2 frascos de óleo e uma adaga"},
    {craft: "Escravo fugitivo", equipment: "Grilhões e tanga de pano"},
    {craft: "Escudeiro", equipment: "Escudo pequeno e espada curta"},
    {craft: "Escultor de ossos", equipment: "Cinzel, lupa e um fêmur"},
    {craft: "Esqualido", equipment: "Nada"},
    {craft: "Exilado", equipment: "Uma rapieira, vestes de um reino distante e 2 P.O."},
    {craft: "Explorador", equipment: "Peixeira, mochila, Ud4 cravos de ferro e cantil"},
    {craft: "Extorsionista", equipment: "Porrete com espinhos, um segredo obscuro e 2 P.Ο."},
    {craft: "Fabricante de cordas", equipment: "Corda, pote de cera e uma foice de uma mão"},
    {craft: "Falso Messias", equipment: "Visões alucinatórias, chagas no corpo e uma bata rasgada"},
    {craft: "Fanático", equipment: "Açoite, tanga de pano e um símbolo sagrado"},
    {craft: "Feirante", equipment: "Ancinho, 10 frutas da estação e um saco grande"},
    {craft: "Fermentador de Hidromel", equipment: "Garrafa de Hidromel, frasco de mel, avental e copo de chifre"},
    {craft: "Filósofo", equipment: "Livro de metafisica, um crânio e uma toga antiquada"},
    {craft: "Floricultor", equipment: "Foice curta, um buquê de flores e 2 P.O."},
    {craft: "Forasteiro", equipment: "Um dicionário, saco de dormir e 3 P.O."},
    {craft: "Fundidor", equipment: "Fole, pinça de forja, avental de couro"},
    {craft: "Funerário", equipment: "Caixão, Ud6 pregos, martelo e um ramo de alecrim"},
    {craft: "Funileiro", equipment: "Broca manual, tesoura, pinça e 3 P.O."},
    {craft: "Galanteador", equipment: "Uma rosa, uma adaga e muitos inimigos"},
    {craft: "Glutão", equipment: "Ud10 rações e uma bela travessa"},
    {craft: "Gondoleiro", equipment: "Remo longo, um chapéu de palha e um cinto de cetim vermelho"},
    {craft: "Hedonista", equipment: "Coroa de louros, cantil com aguardente e coxa de faisão"},
    {craft: "Herdeiro falido", equipment: "Gostos extravagantes, vestes elegantes e 2 P.O."},
    {craft: "Idoso", equipment: "Bengala, incontinencia urinária, boca desdentada e 5 P.O."},
    {craft: "Incendiário", equipment: "2 frascos de óleo, pederneira, 5 tochas"},
    {craft: "Ladrão de Túmulos", equipment: "Pá, um dente de ouro e 5 tochas."},
    {craft: "Lavadeiro", equipment: "Cesto, barra de sabão e 1 P.Ο."},
    {craft: "Leproso miraculosamente curado", equipment: "Símbolo sagrado e um dedo em conserva"},
    {craft: "Louco da cidade", equipment: "Saco de fezes e estilingue"},
    {craft: "Mágico de rua", equipment: "Chapéu com fundo falso, lebre branca e baralho"},
    {craft: "Médium", equipment: "Um tábua de madeira com inscrições rúnicas, um chocalho de ossos, uma vela vermelha e 5 P.Ο."},
    {craft: "Mercador Exótico", equipment: "Saca de especiarias, um rolo de seda fina, uma cimitarra e 4 P.O."},
    {craft: "Mergulhador", equipment: "Arpão de ossos, mochila com 10 ostras e uma concha exuberante"},
    {craft: "Miliciano", equipment: "Forquilha, Ud4 tochas e escudo de tampo de mesa"},
    {craft: "Místico", equipment: "Oferenda, tatuagens rúnicas e um cajado"},
    {craft: "Ocultista", equipment: "Cajado de ossos e manto com capuz e máscara ritualística"},
    {craft: "Ourives", equipment: "Pepita de ouro, martelo e balança"},
    {craft: "Pai/mãe de família", equipment: "Uma criança suja e uma vassoura"},
    {craft: "Palhaço", equipment: "Maquiagem, roupas espalhafatosas e um martelo de duas mãos"},
    {craft: "Parteiro", equipment: "Jarro de prata, uma banqueta e um cesto com panos limpos"},
    {craft: "Peleteiro", equipment: "Corselete de couro, chapéu de pele de texugo e cantil"},
    {craft: "Peregrino", equipment: "Bengala, livro de preces e direções para um santuário"},
    {craft: "Perfumista", equipment: "Frasco de perfume de mau gosto, pilão e saco de ervas"},
    {craft: "Pregoeiro", equipment: "Megafone de couro, pergaminho extenso com anúncios do dia e uma boina de veludo"},
    {craft: "Prisioneiro fugitivo", equipment: "Barra de metal, grilhões e um passado nebuloso"},
    {craft: "Profeta", equipment: "Cajado, símbolo sagrado e sonhos supostamente premonitórios"},
    {craft: "Psicopata", equipment: "Machado de uma mão, 5 pedaços de carne e um olhar desconcertante"},
    {craft: "Pugilista", equipment: "Colar de dentes e 2 P.O."},
    {craft: "Remador", equipment: "Remo, tanga de panos e uma marca tatuada em seu corpo"},
    {craft: "Retratista", equipment: "Pincel, nanquim e uma tela"},
    {craft: "Sabotador", equipment: "Picareta, 2 frascos de óleo e pederneira"},
    {craft: "Salteador", equipment: "Besta leve, 10 virotes e chapéu com pluma"},
    {craft: "Selvagem", equipment: "Gibão de peles, um machado de duas mãos e um berrante"},
    {craft: "Senescal", equipment: "Casaca de gala com brasão, sineta de latão e bandeja de prata"},
    {craft: "Sobrevivencialista", equipment: "Cantil, pederneira e 5 rações"},
    {craft: "Treinador de Cachorros", equipment: "Apito, 5 rações e um cachorro treinado"},
    {craft: "Veterano de guerra", equipment: "Lança e corselete de couro"},
    {craft: "Viciado", equipment: "Extrato inebriante de lótus negra e vestes imundas"},
    {craft: "Vigilante", equipment: "Manto com capuz e um pé de cabra"},
    {craft: "Viticultor", equipment: "Garrafa de vinho, 5 cachos de uva e uma faca"},
    {craft: "Xamã", equipment: "Zarabatana, saco de ervas, cabeça encolhida"},
]

function randomCraft(): Craft {
    const randomIndex = Math.floor(Math.random() * crafts.length);
    return crafts[randomIndex];
}

export interface FunnelOptions {
    gender: Gender;
}

export function generateFunnelCharacter(options: FunnelOptions) {
    const craft = randomCraft();

    let attributes = {
        'for': nd6(3),
        'des': nd6(3),
        'con': nd6(3),
        'int': nd6(3),
        'sab': nd6(3),
        'car': nd6(3),
    };

    const attributeMod: Record<number, number> = {
        3: -3,
        4: -2,
        5: -2,
        6: -1,
        7: -1,
        8: -1,
        9: 0,
        10: 0,
        11: 0,
        12: 0,
        13: 1,
        14: 1,
        15: 1,
        16: 2,
        17: 2,
        18: 3,
    }


    let gender = options.gender || randomGender();
    let name = randomName(gender);

    return {
        craft,
        attributes: {
            for: {
                name: 'for',
                value: attributes.for,
                mod: attributeMod[attributes.for],
            },
            des: {
                name: 'des',
                value: attributes.des,
                mod: attributeMod[attributes.des],
            },
            con: {
                name: 'con',
                value: attributes.con,
                mod: attributeMod[attributes.con],
            },
            int: {
                name: 'int',
                value: attributes.int,
                mod: attributeMod[attributes.int],
            },
            sab: {
                name: 'sab',
                value: attributes.sab,
                mod: attributeMod[attributes.sab],
            },
            car: {
                name: 'car',
                value: attributes.car,
                mod: attributeMod[attributes.car],
            },
        } as CharAttributes,
        jdp: [17, 17, 17],
        hp: ndx(1, 4),
        armorClass: 10 + attributeMod[attributes.des],
        ancestry: getAncestry(),
        gender,
        name,
        movement: 30,
    }
}

function getAncestry() {
    const ancestries = {
        'humano': {
            name: 'Humano',
            size: 'Médio',
        },
        'elfo': {
            name: 'Elfo',
            size: 'Médio',
        },
        'meio-elfo': {
            name: 'Meio-Elfo',
            size: 'Médio',
        },
        'anao': {
            name: 'Anão',
            size: 'Pequeno',
        },
        'pequenino': {
            name: 'Pequenino',
            size: 'Pequeno',
        },
        'gnomo': {
            name: 'Gnomo',
            size: 'Pequeno',
        },
        'orc': {
            name: 'Orc',
            size: 'Médio',
        },
        'goblin': {
            name: 'Goblin',
            size: 'Pequeno',
        },
    };

    const val = ndx(1, 100);

    if (val <= 40) {
        return ancestries.humano;
    }

    if (val <= 50) {
        return ancestries.orc;
    }

    if (val <= 65) {
        return ancestries.pequenino;
    }

    if (val <= 75) {
        return ancestries.anao;
    }

    if (val <= 85) {
        return ancestries.goblin;
    }

    if (val <= 90) {
        return ancestries["meio-elfo"];
    }

    if (val <= 95) {
        return ancestries.elfo;
    }

    return ancestries.gnomo;
}