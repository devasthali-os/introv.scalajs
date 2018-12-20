var http = require('https');
var path = require("path");
var fs = require('fs');
var zlib = require('zlib');
var http_client = require('request');
var yauzl = require("yauzl");

//https://nodejs.org/api/fs.html#fs_fs_createwritestream_path_options
/*
var file_stream = fs.createWriteStream("sbt.zip");

var request = http.get("https://piccolo.link/sbt-1.2.7.zip", function(response) {
  response
    //.pipe(zlib.createGzip())
    .pipe(file_stream);
});
*/


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


var fileUrl = "https://piccolo.link/sbt-1.2.7.zip";
var output = "sbt.zip";
/*
http_client({url: fileUrl, encoding: null}, function(err, resp, body) {
  if(err) throw err;
  fs.writeFile(output, body, function(err) {
    console.log("sbt downloaded");
    setup_sbt()
  });
});
*/

function mkdirp(dir, cb) {
  if (dir === ".") return cb();
  fs.stat(dir, function(err) {
    if (err == null) return cb(); // already exists

    var parent = path.dirname(dir);
    mkdirp(parent, function() {
      process.stdout.write(dir.replace(/\/$/, "") + "/\n");
      fs.mkdir(dir, cb);
    });
  });
}

setup_sbt();

function setup_sbt() {

console.log("setting up sbt")
yauzl.open("sbt.zip", {lazyEntries: true}, function(err, zipfile) {
  if (err) throw err;
  zipfile.readEntry();
  zipfile.on("entry", function(entry) {
    console.log("entry: " + entry.fileName)
    if (/\/$/.test(entry.fileName)) {
      // Directory file names end with '/'.
      // Note that entires for directories themselves are optional.
      // An entry's fileName implicitly requires its parent directories to exist.
      mkdirp(entry.fileName, function() {
        if (err) throw err;
        zipfile.readEntry();
      });
    } else {
     mkdirp(path.dirname(entry.fileName), function() {
      // file entry
      zipfile.openReadStream(entry, function(err, readStream) {
        if (err) throw err;
        readStream.on("end", function() {
          zipfile.readEntry();
        });
        var writeStream = fs.createWriteStream(entry.fileName);
	readStream.pipe(writeStream);
      });
    });
   }
  });
});
}
