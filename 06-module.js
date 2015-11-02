var fs = require('fs'),
    path = require('path');

module.exports = function(dir, ext, callback) {
  fs.readdir(dir,function(err, data){
    
    if(err) {
      callback(err, null);
    }
    
    var filtered = list
                  .filter(function(f){
                    return path.extname(f) === '.' + ext;
                  })
                  .join('\n');
    
    callback(null, filtered);
  
  });
};

