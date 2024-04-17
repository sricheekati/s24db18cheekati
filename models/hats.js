const mongoose = require("mongoose")
const hatsSchema = mongoose.Schema({
hats_type: {type:String,min:1,max:100},
size: String,
price: {type:Number,min:0,max:10000}
})
module.exports = mongoose.model("hats",hatsSchema)