export interface Attributes {
    for: number,
    des: number,
    con: number,
    int: number,
    sab: number,
    car: number,
}

export type AttributeName = keyof Attributes;
