const mongoose = require('mongoose');
const coinSchema = mongoose.Schema({
    img: String,
    tokenName: String,
    symbol: String,
    decimals: Number,
    marketcap: Number,
    chain: String
}, {
    versionKey: false
})
const CoinModel = mongoose.model("coin", coinSchema);
module.exports = { CoinModel }; 