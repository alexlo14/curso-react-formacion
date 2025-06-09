import { useParams } from "react-router-dom"

export default function DetalleProducto() {

    const { idProducto } = useParams() 

    if (idProducto === undefined) {
        return <h2>Producto no encontrado</h2>
    } else {
        return <h2>Detalles del Producto: {idProducto}</h2>
    }
}
