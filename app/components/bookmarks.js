var React = require('react');
var Bookmark = require('./bookmark.js')

module.exports = React.createClass({
  handleDelete: function(uuid) {
    // FIXME call ws
    console.log(`delete ${uuid}`);
  },
  render: function() {
    var that = this;
    var items  = this.props.bookmarks.map(function(item) {
      return (
        <Bookmark
          uuid={item.uuid}
          url={item.url}
          title={item.title}
          description={item.description}
          tags={item.tags}
          key={item.uuid}
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
