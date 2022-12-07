import userModel from "../models/userModel.js"

//CRUD: CREATE
export async function createUser(req, res) {
    //Implementacion
    const user = req.body.user

    let document

    try {
        document = await userModel.create(user)
    } catch (error) {
        res.status(400)
        res.json(error.message)
        return
    }

    res.status(201)
    res.json(document)

}
//CRUD: READ
export async function readUser(req, res) {
    //Implementacion
    //Peticion desde URL
    const id = req.params.id

    let document
    try {
        document = await userModel.findOne({ "_id": id })
    } catch (error) {
        res.status(400)
        res.json(error.message)
        return
    }

    res.sendStatus(200)
    res.json(document)
}
//CRUD: UPDATE
export async function updateUser(req, res) {
    //Implementacion
    const id = req.params.id
    const updates = req.body.updates

    let document = null

    try {
        document = await userModel.updateOne({ "_id": id }, updates, { runValidators: true })
    } catch (error) {
        res.status(400)
        readUser.json(error.message)
        return;

    }
    res.sendStatus(200)
    res.json(document)
}
//CRUD: DELETE
export async function deleteUser(req, res) {
    //Implementacion
    const id = req.body.id

    let document = null

    try {
        document = await userModel.deleteOne({ "_id": id })
    } catch (error) {
        res.status(400)
        res.json(error.message)
        return
    }
    res.sendStatus(200)
    res.json(document)
}
