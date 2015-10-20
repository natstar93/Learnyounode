var http = require('http');
var bl   = require('bl');

var url = process.argv[2];
var url2 = process.argv[3];
var url3 = process.argv[4];
var data1 = '';
var data2 = '';
var data3 = '';
var counter = 0;

http.get(url, function(response) {
  response.pipe(bl(function (err, data) {
    if (err)
      console.log(err);
    data1 = data.toString();
    dataFinished();
  }))
});

http.get(url2, function(response) {
  response.pipe(bl(function (err, data) {
    if (err)
      console.log(err);
    data2 = data.toString();
    dataFinished();
  }))
});

http.get(url3, function(response) {
  response.pipe(bl(function (err, data) {
    if (err)
      console.log(err);
    data3 = data.toString();
    dataFinished();
  }))
});

function dataFinished() {
  counter ++;
  if (counter === 3) {
    console.log(data1);
    console.log(data2);
    console.log(data3);
  }
}
