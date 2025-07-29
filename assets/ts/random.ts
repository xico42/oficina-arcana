interface Attributes {
    for: number,
    des: number,
    con: number,
    int: number,
    sab: number,
    car: number,
}

type AttributeName = keyof Attributes;

interface Attribute {
    name: AttributeName,
    value: number,
}

interface ClassDetails {
    title: string,
    mainAttribute: AttributeName,
    hitDice: number,
    movement: number,
    jdp(level: number): number[],
}

type ClassDetailsWithName = ClassDetails & {
    name: string,
}

type ClassName = keyof ClassRegistry;

type ClassRegistry = Record<string, ClassDetails>;

type Gender = 'M' | 'F';

/**
 * Opções de customização do gerador de personagens.
 *
 *  - gender: 'F' para feminino, 'M' para masculino ou null para aleatório (padrão).
 *  - class: Nome da classe (ex: 'mago', 'guerreiro') ou null para aleatório (padrão).
 *  - level: Nível do personagem (padrão é 1).
 *  - ancestry: Ancestralidade do personagem (ex: 'Humano', 'Elfo') ou null para aleatório (padrão).
 */
interface Options {
    gender?: Gender,
    class?: ClassName,
    level?: number,
    ancestry?: string,
}

// Simula a rolagem de um dado de x lados.
function dx(x: number): number {
    return Math.floor(Math.random() * x) + 1;
}

// Simula a rolagem de n dados de x lados e retorna a soma.
function ndx(n: number, x: number): number {
    let sum = 0
    for (let i = 0; i < n; i++) {
        sum += dx(x);
    }
    return sum;
}

// Simula a rolagem de n dados de 6 lados e retorna a soma.
function nd6(n: number): number {
    return ndx(n, 6);
}

// Verifica se os atributos gerados precisam ser recriados.
//
// Atualmente recriamos personagens sempre que o maior atributo for menor que 13
// ou se mais de dois atributos forem menores que 9.
function shouldRecreateAttributes(attributes: Attributes) {
    let total = 0;
    let threshold = 9;
    Object.keys(attributes).forEach((key) => {
        if (attributes[key as AttributeName] < threshold) {
            total += 1;
        }
    });

    let highest = highestAttribute(attributes);

    return total > 2 || highest.value < 13;
}

// Encontra o maior atributo entre os atributos fornecidos e retorna seu nome e valor.
function highestAttribute(attributes: Attributes): Attribute {
    const highest = Object.entries(attributes).reduce(
        (max, [name, value]) => {
            return value > max.value ? { name: name as keyof Attributes, value } : max;
        },
        { name: 'for' as keyof Attributes, value: -Infinity }
    );

    return highest;
}

// Gera atributos aleatórios para o personagem, garantindo que eles atendam aos critérios definidos em shouldRecreateAttributes.
function generateAttributes(): Attributes {
    while (true) {
        let attributes = {
            'for': nd6(3),
            'des': nd6(3),
            'con': nd6(3),
            'int': nd6(3),
            'sab': nd6(3),
            'car': nd6(3),
        };

        if (!shouldRecreateAttributes(attributes)) {
            return attributes;
        }
    }
}

// Obtém a classe do personagem com base nas opções fornecidas ou seleciona uma aleatoriamente.
function getClass(options: Options): ClassDetailsWithName {
    let warriorJdp = function (level: number): number[] {
        if (level <= 2) {
            return [12, 13, 16];
        }

        if (level <= 4) {
            return [11, 12, 15];
        }

        if (level <= 6) {
            return [10, 11, 14];
        }

        if (level <= 8) {
            return [9, 10, 12];
        }

        if (level <= 10) {
            return [8, 9, 10];
        }

        if (level <= 13) {
            return [6, 7, 9];
        }

        if (level <= 20) {
            return [5, 6, 7];
        }

        return [4, 4, 6]
    };

    let classes: ClassRegistry = {
        'legionario': {
            title: 'Legionário',
            mainAttribute: 'for',
            hitDice: 8,
            movement: 30,
            jdp: warriorJdp,
        },
        'barbaro': {
            title: 'Bárbaro',
            mainAttribute: 'for',
            hitDice: 8,
            movement: 30,
            jdp: warriorJdp,
        },
        'gladiador': {
            title: 'Gladiador',
            mainAttribute: 'for',
            hitDice: 8,
            movement: 40,
            jdp: warriorJdp,
        },
        'lanceiro': {
            title: 'Lanceiro',
            mainAttribute: 'for',
            hitDice: 8,
            movement: 30,
            jdp: warriorJdp,
        },
        'paladino': {
            title: 'Paladino',
            mainAttribute: 'for',
            hitDice: 8,
            movement: 30,
            jdp: function (level) {
                if (level <= 2) {
                    return [13, 13, 14];
                }

                if (level <= 4) {
                    return [12, 12, 13];
                }

                if (level <= 6) {
                    return [11, 11, 12];
                }

                if (level <= 8) {
                    return [8, 8, 11];
                }

                if (level <= 10) {
                    return [7, 7, 10];
                }

                if (level <= 13) {
                    return [6, 6, 8];
                }

                if (level <= 20) {
                    return [5, 5, 7];
                }

                return [4, 4, 5]; // Para nível 21+
            },
        },
        'arqueiro': {
            title: 'Arqueiro',
            mainAttribute: 'des',
            hitDice: 8,
            movement: 30,
            jdp: warriorJdp,
        },
        'ladrao': {
            title: 'Ladrão',
            mainAttribute: 'des',
            hitDice: 4,
            movement: 40,
            jdp: function (level: number) {
                if (level <= 2) {
                    return [14, 12, 17];
                }

                if (level <= 4) {
                    return [13, 11, 16];
                }

                if (level <= 6) {
                    return [12, 10, 15];
                }

                if (level <= 8) {
                    return [11, 9, 14];
                }

                if (level <= 10) {
                    return [9, 7, 12];
                }

                if (level <= 13) {
                    return [7, 6, 10];
                }

                if (level <= 20) {
                    return [6, 5, 8];
                }

                return [5, 4, 7]; // Para nível 21+
            },
        },
        'assassino': {
            title: 'Assassino',
            mainAttribute: 'des',
            hitDice: 4,
            movement: 30,
            jdp: function (level) {
                if (level <= 2) {
                    return [12, 12, 17];
                }

                if (level <= 4) {
                    return [11, 11, 16];
                }

                if (level <= 6) {
                    return [10, 10, 15];
                }

                if (level <= 8) {
                    return [9, 9, 14];
                }

                if (level <= 10) {
                    return [8, 7, 12];
                }

                if (level <= 13) {
                    return [6, 6, 10];
                }

                if (level <= 20) {
                    return [5, 5, 8];
                }

                return [4, 4, 7]; // For level 21+
            },
        },
        'desbravador': {
            title: 'Desbravador',
            mainAttribute: 'des',
            hitDice: 6,
            movement: 30,
            jdp: function (level) {
                if (level <= 2) {
                    return [13, 12, 15];
                }

                if (level <= 4) {
                    return [12, 11, 14];
                }

                if (level <= 6) {
                    return [11, 10, 13];
                }

                if (level <= 8) {
                    return [10, 8, 12];
                }

                if (level <= 10) {
                    return [9, 6, 10];
                }

                if (level <= 13) {
                    return [8, 5, 8];
                }

                if (level <= 20) {
                    return [7, 5, 6];
                }

                return [4, 4, 5]; // Para nível 21+
            },
        },
        'espiao': {
            title: 'Espião',
            mainAttribute: 'des',
            hitDice: 4,
            movement: 30,
            jdp: function (level) {
                if (level <= 2) {
                    return [14, 12, 14];
                }

                if (level <= 4) {
                    return [13, 11, 13];
                }

                if (level <= 6) {
                    return [12, 10, 12];
                }

                if (level <= 8) {
                    return [11, 9, 11];
                }

                if (level <= 10) {
                    return [9, 7, 9];
                }

                if (level <= 13) {
                    return [7, 6, 7];
                }

                if (level <= 20) {
                    return [6, 5, 6];
                }

                return [5, 4, 5]; // Para nível 21+
            },
        },
        'monge': {
            title: 'Monge',
            mainAttribute: 'int',
            hitDice: 6,
            movement: 40,
            jdp: function (level) {
                if (level <= 2) {
                    return [13, 12, 15];
                }

                if (level <= 4) {
                    return [12, 11, 14];
                }

                if (level <= 6) {
                    return [11, 10, 13];
                }

                if (level <= 8) {
                    return [10, 8, 12];
                }

                if (level <= 10) {
                    return [9, 6, 10];
                }

                if (level <= 13) {
                    return [8, 5, 8];
                }

                if (level <= 20) {
                    return [7, 5, 6];
                }

                return [4, 4, 5]; // Para nível 21+
            },
        },
        'mago': {
            title: 'Mago',
            mainAttribute: 'int',
            hitDice: 4,
            movement: 30,
            jdp: function (level) {
                if (level <= 2) {
                    return [15, 17, 12];
                }

                if (level <= 4) {
                    return [14, 16, 11];
                }

                if (level <= 6) {
                    return [13, 15, 10];
                }

                if (level <= 8) {
                    return [13, 14, 9];
                }

                if (level <= 10) {
                    return [12, 12, 7];
                }

                if (level <= 13) {
                    return [12, 10, 5];
                }

                if (level <= 20) {
                    return [11, 8, 4];
                }

                return [10, 6, 4]; // Para nível 21+
            },
        },
        'ilusionista': {
            title: 'Ilusionista',
            mainAttribute: 'int',
            hitDice: 4,
            movement: 30,
            jdp: function (level) {
                if (level <= 2) {
                    return [15, 14, 13];
                }

                if (level <= 4) {
                    return [14, 13, 12];
                }

                if (level <= 6) {
                    return [13, 12, 11];
                }

                if (level <= 8) {
                    return [13, 11, 10];
                }

                if (level <= 10) {
                    return [12, 10, 9];
                }

                if (level <= 13) {
                    return [12, 9, 8];
                }

                if (level <= 20) {
                    return [11, 8, 7];
                }

                return [10, 7, 6]; // Para nível 21+
            },
        },
        'necromante': {
            title: 'Necromante',
            mainAttribute: 'int',
            hitDice: 4,
            movement: 30,
            jdp: function (level) {
                if (level <= 2) {
                    return [13, 17, 13];
                }

                if (level <= 4) {
                    return [12, 16, 12];
                }

                if (level <= 6) {
                    return [11, 15, 11];
                }

                if (level <= 8) {
                    return [10, 14, 10];
                }

                if (level <= 10) {
                    return [8, 12, 9];
                }

                if (level <= 13) {
                    return [6, 10, 8];
                }

                if (level <= 20) {
                    return [4, 8, 7];
                }

                return [4, 6, 6]; // Para nível 21+
            },
        },
        'psionico': {
            title: 'Psiônico',
            mainAttribute: 'int',
            hitDice: 4,
            movement: 30,
            jdp: function (level) {
                if (level <= 2) {
                    return [15, 14, 13];
                }

                if (level <= 4) {
                    return [14, 13, 12];
                }

                if (level <= 6) {
                    return [13, 12, 11];
                }

                if (level <= 8) {
                    return [13, 11, 10];
                }

                if (level <= 10) {
                    return [12, 10, 9];
                }

                if (level <= 13) {
                    return [12, 8, 8];
                }

                if (level <= 20) {
                    return [11, 6, 7];
                }

                return [10, 5, 6]; // Para nível 21+
            },
        },
        'clerigo': {
            title: 'Clérigo',
            mainAttribute: 'sab',
            hitDice: 6,
            movement: 30,
            jdp: function (level) {
                if (level <= 2) {
                    return [12, 14, 13];
                }

                if (level <= 4) {
                    return [11, 13, 12];
                }

                if (level <= 6) {
                    return [10, 12, 11];
                }

                if (level <= 8) {
                    return [9, 11, 10];
                }

                if (level <= 10) {
                    return [8, 9, 9];
                }

                if (level <= 13) {
                    return [7, 7, 7];
                }

                if (level <= 20) {
                    return [6, 6, 6];
                }

                return [5, 5, 4]; // Para nível 21+
            },
        },
        'druida': {
            title: 'Druida',
            mainAttribute: 'sab',
            hitDice: 6,
            movement: 30,
            jdp: function (level) {
                if (level <= 2) {
                    return [12, 14, 13];
                }

                if (level <= 4) {
                    return [11, 13, 12];
                }

                if (level <= 6) {
                    return [10, 12, 11];
                }

                if (level <= 8) {
                    return [9, 11, 10];
                }

                if (level <= 10) {
                    return [7, 9, 9];
                }

                if (level <= 13) {
                    return [5, 7, 8];
                }

                if (level <= 20) {
                    return [5, 6, 7];
                }

                return [4, 5, 5]; // Para nível 21+
            },
        },
        'bardo': {
            title: 'Bardo',
            mainAttribute: 'car',
            hitDice: 4,
            movement: 30,
            jdp: function (level) {
                if (level <= 2) {
                    return [17, 14, 13];
                }

                if (level <= 4) {
                    return [16, 13, 12];
                }

                if (level <= 6) {
                    return [15, 12, 11];
                }

                if (level <= 8) {
                    return [14, 11, 10];
                }

                if (level <= 10) {
                    return [12, 9, 8];
                }

                if (level <= 13) {
                    return [10, 7, 6];
                }

                if (level <= 20) {
                    return [8, 5, 5];
                }

                return [6, 4, 4]; // Para nível 21+
            },
        },
    }

    let classNames = Object.keys(classes);

    let randomClass = options.class || classNames[Math.floor(Math.random() * classNames.length)];

    return {
        ...classes[randomClass],
        name: randomClass,
    }
}

// Gera uma ancestralidade aleatória para o personagem.
function randomAncestry() {
    const ancestries = [
        {
            name: 'Humano',
            size: 'Médio',
        },
        {
            name: 'Elfo',
            size: 'Médio',
        },
        {
            name: 'Meio-Elfo',
            size: 'Médio',
        },
        {
            name: 'Anão',
            size: 'Pequeno',
        },
        {
            name: 'Pequenino',
            size: 'Pequeno',
        },
        {
            name: 'Gnomo',
            size: 'Pequeno',
        },
        {
            name: 'Orc',
            size: 'Médio',
        },
        {
            name: 'Goblin',
            size: 'Pequeno',
        },
    ];
    return ancestries[Math.floor(Math.random() * ancestries.length)];
}

// Gera um gênero aleatório para o personagem, retornando 'M' ou 'F'.
function randomGender(): Gender {
    const genders: Gender[] = ['M', 'F'];
    return genders[Math.floor(Math.random() * genders.length)];
}

// Gera um nome aleatório para o personagem com base no gênero fornecido.
function randomName(gender: Gender) {
    const femaleNames = ['Abigail', 'Diovana', 'Adélia', 'Adalgisa', 'Adelaide', 'Afonsina', 'Agostina', 'Alberta', 'Albina', 'Altina', 'Alzira', 'Amábile', 'Amália', 'Amélia', 'Anastácia', 'Andradina', 'Angelina', 'Antônia', 'Antonela', 'Aparecida', 'Aristotelina', 'Arlete', 'Artília', 'Aurélia', 'Auridete', 'Aurora', 'Belarmina', 'Benedita', 'Benvinda', 'Berenice', 'Betina', 'Bibiana', 'Brasília', 'Brasilina', 'Caetana', 'Caetanela', 'Camélia', 'Carlota', 'Carmela', 'Carmelina', 'Carmelita', 'Carmem', 'Cassilda', 'Cecília', 'Celestina', 'Célia', 'Celina', 'Cesária', 'Charlotte', 'Cícera', 'Cida', 'Clarice', 'Claudete', 'Clementina', 'Cleonice', 'Clotilde', 'Cora', 'Coralina', 'Corina', 'Conceição', 'Consuelo', 'Cremilda', 'Custódia', 'Dalva', 'Delfina', 'Deolinda', 'Desidéria', 'Dina', 'Dinah', 'Dionísia', 'Dirce', 'Dolores', 'Domênica', 'Domitila', 'Dora', 'Doralice', 'Dóris', 'Dulce', 'Dulcinéia', 'Elda', 'Edelvives', 'Elenice', 'Eleonor', 'Eleonora', 'Élides', 'Elizabete', 'Elvira', 'Elza', 'Engrácia', 'Ermelinda', 'Ermengarda', 'Ermínia', 'Ernestina', 'Escolástica', 'Esmênia', 'Esmeralda', 'Esperança', 'Estefânia', 'Estér', 'Etelvina', 'Eulália', 'Eufransina', 'Faní', 'Felícia', 'Felipa', 'Filomena', 'Firmina', 'Flausína', 'Florentina', 'Florinda', 'Francisca', 'Generosa', 'Georgette', 'Geracina', 'Geraldina', 'Gertrudes', 'Gilda', 'Glória', 'Gorete', 'Graça', 'Guilhermina', 'Henriqueta', 'Helga', 'Hermenegilda', 'Hilda', 'Hildete', 'Hirdete', 'Hortência', 'Iná', 'Iolanda', 'Ione', 'Iracema', 'Íria', 'Ismália', 'Isolda', 'Isolina', 'Ivete', 'Izilda', 'Jandira', 'Jesuína', 'Joaquina', 'Jocasta', 'Josefa', 'Josefina', 'Josilda', 'Jovina', 'Judite', 'Julieta', 'Jurema', 'Jussara', 'Justina', 'Juventina', 'Laurinda', 'Leocádia', 'Leonor', 'Leontina', 'Licínia', 'Linda', 'Lourdes', 'Lucélia', 'Lucila', 'Lucinda', 'Luzia', 'Madalena', 'Maitê', 'Malva', 'Malvina', 'Marcília', 'Marcolina', 'Marilene', 'Marilda', 'Marinalva', 'Margarete', 'Marlene', 'Marilene', 'Marilú', 'Martina', 'Matilde', 'Matilda', 'Mercedes', 'Mirabel', 'Mirtes', 'Morgana', 'Narcisa', 'Nazaré', 'Nair', 'Neide', 'Nemésia', 'Neusa', 'Nilsa', 'Nícia', 'Norma', 'Paulina', 'Penha', 'Perfíria', 'Petrônia', 'Petúnia', 'Poliana', 'Presciliana', 'Quitéria', 'Quiterina', 'Odete', 'Odila', 'Ofélia', 'Olga', 'Otilia', 'Pedrina', 'Raimunda', 'Regina', 'Romilda', 'Risoleta', 'Rosália', 'Rosana', 'Rose', 'Rosemeire', 'Rosilda', 'Rubinéia', 'Rufina', 'Salustiana', 'Salviana', 'Selestina', 'Semíramis', 'Severina', 'Solineuza', 'Soraia', 'Tâmara', 'Tânia', 'Tarsila', 'Teresina', 'Tereza', 'Terezinha', 'Tomásia', 'Úrsula', 'Valdirene', 'Valentina', 'Valquíria', 'Vanda', 'Veralice', 'Verônica', 'Vilma', 'Virgínia', 'Zélia', 'Zenaide', 'Zenilde', 'Zilda', 'Zoraide', 'Zuleika', 'Zuleide', 'Zulmira'];
    const maleNames = ['Abel', 'Abelardo', 'Abílio', 'Adailton', 'Adauto', 'Adão', 'Adimilson', 'Adolfo', 'Adoniram', 'Afonso', 'Agenor', 'Agnaldo', 'Agostinho', 'Alberto', 'Albino', 'Aldebair', 'Aloísio', 'Alonso', 'Alvares', 'Álvaro', 'Alves', 'Amadeu', 'Amado', 'Amaro', 'Ambrósio', 'Anacleto', 'Anastácio', 'Andrade', 'Anélcio', 'Anésio', 'Aníbal', 'Antenor', 'Apolinário', 'Apolônio', 'Arcanjo', 'Ari', 'Ariano', 'Ariovaldo', 'Aristeu', 'Arlindo', 'Arnaldo', 'Arnóbio', 'Aristênio', 'Aristides', 'Astolfo', 'Astrogildo', 'Ataídes', 'Átila', 'Balbino', 'Baltazar', 'Bardomiano', 'Bartolomeu', 'Basílio', 'Benício', 'Benito', 'Belquior', 'Benjamim', 'Bernardino', 'Bino', 'Bonifácio', 'Bráulio', 'Buarque', 'Cândido', 'Casemiro', 'Cícero', 'Clécio', 'Constantino', 'Cosmo', 'Crescêncio', 'Cristóvão', 'Dagoberto', 'Damásio', 'Décio', 'Délio', 'Demétrio', 'Deoclécio', 'Deoclides', 'Diógenes', 'Dirceu', 'Dráusio', 'Duarte', 'Durval', 'Durvalino', 'Dutra', 'Edvaldo', 'Egídio', 'Eleomar', 'Eli', 'Eliseu', 'Elmo', 'Emanuel', 'Emílio', 'Enéas', 'Epaminondas', 'Epitácio', 'Erasmo', 'Eriberto', 'Ernesto', 'Ezequiel', 'Euclídes', 'Eugênio', 'Eurípedes', 'Eusébio', 'Eustácio', 'Eustáquio', 'Evaristo', 'Fagundes', 'Fausto', 'Felício', 'Felizardo', 'Felisberto', 'Ferreira', 'Fidel', 'Firmino', 'Florêncio', 'Fortunato', 'Frederico', 'Fúlvio', 'Gama', 'Geraldo', 'Gérson', 'Getúlio', 'Germano', 'Gerônimo', 'Gervázio', 'Gildenor', 'Gilson', 'Gilmar', 'Giomar', 'Giorno', 'Godofredo', 'Gonçalves', 'Gotardo', 'Graciliano', 'Gregório', 'Gullar', 'Guimarães', 'Haroldo', 'Heraldo', 'Hermínio', 'Hilário', 'Hildebrando', 'Horácio', 'Inácio', 'Inocêncio', 'Itamar', 'Irineu', 'Isaias', 'Jacinto', 'Jader', 'Jaime', 'Jair', 'Jairo', 'Jadel', 'Jardel', 'Jeremias', 'Joselito', 'Josenaldo', 'Joseberto', 'Joel', 'Juscelino', 'Jurandir', 'Juvenal', 'Laerte', 'Laureano', 'Lauro', 'Leôncio', 'Leônidas', 'Leopoldo', 'Lívio', 'Lourenço', 'Lourival', 'Lucio', 'Ludovico', 'Malaquias', 'Marcelino', 'Marcelito', 'Mariano', 'Martiniro', 'Menelau', 'Militão', 'Milton', 'Moacir', 'Moisés', 'Monteiro', 'Natalino', 'Natanael', 'Nelson', 'Nereu', 'Nestor', 'Nicanor', 'Nicomedes', 'Nilton', 'Nogueira', 'Nuno', 'Núncio', 'Odilon', 'Odorico', 'Olavo', 'Olegário', 'Olímpio', 'Oliveira', 'Onofre', 'Orides', 'Orestes', 'Osiris', 'Osmar', 'Otávio', 'Otone', 'Ovídeo', 'Pascoal', 'Patrício', 'Patrocínio', 'Peçanha', 'Percival', 'Petrônio', 'Petrúcio', 'Pimenta', 'Plácido', 'Plínio', 'Porfírio', 'Praxedes', 'Príamo', 'Quintino', 'Quincas', 'Quirino', 'Raimundo', 'Renê', 'Romero', 'Romeu', 'Romildo', 'Rômulo', 'Rubens', 'Rui', 'Salazar', 'Salvador', 'Sálvio', 'Sampaio', 'Saulo', 'Sebastião', 'Seledônio', 'Serafim', 'Serápio', 'Severino', 'Silvério', 'Simplício', 'Tadeu', 'Tancredo', 'Tarcísio', 'Teobaldo', 'Teodoro', 'Teodureto', 'Tibúrsio', 'Timóteo', 'Tobias', 'Toledo', 'Torquato', 'Ubirajara', 'Ubiratan', 'Ulisses', 'Valdemar', 'Valdomar', 'Valdemiro', 'Valdomiro', 'Valentim', 'Valmir', 'Vancisclei', 'Venâncio', 'Venceslau', 'Vicente', 'Vidal', 'Virgílio', 'Viriato', 'Vitório'];

    if (gender === 'M') {
        return maleNames[Math.floor(Math.random() * maleNames.length)];
    }

    return femaleNames[Math.floor(Math.random() * femaleNames.length)];
}

// Gera um personagem aleatório com base nas opções fornecidas
function generateCharacter(options: Options) {
    let initialAttributes = generateAttributes()

    let charClass = getClass(options)

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

    // Substitui o atributo principal da classe pelo maior atributo gerado
    let highest = highestAttribute(initialAttributes);

    let mainAttributeName = charClass.mainAttribute;
    let mainAttributeValue = initialAttributes[mainAttributeName];

    let attributes = {
        ...initialAttributes,
    }

    attributes[highest.name] = mainAttributeValue;
    attributes[mainAttributeName] = highest.value;

    let gender = options.gender || randomGender();

    return {
        class: {
            mainAttribute: charClass.mainAttribute,
            hitDice: charClass.hitDice,
            name: charClass.title,
        },
        level: options.level,
        bn: Math.ceil((options.level || 1) / 2),
        jdp: charClass.jdp(options.level || 1),
        movement: charClass.movement,
        ancestry: options.ancestry || randomAncestry(),
        gender,
        name: randomName(gender),
        attributes: {
            'for': {
                'value': attributes.for,
                'mod': attributeMod[attributes.for],
            },
            'des': {
                'value': attributes.des,
                'mod': attributeMod[attributes.des],
            },
            'con': {
                'value': attributes.con,
                'mod': attributeMod[attributes.con],
            },
            'int': {
                'value': attributes.int,
                'mod': attributeMod[attributes.int],
            },
            'sab': {
                'value': attributes.sab,
                'mod': attributeMod[attributes.sab],
            },
            'car': {
                'value': attributes.car,
                'mod': attributeMod[attributes.car],
            },
        },
        hp: ndx(options.level || 1, charClass.hitDice),
    }
}

function getInputValueByName(name: string): string {
    // 1. Seleciona o elemento input usando o seletor de atributo [name="nomeDoSeuInput"]
    const inputElement = document.querySelector<HTMLInputElement>(`input[name="${name}"]`);

    // 2. Verifica se o elemento foi encontrado antes de tentar acessar seu valor
    if (inputElement) {
        const inputValue = inputElement.value;
        console.log("O valor do input é:", inputValue);
    } else {
        console.log("Nenhum input com o nome 'meuInput' foi encontrado.");
    }

    return 'foobar';
}

function getSelectedRadioValue(radioGroupName: string): string | null {
    // Use querySelector to find the checked radio button within the specified group
    const selectedRadio = document.querySelector<HTMLInputElement>(
        `input[name="${radioGroupName}"]:checked`
    );

    // If a radio button is selected, return its value; otherwise, return null
    if (selectedRadio) {
        return selectedRadio.value;
    } else {
        return null;
    }
}

export function goGenerateChar() {
    // Example usage:
// Assuming you have radio buttons with name="gender"
    const selectedGender = getSelectedRadioValue('gender');

    if (selectedGender) {
        console.log(`Selected gender: ${selectedGender}`);
    } else {
        console.log('No gender selected.');
    }
}

// Expose myFunction to the global window object
(window as any).goGenerateChar = goGenerateChar;

// let character = generateCharacter({
//     level: 1,
// });
//
// console.log(character);
