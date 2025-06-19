// archivo 01_testcases.test.js
import { test, expect } from "vitest"

test("Este es el nombre del test", () => {
    // El comportamiento esperado es que 2 + 3 sea 5
    expect(2 + 3).toBe(5)
})