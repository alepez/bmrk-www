var React = require('react');
var Bookmark = require('./bookmark.js')

module.exports = React.createClass({
  render: function() {
    var items  = this.props.bookmarks.map(function(item) {
      return (
        <Bookmark
          id={item.id}
          url={item.url}
          title={item.title}
          description={item.description}
          tags={item.tags}
          key={item.id}
        />
      );
    });
    return (
      <div className="bookmarks">
        {items}
      </div>
    );
  }
});
