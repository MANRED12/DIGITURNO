//Se impora express
import express from "express";
import UserRouter from "./routes/UserRouter.js";

//Instancia de la clase express
const app = express();
const puerto = 3000;

app.listen(puerto, () => {
    console.log("El servidor se esta ejecutando.")
})

app.get("/home", (req, res) => {
    //Implementamos código
    res.send("Estas en Home!!")
})

app.get("/", (req, res) => {
    //Implementamos código
    res.send("Bienvenido Ing. Rodrigo!!")
})

app.get("/home/grupo", (req, res) => {
    //Implementamos código
    res.send("Bienvenidos a mi grupo")
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
app.get("/usuario", (req, res) => {
    res.json(usuario)    
})

app.get("/usuario/mascota", (req, res) => {
    res.json(usuario.mascota)
})

app.use("/usuario", UserRouter)