const mongoose = require('mongoose');
mongoose.set('strictQuery', true)
mongoose.connect('mongodb+srv://MANRED12:Gaby0215@clustercrudmernstack.ev54d82.mongodb.net/?retryWrites=true&w=majority');

const objetobd = mongoose.connection

objetobd.on('connected', ()=>{
console.log("Conexión correcta  a MongoDB")
})

objetobd.on('error', ()=>{
console.log("Error en la conexión a MongoDB (conexión.js)")
})

module.exports = mongoose
