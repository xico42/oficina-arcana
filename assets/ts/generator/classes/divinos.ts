import {SpellLimit} from "../spells/types";
import {ClassDetails} from "./types";

let divineSpellLimits: Record<string, SpellLimit[]> = {
    1: [
        {circles: [1], maxSpells: 1}
    ],
    2: [
        {circles: [1], maxSpells: 2}
    ],
    3: [
        {circles: [1], maxSpells: 2},
        {circles: [2], maxSpells: 1}
    ],
    4: [
        {circles: [1], maxSpells: 2},
        {circles: [2], maxSpells: 2}
    ],
    5: [
        {circles: [1], maxSpells: 2},
        {circles: [2], maxSpells: 2},
        {circles: [3], maxSpells: 1}
    ],
    6: [
        {circles: [1], maxSpells: 2},
        {circles: [2], maxSpells: 2},
        {circles: [3], maxSpells: 2}
    ],
    7: [
        {circles: [1], maxSpells: 2},
        {circles: [2], maxSpells: 2},
        {circles: [3], maxSpells: 2},
        {circles: [4], maxSpells: 1}
    ],
    8: [
        {circles: [1], maxSpells: 3},
        {circles: [2], maxSpells: 2},
        {circles: [3], maxSpells: 2},
        {circles: [4], maxSpells: 2}
    ],
    9: [
        {circles: [1], maxSpells: 3},
        {circles: [2], maxSpells: 3},
        {circles: [3], maxSpells: 3},
        {circles: [4], maxSpells: 2}
    ],
    10: [
        {circles: [1], maxSpells: 3},
        {circles: [2], maxSpells: 3},
        {circles: [3], maxSpells: 3},
        {circles: [4], maxSpells: 3},
        {circles: [5], maxSpells: 1}
    ],
    11: [
        {circles: [1], maxSpells: 4},
        {circles: [2], maxSpells: 4},
        {circles: [3], maxSpells: 4},
        {circles: [4], maxSpells: 3},
        {circles: [5], maxSpells: 1}
    ],
    12: [
        {circles: [1], maxSpells: 4},
        {circles: [2], maxSpells: 4},
        {circles: [3], maxSpells: 4},
        {circles: [4], maxSpells: 4},
        {circles: [5], maxSpells: 2}
    ],
    13: [
        {circles: [1], maxSpells: 5},
        {circles: [2], maxSpells: 5},
        {circles: [3], maxSpells: 5},
        {circles: [4], maxSpells: 4},
        {circles: [5], maxSpells: 2}
    ],
    14: [
        {circles: [1], maxSpells: 5},
        {circles: [2], maxSpells: 5},
        {circles: [3], maxSpells: 5},
        {circles: [4], maxSpells: 4},
        {circles: [5], maxSpells: 3},
        {circles: [6], maxSpells: 1}
    ],
    15: [
        {circles: [1], maxSpells: 5},
        {circles: [2], maxSpells: 5},
        {circles: [3], maxSpells: 5},
        {circles: [4], maxSpells: 5},
        {circles: [5], maxSpells: 3},
        {circles: [6], maxSpells: 1}
    ],
    16: [
        {circles: [1], maxSpells: 5},
        {circles: [2], maxSpells: 5},
        {circles: [3], maxSpells: 5},
        {circles: [4], maxSpells: 5},
        {circles: [5], maxSpells: 4},
        {circles: [6], maxSpells: 2}
    ],
    17: [
        {circles: [1], maxSpells: 5},
        {circles: [2], maxSpells: 5},
        {circles: [3], maxSpells: 5},
        {circles: [4], maxSpells: 5},
        {circles: [5], maxSpells: 5},
        {circles: [6], maxSpells: 3}
    ],
    18: [
        {circles: [1], maxSpells: 5},
        {circles: [2], maxSpells: 5},
        {circles: [3], maxSpells: 5},
        {circles: [4], maxSpells: 5},
        {circles: [5], maxSpells: 5},
        {circles: [6], maxSpells: 3},
        {circles: [7], maxSpells: 1}
    ],
    19: [
        {circles: [1], maxSpells: 5},
        {circles: [2], maxSpells: 5},
        {circles: [3], maxSpells: 5},
        {circles: [4], maxSpells: 5},
        {circles: [5], maxSpells: 5},
        {circles: [6], maxSpells: 4},
        {circles: [7], maxSpells: 1}
    ],
    20: [
        {circles: [1], maxSpells: 5},
        {circles: [2], maxSpells: 5},
        {circles: [3], maxSpells: 5},
        {circles: [4], maxSpells: 5},
        {circles: [5], maxSpells: 5},
        {circles: [6], maxSpells: 4},
        {circles: [7], maxSpells: 2}
    ]
};

export const druida: ClassDetails = {
    identifier: 'druida',
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
    spellCast: {
        spellLists: ['druida'],
        spellLimitsByLevel: divineSpellLimits,
    }
};

export const clerigo: ClassDetails = {
    identifier: 'clerigo',
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
    spellCast: {
        spellLists: ['clerigo'],
        spellLimitsByLevel: divineSpellLimits,
    },
};

export const monge: ClassDetails = {
    identifier: 'monge',
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
    spellCast: {
        spellLists: ['psionico'],
        spellLimitsByLevel: {
            1: [
                {circles: [1], maxSpells: 1}
            ],
            2: [
                {circles: [1], maxSpells: 1}
            ],
            3: [
                {circles: [1], maxSpells: 2},
                {circles: [2], maxSpells: 1}
            ],
            4: [
                {circles: [1], maxSpells: 2},
                {circles: [2], maxSpells: 1}
            ],
            5: [
                {circles: [1], maxSpells: 2},
                {circles: [2], maxSpells: 1}
            ],
            6: [
                {circles: [1], maxSpells: 2},
                {circles: [2], maxSpells: 2},
                {circles: [3], maxSpells: 1}
            ],
            7: [
                {circles: [1], maxSpells: 2},
                {circles: [2], maxSpells: 2},
                {circles: [3], maxSpells: 1}
            ],
            8: [
                {circles: [1], maxSpells: 2},
                {circles: [2], maxSpells: 2},
                {circles: [3], maxSpells: 1}
            ],
            9: [
                {circles: [1], maxSpells: 2},
                {circles: [2], maxSpells: 2},
                {circles: [3], maxSpells: 2},
                {circles: [4], maxSpells: 1}
            ],
            10: [
                {circles: [1], maxSpells: 2},
                {circles: [2], maxSpells: 2},
                {circles: [3], maxSpells: 2},
                {circles: [4], maxSpells: 1}
            ],
            11: [
                {circles: [1], maxSpells: 2},
                {circles: [2], maxSpells: 2},
                {circles: [3], maxSpells: 2},
                {circles: [4], maxSpells: 1}
            ],
            12: [
                {circles: [1], maxSpells: 3},
                {circles: [2], maxSpells: 2},
                {circles: [3], maxSpells: 2},
                {circles: [4], maxSpells: 2},
                {circles: [5], maxSpells: 1}
            ],
            13: [
                {circles: [1], maxSpells: 3},
                {circles: [2], maxSpells: 2},
                {circles: [3], maxSpells: 2},
                {circles: [4], maxSpells: 2},
                {circles: [5], maxSpells: 1}
            ],
            14: [
                {circles: [1], maxSpells: 3},
                {circles: [2], maxSpells: 2},
                {circles: [3], maxSpells: 2},
                {circles: [4], maxSpells: 2},
                {circles: [5], maxSpells: 1}
            ],
            15: [
                {circles: [1], maxSpells: 3},
                {circles: [2], maxSpells: 2},
                {circles: [3], maxSpells: 2},
                {circles: [4], maxSpells: 2},
                {circles: [5], maxSpells: 1}
            ],
            16: [
                {circles: [1], maxSpells: 3},
                {circles: [2], maxSpells: 3},
                {circles: [3], maxSpells: 2},
                {circles: [4], maxSpells: 2},
                {circles: [5], maxSpells: 2},
                {circles: [6], maxSpells: 1}
            ],
            17: [
                {circles: [1], maxSpells: 3},
                {circles: [2], maxSpells: 3},
                {circles: [3], maxSpells: 2},
                {circles: [4], maxSpells: 2},
                {circles: [5], maxSpells: 2},
                {circles: [6], maxSpells: 1}
            ],
            18: [
                {circles: [1], maxSpells: 3},
                {circles: [2], maxSpells: 3},
                {circles: [3], maxSpells: 2},
                {circles: [4], maxSpells: 2},
                {circles: [5], maxSpells: 2},
                {circles: [6], maxSpells: 1}
            ],
            19: [
                {circles: [1], maxSpells: 3},
                {circles: [2], maxSpells: 3},
                {circles: [3], maxSpells: 2},
                {circles: [4], maxSpells: 2},
                {circles: [5], maxSpells: 2},
                {circles: [6], maxSpells: 1}
            ],
            20: [
                {circles: [1], maxSpells: 3},
                {circles: [2], maxSpells: 3},
                {circles: [3], maxSpells: 2},
                {circles: [4], maxSpells: 2},
                {circles: [5], maxSpells: 2},
                {circles: [6], maxSpells: 1}
            ]
        },
    }
};

export const paladino: ClassDetails = {
    identifier: 'paladino',
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
    spellCast: {
        spellLists: ['clerigo'],
        spellLimitsByLevel: {
            1: [{circles: [1], maxSpells: 1}],
            2: [{circles: [1], maxSpells: 1}],
            3: [{circles: [1], maxSpells: 1}],

            4: [{circles: [1, 2], maxSpells: 2}],
            5: [{circles: [1, 2], maxSpells: 2}],
            6: [{circles: [1, 2], maxSpells: 2}],
            7: [{circles: [1, 2], maxSpells: 2}],
            8: [{circles: [1, 2], maxSpells: 2}],
            9: [{circles: [1, 2], maxSpells: 2}],

            10: [{circles: [1, 2, 3], maxSpells: 4}],
            11: [{circles: [1, 2, 3], maxSpells: 4}],
            12: [{circles: [1, 2, 3], maxSpells: 4}],
            13: [{circles: [1, 2, 3], maxSpells: 4}],
            14: [{circles: [1, 2, 3], maxSpells: 4}],
            15: [{circles: [1, 2, 3], maxSpells: 4}],

            16: [{circles: [1, 2, 3, 4], maxSpells: 6}],
            17: [{circles: [1, 2, 3, 4], maxSpells: 6}],
            18: [{circles: [1, 2, 3, 4], maxSpells: 6}],
            19: [{circles: [1, 2, 3, 4], maxSpells: 6}],
            20: [{circles: [1, 2, 3, 4], maxSpells: 6}],
        },
    }
};

