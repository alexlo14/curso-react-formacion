// ContactoForm.jsx
import { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';

function ContactoForm() {
    const [formulario, setFormulario] = useState({
        nombre: '',
        correo: '',
        mensaje: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormulario(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Datos enviados:', formulario);
        // Aquí podrías enviar los datos a un backend o API
        setFormulario({ nombre: '', correo: '', mensaje: '' });
    };

    return (
        <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
            maxWidth: 500,
            margin: '2rem auto',
            padding: 3,
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            border: '1px solid #ccc',
            borderRadius: '8px',
            boxShadow: 2,
        }}
        >
        <Typography variant="h5" component="h2" align="center">
            Formulario de Contacto
        </Typography>

        <TextField
            label="Nombre"
            name="nombre"
            value={formulario.nombre}
            onChange={handleChange}
            required
        />
        <TextField
            label="Correo Electrónico"
            name="correo"
            type="email"
            value={formulario.correo}
            onChange={handleChange}
            required
        />
        <TextField
            label="Mensaje"
            name="mensaje"
            multiline
            rows={4}
            value={formulario.mensaje}
            onChange={handleChange}
            required
        />
        <Button type="submit" variant="contained" color="primary">
            Enviar
        </Button>
        </Box>
    );
}

export default ContactoForm;
