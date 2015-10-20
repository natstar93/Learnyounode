var fs = require('fs');
var input = process.argv[2];

fs.readFile(input, 'utf8', function(err, data) {
  if(err) {
    console.log(err);
  }
  else {
    var lines = data.split('\n').length - 1;
    console.log(lines);
  }
})
