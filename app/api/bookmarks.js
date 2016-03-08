module.exports = function(ws) {
  return {
    get: function(req) {
      return ws.get('bookmarks', req);
    },
    post: function(req) {
      return ws.post('bookmarks', req);
    },
    del: function(id) {
      return ws.del('bookmarks/' + id);
    }
  };
};

