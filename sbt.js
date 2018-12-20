var http = require('https');
var fs = require('fs');
var zlib = require('zlib');
var http_client = require('request');

//https://nodejs.org/api/fs.html#fs_fs_createwritestream_path_options
/*
var file_stream = fs.createWriteStream("sbt.zip");

var request = http.get("https://piccolo.link/sbt-1.2.7.zip", function(response) {
  response
    //.pipe(zlib.createGzip())
    .pipe(file_stream);
});
*/

/*
http.get("https://piccolo.link/sbt-1.2.7.zip", (response) => {
  var buffer = ''
  response.on('data', (c) => {
    console.log(c);
    file_stream.write(c);
  });
  response.on('end', () => {
    console.log("done")
  });
});
*/

var fileUrl = "https://piccolo.link/sbt-1.2.7.zip";
var output = "sbt.zip";
http_client({url: fileUrl, encoding: null}, function(err, resp, body) {
  if(err) throw err;
  fs.writeFile(output, body, function(err) {
    console.log("file written!");
  });
});
