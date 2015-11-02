var filter = require('./06-module'),
    dir = process.argv[2],
    ext = process.argv[3];

filter(dir, ext, function (err, filteredList) {
  console.log(filteredList.join('\n'));
});



