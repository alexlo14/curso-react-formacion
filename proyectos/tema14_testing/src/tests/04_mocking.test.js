import axios from "axios"
import { test, expect, vi } from "vitest"

// Creamos un mock de axios, para controlar la información que recibimos
vi.mock("axios")

test("muestra la lista de productos", async () => {
    const productos = [
        { id: 1, nombre: "Producto 1", precio: 10 },
        { id: 2, nombre: "Producto 2", precio: 20 },
        { id: 3, nombre: "Producto 3", precio: 30 },
    ]
	
    // Indicamos qué respuesta debe devolver axios.get (mockeamos la respuesta)
    axios.get.mockResolvedValueOnce({ data: productos })

    // Llamamos a la función y almacenamos la respuesta en items
    const items = await axios.get("https://api.midominio.com")

    expect(items.data.length).toBe(3)
})
