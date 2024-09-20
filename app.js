const express = require('express');
const path = require('path');
const app = express();
const port = 3000;  // Puedes cambiar el puerto si es necesario



// Ruta de ejemplo para la página principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'index.html'));
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
