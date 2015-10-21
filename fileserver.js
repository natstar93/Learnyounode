var http = require('http');
var url = require('url');
var port = process.argv[2];
var url = process.argv[3];
var fs = require('fs');

var server = http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type' : 'text/html'});
  var readStream = fs.createReadStream(url);
  readStream.pipe(res);
})
.listen(port)
