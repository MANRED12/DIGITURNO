import express from "express"

//Variable
let router = express.Router()

//localhost:3000/home

//Definimos rutas de home
router.get("/", (req, res) => {
    //Implementamos código
    res.send("Estas en Home!!")
})


router.get("/grupo", (req, res) => {
    //Implementamos código
    res.send("Bienvenidos a mi <b>grupo</b>")
})

//Creacion de arreglo de publicaciones
let publicaciones = []

router.post("/nuevo", (req, res) => {
    let id = Math.random().toString(36).slice(2)

    let publicacion = {

        "Nueva publicacion": req.body.publicacion,
        identificador: id
    }

    res.json(publicacion)

    publicaciones.push(publicacion)
})

router.get("/lista", (req, res) => {
    //Implementamos código
    res.json(publicaciones)
})


export default router