const express = require('express')
const router = express.Router()

const mongoose = require('mongoose')
const eschema = mongoose.Schema

const eschemausuario = new eschema({
    nombre: String,
    email: String,
    telefono: String,
    idusuario: String
})

const ModeloUsuario = mongoose.model('usuarios', eschemausuario)

module.exports = router

//En localhost:5000/api/usuario/ejemplo
router.get('/ejemplo', (req, res)=>{
    res.end('Carga exitosa desde ruta ejemplo')
})

router.get('/test', (req, res)=>{
    res.end('Carga exitosa desde ruta test')
})