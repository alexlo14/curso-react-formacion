

export default function ListaTareas({ tareas }) {
    
    if (!tareas || tareas.length === 0) {
        return <p>No hay tareas pendientes</p>;
    }

    return (
        <ul>
            {tareas.map((tarea, index) => (
                <li key={index}>{tarea.nombre} - {tarea.completa ? 'Completada' : 'Pendiente'}</li>
            ))}
        </ul>
    )
}