// archivo 04_Boton.test.jsx
import { render, screen, fireEvent } from "@testing-library/react"
import Boton from "../components/Boton"
import { vi, test, expect } from "vitest"

test("Renderiza correctamente", () => {
    const mySpi = vi.fn()

    render(<Boton>Hola mundo</Boton>)

    mySpi()

    const miBoton = screen.getByText("Hola mundo")

    fireEvent.click(miBoton)

    expect(mySpi).toBeCalled()
})
