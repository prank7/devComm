var AppDispatcher = require('../dispatcher/AppDispatcher');
var appConstants = require('../constants/appConstants');
var commentUtils = require('../utils/commentUtils');

var CommentActions = {

  createComment: function(newComment) {
    // Call the Utility function, that interacts with server . Pass the newComment object
    // This Utility function also dispatches data.
    commentUtils.addComment(newComment);
  },

  deleteComment: function(id) {
    // Call the Utility function, that interacts with server . Pass the id of object to be deleted.
    // This Utility function also dispatches data.
    commentUtils.deleteComment(id);
  }
  
}

module.exports = CommentActions;