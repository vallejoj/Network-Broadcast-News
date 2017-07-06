const net = require('net');


var clients= [];

net.createServer(function(socket){
process.stdin.setEncoding('utf8');
socket.write('Welcome to ChatTime\n')

socket.name = socket.remoteAddress + ":" + socket.remotePort;

clients.push(socket);

broadcast(socket.remoteAddress + " has joined\n", socket);


 broadcast('Get your chart on! ' + "\n");
 socket.write('Enter Username: ');


socket.on('data', (data) => {
    data = data.slice(0, data.length -1);
    if(socket.name === socket.remoteAddress + ":" + socket.remotePort) {
      socket.name = data;
    }else {
      broadcast(socket.name + ': ' + data + "\n");
    }
  });

  socket.on('end', function () {
     clients.splice(clients.indexOf(socket), 1);
     broadcast(socket.name + "left the chat.");
   });

   function broadcast(data) {
      clients.forEach((client) => {
        client.write(data);
      });
    }

}).listen(4000);
