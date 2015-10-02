let React = require('react');

let EddystoneViewUrl = React.createClass({
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
          url: {this.props.peripheral.url}
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

module.exports = EddystoneViewUrl;
