const express = require('express')
const app = express()
const port = process.env.PORT || 5000

//Importar conexion MongoDB
const archivoBD = require('./conexion')

//Importación del archvo de rutas y modelo usuario
const rutausuario = require('./rutas/usuario')

app.use('/api/usuario', rutausuario)

//Ruta
app.get('/', (req, res)=>{
    res.end('Este es el servidor BackEnd en el puerto '+port)
})
//Importar conexion MongoDB

//Configurar server básico
app.listen(port, () =>{
    console.log('El servidor BackEnd está corriendo correctamente (server.js) en el puerto ' + port)
})