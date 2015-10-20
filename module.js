module.exports = function (file, ext, callback) {
  var fs = require('fs');

  fs.readdir(file, function(err, list) {
    if(err) {
      return callback(err);
    }
    else {
      var end = ext.length + 1;
      var filtered = [];
      for(var i = 0; i < list.length; i++) {
        if (list[i].slice(-end) === '.' + ext) {
          filtered.push(list[i]);
        }
      }
      callback(null, filtered);
    }
  });
}
