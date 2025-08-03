import {SpellLimit, SpellListName} from "../spells/types";
import {AttributeName} from "../types";

type ClassIdentifiers = 'legionario'
    | 'barbaro'
    | 'gladiador'
    | 'lanceiro'
    | 'arqueiro'
    | 'mago'
    | 'ilusionista'
    | 'necromante'
    | 'psionico'
    | 'druida';

interface ClassSpellCast {
    spellLists: SpellListName[],
    spellLimitsByLevel: Record<number, SpellLimit[]>,
    hasSpellBook?: boolean,
}

export interface ClassDetails {
    identifier: ClassIdentifiers,

    title: string,
    mainAttribute: AttributeName,
    hitDice: number,
    movement: number,

    jdp(level: number): number[],

    spellCast?: ClassSpellCast,
}
