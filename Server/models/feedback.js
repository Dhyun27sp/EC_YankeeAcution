const mongoose = require('mongoose');

const Feedback = new mongoose.Schema({
    name: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
    subject: { type: mongoose.Schema.Types.ObjectId, ref: 'product' },
    desc: { type: String, required: true },
    date: { type: String, required: true }
});

module.exports = mongoose.model("Feedback", Feedback);