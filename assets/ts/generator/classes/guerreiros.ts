import {ClassDetails} from "./types";

let warriorJdp = function (level: number): number[] {
    if (level <= 2) {
        return [12, 13, 16];
    }

    if (level <= 4) {
        return [11, 12, 15];
    }

    if (level <= 6) {
        return [10, 11, 14];
    }

    if (level <= 8) {
        return [9, 10, 12];
    }

    if (level <= 10) {
        return [8, 9, 10];
    }

    if (level <= 13) {
        return [6, 7, 9];
    }

    if (level <= 20) {
        return [5, 6, 7];
    }

    return [4, 4, 6]
};

export const legionario: ClassDetails = {
    identifier: 'legionario',
    title: 'Legionário',
    mainAttribute: 'for',
    hitDice: 8,
    movement: 30,
    jdp: warriorJdp,
};

export const barbaro: ClassDetails = {
    identifier: 'barbaro',
    title: 'Bárbaro',
    mainAttribute: 'for',
    hitDice: 8,
    movement: 30,
    jdp: warriorJdp,
};

export const gladiador: ClassDetails = {
    identifier: 'gladiador',
    title: 'Gladiador',
    mainAttribute: 'for',
    hitDice: 8,
    movement: 40,
    jdp: warriorJdp,
};

export const lanceiro: ClassDetails = {
    identifier: 'lanceiro',
    title: 'Lanceiro',
    mainAttribute: 'for',
    hitDice: 8,
    movement: 30,
    jdp: warriorJdp,
};

export const arqueiro: ClassDetails = {
    identifier: 'arqueiro',
    title: 'Arqueiro',
    mainAttribute: 'des',
    hitDice: 8,
    movement: 30,
    jdp: warriorJdp,
};
