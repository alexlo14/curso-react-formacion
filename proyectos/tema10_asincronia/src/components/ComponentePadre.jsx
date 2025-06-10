import { createContext } from 'react';
import ComponenteHijo from './ComponenteHijo';

// Define un objeto de contexto
export const MiContexto = createContext();

export default function ComponentePadre() {
    // Define los datos que se desea compartir
    const datos = { nombre: 'Alejandro', edad: 33 };

    // Pasa los datos al proveedor de contexto
    return (
        <MiContexto value={datos}>
            <ComponenteHijo />
        </MiContexto>
    );
}