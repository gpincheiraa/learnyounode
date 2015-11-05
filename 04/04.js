var fs = require('fs'),
    lines = 0;

fs.readFile(process.argv[2], 'utf8', callback);

function callback(err, data) {
  if(data) {
    console.log(data.split('\n').length - 1);
  }
}
