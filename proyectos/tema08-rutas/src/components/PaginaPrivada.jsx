import { Navigate } from "react-router-dom";

export default function PaginaPrivada({ auth }) {
    return (
        <div>
        {
            auth 
            ? <h1>Bienvenido a la página privada</h1> 
            : <Navigate to="/" />
        }
        </div>
    );
}