var React = require('react');
var Tag = require('./tag.js');

module.exports = React.createClass({
  render: function() {
    var items = this.props.tags && this.props.tags.map(function(item) {
      return (
        <Tag tag={item} key={item} />
      );
    });
    return (
      <div className="tags">
        {items}
      </div>
    );
  }
});
