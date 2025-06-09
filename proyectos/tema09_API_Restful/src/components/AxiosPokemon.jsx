import axios from "axios"

export default function AxiosPokemon() {

    const buscaPokemon = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon/3')
            .then(res => console.log(res.data))
            .catch(e => console.error(e))
    }

    return <button onClick={buscaPokemon}>Busca Pokémon</button>;
}

