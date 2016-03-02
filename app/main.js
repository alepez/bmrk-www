var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');

var Tag = React.createClass({
  render: function() {
    return (
      <span className="tag">{this.props.tag}</span>
    );
  }
});

var Tags = React.createClass({
  render: function() {
    var items = this.props.tags.map(function(item) {
      return (
        <Tag tag={item} />
      );
    });
    return (
      <div className="tags">
        {items}
      </div>
    );
  }
});

var Bookmark= React.createClass({
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
