import userModel from "../models/userModel.js"
import userRouter from "../routes/userRouter.js"

export async function createUser(req, res) {
    //Implementacion
    const { name, age, city } = req.body.user

    const user = await userModel.create({
        name,
        age,
        city
    })

    res.status(201)
    res.json(user)

}
export function readUser(res) {
    //Implementacion
    res.sendStatus(200)
}
export function updateUser(res) {
    //Implementacion
    res.sendStatus(200)
}
export function deleteUser(res) {
    //Implementacion
    res.sendStatus(200)
}
