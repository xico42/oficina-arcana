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

interface FullAttribute {
    value: number,
    mod: number,
}

type CharAttributes = Record<AttributeName, FullAttribute>;

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
            return value > max.value ? {name: name as keyof Attributes, value} : max;
        },
        {name: 'for' as keyof Attributes, value: -Infinity}
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
function getAncestry(options: Options) {
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

    let ancestryNames = Object.keys(ancestries);

    let ancestryName = options.ancestry || ancestryNames[Math.floor(Math.random() * ancestryNames.length)];

    return ancestries[ancestryName];
}

// Gera um gênero aleatório para o personagem, retornando 'M' ou 'F'.
function randomGender(): Gender {
    const genders: Gender[] = ['M', 'F'];
    return genders[Math.floor(Math.random() * genders.length)];
}

// Gera um nome aleatório para o personagem com base no gênero fornecido.
function randomName(gender: Gender) {
    const femaleNames = ['Ana', 'Maria', 'Joana', 'Antônia', 'Francisca', 'Helena', 'Vitória', 'Beatriz', 'Camila', 'Luana', 'Patrícia', 'Aline', 'Sônia', 'Jéssica', 'Larissa', 'Cláudia', 'Débora', 'Rejane', 'Silvana', 'Simone', 'Elisângela', 'Eliane', 'Lúcia', 'Aparecida', 'Fabiana', 'Valéria', 'Márcia', 'Carla', 'Adriana', 'Paula', 'Raimunda', 'Severina', 'Rosineide', 'Cícera', 'Genivalda', 'Mariazinha', 'Iraci', 'Zuleide', 'Aldenora', 'Nalvinha', 'Josefa', 'Neuma', 'Djanira', 'Terezinha', 'Quitéria', 'Eudália', 'Raimundinha', 'Benedita', 'Creusa', 'Lourdes', 'Jacira', 'Edinária', 'Dorotéia', 'Alzenira', 'Marinalva', 'Luzinete', 'Geovana', 'Lindalva', 'Conceição', 'Erondina', 'Ana', 'Maria', 'Luzia', 'Rosa', 'Lídia', 'Nair', 'Ester', 'Elza', 'Noêmia', 'Selma', 'Miriam', 'Inês', 'Nádia', 'Alice', 'Sandra', 'Isadora', 'Júlia', 'Lorena', 'Maitê', 'Heloísa', 'Isabela', 'Valentina', 'Lavínia', 'Luna', 'Elisa', 'Manuela', 'Cecília', 'Antonella', 'Alana', 'Ayla', 'Milena', 'Aurora', 'Eloá', 'Yasmin', 'Liz', 'Maitê', 'Lívia', 'Clara', 'Mel', 'Agatha', 'Talita', 'Emanuelle', 'Gabriela', 'Thalita', 'Giovana', 'Priscila', 'Tatiane', 'Renata', 'Andreia', 'Daniela', 'Nayara', 'Lais', 'Bruna', 'Rafaela', 'Monique', 'Karine', 'Bianca', 'Cristiane', 'Fabíola', 'Isabele', 'Iara', 'Jaciara', 'Araci', 'Moara', 'Tainá', 'Potira', 'Maíra', 'Cira', 'Anahy', 'Yara', 'Tainara', 'Cauãna', 'Nara', 'Aruna', 'Iracema', 'Marluce', 'Iolanda', 'Ivonete', 'Terezinha', 'Vanuza', 'Dulcinéia', 'Salete', 'Eulina', 'Bernadete', 'Liduína', 'Odete', 'Eurides', 'Genoveva', 'Luzia', 'Gildete', 'Natália', 'Rafaella', 'Lorena', 'Eduarda', 'Samara', 'Karen', 'Emilly', 'Sthefany', 'Verônica', 'Rebeca', 'Carla', 'Débora', 'Jaqueline', 'Gisele', 'Juliana', 'Thaís', 'Aline', 'Sâmia', 'Rayane', 'Nicole', 'Helena', 'Mirela', 'Érika', 'Paloma', 'Suyane', 'Fernanda', 'Letícia', 'Catarina', 'Sofia', 'Pietra', 'Mariana', 'Lais', 'Clarice', 'Melina', 'Jandira', 'Solange', 'Madalena', 'Ivete', 'Marilene', 'Jerusa', 'Nilda', 'Lurdinha', 'Celina', 'Alzira', 'Arlete', 'Rosângela', 'Ivana', 'Fátima', 'Neide', 'Rosilda', 'Cleonice', 'Irineia', 'Idalina', 'Nazaré', 'Efigênia', 'Elizabete', 'Germana', 'Ilza', 'Mirtes', 'Arleide', 'Dayane', 'Viviane', 'Samira', 'Adrielle', 'Joyce', 'Jussara', 'Maiane', 'Nayane', 'Eloisa', 'Dayse', 'Cássia', 'Lenira', 'Nadja', 'Denise', 'Jailma', 'Irla', 'Brígida', 'Caliane', 'Ivonilda', 'Rosália', 'Cleide', 'Aurinete', 'Damiana', 'Doralice', 'Gracilene', 'Jovelina', 'Telma', 'Roseli', 'Vânia', 'Meire', 'Marizete', 'Josilene', 'Zenaide', 'Juscelina', 'Ildete', 'Adalgisa', 'Célia', 'Elza', 'Eunice', 'Margarida', 'Norberta', 'Quitéria', 'Apolinária', 'Anunciada', 'Josenilda', 'Zulmira', 'Marleide', 'Zenilda', 'Noêmia', 'Dulce', 'Liduina', 'Tereza', 'Malvina', 'Neuma', 'Vilma', 'Dalila', 'Joelma', 'Nice', 'Gilvana', 'Jucileide', 'Rosana', 'Dira', 'Zilda', 'Elenice', 'Ione', 'Tânia', 'Jacilene', 'Aurenice', 'Adna', 'Marizelda', 'Gilvania', 'Railda', 'Roseane', 'Djenane', 'Antônia', 'Ivonete', 'Francileide', 'Josélia', 'Erivaneide', 'Ivanilda', 'Nailza', 'Gleiciane', 'Laudiceia', 'Renilde', 'Iranilda', 'Marizângela', 'Elinete', 'Lourdinha', 'Geralda', 'Josemara'];
    const maleNames = ['João', 'José', 'Antônio', 'Carlos', 'Paulo', 'Pedro', 'Luiz', 'Marcos', 'Francisco', 'André', 'Rafael', 'Rodrigo', 'Bruno', 'Lucas', 'Daniel', 'Fernando', 'Alexandre', 'Gustavo', 'Diego', 'Marcelo', 'Eduardo', 'Roberto', 'Henrique', 'Vinícius', 'Tiago', 'Felipe', 'Leandro', 'Fábio', 'Sérgio', 'Jorge', 'Severino', 'Raimundo', 'Genival', 'Cícero', 'Josivaldo', 'Manoel', 'Jurandir', 'Edvaldo', 'Edivaldo', 'Zé', 'Arlindo', 'Zé Carlos', 'Zé Maria', 'Benedito', 'Givaldo', 'Djalma', 'Iran', 'Josenildo', 'Valmir', 'Eronildo', 'Josafá', 'Aluísio', 'Lindomar', 'Jucelino', 'Agenor', 'Aldemir', 'Geovane', 'Jairo', 'Eliezer', 'Damião', 'João Pedro', 'João Victor', 'José Augusto', 'José Carlos', 'Luiz Henrique', 'Luiz Fernando', 'Pedro Henrique', 'Pedro Lucas', 'Paulo Sérgio', 'Paulo Roberto', 'Antônio Carlos', 'Antônio Marcos', 'Marcos Paulo', 'Marcos Vinícius', 'Carlos Eduardo', 'Carlos Alberto', 'Francisco José', 'Chico', 'David', 'Enzo', 'Theo', 'Gael', 'Noah', 'Arthur', 'Heitor', 'Davi', 'Bernardo', 'Miguel', 'Isaac', 'Samuel', 'Ian', 'Vinícius', 'Luan', 'Kaio', 'Bryan', 'Ryan', 'Levi', 'Nicolas', 'Benjamin', 'Adailton', 'Jailson', 'Walmir', 'Almir', 'Juracy', 'Ronildo', 'Valdeci', 'Joãozinho', 'Nivaldo', 'Gilvan', 'Nilton', 'Nélio', 'Dorgival', 'Josenildo', 'Erisvaldo', 'Edivan', 'Jeová', 'Aureliano', 'Apolinário', 'Ismael', 'Ednardo', 'Claudionor', 'Ubirajara', 'Joselito', 'Raimundinho', 'Delmiro', 'Dácio', 'Genésio', 'Arimatéia', 'Josivan', 'Adriano', 'Álvaro', 'Afonso', 'Alan', 'Aílton', 'Alex', 'Alessandro', 'Alisson', 'Altair', 'Amauri', 'Anderson', 'Arnaldo', 'Augusto', 'Bartolomeu', 'Benício', 'Bento', 'Caio', 'Cláudio', 'Cristiano', 'Dener', 'Denis', 'Douglas', 'Édson', 'Eliel', 'Elias', 'Eliseu', 'Emerson', 'Evandro', 'Evaldo', 'Ezequiel', 'Fabrício', 'Flávio', 'Gilberto', 'Gilson', 'Hélio', 'Hugo', 'Icaro', 'Ivo', 'Ivan', 'Jacinto', 'Janilson', 'Jean', 'Jefferson', 'Jeremias', 'Joel', 'Jonas', 'Jonathan', 'Josias', 'Josué', 'Judson', 'Júlio', 'Kleber', 'Lázaro', 'Luciano', 'Lucas', 'Luís', 'Magno', 'Mailson', 'Maurício', 'Matheus', 'Michel', 'Moisés', 'Natanael', 'Nivaldo', 'Olavo', 'Orlando', 'Osvaldo', 'Otávio', 'Pablo', 'Patrick', 'Paulo', 'Raul', 'Renato', 'Ricardo', 'Rian', 'Robson', 'Rômulo', 'Ronaldo', 'Rubens', 'Rui', 'Sandro', 'Saul', 'Sebastião', 'Sidney', 'Silas', 'Silvano', 'Tales', 'Tarcísio', 'Teodoro', 'Tomás', 'Uelton', 'Valdeir', 'Valdir', 'Vicente', 'Vilson', 'Vítor', 'Wagner', 'Wallace', 'Washington', 'Wellington', 'Wilker', 'William', 'Yago', 'Yuri', 'Zacarias', 'Zaqueu', 'Zenildo', 'Zé Luiz', 'Zé Antônio', 'Zé Roberto', 'Ariston', 'Claudivan', 'Iranildo', 'Erivan', 'Adonias', 'Aderbal', 'Zé Neto', 'Zé Raimundo', 'Elenilson', 'Raimundão', 'Valdeci', 'Railson', 'Deoclécio', 'Laécio', 'Valmir', 'Ernando', 'Gilmar', 'Jacó', 'Júnior', 'Lázaro', 'Manoelito', 'Narciso', 'Nicanor', 'Onofre', 'Pascual', 'Pelágio', 'Reinaldo', 'Ribamar', 'Salatiel', 'Sandoval', 'Severiano', 'Tadeu', 'Ubiratan', 'Valdo', 'Vandeilson', 'Zildo', 'Zoran', 'Zico', 'Zaqueo', 'Zozimo', 'Cid', 'Celso', 'Gentil', 'Itamar', 'Ivanilson', 'Marcondes', 'Mauro', 'Milton', 'Norberto', 'Osnir', 'Otoniel', 'Raniere', 'Renato', 'Samir', 'Tito', 'Vanderson', 'Washington', 'Wiliam', 'Zaqueu', 'Zézinho', 'Ribamar', 'Jorcelino', 'Ademar', 'Adoniran', 'Alcebíades', 'Aristóteles', 'Aurenildo', 'Cleiton', 'Deivison'];

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
        ancestry: getAncestry(options),
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
        } as CharAttributes,
        hp: ndx(options.level || 1, charClass.hitDice),
        armorClass: 10 + attributeMod[attributes.des],
        po: nd6(3) * 10,
    }
}

function getInputValueByName(name: string): string | undefined {
    // 1. Seleciona o elemento input usando o seletor de atributo [name="nomeDoSeuInput"]
    const inputElement = document.querySelector<HTMLInputElement>(`input[name="${name}"]`);

    // 2. Verifica se o elemento foi encontrado antes de tentar acessar seu valor
    if (inputElement) {
        return inputElement.value;
    }

    return undefined;
}

function getSelectedRadioValue(radioGroupName: string): string | undefined {
    // Use querySelector to find the checked radio button within the specified group
    const selectedRadio = document.querySelector<HTMLInputElement>(
        `input[name="${radioGroupName}"]:checked`
    );

    // If a radio button is selected, return its value; otherwise, return null
    if (selectedRadio) {
        return selectedRadio.value;
    }

    return undefined;
}

function setTextById(elementId: string, newText: string): void {
    const element = document.getElementById(elementId);

    if (element) {
        element.textContent = newText;
        return;
    }

    console.warn(`Element with ID "${elementId}" not found.`);
}

function formatMod(mod: number): string {
    return mod >= 0 ? `+${Math.abs(mod)}` : `-${Math.abs(mod)}`;
}

function formatAttribute(attr: FullAttribute): string {
    return `${attr.value} (${formatMod(attr.mod)})`;
}

function formatJdp(jdp: number[]): string {
    let v = jdp[0];
    let r = jdp[1];
    let m = jdp[2];

    return `V${v}/R${r}/M${m}`;
}

export function goGenerateChar() {
    const selectedGender = getSelectedRadioValue('gender');
    const selectedClass = getSelectedRadioValue('class');

    let opts: Options = {
        gender: selectedGender as Gender,
        level: 1,
        class: selectedClass as ClassName,
    }

    let char = generateCharacter(opts);

    setTextById('char-name', char.name);
    setTextById('char-ancestry', char.ancestry.name);
    setTextById('char-class', char.class.name);
    setTextById('char-hit-dice', `d${char.class.hitDice}`);

    setTextById('char-in', formatMod(char.attributes.des.mod));
    setTextById('char-mov', char.movement.toString());
    setTextById('char-hp', char.hp.toString());
    setTextById('char-ac', char.armorClass.toString());
    setTextById('char-bn', formatMod(char.bn));
    setTextById('char-jdp', formatJdp(char.jdp));

    setTextById('attr-for', `${formatAttribute(char.attributes.for)}`);
    setTextById('attr-des', `${formatAttribute(char.attributes.des)}`);
    setTextById('attr-con', `${formatAttribute(char.attributes.con)}`);
    setTextById('attr-int', `${formatAttribute(char.attributes.int)}`);
    setTextById('attr-sab', `${formatAttribute(char.attributes.sab)}`);
    setTextById('attr-car', `${formatAttribute(char.attributes.car)}`);

    setTextById('char-money', `${char.po} P.O.`);
}

(window as any).goGenerateChar = goGenerateChar;
