var http = require('http'),
    bl = require('bl');

http.get(process.argv[2], function(res) {
  
  var serverData = '',
      dataLength = 0;

  res.pipe(bl(endCallback));

  function endCallback(err, data) {
    if (err)
      return console.error("ERROR: ",err);
    data = data.toString();
    console.log(data.length);
    console.log(data);
  }

});