var React = require('react');
var classnames = require('classnames');

var bmrk = require('../services.js').bmrk;

module.exports = React.createClass({
  getInitialState: function() {
    return {};
  },
  handleUrlChange: function(e) {
    this.setState({
      url: e.target.value
    });
  },
  handleTitleChange: function(e) {
    this.setState({
      title: e.target.value
    });
  },
  handleDescriptionChange: function(e) {
    this.setState({
      description: e.target.value
    });
  },
  handleTagsChange: function(e) {
    this.setState({
      tags: e.target.value.split(',')
    });
  },
  handleNotesChange: function(e) {
    this.setState({
      notes: e.target.value
    });
  },
  handleSubmit: function(e) {
    e.preventDefault();
    console.log(this.state);
    this.props.onBookmarkSubmit(this.state);
  },
  handleTitleFocus: function() {
    var that = this;
    if (!that.state.title) {
      bmrk.utils.info(that.state.url).then(function(res) {
        that.setState({
          title: res.data.title
        });
      })
    }
  },
  render: function() {
    var compClasses = classnames('newBookmarkForm', 'clearfix', {
      'folded': !this.state.url
    });

    return (
      <div className={ compClasses }>
        <form onSubmit={ this.handleSubmit }>
          <input className="textField" type="text" placeholder="url" value={ this.state.url } onChange={ this.handleUrlChange } />
          <input className="textField hiddenWhenFolded" type="text" placeholder="title" value={ this.state.title } onChange={ this.handleTitleChange } onFocus={ this.handleTitleFocus }
          />
          <input className="textField hiddenWhenFolded" type="text" placeholder="description" value={ this.state.description } onChange={ this.handleDescriptionChange } />
          <input className="textField hiddenWhenFolded" type="text" placeholder="tags" value={ (this.state.tags || []).join(',') } onChange={ this.handleTagsChange } />
          <textarea className="textArea hiddenWhenFolded" placeholder="notes" value={ this.state.notes } onChange={ this.handleNotesChange }>
          </textarea>
          <input className="submitBtn hiddenWhenFolded" type="submit" value="Add" />
        </form>
      </div>
      );
  }
});
