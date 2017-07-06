const net = require('net');

process.stdin.setEncoding('utf8');

var client = new net.Socket();

client.connect(4000, "0.0.0.0", () => {
  console.log('Connected successfully to ' + client.address().address);
});

client.on('close', () => {
  console.log('Connection closed');
});

process.stdin.on('readable', () => {
  var chunk = process.stdin.read();
  if (chunk !== null) {
    client.write(chunk);
  }
});

client.on('data', (data) => {
  process.stdout.write(data);
});
