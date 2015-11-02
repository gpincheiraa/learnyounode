var filter = require('./06-module'),
    fs = require('fs'),
    path = require('path'),
    dir = process.argv[2],
    ext = process.argv[3];

function callback(err, list) {
  
  if(err) {
    return err;
  }
  
  var filtered = list
                  .filter(function(f){
                    return path.extname(f) === '.' + ext;
                  })
                  .join('\n');
  
  console.log(filtered);
}

filter(dir, ext, callback);