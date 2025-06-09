import './App.css'
import axios from 'axios'
import AxiosInstanciaPokemon from './components/AxiosInstanciaPokemon'
import AxiosPokemon from './components/AxiosPokemon'
import FetchPokemon from './components/FetchPokemon'
import { useEffect, useState } from 'react'

function App() {

    const obtenerNombresUsuarios = () => {
      fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => {
        data.map(user => {
          console.log(`Nombre: ${user.name}`)
        })
      })
      .catch(error => console.error("Error fetching todos: " + error))
    }

    useEffect(() => {
      obtenerNombresUsuarios()
    }, [])


  return (
    <>
    </>
  )
}

export default App
