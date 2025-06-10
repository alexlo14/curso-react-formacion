import { useContext } from 'react';
import { MiContexto } from './ComponentePadre';

export default function ComponenteHijo() {
    // Recupera los datos del contexto utilizando useContext
    const { nombre, edad } = useContext(MiContexto);

    return (
        <div>
            <p>Nombre: {nombre}</p>
            <p>Edad: {edad}</p>
        </div>
    );
}
