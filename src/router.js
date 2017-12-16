
const {
  homeHandler, staticFileHandler, apiHandler
} = require('./handlers.js');

const router = (request, response) =>{
  let url = request.url;

  if(url ==='/'){
    homeHandler(request, response);
  } else if(url.indexOf('/public') !== -1){
    staticFileHandler(request, response, url);
  } else if (url.indexOf('/api') !== -1){
    // response.writeHead(200, '{Content-Type: text/plain}');
    // response.end('the request got this far');
    apiHandler(request, response);

  } else{
    response.writeHead(404);
    response.end('page not found');
  }
}

module.exports = router;
