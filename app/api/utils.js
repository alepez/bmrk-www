var q = require('q');

module.exports = function(ws) {
  return {
    info: function(url) {
      var deferred = q.defer();
      ws.get('utils/info', {
        'url': url
      }).then(function(res) {
        deferred.resolve(res);
      });
      return deferred.promise;
    }
  };
}
