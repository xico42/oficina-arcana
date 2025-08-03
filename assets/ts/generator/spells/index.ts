import wizardSpells from './lists/mago';
import {Spell, SpellLimit, SpellListName} from './types';

const tomoMetafisico: Spell[] = [
    ...wizardSpells,
]


export function pickPreparedSpells(lists: SpellListName[], limits: SpellLimit[]) {
    let spells: Spell[] = [];

    let listSpells = tomoMetafisico.filter(spell => lists.includes(spell.listName));

    for (const limit of limits) {
        const availableSpells = listSpells.filter(spell => spell.circle === limit.circle);
        for (let i = 0; i < limit.maxSpells; i++) {
            if (availableSpells.length === 0) {
                break;
            }

            const randomIndex = Math.floor(Math.random() * availableSpells.length);
            const spell = availableSpells.splice(randomIndex, 1)[0];
            spells.push(spell);
        }
    }

    return spells;
}

function spellEquals(a: Spell, b: Spell) {
    return a.circle === b.circle && a.name === b.name && a.listName === b.listName;
}

export function pickSpells(lists: SpellListName[], maxCircle: number, numberOfSpells: number, except: Spell[] = []) {
    let spells: Spell[] = [];

    let listSpells = tomoMetafisico.filter(spell => {
        return lists.includes(spell.listName)
            && except.filter(e => spellEquals(e, spell)).length === 0;
    });

    listSpells = listSpells.filter(spell => spell.circle <= maxCircle);

    for (let i = 0; i < numberOfSpells; i++) {
        if (listSpells.length === 0) {
            break;
        }

        const randomIndex = Math.floor(Math.random() * listSpells.length);
        const spell = listSpells.splice(randomIndex, 1)[0];
        spells.push(spell);
    }

    return spells;
}

export function pickSpellBook(lists: SpellListName[], preparedLimits: SpellLimit[], numberOfExtraSpells: number) {
    const preparedSpells = pickPreparedSpells(lists, preparedLimits);

    const maxCircle = Math.max(...preparedLimits.map(limit => limit.circle));

    const extraSpells = pickSpells(lists, maxCircle, numberOfExtraSpells, preparedSpells);

    return [...preparedSpells, ...extraSpells];
}
