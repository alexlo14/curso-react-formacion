// archivo 05_Login.test.jsx

import { render, screen, fireEvent } from "@testing-library/react"
import { test, expect } from "vitest"
import Login from "../views/Login"

test("el usuario puede iniciar sesión correctamente", async () => {
    render(<Login />)

    const userInput = screen.getByLabelText("Usuario")
    const passwordInput = screen.getByLabelText("Contraseña")
    const loginButton = screen.getByRole("button", { name: "Iniciar sesión" })

    fireEvent.change(userInput, { target: { value: "ejemplo_usuario" } })
    fireEvent.change(passwordInput, { target: { value: "ejemplo_contraseña" } })
    fireEvent.click(loginButton)

    // Esperamos a que la API responda con la autenticación del usuario
    const response = await screen.findByTestId("pantalla-de-inicio")

    // Comprobamos que se ha redirigido al usuario a la pantalla de inicio
    expect(response).toBeInTheDocument()
})