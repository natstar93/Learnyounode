var fs = require('fs');

var data = fs.readFileSync(process.argv[2], 'utf8');

var lines = data.split('\n').length - 1;

console.log(lines);
