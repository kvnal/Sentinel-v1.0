const mongoose = require("mongoose")
const schema = mongoose.Schema

const inboxSchema = schema({
    title: {type:String}, 
    message : {type : String},
    image : {type : String},
},{timestamps:true})

module.exports = mongoose.model("inbox",inboxSchema)
