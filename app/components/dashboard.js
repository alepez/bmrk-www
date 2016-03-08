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
        bookmarks: res['data']
      });
    });
  },
  handleBookmarkSubmit: function(bookmark) {
    var that = this;
    bmrk.bookmarks.post({'bookmark': bookmark}).then(function(res) {
      var bookmarks = that.state.bookmarks;
      bookmarks.splice(0, 0, res['data']);
      that.setState({
        bookmarks: bookmarks
      });
    });
  },
  handleBookmarkDelete: function(id) {
    var that = this;
    bmrk.bookmarks.del(id).then(function() {
      var updatedBookmarks = that.state.bookmarks.filter(function(bookmark) {
        return bookmark.id !== id;
      });
      that.setState({bookmarks: updatedBookmarks});
    });
  },
  render: function() {
    return (
      <div className="dashboard">
        <NewBookmarkForm onBookmarkSubmit={ this.handleBookmarkSubmit } />,
        <Bookmarks
          bookmarks={ this.state.bookmarks }
          handleDelete={ this.handleBookmarkDelete } />,
      </div>
    );
  }
});
