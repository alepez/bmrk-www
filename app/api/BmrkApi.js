var $ = require('jquery');

module.exports = function(options) {
  var prefix = options.url;

  var makeFullUrl = function(url) {
    return prefix + '/' + url;
  }

  var request = function(url, method, req) {
    console.log('request', req);
    return $.ajax({
      url: makeFullUrl(url),
      dataType: 'json',
      cache: false,
      success: function(res) {
        console.log(res);
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  };

  var get = function(url, data) {
    console.log('get');
    return request(url, 'get', data);
  };

  var post = function(url, data) {
    return request(url, 'post', data);
  };

  return {
    get: get,
    post: post
  };
}