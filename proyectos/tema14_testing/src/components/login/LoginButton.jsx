// archivo src/components/Login/LoginButton.jsx

import { useState } from "react"

const LoginButton = () => {
    const [loggedIn, setLoggedIn] = useState(false)
    const login = () => {
        setLoggedIn(true)
    }
    return (
        <>
            <button name="Iniciar sesión" onClick={login}>Iniciar sesión</button>
            {loggedIn && (
                <span data-testid="pantalla-de-inicio">Pantalla de inicio</span>
            )}
        </>
    )
}

export default LoginButton
