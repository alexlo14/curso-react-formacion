import { Navigate } from "react-router-dom";

export default function PreguntasFrecuentes() {
    const redirigir = false
    return (
        <div>
        {
            redirigir 
            ? <Navigate to="/" /> 
            : <h1>Preguntas frecuentes</h1>
        }
        </div>
    );
}