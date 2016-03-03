var q = require('q');

module.exports = function(ws) {
  return {
    getTitleFromUrl: function(url) {
      var deferred = q.defer();
      ws.get('utils/getTitleFromUrl', {
        'url': url
      }).then(function(res) {
        deferred.resolve(res.title);
      });
      return deferred.promise;
    }
  };
}
