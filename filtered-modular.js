var filterModule = require('./module.js');

var file = process.argv[2];
var ext = process.argv[3];

filterModule(file, ext, function(err, data) {
  if (err) {
    console.log(err);
  }
  else {
    data.forEach(function (file) {
      console.log(file);
    })
  }
});
