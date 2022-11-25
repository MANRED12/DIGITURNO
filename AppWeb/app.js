//Se impora express
import express from "express";

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