import express from "express"
import { createUser, deleteUser, readUser, updateUser } from "../controllers/userController.js"


const userRouter = express.Router()

//CRUD

//Crear: POST
userRouter.post("/", (req, res) => {
    createUser(res)

})

//Leer: GET
userRouter.get("/", (req, res) => {
    readUser(res)
})

//Actualizar: PUT - PATCH
userRouter.patch("/", (req, res) => {
    updateUser(res)
})

//Eliminar: DELETE
userRouter.delete("/", (req, res) => {
    deleteUser(res)
})

export default userRouter