const request = require('request');
const env = require('env2')('../.env');
const key = process.env.DB_KEY;

// const sharp = require('sharp')
let json ={};

const apirequest = (response, date)=>{

  request.get(`https://api.nasa.gov/planetary/apod?&date=${date}&api_key=${key}`, (err, res, body) =>{
    if(err){
      process.stdout.write(`error ${err.message}`);
    }
    json = JSON.parse(body);

    response.writeHead(200, '{Content-Type: application/json}');
    response.end(JSON.stringify(json));
  });

}


module.exports = apirequest;
