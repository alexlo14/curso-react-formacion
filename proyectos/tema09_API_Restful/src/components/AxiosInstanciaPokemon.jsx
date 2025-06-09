import axios from "axios"

const pokeAxios = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/pokemon/'
})

export default function AxiosInstanciaPokemon() {

    const buscaPokemon = () => {
        pokeAxios.get('9')
            .then(res => console.log(res.data))
            .catch(e => console.error(e))
    }

    return <button onClick={buscaPokemon}>Busca Pokémon</button>
}


