const mongoose = require("mongoose");

const User = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String },
    address: { type: String },
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'product' }],
    feedbacks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'feedback' }]
});

module.exports = mongoose.model("User", User);