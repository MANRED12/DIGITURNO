const express = require('express')
const app = express()
const port = process.env.PORT || 5000

app.get('/', (req, res)=>{
    res.end('Servidor backend Node.js en ejecución ...')
})

//Configurar server básico
app.listen(port, () =>{
    console.log('El servidor está corriendo correctamente (server.js) en el puerto ' + port)
})