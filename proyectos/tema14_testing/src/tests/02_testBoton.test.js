import { render, fireEvent, screen } from "@testing-library/react";
import Boton from "../components/Boton";
import { test, vi, expect } from "vitest"


test("El botón se renderiza correctamente", () => {
    render(<Boton />)
})

test("El botón lanza la función pasada por props", () => {
    const miSpy = vi.fn()
    render(<Boton func={miSpy} />)
    const boton = screen.getByRole("button")
    fireEvent.click(boton)

    expect(miSpy).toBeCalledTimes(1)
})