var React = require('react');

var Header = React.createClass({

  render: function(){
    return(
      <div className="row">
        <navbar>
          <nav><h4>DevComm</h4></nav>
        </navbar>
      </div>
    )
  }
  
})

module.exports = Header;