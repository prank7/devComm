var AppDispatcher = require('../dispatcher/AppDispatcher');
var appConstants = require('../constants/appConstants');
var request = require('superagent');

var InitializeActions = {

  // Initialize the app by fetching all comments and sending out an dispatch.
  // so that stores get data before components need it.
  initApp: function() {
    request.get('/api/comments').set('Accept', 'application/json').end(function(err, res) {
      console.log(res.body.comments)
      AppDispatcher.handleAction({
        actionType: appConstants.INITIALIZE,
        data: res.body.comments
      })
    })
  }
  
};

module.exports = InitializeActions;