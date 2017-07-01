const http= require('http');
const net = require('net');

var server=http.createServer(function(req,res){
  res.writeHead(200, {'Content-Type':"text/plain"})
  res.end("Hey Ninjas");
});

server.listen({
  host: '127.0.0.1',
  port: 6969,
  exclusive: true
});
