var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');

var Bookmark= React.createClass({
  render: function() {
    return (
      <div className="bookmark">
        <span className="title">{this.props.title}</span>
        <span className="url">{this.props.url}</span>
        <span className="description">{this.props.description}</span>
      </div>
    );
  }
});

var BookmarkList = React.createClass({
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
          title={item.title}
          url={item.url}
          description={item.description}
          key={item.id}
        />
      );
    });
    return (
      <div className="bookmarkList">
        {items}
      </div>
    );
  }
});

ReactDOM.render(
  <BookmarkList url="http://localhost:3000/bookmarks" />,
  document.getElementById('bmrk-root')
);
