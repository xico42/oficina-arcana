import {test, expect} from "bun:test";
import {Spell} from "./types";
import {SpellPool} from "./pool";
import wizardSpells from './lists/mago';

test("should return null when there are no more spells to pick", () => {
    const spells: Spell[] = [
        {circle: 1, name: 'Alarme', ref: null, listName: "mago"},
        {circle: 1, name: 'Armadura Arcana', ref: null, listName: "mago"},
        {circle: 1, name: 'Cerrar Portas', ref: null, listName: "mago"},
    ];

    for (let i = 0; i < 100; i++) {
        const pool = new SpellPool(spells);

        const first = pool.pick();
        const multiple = pool.pickN(2);
        const last = pool.pick();

        expect(first).not.toBeNull();
        expect(last).toBeNull();
        expect(multiple).toHaveLength(2);
    }
});

test("should not pick repeated spells", () => {
    const spells: Spell[] = [
        {circle: 1, name: 'Alarme', ref: null, listName: "mago"},
        {circle: 1, name: 'Cerrar Portas', ref: null, listName: "mago"},
    ];

    for (let i = 0; i < 100; i++) {
        const pool = new SpellPool(spells);

        const first = pool.pick();
        const second = pool.pick();

        expect(first.name).not.toEqual(second.name);
    }
});

test("should pick spells based on circle filter", () => {
    for (let i = 0; i < 100; i++) {
        const pool = new SpellPool(wizardSpells);

        const picked = pool.pickN(1, {
            circle: 1,
            listNames: [
                "mago"
            ]
        });

        expect(picked).toHaveLength(1);
        expect(picked.every(spell => spell.circle == 1)).toBeTruthy();
    }
});

test("should pick spells based on circles filter", () => {
    for (let i = 0; i < 100; i++) {
        const pool = new SpellPool(wizardSpells);

        const picked = pool.pickN(1, {
            circles: [1],
            listNames: [
                "mago"
            ]
        });

        expect(picked).toHaveLength(1);
        expect(picked.every(spell => spell.circle == 1)).toBeTruthy();
    }
});