const mongoose = require('mongoose');

const Feedback = new mongoose.Schema({
    name: { type: String, required: true },
    subject: { type: String, required: true },
    desc: { type: String, required: true },
    date: { type: String, required: true }
});

module.exports = mongoose.model("Feedback", Feedback);