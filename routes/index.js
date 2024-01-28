var express = require('express');
const path = require('path')
const bodyParser = require('body-parser')
const https = require('https')
const axios = require('axios');
var router = express.Router();

router.use(bodyParser.urlencoded({extended:true}))

router.get('/', function(req,res){
    res.sendFile(path.join(__dirname, '..','/views/index.html'));

});

router.post('/getWeather', function(req,res){
    const cityName = req.body.city
    console.log(cityName)
    const APIkey = `c1cacfbef226cf011919eb8a200f1212`
    const APIUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIkey}&units=metric`;
    
    https.get(APIUrl,function(response){
    response.on("data", function(data){
        const weatherdata = JSON.parse(data)
            return res.status(200).send(weatherdata)
        }, error =>{
            return res.status(500).send(weatherdata)
        }
      )
});

});



module.exports = router;