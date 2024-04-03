const mongoose = require("mongoose")
const hatsSchema = mongoose.Schema({
name: String,
size: String,
price: Number
})
module.exports = mongoose.model("hats",hatsSchema)