import { test, expect, describe } from "vitest"

describe("Grupo de tests", () => {

    test("Test 1", () => {
        // El comportamiento esperado es que 2 + 3 sea 5
        expect(2 + 3).toBe(5)
    })

    test("Test 2", () => {
        // El comportamiento esperado es que sea true
        expect(true).toBeTruthy()
    })

})
