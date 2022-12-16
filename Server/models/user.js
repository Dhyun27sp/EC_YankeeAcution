const mongoose = require("mongoose");

const User = new mongoose.Schema({
    uid: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    password: { type: String, required: true },
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true },
    address: { type: String, required: true },
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'product' }],
    feedbacks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'feedback' }]
});

module.exports = mongoose.model("User", User);