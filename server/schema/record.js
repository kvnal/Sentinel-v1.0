const mongoose = require("mongoose")
const schema = mongoose.Schema

const recordSchema = schema({
    name : {type : String},
    dp : {type : String, default:""},
    relation: {type:String}, // resident or outsider 
    occupation : {type : String},
    aadhaar : {type : Number},
    address : {type:String }, //resident block no.
    complaint : {type: Array, default:[]},
    status : {type:Number, default: 0}, // 1 for ban    
},{timestamps:true})

//outsider + address = relative

module.exports = mongoose.model("record",recordSchema)
