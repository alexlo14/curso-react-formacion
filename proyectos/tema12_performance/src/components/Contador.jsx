import { useState } from 'react'

export default function Contador({ inicio }) {

    const [count, setCount] = useState(inicio)

    const incrementar = () => {
        setCount(count + 1)
    }

    return (
        <div>
            <h2>Contador: {count}</h2>
            <button onClick={incrementar}>Incrementar</button>
        </div>
        
    )
}
