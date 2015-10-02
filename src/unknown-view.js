let React = require('react');

let UnknownView = React.createClass({
  render: function() {
    return (
      <div>
        <p>
          id: {this.props.peripheral.id}
        </p>
        <p>
          localName: {this.props.peripheral.advertisement.localName}
        </p>
        <p>
          txPowerLevel: {this.props.peripheral.advertisement.txPowerLevel}
        </p>
        <p>
          manufacturerData: {this.props.peripheral.advertisement.manufacturerData}
        </p>
        <p>
          serviceData: {this.props.peripheral.advertisement.serviceData}
        </p>
        <p>
          serviceUuids: {this.props.peripheral.advertisement.serviceUuids}
        </p>
      </div>
    );
  }
});

module.exports = UnknownView;
