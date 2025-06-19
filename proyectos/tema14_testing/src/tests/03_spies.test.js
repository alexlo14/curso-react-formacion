// archivo 03_spies.test.js
import { expect, test, vi } from "vitest";

test("Testeando con spies", () => {
    // Creamos nuestro spy con vi.fn()
    const miSpy = vi.fn()
    // Lanzamos la función
    miSpy()

    // Utilizamos algunos expect con nuestro spy
    expect(miSpy).toBeCalled() // Esperamos que se haya ejecutado
    expect(miSpy).toBeCalledTimes(1) // Esperamos que se haya ejecutado 1 vez
})