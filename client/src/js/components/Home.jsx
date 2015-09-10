var React = require('react');
var Header = require('./Header.jsx');
var CommentBox = require('./CommentBox.jsx');
require('./home.scss');

var Home = React.createClass({
  
  render: function() {
    return (
      <div className='home'>
        <Header />
        <div className="row comment-box-container">
          <CommentBox />
        </div>
      </div>
    );
  }

});

module.exports = Home;