const request = require('request');
const env = require('env2')('./.env');
const key = process.env.API_KEY;

// const sharp = require('sharp')
let json ={};

const apirequest = (response, date)=>{

  const url = `https://api.nasa.gov/planetary/apod?&date=${date}&api_key=${key}`

  request.get(url, (err, res, body) =>{
    if(err){
      response.writeHead(404, '{Content-Type: text/plain}');
      response.end(`error ${err.message}`);
    }
    json = JSON.parse(body);
    response.writeHead(200, '{Content-Type: application/json}');
    response.end(JSON.stringify(json));
  });

}


module.exports = apirequest;

// https://api.nasa.gov/planetary/apod?&date=2017-12-10&api_key=NkOMe6hpH6JxdJ6Q8yffBOzbK5FYaZ0lrrWhaubd
