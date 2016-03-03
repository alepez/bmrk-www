var React = require('react');

var Bookmarks = require('./bookmarks.js')
var NewBookmarkForm = require('./new-bookmark-form.js')

module.exports = React.createClass({
  render: function() {
    var bookmarksUrl = this.props.url + '/bookmarks';
    return (
      <div className="dashboard">
        <NewBookmarkForm url={bookmarksUrl} />,
        <Bookmarks url={bookmarksUrl} />,
      </div>
    );
  }
});

