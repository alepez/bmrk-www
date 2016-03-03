var React = require('react');
var Tags = require('./tags.js');

var DeleteBtn = React.createClass({
  render: function() {
    return (
      <span className="deleteBtn" onClick={ this.props.onClick }>X</span>
      );
  }
});

module.exports = React.createClass({
  handleDelete: function() {
    this.props.onDelete(this.props.uuid);
  },
  render: function() {
    var site = (new URL(this.props.url)).hostname;
    return (
      <div className="bookmark">
        <a href={ this.props.url }>
          <span className="title">{ this.props.title }</span>
          <span className="site">{ site }</span>
        </a>
        <Tags tags={ this.props.tags } />
        <span className="description">{ this.props.description }</span>
        <DeleteBtn onClick={ this.handleDelete } />
      </div>
      );
  }
});
