var http = require('http');
var bl   = require('bl');

var url = process.argv[2];

http.get(url, function(response) {
  response.pipe(bl(function (err, data) {
    if (err)
      console.log(err);
    data = data.toString();
    console.log(data.length);
    console.log(data);
  }))

  // response.setEncoding('utf8');
  //
  // var sentence = '';
  // response.on('data', function(data) {
  //   sentence = sentence + data;
  // });
  //
  // response.on('end', function(data) {
  //   console.log(sentence.length);
  //   console.log(sentence);
  // })
})
