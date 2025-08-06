import {Spell} from "./types";

export interface SpellFilter {
    maxCircle?: number;
    minCircle?: number;
    circle?: number;
    circles?: number[];
    name?: string;
    listNames?: string[];
}

class Item {
    private spell: Spell
    private picked: boolean

    constructor(spell: Spell) {
        this.spell = spell;
        this.picked = false;
    }

    public pick(): Spell {
        this.picked = true;
        return this.spell;
    }

    public isPicked(): boolean {
        return this.picked;
    }

    getSpell(): Spell {
        return this.spell;
    }
}

export class SpellPool {
    private items: Item[];

    constructor(spells: Spell[]) {
        this.items = spells.map(spell => new Item(spell));
    }

    /**
     * Pick a spell randomly from the pool, based on the provided filter.
     *
     * @param filter
     */
    public pick(filter?: SpellFilter): Spell | null {
        const filtered = this.items.filter(item => applyFilter(item, filter));
        if (filtered.length === 0) {
            return null;
        }

        const randomIndex = Math.floor(Math.random() * filtered.length);
        const item = filtered[randomIndex];

        return item.pick();
    }

    /**
     * Pick multiple spells from the pool randomly, based on the provided filter.
     *
     * @param n
     * @param filter
     */
    public pickN(n: number, filter?: SpellFilter): Spell[] {
        const filtered = this.items.filter(item => applyFilter(item, filter));
        if (filtered.length === 0) {
            return [];
        }

        const spells: Spell[] = [];
        for (let i = 0; i < n; i++) {
            if (filtered.length === 0) {
                break;
            }

            const randomIndex = Math.floor(Math.random() * filtered.length);
            const item = filtered[randomIndex];
            filtered.splice(randomIndex, 1); // Remove the item to avoid picking it again
            spells.push(item.pick());
        }

        return spells;
    }
}

function applyFilter(item: Item, filter?: SpellFilter): boolean {
    if (item.isPicked()) {
        return false;
    }

    if (!filter) {
        return true;
    }

    const spell = item.getSpell();
    if (filter.maxCircle && spell.circle > filter.maxCircle) {
        return false;
    }

    if (filter.minCircle && spell.circle < filter.minCircle) {
        return false;
    }

    if (filter.circle && spell.circle !== filter.circle) {
        return false;
    }

    if (filter.circles && filter.circles.length > 0 && !filter.circles.includes(spell.circle)) {
        return false;
    }

    if (filter.name && spell.name.trim().toLowerCase() !== filter.name.trim().toLowerCase()) {
        return false;
    }

    if (filter.listNames && !filter.listNames.includes(spell.listName)) {
        return false;
    }

    return true;
}