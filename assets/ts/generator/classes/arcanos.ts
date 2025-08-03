import {SpellLimit} from '../spells/types';
import {ClassDetails} from "./types";

let arcaneSpellLimits: Record<string, SpellLimit[]> = {
    1: [
        {circle: 1, maxSpells: 1}
    ],
    2: [
        {circle: 1, maxSpells: 2}
    ],
    3: [
        {circle: 1, maxSpells: 2},
        {circle: 2, maxSpells: 1}
    ],
    4: [
        {circle: 1, maxSpells: 3},
        {circle: 2, maxSpells: 2}
    ],
    5: [
        {circle: 1, maxSpells: 4},
        {circle: 2, maxSpells: 2},
        {circle: 3, maxSpells: 1}
    ],
    6: [
        {circle: 1, maxSpells: 4},
        {circle: 2, maxSpells: 2},
        {circle: 3, maxSpells: 2}
    ],
    7: [
        {circle: 1, maxSpells: 4},
        {circle: 2, maxSpells: 3},
        {circle: 3, maxSpells: 2},
        {circle: 4, maxSpells: 1}
    ],
    8: [
        {circle: 1, maxSpells: 4},
        {circle: 2, maxSpells: 3},
        {circle: 3, maxSpells: 3},
        {circle: 4, maxSpells: 2}
    ],
    9: [
        {circle: 1, maxSpells: 4},
        {circle: 2, maxSpells: 3},
        {circle: 3, maxSpells: 3},
        {circle: 4, maxSpells: 2},
        {circle: 5, maxSpells: 1}
    ],
    10: [
        {circle: 1, maxSpells: 4},
        {circle: 2, maxSpells: 4},
        {circle: 3, maxSpells: 3},
        {circle: 4, maxSpells: 2},
        {circle: 5, maxSpells: 2}
    ],
    11: [
        {circle: 1, maxSpells: 4},
        {circle: 2, maxSpells: 4},
        {circle: 3, maxSpells: 4},
        {circle: 4, maxSpells: 3},
        {circle: 5, maxSpells: 3}
    ],
    12: [
        {circle: 1, maxSpells: 4},
        {circle: 2, maxSpells: 4},
        {circle: 3, maxSpells: 4},
        {circle: 4, maxSpells: 4},
        {circle: 5, maxSpells: 4},
        {circle: 6, maxSpells: 1}
    ],
    13: [
        {circle: 1, maxSpells: 5},
        {circle: 2, maxSpells: 5},
        {circle: 3, maxSpells: 5},
        {circle: 4, maxSpells: 4},
        {circle: 5, maxSpells: 4},
        {circle: 6, maxSpells: 2}
    ],
    14: [
        {circle: 1, maxSpells: 5},
        {circle: 2, maxSpells: 5},
        {circle: 3, maxSpells: 5},
        {circle: 4, maxSpells: 4},
        {circle: 5, maxSpells: 4},
        {circle: 6, maxSpells: 2},
        {circle: 7, maxSpells: 1}
    ],
    15: [
        {circle: 1, maxSpells: 5},
        {circle: 2, maxSpells: 5},
        {circle: 3, maxSpells: 5},
        {circle: 4, maxSpells: 5},
        {circle: 5, maxSpells: 5},
        {circle: 6, maxSpells: 2},
        {circle: 7, maxSpells: 1}
    ],
    16: [
        {circle: 1, maxSpells: 5},
        {circle: 2, maxSpells: 5},
        {circle: 3, maxSpells: 5},
        {circle: 4, maxSpells: 5},
        {circle: 5, maxSpells: 5},
        {circle: 6, maxSpells: 3},
        {circle: 7, maxSpells: 2},
        {circle: 8, maxSpells: 1}
    ],
    17: [
        {circle: 1, maxSpells: 5},
        {circle: 2, maxSpells: 5},
        {circle: 3, maxSpells: 5},
        {circle: 4, maxSpells: 5},
        {circle: 5, maxSpells: 5},
        {circle: 6, maxSpells: 3},
        {circle: 7, maxSpells: 3},
        {circle: 8, maxSpells: 2}
    ],
    18: [
        {circle: 1, maxSpells: 5},
        {circle: 2, maxSpells: 5},
        {circle: 3, maxSpells: 5},
        {circle: 4, maxSpells: 5},
        {circle: 5, maxSpells: 5},
        {circle: 6, maxSpells: 3},
        {circle: 7, maxSpells: 3},
        {circle: 8, maxSpells: 2},
        {circle: 9, maxSpells: 1}
    ],
    19: [
        {circle: 1, maxSpells: 5},
        {circle: 2, maxSpells: 5},
        {circle: 3, maxSpells: 5},
        {circle: 4, maxSpells: 5},
        {circle: 5, maxSpells: 5},
        {circle: 6, maxSpells: 3},
        {circle: 7, maxSpells: 3},
        {circle: 8, maxSpells: 3},
        {circle: 9, maxSpells: 1}
    ],
    20: [
        {circle: 1, maxSpells: 5},
        {circle: 2, maxSpells: 5},
        {circle: 3, maxSpells: 5},
        {circle: 4, maxSpells: 5},
        {circle: 5, maxSpells: 5},
        {circle: 6, maxSpells: 4},
        {circle: 7, maxSpells: 3},
        {circle: 8, maxSpells: 3},
        {circle: 9, maxSpells: 2}
    ]
};

export const mago: ClassDetails = {
    identifier: 'mago',
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
    spellCast: {
        spellLists: ['mago'],
        spellLimitsByLevel: arcaneSpellLimits,
        hasSpellBook: true,
    }
};

export const ilusionista: ClassDetails = {
    identifier: 'ilusionista',
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
    spellCast: {
        spellLists: ['ilusionista'],
        spellLimitsByLevel: arcaneSpellLimits,
        hasSpellBook: true,
    }
};

export const necromante: ClassDetails = {
    identifier: 'necromante',
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
    spellCast: {
        spellLists: ['necromante'],
        spellLimitsByLevel: arcaneSpellLimits,
        hasSpellBook: true,
    }
};

export const psionico: ClassDetails = {
    identifier: 'psionico',
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
    spellCast: {
        spellLists: ['psionico'],
        spellLimitsByLevel: arcaneSpellLimits,
        hasSpellBook: true,
    }
};
