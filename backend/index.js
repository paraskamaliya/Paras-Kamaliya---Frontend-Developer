const express = require("express");
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');
const { CoinModel } = require("./Model/coin.model");

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Welcome to Bitcoin")
})

app.get("/coin", async (req, res) => {
    try {
        const coin = await CoinModel.find();
        res.status(200).send(coin);
    } catch (error) {
        res.status(400).send({ "msg": "Something went wrong", "err": error })
    }
})

app.post("/add", async (req, res) => {
    try {
        let coin = new CoinModel(req.body);
        await coin.save();
        res.status(200).send({ "msg": "Coin is Posted" });
    } catch (error) {
        res.status(400).send({ "msg": "Something went wrong", "err": error })
    }
})

app.patch('/update/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await CoinModel.findByIdAndUpdate({ _id: id }, req.body);
        res.status(200).send({ "msg": "Coin is Updated" })
    } catch (error) {
        res.status(400).send({ "msg": "Something went wrong", "err": error })
    }
})

app.delete('/delete/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await CoinModel.findByIdAndDelete({ _id: id });
        res.status(200).send({ "msg": "Coin is Deleted" })
    } catch (error) {
        res.status(400).send({ "msg": "Something went wrong", "err": error })
    }
})

app.listen(process.env.PORT, async () => {
    try {
        mongoose.connect(process.env.mongoURL)
        console.log("Connected to DB")
    } catch (error) {
        console.log(error);
    }
})