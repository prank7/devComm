var React = require('react');
var commentActions = require('../actions/commentActions');
var AddCommentBox = require('./AddCommentBox.jsx');
var CommentList = require('./CommentList.jsx');
var commentStore = require('../stores/commentStore');
var toastr = require('toastr');

// Get Status by directly calling commentStore.
function getState() {
  return {
    comments: commentStore.getAllComments()
  }
}

var CommentBox = React.createClass({

  getInitialState: function() {
    return getState()
  },

  componentDidMount: function() {
    commentStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    commentStore.removeChangeListener(this._onChange);
  },

  handleNewComment: function(newComment) {
    toastr.success('Comment Added');
    // load comment optimistically
    var comments = this.state.comments;
    var optimisticallyUpdatedComments = comments.concat([newComment]);
    // Set State temporarily for optimistic loading, before sending action to update server.
    this.setState({comments: optimisticallyUpdatedComments});
    // Finally send action, so that data persists. like in case of refresh.
    commentActions.createComment(newComment);
  },

  _onChange: function() {
    this.setState(getState());
  },

  render: function(){
    return (
      <div className='outer-container'>
        <div className='add-comment-box-container'>
          <AddCommentBox addNewComment={this.handleNewComment} />
        </div> 
        <div className='comment-list-container'>
          <CommentList comments={this.state.comments} />
        </div>
      </div>
      )
  }
  
});

module.exports = CommentBox;