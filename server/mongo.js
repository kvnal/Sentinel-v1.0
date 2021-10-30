require("dotenv").config()
const mongoose = require("mongoose")

const connect=  (callback) =>{

    mongoose.connect(process.env.MONGO_URI,{useNewUrlParser:true, useUnifiedTopology:true})
    const db = mongoose.connection
    db.on('open',()=>{
        console.log("Mongo connected!!");
        return callback();
    })
    
    db.on('error',(err)=>{console.log(`Mongo error : ${err}`);})
}

module.exports= {connect}

