var React = require('react');
var $ = require('jquery');

var Bookmarks = require('./bookmarks.js')
var NewBookmarkForm = require('./new-bookmark-form.js')

module.exports = React.createClass({
  getInitialState: function() {
    return {bookmarks: []};
  },
  componentDidMount: function() {
    var bookmarksUrl = this.props.url + '/bookmarks';
    $.ajax({
      url: bookmarksUrl,
      dataType: 'json',
      cache: false,
      success: function(res) {
        this.setState({bookmarks: res});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  handleBookmarkSubmit: function(bookmark) {
    var bookmarksUrl = this.props.url + '/bookmarks';
    $.ajax({
      url: bookmarksUrl,
      dataType: 'json',
      type: 'POST',
      data: bookmark,
      success: function(res) {
        this.setState({bookmarks: res});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
    console.log(bookmark);
  },
  render: function() {
    return (
      <div className="dashboard">
        <NewBookmarkForm onBookmarkSubmit={this.handleBookmarkSubmit} />,
        <Bookmarks bookmarks={this.state.bookmarks} />,
      </div>
    );
  }
});

