var React = require('react');

var Bookmarks = require('./bookmarks.js')
var NewBookmarkForm = require('./new-bookmark-form.js')

var bmrk = require('../services.js').bmrk;

module.exports = React.createClass({
  getInitialState: function() {
    return {
      bookmarks: []
    };
  },
  componentDidMount: function() {
    var that = this;
    bmrk.bookmarks.get().then(function(res) {
      that.setState({
        bookmarks: res
      });
    });
  },
  handleBookmarkSubmit: function(bookmark) {
    var that = this;
    bmrk.bookmarks.post(bookmark).then(function(res) {
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
