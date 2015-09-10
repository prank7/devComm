var React = require('react');
var CommentItem = require('./CommentItem.jsx');

var CommentList = React.createClass({

  render: function() {
    return (
      <div className='comment-list' >
        <h4>All Comments </h4>
        <ul>
          {this.props.comments.length > 0 ? this.renderList() : <li>No Comments Yet. Go Ahead, make the first one.</li>}
        </ul>
      </div>
    )
  },

  renderList: function() {
    return this.props.comments.map(function(comment){
      return (
        <CommentItem {...comment} itemKey={comment._id} />
      );
    })
  } 

})

module.exports = CommentList;