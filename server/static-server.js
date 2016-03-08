var fs = require('fs');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var uuid = require('node-uuid');
var getTitleFromUrl = require('./utils.js').getTitleFromUrl;


/* static files server */
var www = express();
www.set('port', (process.env.PORT || 3000));

www.use('/', express.static(path.join(__dirname, 'public')));
www.use(bodyParser.json());
www.use(bodyParser.urlencoded({
  extended: true
}));

www.listen(www.get('port'), function() {
  console.log('Server started: http://localhost:' + www.get('port') + '/');
});

module.exports = www;
