var http = require('http'),
    bl   = require('bl');

var urls = process.argv.slice(2),
    resultsArr = [];

function saveResponse(url, index) {
  http.get(url, function(res) {
    res.pipe(bl(function(err, data){
      if(err) console.error(err);
      resultsArr[index] = data.toString();
      if(index === urls.length - 1) results();
    }));
    
    res.on('error',console.error);
  });
}
function results() {
  resultsArr.forEach(function(v,i) {
    console.log(v);
  });
}

for(var i  = 0 ; i < urls.length; i++ ) {
 saveResponse(urls[i],i);
}

