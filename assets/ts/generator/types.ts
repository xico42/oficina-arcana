export interface Attributes {
    for: number,
    des: number,
    con: number,
    int: number,
    sab: number,
    car: number,
}

export type AttributeName = keyof Attributes;

export interface Attribute {
    name: AttributeName,
    value: number,
}

export interface FullAttribute {
    name: AttributeName,
    value: number,
    mod: number,
}

export type CharAttributes = Record<AttributeName, FullAttribute>;

export type Gender = 'M' | 'F';
