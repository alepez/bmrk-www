var React = require('react');

var Bookmarks = require('./bookmarks.js')
var NewBookmarkForm = require('./new-bookmark-form.js')

var BmrkApi = require('../api/BmrkApi.js');

var bmrk = BmrkApi({
  url: 'http://localhost:3000'
});

module.exports = React.createClass({
  getInitialState: function() {
    return {
      bookmarks: []
    };
  },
  componentDidMount: function() {
    var that = this;
    bmrk.get('bookmarks').then(function(res) {
      that.setState({
        bookmarks: res
      });
    });
  },
  handleBookmarkSubmit: function(bookmark) {
    var that = this;
    bmrk.post('bookmarks', bookmark).then(function(res) {
      that.setState({
        bookmarks: res
      });
    });
  },
  render: function() {
    return (
      <div className="dashboard">
        <NewBookmarkForm onBookmarkSubmit={ this.handleBookmarkSubmit } />,
        <Bookmarks bookmarks={ this.state.bookmarks } />,
      </div>
      );
  }
});
