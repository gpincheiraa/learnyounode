var fs = require('fs');

module.exports = function(dir, filter, callback) {
  fs.readdir(dir,function(err, data){
    if(err) {
      return callback(err);
    }
    return callback(null, data);
  });
};

