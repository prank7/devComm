var React = require('react');
var toastr = require('toastr');

var AddCommentBox = React.createClass({

  handleSubmit: function(e) {
    var commentBody = React.findDOMNode(this.refs.body).value.trim();
    var commentAuthor = React.findDOMNode(this.refs.author).value.trim();

    if(e.keyCode == 13 && commentAuthor && commentBody) {
      var newComment = {
        'author': commentAuthor,
        'body': commentBody
      };

      this.refs.body.getDOMNode().value = '';
      this.refs.author.getDOMNode().value = '';

      this.props.addNewComment(newComment);
    } else if(e.keyCode == 13 && (!commentAuthor || !commentBody)) {
      toastr.error('Oops! Please give both',' Name and Comment')
    }
  },

  render: function() {
    return (
      <div>
        <h3>Add a Comment</h3>
        <input className='comment-input-author' ref='author' 
          placeholder='Your Name' /> <br/>
        <input className='comment-input-body' ref='body'
          onKeyDown={this.handleSubmit}
          placeholder='Just Press enter to submit' />
      </div>
    )
  }
  
});

module.exports = AddCommentBox;