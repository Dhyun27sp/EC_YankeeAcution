const mongoose = require('mongoose');

const Prod = new mongoose.Schema({
    author: [{ type: mongoose.Schema.Types.ObjectId, ref: 'user' }],
    pname: { type: String, required: true },
    pdesc: { type: String, required: true },
    amount: { type: Number, required: true },
    time: { type: String, required: true },
    category: [{ type: mongoose.Schema.Types.ObjectId, ref: 'cate' }],
    image: { type: String, required: true }
});

module.exports = mongoose.model("Product", Prod);