var net = require('net'),
   strftime = require('strftime'),
   port = process.argv[2],
   actualDateStream = [];

net
  .createServer(serverCallback)
  .listen(port);

function serverCallback(socket) {
  actualDateStream.push(strftime('%F %R', new Date()));
  socket.end(actualDateStream.join('\n'));
}
