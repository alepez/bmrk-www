var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <div className="newBookmarkForm clearfix">
        <form>
          <input className="textField" type="text" placeholder="url" />
          <input className="textField" type="text" placeholder="title" />
          <input className="textField" type="text" placeholder="description" />
          <input className="textField" type="text" placeholder="tags" />
          <textarea className="textArea" placeholder="notes"></textarea>
          <input className="submitBtn" type="submit" value="Add" />
        </form>
      </div>
    );
  }
});

