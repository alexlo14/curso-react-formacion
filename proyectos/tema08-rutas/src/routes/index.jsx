import { Children } from "react";
import Home from "../components/Home";
import Contador from "../components/Contador";
import DetalleProducto from "../components/DetalleProducto";
import NavegacionHistorial from "../components/NavegacionHistorial";
import Perfil from "../components/Perfil";
import { Navigate } from "react-router-dom";
import Contacto from "../components/Contacto";
import PaginaPrivada from "../components/PaginaPrivada";

const rutaProtegida = (element) => {
    const estaAutenticado = true;
    if (estaAutenticado) {
        return element;
    } else {
        return <Navigate to="/" />;
    }
};

const routes = [
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/contacto",
        element: <Contacto />
        },
    {
        path: "/contador",
        element: <Contador />
    },
    {
        path: "/productos/:idProducto",
        element: <DetalleProducto />
    },
    {
        path: "/productos",
        element: <DetalleProducto />
    },
    {
        path: "/perfil",
        element: rutaProtegida(<Perfil />),
        children: [
            {
                path: ":nombre",
                element: <Contacto />
            },
        ],
    },
    {
        path: "/navegacion",
        element: <NavegacionHistorial />
    },
    {
        path: "/privada",
        element: <PaginaPrivada auth={true} />
    },
];

export default routes;