
const express = require("express")
const cors = require('cors')
const app = express()
app.use(cors())
const API = require("./router/api")
//port
const PORT = process.env.PORT || 4000

//mongo
const mongo = require('./mongo');

//api
app.use('/api',API.route)


const listen = () =>{
    app.listen(PORT,() => {console.log(`Listening @ ${PORT}`)})
}

mongo.connect(listen)
