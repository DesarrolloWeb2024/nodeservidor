// Importar el módulo http de Node.js
const http = require('http');

// Configurar el servidor HTTP
const server = http.createServer((req, res) => {
    // Configurar la respuesta HTTP
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('¡Hola, mundo!\n');
});

// Escuchar en el puerto 3000
const puerto = 3000;
server.listen(puerto, () => {
    console.log(`Servidor escuchando en http://localhost:${puerto}/`);
});
