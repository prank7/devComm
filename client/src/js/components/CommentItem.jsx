var React = require('react');
var commentActions = require('../actions/commentActions');
var toastr = require('toastr');

var CommentItem = React.createClass({
  
  handleDelete: function() {
    toastr.success('Comment Deleted')
    commentActions.deleteComment(this.props.itemKey)
  },

  render: function() {
    return (
      <li>
        <div>
        <span className='pull-left author'> {this.props.author}-</span>
        <span className='pull-right' onClick={this.handleDelete}></span>
        </div>
        <span className='pull-left comment-body'> {this.props.body}</span>
      </li>
    )
  }

})

module.exports = CommentItem;