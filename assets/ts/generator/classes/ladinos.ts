import {ClassDetails} from "./types";

export const ladrao: ClassDetails = {
    identifier: 'ladrao',
    title: 'Ladrão',
    mainAttribute: 'des',
    hitDice: 4,
    movement: 40,
    jdp: function (level: number) {
        if (level <= 2) {
            return [14, 12, 17];
        }

        if (level <= 4) {
            return [13, 11, 16];
        }

        if (level <= 6) {
            return [12, 10, 15];
        }

        if (level <= 8) {
            return [11, 9, 14];
        }

        if (level <= 10) {
            return [9, 7, 12];
        }

        if (level <= 13) {
            return [7, 6, 10];
        }

        if (level <= 20) {
            return [6, 5, 8];
        }

        return [5, 4, 7]; // Para nível 21+
    },
};

export const assassino: ClassDetails = {
    identifier: 'assassino',
    title: 'Assassino',
    mainAttribute: 'des',
    hitDice: 4,
    movement: 30,
    jdp: function (level) {
        if (level <= 2) {
            return [12, 12, 17];
        }

        if (level <= 4) {
            return [11, 11, 16];
        }

        if (level <= 6) {
            return [10, 10, 15];
        }

        if (level <= 8) {
            return [9, 9, 14];
        }

        if (level <= 10) {
            return [8, 7, 12];
        }

        if (level <= 13) {
            return [6, 6, 10];
        }

        if (level <= 20) {
            return [5, 5, 8];
        }

        return [4, 4, 7]; // For level 21+
    },
};

export const desbravador: ClassDetails = {
    identifier: 'desbravador',
    title: 'Desbravador',
    mainAttribute: 'des',
    hitDice: 6,
    movement: 30,
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
};

export const espiao: ClassDetails = {
    identifier: 'espiao',
    title: 'Espião',
    mainAttribute: 'des',
    hitDice: 4,
    movement: 30,
    jdp: function (level) {
        if (level <= 2) {
            return [14, 12, 14];
        }

        if (level <= 4) {
            return [13, 11, 13];
        }

        if (level <= 6) {
            return [12, 10, 12];
        }

        if (level <= 8) {
            return [11, 9, 11];
        }

        if (level <= 10) {
            return [9, 7, 9];
        }

        if (level <= 13) {
            return [7, 6, 7];
        }

        if (level <= 20) {
            return [6, 5, 6];
        }

        return [5, 4, 5]; // Para nível 21+
    },
};


export const bardo: ClassDetails = {
    identifier: 'bardo',
    title: 'Bardo',
    mainAttribute: 'car',
    hitDice: 4,
    movement: 30,
    jdp: function (level) {
        if (level <= 2) {
            return [17, 14, 13];
        }

        if (level <= 4) {
            return [16, 13, 12];
        }

        if (level <= 6) {
            return [15, 12, 11];
        }

        if (level <= 8) {
            return [14, 11, 10];
        }

        if (level <= 10) {
            return [12, 9, 8];
        }

        if (level <= 13) {
            return [10, 7, 6];
        }

        if (level <= 20) {
            return [8, 5, 5];
        }

        return [6, 4, 4]; // Para nível 21+
    },
    spellCast: {
        spellLists: ['mago', 'psionico', 'necromante', 'ilusionista', 'clerigo', 'druida'],
        spellLimitsByLevel: {
            1: [
                { circles: [1], maxSpells: 1 }
            ],
            2: [
                { circles: [1], maxSpells: 1 }
            ],
            3: [
                { circles: [1], maxSpells: 2 },
                { circles: [2], maxSpells: 1 }
            ],
            4: [
                { circles: [1], maxSpells: 2 },
                { circles: [2], maxSpells: 1 }
            ],
            5: [
                { circles: [1], maxSpells: 2 },
                { circles: [2], maxSpells: 1 }
            ],
            6: [
                { circles: [1], maxSpells: 2 },
                { circles: [2], maxSpells: 2 },
                { circles: [3], maxSpells: 1 }
            ],
            7: [
                { circles: [1], maxSpells: 2 },
                { circles: [2], maxSpells: 2 },
                { circles: [3], maxSpells: 1 }
            ],
            8: [
                { circles: [1], maxSpells: 2 },
                { circles: [2], maxSpells: 2 },
                { circles: [3], maxSpells: 1 }
            ],
            9: [
                { circles: [1], maxSpells: 2 },
                { circles: [2], maxSpells: 2 },
                { circles: [3], maxSpells: 2 },
                { circles: [4], maxSpells: 1 }
            ],
            10: [
                { circles: [1], maxSpells: 2 },
                { circles: [2], maxSpells: 2 },
                { circles: [3], maxSpells: 2 },
                { circles: [4], maxSpells: 1 }
            ],
            11: [
                { circles: [1], maxSpells: 2 },
                { circles: [2], maxSpells: 2 },
                { circles: [3], maxSpells: 2 },
                { circles: [4], maxSpells: 1 }
            ],
            12: [
                { circles: [1], maxSpells: 3 },
                { circles: [2], maxSpells: 2 },
                { circles: [3], maxSpells: 2 },
                { circles: [4], maxSpells: 2 },
                { circles: [5], maxSpells: 1 }
            ],
            13: [
                { circles: [1], maxSpells: 3 },
                { circles: [2], maxSpells: 2 },
                { circles: [3], maxSpells: 2 },
                { circles: [4], maxSpells: 2 },
                { circles: [5], maxSpells: 1 }
            ],
            14: [
                { circles: [1], maxSpells: 3 },
                { circles: [2], maxSpells: 2 },
                { circles: [3], maxSpells: 2 },
                { circles: [4], maxSpells: 2 },
                { circles: [5], maxSpells: 1 }
            ],
            15: [
                { circles: [1], maxSpells: 3 },
                { circles: [2], maxSpells: 2 },
                { circles: [3], maxSpells: 2 },
                { circles: [4], maxSpells: 2 },
                { circles: [5], maxSpells: 1 }
            ],
            16: [
                { circles: [1], maxSpells: 3 },
                { circles: [2], maxSpells: 3 },
                { circles: [3], maxSpells: 2 },
                { circles: [4], maxSpells: 2 },
                { circles: [5], maxSpells: 2 },
                { circles: [6], maxSpells: 1 }
            ],
            17: [
                { circles: [1], maxSpells: 3 },
                { circles: [2], maxSpells: 3 },
                { circles: [3], maxSpells: 2 },
                { circles: [4], maxSpells: 2 },
                { circles: [5], maxSpells: 2 },
                { circles: [6], maxSpells: 1 }
            ],
            18: [
                { circles: [1], maxSpells: 3 },
                { circles: [2], maxSpells: 3 },
                { circles: [3], maxSpells: 2 },
                { circles: [4], maxSpells: 2 },
                { circles: [5], maxSpells: 2 },
                { circles: [6], maxSpells: 1 }
            ],
            19: [
                { circles: [1], maxSpells: 3 },
                { circles: [2], maxSpells: 3 },
                { circles: [3], maxSpells: 2 },
                { circles: [4], maxSpells: 2 },
                { circles: [5], maxSpells: 2 },
                { circles: [6], maxSpells: 1 }
            ],
            20: [
                { circles: [1], maxSpells: 3 },
                { circles: [2], maxSpells: 3 },
                { circles: [3], maxSpells: 2 },
                { circles: [4], maxSpells: 2 },
                { circles: [5], maxSpells: 2 },
                { circles: [6], maxSpells: 1 }
            ]
        },
    }
};