const mongoose = require('mongoose');

const Bid = new mongoose.Schema({
    author: [{ type: mongoose.Schema.Types.ObjectId, ref: 'user' }],
    pid: [{ type: mongoose.Schema.Types.ObjectId, ref: 'product' }],
    bidamount: { type: Number, required: true },
    bidquantity: { type: Number, required: true },
});

module.exports = mongoose.model("Bid", Bid);