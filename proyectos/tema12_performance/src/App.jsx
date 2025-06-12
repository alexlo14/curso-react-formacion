import React, { useEffect } from 'react';
import './App.css'
import { useMemo, useState } from 'react'

function ComponentePesado({ numero }) {
    
  const resultado = useMemo(() => {
    return numero * numero
  }, [numero])

  return (
    <div>
      <h2>Hola: {resultado}</h2>
    </div>
  )
}

function Contador({ inicio }) {

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
const CompMemo = React.memo(Contador)

function DatosFetch() {

  const [datos, setDatos] = useState()
  const [cargando, setCargando] = useState(true)

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then((data) => {
        setDatos(data)
        setCargando(false)
      })
      .catch(error => console.error("Error al cargar los datos: " + error))
  }, [])

  if (cargando) {
    return <h1>Cargando</h1>;
  } else {
    return (
      <div>
        <h2>Lista de Usuarios</h2>
        <ul>
          {datos.map((usuario) => (
            <li key={usuario.id}>{usuario.name}</li>
          ))}
        </ul>
      </div>
    )
  }
}

function Calculador({ numero }) {
  const resultado = useMemo(() => {
    return numero * numero
  }, [numero])

  return (
    <div>
      <h2>El cuadrado de {numero} es: {resultado}</h2>
    </div>
  )
}

function App() {

  const [numero, setNumero] = useState(1);

  return (
    <div>
      <Calculador numero={numero} />
      <button onClick={() => setNumero(numero + 1)}>Incrementar</button>
    </div>
  );
}

export default App
