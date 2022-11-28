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
    mascota: {
        nombre: "Firulais",
        raza: "Pug",
        edad: 7,
        peso: "32 kg"
    }
}
// localhost:3000/usuario/...

router.get("/", (req, res) => {
    res.json(usuario)
})


router.get("/mascota", (req, res) => {
    res.json(usuario.mascota)
})

router.get("/nombre", (req, res) => {
    res.json(usuario.nombre)
})

router.get("/agrupar/:args", (req, res) => {
    let nombres = req.params.args
    nombres = nombres.split(" ")
    res.json(nombres)    
})

//Para introducir parametros por URL
router.get("/:anyThing", (req, res) => {
    let nombre = req.params.anyThing
    res.send("Usted está buscando a: " + nombre)
})

router.get("/:anyThing/:id", (req, res) => {
    let nombre = req.params.anyThing
    let identificacion = req.params.id
    res.send("Usted está buscando a: " + nombre + " con identificación " + identificacion)
})

router.get("/:anyThing/:id/:age", (req, res) => {
    let nombre = req.params.anyThing
    let identificacion = req.params.id
    let edad = req.params.age
    res.json({
        "Nombre de usuario": nombre,
        "Identificación de usuario": identificacion,
        "Edad usuario": edad
    })
})



    export default router