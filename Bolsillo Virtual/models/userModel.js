import mongoose from "mongoose";

const perfil = mongoose.Schema({
    "mensaje": { type: String, required: true },
    "estado": String
})

const ciudadesPosibles = ["Bogotá", "Cali", "Medellin", "Barranquilla"]

function validacionPar(numero) {
    if (numero % 2 == 0) {
        return true
    } else {
        return false
    }

}
//Declaramos el modelo
const userModel = mongoose.Schema({
    "name": { type: String, required: true, minLength: 3, maxLength: 30, unique: true },
    "age": { type: Number, required: true, min: 14, max: 90, validate: { validator: validacionPar, message:"La edad debe ser un número par"} },
    "city": { type: String, required: true, enum: ciudadesPosibles },

})

export default mongoose.model("users", userModel)