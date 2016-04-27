var React = require('react')
var Link = require('react-router');
var IndexLink = require('react-router');

var App = React.createClass({
  propTypes: {
    children: React.PropTypes.node
  },
  render(){
    return (
      <div>
      <h1 className="heading">Fucking Work</h1>
      {this.props.children}
      </div>
    )
  }
});

module.exports = App;
