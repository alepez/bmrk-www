var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');

var Bookmark = require('./bookmark.js')

module.exports = React.createClass({
  getInitialState: function() {
    return {data: []};
  },
  componentDidMount: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  render: function() {
    var items  = this.state.data.map(function(item) {
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
