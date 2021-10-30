var router = require("express").Router();
const request = require('request');
require("dotenv").config();

const apiKey = process.env.OPEN_WEATHER_APIKEY;


router.get("/",function(req,res){
    let city = "gurgaon";
  let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
request(url, function (err, response, body) {
    if(err){
      res.render('index', {weather: null, error: 'Error, please try again'});
    } else {
      let weather = JSON.parse(body)
      if(weather.main == undefined){
        res.render('index', {weather: null, error: 'Error, please try again'});
      } else {
        let weatherText = `It's ${weather.main.temp} degrees Celcius with ${weather.weather[0].main} in ${weather.name}!`;
        res.render('index', {weather: weatherText, error: null});
      }
    }
    });
});
module.exports = router;
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
// const client = require('twilio')(accountSid, authToken);
console.log(accountSid+" "+authToken);
// client.messages
//   .create({
//      body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
//      from: '+15017122661',
//      to: '+15558675310'
//    })
//   .then(message => console.log(message.sid));
