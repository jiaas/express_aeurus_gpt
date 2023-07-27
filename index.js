const express = require('express');
const app = express();
const port = 3000;

// Ruta para responder al pedido "GET" a la raíz de la aplicación
app.get('/', (req, res) => {
    res.send('¡Hola Mundo con Express.js!');
});

// Iniciar el servidor en el puerto especificado
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});

