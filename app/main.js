var React = require('react');
var ReactDOM = require('react-dom');

var Bookmark= React.createClass({
  render: function() {
    return (
      <div className="bookmark">
        <span class="title">{this.props.title}</span>
      </div>
    );
  }
});

var BookmarkList = React.createClass({
  render: function() {
    return (
      <div className="bookmarkList">
        <Bookmark title="Alessandro Pezzato Blog" />
        <Bookmark title="Google" />
      </div>
    );
  }
});


ReactDOM.render(
  <BookmarkList/>,
  document.getElementById('bmrk-root')
);
