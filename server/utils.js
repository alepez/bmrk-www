var q = require('q');
var loremIpsum = require('lorem-ipsum')

module.exports = {
  getTitleFromUrl: function(url) {
    var deferred = q.defer();

    /* simulate a delay */
    setTimeout(function() {
      var title = loremIpsum({
        count: 1,
        units: 'sentences',
        sentenceLowerBound: 3,
        sentenceUpperBound: 8,
        format: 'plain'
      });
      deferred.resolve(title);
    }, 500);

    return deferred.promise;
  }
}
