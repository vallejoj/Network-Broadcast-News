const net = require('net');


var clients= [];

net.createServer(function(socket){
process.stdin.setEncoding('utf8');
socket.write('Welcome to ChatTime\n')

socket.name = socket.remoteAddress + ":" + socket.remotePort;

clients.push(socket);




 broadcast('Get your chart on! ' + "\n");
 socket.write('Enter Username:\n ');


socket.on('data', (data) => {
    data = data.slice(0, data.length -1);
    if(socket.name === socket.remoteAddress + ":" + socket.remotePort) {
      socket.name = data;
      broadcast(socket.name + " has joined\n", socket);
      console.log(socket.name + "has connected")

    }else {
      broadcast(socket.name + ': ' + data + "\n");
      console.log(socket.name + ': ' + data + "\n")
    }
  });

  socket.on('end', function () {
     clients.splice(clients.indexOf(socket), 1);
     broadcast(socket.name + " left the chat.");
     console.log(socket.name + "left the chat.");
   });

   function broadcast(data) {
      clients.forEach((client) => {
        client.write(data);
      });
    }

}).listen(4000);
