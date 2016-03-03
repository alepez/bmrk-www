var $ = require('jquery');
var Ws = require('./ws.js');
var Bookmarks = require('./bookmarks.js');

module.exports = function(options) {
  var ws = Ws(options);

  return {
    bookmarks: Bookmarks(ws)
  };
}
