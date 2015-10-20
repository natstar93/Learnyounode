var net = require('net');
var port = process.argv[2];
var strftime = require('strftime');

var server = net.createServer(function(socket) {
  socket.write(strftime('%Y-%m-%d %H:%M'));
  socket.end();
})
server.listen(port)
