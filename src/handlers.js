const fs = require('fs');
const path = require('path');
const apirequest = require('./apirequest');
const queryString = require('querystring');



  const homeHandler = (req, res) =>{
    const filePath = path.join(__dirname, '..', 'public', 'index.html');
    fs.readFile(filePath, (error, file) =>{
      if (error){
        res.writeHead(500, 'Content-Type: text/plain');
        res.end('Error 500, server not found');
      }
      res.writeHead(200, 'Content-Type: text/html');
      res.end(file);
    });
};

  const staticFileHandler = (req,res,url) =>{
  const extensionType ={
    html: 'text/html',
    css: 'text/css',
    js: 'applicaiton/javascript',
    img: 'img/jpg'
  };
  const extension = url.split('.')[1];
  const filePath = path.join(__dirname, '..', url);
  fs.readFile(filePath, (error, file) =>{
    if(error){
      res.writeHead(404, 'Content-Type: text/plain');
      res.end('Error 404, content not found');

    } res.writeHead(200, `Content-Type: ${extensionType[extension]}`);
    res.end(file);
  })
}

const apiHandler = (req, res) =>{
  const search = req.url;
  const parsed = queryString.parse(search);
  const date = parsed['/api'];

  apirequest(res, date);

}


module.exports = {
  homeHandler,
  staticFileHandler,
  apiHandler,
};
