import {SpellLimit, SpellListName} from "../spells/types";
import {AttributeName} from "../types";

export type ClassIdentifier = 'legionario'
    | 'barbaro'
    | 'gladiador'
    | 'lanceiro'
    | 'arqueiro'
    | 'mago'
    | 'ilusionista'
    | 'necromante'
    | 'psionico'
    | 'druida'
    | 'clerigo'
    | 'paladino'
    | 'monge'
    | 'ladrao'
    | 'bardo'
    | 'assassino'
    | 'espiao'
    | 'desbravador'

interface ClassSpellCast {
    spellLists: SpellListName[],
    spellLimitsByLevel: Record<number, SpellLimit[]>,
    hasSpellBook?: boolean,
}

export interface ClassDetails {
    identifier: ClassIdentifier,

    title: string,
    mainAttribute: AttributeName,
    hitDice: number,
    movement: number,

    jdp(level: number): number[],

    spellCast?: ClassSpellCast,
}

export type ClassRegistry = Record<ClassIdentifier, ClassDetails>;
