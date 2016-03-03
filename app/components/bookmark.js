var React = require('react');
var Tags = require('./tags.js');

module.exports = React.createClass({
  render: function() {
    var site = (new URL(this.props.url)).hostname;
    return (
      <div className="bookmark">
        <a href={this.props.url}>
          <span className="title">{this.props.title}</span>
          <span className="site">{site}</span>
        </a>
        <Tags tags={this.props.tags} />
        <span className="description">{this.props.description}</span>
      </div>
    );
  }
});
