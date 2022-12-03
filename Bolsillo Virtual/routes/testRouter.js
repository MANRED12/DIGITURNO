import express from "express";
import userModel from "../models/userModel.js";

const testRouter = express.Router()

testRouter.get("/", async (req, res) => {
    let documents

    try {
        documents = await userModel.find({
            "age": { $gte: 20, $lte: 40 },
        }).sort({ "age": -1 })
    } catch (error) {

    }
    res.json(documents)

})

export default testRouter