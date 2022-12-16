const mongoose = require('mongoose');

const Cate = new mongoose.Schema({
    name: { type: String, unique: true, lowercase: true }
});

module.exports = mongoose.model("Category", Cate);

