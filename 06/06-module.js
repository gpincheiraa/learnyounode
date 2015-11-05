var fs = require('fs'),
    path = require('path');

module.exports = function(dir, ext, callback) {
  fs.readdir(dir,function(err, data){
    
    if(err) {
      return callback(err);
    }
    
    var filtered = data
                  .filter(function(f){
                    return path.extname(f) === '.' + ext;
                  });

    callback(null, filtered);
  
  });
};

