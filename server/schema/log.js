const mongoose = require("mongoose")
const schema = mongoose.Schema;

const logSchema = schema({
    name:{type:String},
    address:{type:String},
    purpose:{type:String}
},{timestamps:true})

module.exports = mongoose.model("log",logSchema);