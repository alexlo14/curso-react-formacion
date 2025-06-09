import { Outlet } from "react-router-dom";

const Perfil = () => {
    return (
        <div>
            <h1>Mi perfil privado</h1>
            <Outlet />
        </div>
    );
};

export default Perfil;