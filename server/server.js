var fs = require('fs');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var uuid = require('node-uuid');
var getTitleFromUrl = require('./utils.js').getTitleFromUrl;

var bookmarksFile = path.join(__dirname, 'bookmarks.json');

/* API server */
var app = express();
app.set('port', (process.env.PORT || 3000));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 'no-cache');
  next();
});

app.get('/utils/getTitleFromUrl', function(req, res) {
  getTitleFromUrl(req.body.url).then(function(title) {
    res.json({
      'title': title
    });
  })
});

app.get('/bookmarks', function(req, res) {
  fs.readFile(bookmarksFile, function(err, data) {
    res.json(err ? [] : JSON.parse(data));
  });
});

app.post('/bookmarks', function(req, res) {
  fs.readFile(bookmarksFile, function(err, data) {
    var bookmarks = [];
    if (!err) {
      bookmarks = JSON.parse(data);
    }

    var newBookmark = {
      uuid: uuid.v4(),
      url: req.body.url,
      title: req.body.title,
      description: req.body.description,
      tags: req.body.tags,
      user: req.body.user,
      notes: req.body.notes
    };

    bookmarks.splice(0, 0, newBookmark);

    fs.writeFile(bookmarksFile, JSON.stringify(bookmarks, null, 4), function(err) {
      if (err) {
        console.error(err);
      }
      res.json(bookmarks);
    });
  });
});

app.delete('/bookmarks/:id', function(req, res) {
  console.log(`remove ${req.params.id}`);
});

app.listen(app.get('port'), function() {
  console.log('Server started: http://localhost:' + app.get('port') + '/');
});

/* static files server */
var www = express();
www.set('port', (process.env.PORT || 3001));

www.use('/', express.static(path.join(__dirname, 'public')));
www.use(bodyParser.json());
www.use(bodyParser.urlencoded({
  extended: true
}));

www.listen(www.get('port'), function() {
  console.log('Server started: http://localhost:' + www.get('port') + '/');
});
