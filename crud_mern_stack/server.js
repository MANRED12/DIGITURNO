const express = require('express')
const app = express()

//creamos ruta
app.get('/', (req, res)=>{
    res.end('Bienvenidos al servidor backend NODE.JS')

})

//Creamos servidor básico
app.listen(5000, function(){
    console.log('El servidor esta ejecutandose correctamente')
})