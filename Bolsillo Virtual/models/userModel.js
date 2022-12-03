import mongoose from "mongoose";

//Declaramos el modelo
const userModel = mongoose.Schema({
    "name": {type:String, required:true},
    "age": {type:Number, required:true},
    "city": {type:String, required:true}
})

export default mongoose.model("users", userModel)