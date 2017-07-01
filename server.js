const http= require('http');
const net = require('net');

var server=http.createServer(function(req,res){
  res.writeHead(200), {'Content-Type':"text/plain"}
});

server.listen({
  host: localhost,
  port: 6969,
  exclusive: true
});
