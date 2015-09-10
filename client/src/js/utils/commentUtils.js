var AppDispatcher = require('../dispatcher/AppDispatcher');
var appConstants = require('../constants/appConstants');
var request = require('superagent');

var commentUtils = {
// Add a comment by passing new Comment. Hits the API and adds on server 
// and then dispatches the deleted data for stores to update
  addComment: function(newComment) {
    request.post('/api/comments').send(newComment).set('Accept', 'application/json')
    .end(function(err, res) {
      AppDispatcher.handleAction({
        actionType: appConstants.ADD_COMMENT,
        data: res.body
      })
    });
  },

// Delete a comment by Id. Hits the API and deletes from server 
// and then dispatches the deleted ID for stores to update
  deleteComment: function(id) {
    request.del('/api/comments/'+ id).set('Accept', 'application/json').end(function(err) {
      AppDispatcher.handleAction({
        actionType: appConstants.DELETE_COMMENT,
        data: id
      })
    });
  }

};

module.exports = commentUtils;