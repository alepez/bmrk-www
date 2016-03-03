var React = require('react');
var ReactDOM = require('react-dom');
var Dashboard = require('./components/dashboard.js')

ReactDOM.render(
  <Dashboard url="http://localhost:3000" />,
  document.getElementById('bmrk-root')
);
