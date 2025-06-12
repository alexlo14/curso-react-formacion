import { useState, useCallback } from 'react';

export default function ComponenteCallback() {
    const [count, setCount] = useState(0);

    const increment = useCallback(() => {
        setCount(count + 1);
    }, [count]);

    return (
        <div>
        <p>Count: {count}</p>
        <button onClick={increment}>Increment</button>
        </div>
    );
}
