let React = require('react');

let EddystoneViewUid = React.createClass({
  render: function() {
    return (
      <div>
        <p>
          type: {this.props.peripheral.type}
        </p>
        <p>
          txPower: {this.props.peripheral.txPower}
        </p>
        <p>
          namespace: {this.props.peripheral.namespace}
        </p>
        <p>
          instance: {this.props.peripheral.instance}
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

module.exports = EddystoneViewUid;
