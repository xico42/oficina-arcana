import {SpellLimit} from "../spells/types";
import {ClassDetails} from "./types";

let divineSpellLimits: Record<string, SpellLimit[]> = {
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
        {circle: 1, maxSpells: 2},
        {circle: 2, maxSpells: 2}
    ],
    5: [
        {circle: 1, maxSpells: 2},
        {circle: 2, maxSpells: 2},
        {circle: 3, maxSpells: 1}
    ],
    6: [
        {circle: 1, maxSpells: 2},
        {circle: 2, maxSpells: 2},
        {circle: 3, maxSpells: 2}
    ],
    7: [
        {circle: 1, maxSpells: 2},
        {circle: 2, maxSpells: 2},
        {circle: 3, maxSpells: 2},
        {circle: 4, maxSpells: 1}
    ],
    8: [
        {circle: 1, maxSpells: 3},
        {circle: 2, maxSpells: 2},
        {circle: 3, maxSpells: 2},
        {circle: 4, maxSpells: 2}
    ],
    9: [
        {circle: 1, maxSpells: 3},
        {circle: 2, maxSpells: 3},
        {circle: 3, maxSpells: 3},
        {circle: 4, maxSpells: 2}
    ],
    10: [
        {circle: 1, maxSpells: 3},
        {circle: 2, maxSpells: 3},
        {circle: 3, maxSpells: 3},
        {circle: 4, maxSpells: 3},
        {circle: 5, maxSpells: 1}
    ],
    11: [
        {circle: 1, maxSpells: 4},
        {circle: 2, maxSpells: 4},
        {circle: 3, maxSpells: 4},
        {circle: 4, maxSpells: 3},
        {circle: 5, maxSpells: 1}
    ],
    12: [
        {circle: 1, maxSpells: 4},
        {circle: 2, maxSpells: 4},
        {circle: 3, maxSpells: 4},
        {circle: 4, maxSpells: 4},
        {circle: 5, maxSpells: 2}
    ],
    13: [
        {circle: 1, maxSpells: 5},
        {circle: 2, maxSpells: 5},
        {circle: 3, maxSpells: 5},
        {circle: 4, maxSpells: 4},
        {circle: 5, maxSpells: 2}
    ],
    14: [
        {circle: 1, maxSpells: 5},
        {circle: 2, maxSpells: 5},
        {circle: 3, maxSpells: 5},
        {circle: 4, maxSpells: 4},
        {circle: 5, maxSpells: 3},
        {circle: 6, maxSpells: 1}
    ],
    15: [
        {circle: 1, maxSpells: 5},
        {circle: 2, maxSpells: 5},
        {circle: 3, maxSpells: 5},
        {circle: 4, maxSpells: 5},
        {circle: 5, maxSpells: 3},
        {circle: 6, maxSpells: 1}
    ],
    16: [
        {circle: 1, maxSpells: 5},
        {circle: 2, maxSpells: 5},
        {circle: 3, maxSpells: 5},
        {circle: 4, maxSpells: 5},
        {circle: 5, maxSpells: 4},
        {circle: 6, maxSpells: 2}
    ],
    17: [
        {circle: 1, maxSpells: 5},
        {circle: 2, maxSpells: 5},
        {circle: 3, maxSpells: 5},
        {circle: 4, maxSpells: 5},
        {circle: 5, maxSpells: 5},
        {circle: 6, maxSpells: 3}
    ],
    18: [
        {circle: 1, maxSpells: 5},
        {circle: 2, maxSpells: 5},
        {circle: 3, maxSpells: 5},
        {circle: 4, maxSpells: 5},
        {circle: 5, maxSpells: 5},
        {circle: 6, maxSpells: 3},
        {circle: 7, maxSpells: 1}
    ],
    19: [
        {circle: 1, maxSpells: 5},
        {circle: 2, maxSpells: 5},
        {circle: 3, maxSpells: 5},
        {circle: 4, maxSpells: 5},
        {circle: 5, maxSpells: 5},
        {circle: 6, maxSpells: 4},
        {circle: 7, maxSpells: 1}
    ],
    20: [
        {circle: 1, maxSpells: 5},
        {circle: 2, maxSpells: 5},
        {circle: 3, maxSpells: 5},
        {circle: 4, maxSpells: 5},
        {circle: 5, maxSpells: 5},
        {circle: 6, maxSpells: 4},
        {circle: 7, maxSpells: 2}
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
                { circle: 1, maxSpells: 1 }
            ],
            2: [
                { circle: 1, maxSpells: 1 }
            ],
            3: [
                { circle: 1, maxSpells: 2 },
                { circle: 2, maxSpells: 1 }
            ],
            4: [
                { circle: 1, maxSpells: 2 },
                { circle: 2, maxSpells: 1 }
            ],
            5: [
                { circle: 1, maxSpells: 2 },
                { circle: 2, maxSpells: 1 }
            ],
            6: [
                { circle: 1, maxSpells: 2 },
                { circle: 2, maxSpells: 2 },
                { circle: 3, maxSpells: 1 }
            ],
            7: [
                { circle: 1, maxSpells: 2 },
                { circle: 2, maxSpells: 2 },
                { circle: 3, maxSpells: 1 }
            ],
            8: [
                { circle: 1, maxSpells: 2 },
                { circle: 2, maxSpells: 2 },
                { circle: 3, maxSpells: 1 }
            ],
            9: [
                { circle: 1, maxSpells: 2 },
                { circle: 2, maxSpells: 2 },
                { circle: 3, maxSpells: 2 },
                { circle: 4, maxSpells: 1 }
            ],
            10: [
                { circle: 1, maxSpells: 2 },
                { circle: 2, maxSpells: 2 },
                { circle: 3, maxSpells: 2 },
                { circle: 4, maxSpells: 1 }
            ],
            11: [
                { circle: 1, maxSpells: 2 },
                { circle: 2, maxSpells: 2 },
                { circle: 3, maxSpells: 2 },
                { circle: 4, maxSpells: 1 }
            ],
            12: [
                { circle: 1, maxSpells: 3 },
                { circle: 2, maxSpells: 2 },
                { circle: 3, maxSpells: 2 },
                { circle: 4, maxSpells: 2 },
                { circle: 5, maxSpells: 1 }
            ],
            13: [
                { circle: 1, maxSpells: 3 },
                { circle: 2, maxSpells: 2 },
                { circle: 3, maxSpells: 2 },
                { circle: 4, maxSpells: 2 },
                { circle: 5, maxSpells: 1 }
            ],
            14: [
                { circle: 1, maxSpells: 3 },
                { circle: 2, maxSpells: 2 },
                { circle: 3, maxSpells: 2 },
                { circle: 4, maxSpells: 2 },
                { circle: 5, maxSpells: 1 }
            ],
            15: [
                { circle: 1, maxSpells: 3 },
                { circle: 2, maxSpells: 2 },
                { circle: 3, maxSpells: 2 },
                { circle: 4, maxSpells: 2 },
                { circle: 5, maxSpells: 1 }
            ],
            16: [
                { circle: 1, maxSpells: 3 },
                { circle: 2, maxSpells: 3 },
                { circle: 3, maxSpells: 2 },
                { circle: 4, maxSpells: 2 },
                { circle: 5, maxSpells: 2 },
                { circle: 6, maxSpells: 1 }
            ],
            17: [
                { circle: 1, maxSpells: 3 },
                { circle: 2, maxSpells: 3 },
                { circle: 3, maxSpells: 2 },
                { circle: 4, maxSpells: 2 },
                { circle: 5, maxSpells: 2 },
                { circle: 6, maxSpells: 1 }
            ],
            18: [
                { circle: 1, maxSpells: 3 },
                { circle: 2, maxSpells: 3 },
                { circle: 3, maxSpells: 2 },
                { circle: 4, maxSpells: 2 },
                { circle: 5, maxSpells: 2 },
                { circle: 6, maxSpells: 1 }
            ],
            19: [
                { circle: 1, maxSpells: 3 },
                { circle: 2, maxSpells: 3 },
                { circle: 3, maxSpells: 2 },
                { circle: 4, maxSpells: 2 },
                { circle: 5, maxSpells: 2 },
                { circle: 6, maxSpells: 1 }
            ],
            20: [
                { circle: 1, maxSpells: 3 },
                { circle: 2, maxSpells: 3 },
                { circle: 3, maxSpells: 2 },
                { circle: 4, maxSpells: 2 },
                { circle: 5, maxSpells: 2 },
                { circle: 6, maxSpells: 1 }
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
            1: [],
        },
    }
};

