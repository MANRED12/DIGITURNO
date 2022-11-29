import express from "express"
import { crearPublicacion, leerPublicacion, leerPublicaciones } from "../controllers/homeController.js"

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

//CRUD CREATE - READ - UPDATE - DELETE

router.post("/nuevo", (req, res) => {
    crearPublicacion(req, res);
})

router.get("/lista", (req, res) => {
    //Implementamos código
    leerPublicaciones(req, res)
})

router.get("/lista/:id", (req, res) => {
    //Implementamos código
    leerPublicacion(req, res)
})


export default router