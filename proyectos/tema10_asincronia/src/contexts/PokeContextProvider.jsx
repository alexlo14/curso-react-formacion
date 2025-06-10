import { useState, createContext } from 'react';
import axios from 'axios';

export const PokeContext = createContext(null);

export default function PokeContextProvider({ children }) {

const [pokemon, setPokemon] = useState(null);

    const fetchPokemon = async () => {
        const numeroAleatorio = Math.round(Math.random() * 799) + 1;
        const response = await axios.get(
            `https://pokeapi.co/api/v2/pokemon/${numeroAleatorio.toString()}`
        );
        setPokemon(response.data);
        
    };

    return (
        <PokeContext value={{ pokemon, fetchPokemon }}>
            {children}
        </PokeContext>
    );
}