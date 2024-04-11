const mongoose = require("mongoose")
const hatsSchema = mongoose.Schema({
hats_type: String,
size: String,
price: Number
})
module.exports = mongoose.model("hats",hatsSchema)