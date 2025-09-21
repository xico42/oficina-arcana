import {pickSpellBook} from "./generator/spells";
import {ClassDetails, ClassIdentifier, classRegistry} from "./generator/classes";
import {Attribute, AttributeName, Attributes, CharAttributes, FullAttribute, Gender} from "./generator/types";
import {nd6, ndx} from "./generator/dice";
import {generateEncounter, generateLocation, generateNpc} from "./generator/adventure";
import {randomGender, randomName} from "./generator/helper";


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
    class?: ClassIdentifier,
    level?: number,
    ancestry?: string,
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
function getClass(options: Options): ClassDetails {
    let classNames = Object.keys(classRegistry);

    let randomClass = options.class || classNames[Math.floor(Math.random() * classNames.length)];

    return classRegistry[randomClass];
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
            spellCast: charClass.spellCast,
            identifier: charClass.identifier,
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

function getSelectedLevel(): string {
    const dropdown = document.getElementById('char-level') as HTMLSelectElement;
    return dropdown.value;
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
    const selectedAncestry = getSelectedRadioValue('ancestry');
    const selectedLevel = getSelectedLevel();

    let opts: Options = {
        gender: selectedGender as Gender,
        level: parseInt(selectedLevel.replace('Nível', '').trim()),
        class: selectedClass as ClassIdentifier,
        ancestry: selectedAncestry,
    }

    hideElement('char-spells');
    let char = generateCharacter(opts);

    if (char.class.spellCast) {
        showElement('char-spells');
        const hasSpellBook = char.class.spellCast.hasSpellBook;

        goGenerateSpellList({
            class: char.class.identifier,
            title: hasSpellBook ? `Seu grimório` : `Suas magias preparadas`,
            level: char.level,
        });
    }

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

function showElement(elementId: string) {
    const element = document.getElementById(elementId);
    if (element) {
        element.classList.remove('hidden');
    }
}

function hideElement(elementId: string) {
    const element = document.getElementById(elementId);
    if (element) {
        element.classList.add('hidden');
    }
}

interface SpellGenerationOpts {
    class?: ClassIdentifier,
    level?: number,
    title?: string,
}

export function goGenerateSpellList(opts?: SpellGenerationOpts) {
    opts = opts || {};
    resetSpellList();

    let selectedClass = opts.class ?? getSelectedRadioValue('class');
    const selectedLevel = getSelectedLevel();

    const level = opts.level || parseInt(selectedLevel.replace('Nível', '').trim())

    const spellcasters = [
        'mago',
        'ilusionista',
        'necromante',
        'psionico',

        'clerigo',
        'paladino',
        'druida',
        'monge',
        'bardo',
    ];

    if (!selectedClass) {
        selectedClass = spellcasters[Math.floor(Math.random() * spellcasters.length)];
    }

    const charClass = classRegistry[selectedClass as ClassIdentifier];
    const spellCast = charClass.spellCast;
    if (!spellCast) {
        return;
    }

    let title = `Magias preparadas para o ${charClass.title} de nível ${level}`;
    if (spellCast.hasSpellBook) {
        title = `Grimório do ${charClass.title} de nível ${level}`;
    }

    setTextById('spells-title', opts.title || title);

    let extraSpells = 0;
    if (spellCast.hasSpellBook) {
        extraSpells = Math.ceil(level / 2);
    }

    const spellList = pickSpellBook(
        spellCast.spellLists,
        spellCast.spellLimitsByLevel[level],
        extraSpells,
    ).sort((a, b) => {
        if (a.circle === b.circle) {
            return a.name.localeCompare(b.name);
        }
        return a.circle - b.circle;
    });

    for (const spell of spellList) {
        const spellContainerId = `char-spells-${spell.circle}`;
        showElement(spellContainerId);
        const spellContainer = document.getElementById(spellContainerId);
        if (!spellContainer) {
            continue;
        }

        const spellListContainer = document.getElementById(`char-spells-${spell.circle}-list`);
        if (!spellListContainer) {
            continue;
        }

        let item = document.createElement('li');
        item.innerText = spell.name;
        spellListContainer.appendChild(item);
    }
}

function resetForm() {
    hideElement('char-spells');
    const element = document.getElementById('generator-form');

    if (element) {
        element.reset();
    }

    resetSpellList();
}

function resetSpellList() {
    for (let i = 1; i <= 9; i++) {
        const spellContainerId = `char-spells-${i}`;
        hideElement(spellContainerId);
        const spellContainer = document.getElementById(spellContainerId);
        if (spellContainer) {
            spellContainer.className = 'hidden';

            const spellListContainer = document.getElementById(`char-spells-${i}-list`);
            if (spellListContainer) {
                spellListContainer.innerHTML = '';
            }
        }
    }
}

function goGenerateAdventure() {
    const locationName = generateLocation();

    setTextById('location-name', locationName);

    const encounter = generateEncounter();
    setTextById('encounter-plot', encounter.plot);
    setTextById('encounter-type', encounter.type);
    setTextById('encounter-magnitude', encounter.magnitude);

    const npc = generateNpc();
    setTextById('npc-name', npc.name);
    setTextById('npc-characteristics', npc.characteristics);
}

function resetAdventure() {
    setTextById('location-name', '');
    setTextById('encounter-plot', '');
    setTextById('encounter-type', '');
    setTextById('encounter-magnitude', '');
}


(window as any).goGenerateChar = goGenerateChar;
(window as any).goGenerateSpellList = goGenerateSpellList;
(window as any).resetForm = resetForm;
(window as any).goGenerateAdventure = goGenerateAdventure;
(window as any).resetAdventure = resetAdventure;
