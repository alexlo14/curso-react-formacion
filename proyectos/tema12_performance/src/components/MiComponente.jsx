import React, { useMemo } from 'react'

	
const calculoMuyGrande = () => {
    // Aquí viene un cálculo muy pesado que llevará muchos recursos
    let a;
    for (let i = 0; i < 123456789; i++) {
        a = i;
    }
    return a;
};

export default function MiComponente ({ nombre }) {
    const resultado = useMemo(() => calculoMuyGrande(), []);
    return <h1>Hola {nombre}: {resultado}</h1>;
}
