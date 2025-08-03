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

const druida: ClassDetails = {
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
