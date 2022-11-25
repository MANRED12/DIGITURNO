import express from "express";

const router = express.Router();

const usuario = {
    nombre: "Maria Jose",
    correo: "mj@correo.me",
    edad: 15,
    notas: [
        3,
        4,
        4.8
    ],
    mascota:{
        nombre: "Firulais",
        raza: "Pug",
        edad: 7,
        peso: "32 kg"
    }
}

router.get("/", (req, res) => {
    res.json(usuario)    
})

router.get("/mascota", (req, res) => {
    res.json(usuario.mascota)    
})

router.get("/nombre", (req, res) => {
    res.json(usuario.nombre)    
})

export default router