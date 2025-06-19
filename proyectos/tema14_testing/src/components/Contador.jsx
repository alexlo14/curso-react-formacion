import { useState } from "react";

export default function Contador() {
    const [cont, setCont] = useState(0)

    const incrementar = () =>{
        setCont(cont + 1)
    }

    const decrementar = () =>{
        setCont(cont - 1)
    }

    return (
        <div>
            <p>Contador = {cont}</p>
            <button onClick={incrementar}>Incrementar</button>
            <button onClick={decrementar}>Decrementar</button>
        </div>
    )
}