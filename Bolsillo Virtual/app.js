import express from "express"
import mongoose from "mongoose";
import userRouter from "./routes/userRouter.js";

const app = express();

const port = process.env.PORT || 8080

app.listen(port, () => {
    console.log("El servidor se esta ejecutando correctamente.");
})
//Conexion a BD
mongoose.connect("mongodb+srv://adminProject:Manred0215@clusteraccesscontrolman.tebezur.mongodb.net/AccessControl-Manager?retryWrites=true&w=majority", (err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("La base de datos se encuentra conectada.");
    }
})

//Middleware
app.use(express.json())
app.use("/user", userRouter)