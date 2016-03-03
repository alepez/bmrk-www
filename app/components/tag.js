var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <span className="tag">{this.props.tag}</span>
    );
  }
});
