const net = require('net');
const http = require('http');
const fs = require('fs');


var myReadStream = fs.createReadStream(__dirname + '/README.txt');

myReadStream.on('data', function(chunk){
  console.log('new chun recieved');
  console.log(chunk)
})
