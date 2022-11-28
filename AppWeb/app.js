//Se impora express
import express from "express";
import UserRouter from "./routes/UserRouter.js";
import homeRouter from "./routes/home.js"

//Instancia de la clase express
const app = express();
const puerto = 3000;

//Escuchamos del servidor a traves del puerto 3000

app.listen(puerto, () => {
    console.log("El servidor se esta ejecutando.")
})

app.get("/", (req, res) => {
    //Implementamos código
    res.send("Bienvenido Ing. Rodrigo!!")
})

app.get("/direccion",(req, res)=>{
    res.redirect(("home/grupo"))
})

app.get("/usuario", (req, res) => {
    res.json(usuario)    
})

app.get("/usuario/mascota", (req, res) => {
    res.json(usuario.mascota)
})

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

app.use(express.json())
app.use("/usuario", UserRouter)
app.use("/home",homeRouter)