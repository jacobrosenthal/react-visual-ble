let React = require('react');

let EddystoneViewTlm1 = React.createClass({
  render: function() {
    return (
      <div>
        <p>
          version: {this.props.peripheral.tlm.version}
        </p>
        <p>
          vbatt: {this.props.peripheral.tlm.vbatt}
        </p>
        <p>
          temp: {this.props.peripheral.tlm.temp}
        </p>
        <p>
          advCnt: {this.props.peripheral.tlm.advCnt}
        </p>
        <p>
          secCnt: {this.props.peripheral.tlm.secCnt}
        </p>
        <p>
          rssi: {this.props.peripheral.rssi}
        </p>
        <p>
          distance: {this.props.peripheral.distance}
        </p>
      </div>
    );
  }
});

module.exports = EddystoneViewTlm1;
