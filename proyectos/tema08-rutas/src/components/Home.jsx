import { Link } from "react-router-dom"
import "../App.css"

export default function Home() {
    return (
        <div className="app">
            <h1>Home</h1>
            <Link to='/'>Inicio </Link>
            <Link to='/productos/12'>Productos </Link>
            <Link to='/contador'>Contador </Link>
            <Link to='/contacto'>Contacto </Link>
            <Link to='/perfil'>Perfil </Link>
        </div>
    )
}
