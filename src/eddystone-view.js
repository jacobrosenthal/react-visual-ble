let React = require('react');

var EddystoneViewUrl = require('./eddystone-view-url');
var EddystoneViewUid = require('./eddystone-view-uid');
let EddystoneViewTlm1 = require('./eddystone-view-tlm1');

let EddystoneView = React.createClass({
  render: function() {
    if (!this.props.peripheral.type==='uid') {
      return (<EddystoneViewUid peripheral={this.props.peripheral}/>);
    }

    if (!this.props.peripheral.type==='url') {
      return (<EddystoneViewUrl peripheral={this.props.peripheral}/>);
    }

    if (!this.props.peripheral.type==='tlm') {
      return (<EddystoneViewTlm1 peripheral={this.props.peripheral}/>);
    }

    return (
      <div>
        <p>
          uknown eddystone type
        </p>
      </div>
    );
  }

});

module.exports = EddystoneView;
