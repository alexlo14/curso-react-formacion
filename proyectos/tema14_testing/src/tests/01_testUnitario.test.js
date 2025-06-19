import { test, expect } from "vitest"

const suma = (a, b) => a + b

test('La suma devuelve un resultado correcto', () => {
    expect(suma(1, 2)).toBe(3)
})