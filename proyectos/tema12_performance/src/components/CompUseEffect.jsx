import { useEffect, useState } from 'react';
import axios from 'axios';

export default function CompUseEffect() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://api.example.com/data')
        .then(res => setData(res.data));
    }, []);

    return (
        <div>
        <h1>Example Component</h1>
        <ul>
            {data.map(item => (
            <li key={item.id}>{item.name}</li>
            ))}
        </ul>
        </div>
    );
}
