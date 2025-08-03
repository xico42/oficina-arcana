// Simula a rolagem de um dado de x lados.
export function dx(x: number): number {
    return Math.floor(Math.random() * x) + 1;
}

// Simula a rolagem de n dados de x lados e retorna a soma.
export function ndx(n: number, x: number): number {
    let sum = 0
    for (let i = 0; i < n; i++) {
        sum += dx(x);
    }
    return sum;
}

// Simula a rolagem de n dados de 6 lados e retorna a soma.
export function nd6(n: number): number {
    return ndx(n, 6);
}