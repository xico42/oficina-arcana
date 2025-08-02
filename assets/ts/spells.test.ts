import { expect, test } from "bun:test";

import { pickPreparedSpells, pickSpells } from "./spells";

test("should pick prepared spells", () => {
    const spells = pickPreparedSpells(["mago"], [
        {
            circle: 1,
            maxSpells: 2
        },
        {
            circle: 2,
            maxSpells: 1,
        }
    ])

    expect(spells.length).toBe(3);
    expect(spells.filter(s => s.circle === 1).length).toBe(2);
    expect(spells.filter(s => s.circle === 2).length).toBe(1);
});

test("should pick random spells", () => {
    const spells = pickSpells(["mago"], 3, 5);
    expect(spells.length).toBe(5);
});

test("should pick random spells except some", () => {
    const spells = pickSpells(["mago"], 1, 100, [
        {
            circle: 1,
            name: "Alarme",
            ref: null,
            listName: "mago"
        },
        {
            circle: 1,
            name: "Cerrar Portas",
            ref: null,
            listName: "mago"
        }
    ])

    expect(spells.length).toBe(15);
    expect(spells.filter(s => s.name === "Alarme").length).toBe(0);
    expect(spells.filter(s => s.name === "Cerrar Portas").length).toBe(0);
});