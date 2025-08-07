import wizardSpells from './lists/mago';
import psionicSpells from './lists/psionico';
import clericSpells from './lists/clerigo';
import druidSpells from './lists/druida';
import illusionistSpells from './lists/ilusionista';
import necromancerSpells from './lists/necromante';

import {Spell, SpellLimit, SpellListName} from './types';
import {SpellPool} from "./pool";
import {dx} from "../dice";

const tomoMetafisico: Spell[] = [
    ...wizardSpells,
    ...psionicSpells,
    ...clericSpells,
    ...druidSpells,
    ...illusionistSpells,
    ...necromancerSpells,
]


export function pickPreparedSpells(pool: SpellPool, lists: SpellListName[], limits: SpellLimit[]) {
    let spells: Spell[] = [];

    for (const limit of limits) {
        spells.push(
            ...pool.pickN(limit.maxSpells, {
                circles: limit.circles,
                listNames: lists,
            })
        )
    }

    return spells;
}

function pickExtraSpells(pool: SpellPool, lists: SpellListName[], preparedLimits: SpellLimit[], numberOfExtraSpells: number) {
    const availableCircles = new Set<number>();
    for (const limit of preparedLimits) {
        for (const circle of limit.circles) {
            availableCircles.add(circle);
        }
    }

    const spells: Spell[] = [];

    for (let i = 0; i < numberOfExtraSpells; i++) {
        if (
            availableCircles.has(9)
            && dx(100) <= 1 // 1% chance to pick a 9th circle spell
        ) {
            spells.push(pool.pick({
                circle: 9,
                listNames: lists,
            }))
            continue;
        }

        if (
            (availableCircles.has(7) || availableCircles.has(8))
            && dx(100) <= 4 // 4% chance to pick a 7th or 8th circle spell
        ) {
            spells.push(pool.pick({
                minCircle: 7,
                maxCircle: 8,
                listNames: lists,
            }))
            continue;
        }

        if (
            (availableCircles.has(4) || availableCircles.has(5) || availableCircles.has(6))
            && dx(100) <= 25 // 25% chance to pick a 4th, 5th or 6th circle spell
        ) {
            spells.push(pool.pick({
                minCircle: 4,
                maxCircle: 6,
                listNames: lists,
            }))
            continue;
        }

        spells.push(pool.pick({
            minCircle: 1,
            maxCircle: Math.max(...availableCircles),
            listNames: lists,
        }));
    }

    return spells;
}

export function pickSpellBook(lists: SpellListName[], preparedLimits: SpellLimit[], numberOfExtraSpells: number) {
    const pool = new SpellPool(tomoMetafisico);
    const preparedSpells = pickPreparedSpells(pool, lists, preparedLimits);
    const extraSpells = pickExtraSpells(pool, lists, preparedLimits, numberOfExtraSpells);
    return [...preparedSpells, ...extraSpells];
}
