import { useState } from "react"

function Contador() {
    const [contador, setContador] = useState(0)

    const incrementar = () => {
        setContador(contador + 1)
    }

    const decrementar = () => {
        setContador(contador - 1)
    }

    return (
        <div>
            <h2>Contador: {contador}</h2>
            <button onClick={incrementar}>Incrementar</button>
            <button disabled={!contador} onClick={decrementar}>Decrementar</button>
        </div>
    )
}

export default Contador