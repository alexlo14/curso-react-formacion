
export default function FetchPokemon() {
    
    const buscaPokemon = () => {
        fetch('https://pokeapi.co/api/v2/pokemon/6')
            .then(res => res.json())
            .then(res => console.log(res))
            .catch(e => console.error(e))
    }

    return <button onClick={buscaPokemon}>Busca Pokémon</button>
}