import { useNavigate } from "react-router-dom";

export default function NavegacionHistorial() {
    const navigate = useNavigate();

    function irAtras() {
        navigate(-1);
    }

    return (
        <div>
        <button onClick={irAtras}>Ir atrás</button>
        </div>
    );
}