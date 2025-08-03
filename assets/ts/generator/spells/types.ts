export type SpellListName = 'mago' | 'psionico' | 'ilusionista' | 'necromante' | 'druida' | 'clerigo';

export interface Spell {
    circle: number;
    name: string;
    ref: string | null;
    listName: SpellListName;
}

export interface SpellLimit {
    circle: number;
    maxSpells: number;
}

