var fs = require('fs'),
    path = require('path'),
    dir = process.argv[2],
    ext = process.argv[3];

fs.readdir(dir,callback);

function callback(err, list) {
  var filtered = list
                  .filter(function(f){
                    return path.extname(f) === '.' + ext;
                  })
                  .join('\n');
  
  console.log(filtered);
}