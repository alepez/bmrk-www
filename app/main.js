var React = require('react');
var ReactDOM = require('react-dom');
var Bookmarks = require('./components/bookmarks.js')

ReactDOM.render(
  <Bookmarks url="http://localhost:3000/bookmarks" />,
  document.getElementById('bmrk-root')
);
