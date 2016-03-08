var $ = require('jquery');

module.exports = function(options) {
  var prefix = options.url;

  var makeFullUrl = function(url) {
    return prefix + '/' + url;
  }

  var request = function(url, method, req) {
    // console.log(`request ${url} ${method} ${JSON.stringify(req)}`);
    var options = {
      url: makeFullUrl(url),
      dataType: 'json',
      cache: false,
      method: method,
      contentType: 'application/json',
      data: JSON.stringify(req),
      error: function(xhr, status, err) {
        console.error("Error communicating with webservice");
      }.bind(this)
    };

    if (method === 'get') {
      options.data = req;
    } else {
      options.dataType = 'json';
      options.contentType = 'application/json';
      options.data = JSON.stringify(req);
    }

    return $.ajax(options);
  };

  var get = function(url, data) {
    return request(url, 'get', data);
  };

  var post = function(url, data) {
    return request(url, 'post', data);
  };

  var del = function(url, data) {
    return request(url, 'delete', data);
  };

  return {
    get: get,
    post: post,
    del: del
  };
}
