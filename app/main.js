var React = require('react');
var ReactDOM = require('react-dom');

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
  render: function() {
    var items  = this.props.data.map(function(item) {
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

var data = [
  {
    "id": "8586188a-3e72-4cec-8513-4af02d83be75",
    "url": "http://pezzato.net",
    "title": "Alessandro Pezzato Blog",
    "description": "A blog about stuff",
    "tags": ["alessandro", "pezzato", "alepez"],
    "user": "alepez",
    "notes": "Lorem ipsum dolor sit amet."
  }
]


ReactDOM.render(
  <BookmarkList data={data}/>,
  document.getElementById('bmrk-root')
);
