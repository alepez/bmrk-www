module.exports = function(ws) {
  return {
    getTitleFromUrl: function(url) {
      // FIXME implement this
      return ws.get('utils/getTitleFromUrl', {
        'url': url
      });
    }
  };
}
