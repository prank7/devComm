var AppDispatcher = require('../dispatcher/AppDispatcher');
var appConstants = require('../constants/appConstants');
var objectAssign = require('react/lib/Object.assign');
var EventEmitter = require('events').EventEmitter;
var _ = require('lodash');

var CHANGE_EVENT = 'change';

var _comments = [];

var commentStore = objectAssign({}, EventEmitter.prototype, {

  // Get all Comments direclty
  getAllComments: function() {
    return _comments;
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
  
});

AppDispatcher.register( function(payload) {
  var action = payload.action;
  switch (action.actionType) { 
    case appConstants.INITIALIZE:
      // Initialize the app by providing data to comments
      _comments = action.data;
      commentStore.emit(CHANGE_EVENT);
      break;
    case appConstants.ADD_COMMENT:
      // Push a new comment in the state of comments and then emit change
      _comments.push(action.data)
      commentStore.emit(CHANGE_EVENT);
      break;
    case appConstants.DELETE_COMMENT:
      // Remove the comment from the state with id
      _.remove(_comments, function(comment) {
        return action.data == comment._id;
      })
      commentStore.emit(CHANGE_EVENT);
      break;
    default: 
      return true
  }
})


module.exports = commentStore;
