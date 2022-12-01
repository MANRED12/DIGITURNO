import mongoose from "mongoose";

//Declaramos el modelo
const userModel = mongoose.Schema({
    "name": String,
    "age": Number,
    "city": String
})

export default mongoose.model("users", userModel)