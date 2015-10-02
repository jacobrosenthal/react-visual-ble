let React = require('react');

let WimotoView = React.createClass({
  render: function() {
    return (
      <div>
        <p>
          Temperature: {this.props.peripheral.temperature}
        </p>
        <p>
          Light: {this.props.peripheral.light}
        </p>
        <p>
          Humidity: {this.props.peripheral.humidity}
        </p>
        <p>
          Battery: {this.props.peripheral.battery}
        </p>
        </div>
    );
  }
});

module.exports = WimotoView;
