var React = require('react');
var Home = require('./Home.jsx');
var initializeActions = require('../actions/initializeActions');

// Initialize the app, Load state into stores
initializeActions.initApp();

React.render(<Home />, document.querySelector('#reactContainer'));