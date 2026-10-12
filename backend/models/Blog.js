const mongoose = require("mongoose")

module.exports = mongoose.model("blog", new mongoose.Schema({
    title: { type: String, required: true },
    desc: { type: String, required: true },
    hero: { type: String, required: true },
}))