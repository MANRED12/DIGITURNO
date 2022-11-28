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

export default router