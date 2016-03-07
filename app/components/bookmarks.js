var React = require('react');
var Bookmark = require('./bookmark.js')

module.exports = React.createClass({
  handleDelete: function(id) {
    // FIXME call ws
    console.log(`delete ${id}`);
  },
  render: function() {
    var that = this;
    var items  = this.props.bookmarks.map(function(item) {
      return (
        <Bookmark
          id={item.id}
          url={item.url}
          title={item.title}
          description={item.description}
          tags={item.tags}
          key={item.id}
          onDelete={that.handleDelete}
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
