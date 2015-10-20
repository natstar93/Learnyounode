var fs = require('fs');

var file = process.argv[2];
var ext = process.argv[3];

fs.readdir(file, function(err, list) {
  if(err) {
    console.log(err);
  }
  else {
    var end = ext.length + 1;
    for(var i = 0; i < list.length; i++) {
      if (list[i].slice(-end) === '.' + ext) {
        console.log(list[i]);
      }
    }
  }
})
