var React = require('react');
var Tags = require('./tags.js');

module.exports = React.createClass({
  render: function() {
    return (
      <div className="bookmark">
        <span className="title">{this.props.title}</span>
        <span className="url">{this.props.url}</span>
        <span className="description">{this.props.description}</span>
        <Tags tags={this.props.tags} />
      </div>
    );
  }
});
