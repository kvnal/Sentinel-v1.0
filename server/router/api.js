require('dotenv').config()
const _expressJson = require("express").json()
const Router = require("express").Router
const route = Router()
const bodyParser = require("body-parser")

//schema
const inboxSchema = require('../schema/inbox')
const recordSchema = require('../schema/record')
const logSchema = require('../schema/log')

// route.use(_expressJson)
route.use(require('express').urlencoded({ extended: true }));
route.use(bodyParser.json())

//twilio
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilio = require('twilio')(accountSid, authToken);
// api/ < uri >


//GET
route.get('/record/:id', async (req,res)=>{
    var response
    const {id} = req.params
    if(id!="all"){
        response = await recordSchema.findById(id)
        return res.json(response)
    }
    response = await recordSchema.find()
    return res.json(response)
})

route.get('/inbox',async (req,res)=>{
    const response = await inboxSchema.find().sort({createdAt:-1})
    // const response = await inboxSchema.find()
    return res.json(response)
})

//POST admin
route.post('/record', async (req,res)=>{
    console.log(req.body);
    const response = await recordSchema.create(req.body)
    return res.json(response)
})

route.post('/inbox', async (req,res)=>{
    response = await inboxSchema.create(req.body)
    return res.json(response)
})

//PATCH 
//admin
route.patch('/ban', async (req,res)=>{
    const id = req.body.id
    const update = {status:req.body.status}
    const response = await recordSchema.findOneAndUpdate({_id:id},update)
    return res.json(response)
})

//complaint - comment user
route.patch('/complaint/',async (req,res)=>{
    const id = req.body.id
    console.log(req.body);
    const update = {$push:{complaint : req.body.complaint}}
    const response = await recordSchema.findOneAndUpdate({_id:id},update)
    return res.json(response)
})

route.get("/log",async (req,res)=>{
    const response = await logSchema.find().sort({createdAt:-1})
    return res.json(response)
})


//
const sendSMS = (TO,text) =>{
    // body -> purpose + name+ profile link; 
    twilio.messages
  .create({
     body: text,
     from: '+18148930539',
     to: "+91"+TO
   })
  .then(message => console.log(message));

}

const createSMSText = (id,name,purpose) =>{
    const link = `http://localhost:3000/record/${id}`
    const text = `\n **You got a VISITOR!** \n
    Name : ${name}\n
    Purpose : ${purpose}\n
    Record Link : ${link}\n\n
CALL +123456789 GATE SECURITY TO CANCEL`
    return text ;
}
route.post("/log",async (req,res)=>{
    const response = await logSchema.create(req.body);
    console.log(response);
    const outsider = await recordSchema.find({name:response.name})
    
    const outsiderID= outsider[0].id;
    const smsText = createSMSText(outsiderID,response.name,response.purpose)

    // sendSMS(process.env.PHONE,smsText);
    console.log(smsText);
    return await res.send(response);

})


module.exports = {route}