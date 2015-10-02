'use strict';

var React = require('react');
var noble = require('noble');

var List = require('./list');

let VisualBLE = React.createClass({

  getInitialState: function() {
    return {
      peripherals: {}
    };
  },

  componentWillMount: function() {

    noble.on('stateChange', this._onStateChange);
    noble.on('discover', this._onDiscover);

  },

  componentWillUnMount: function(){
    noble.stopScannning();
  },

  componentDidMount: function() {
  },

  render: function() {
    if (Object.keys(this.state.peripherals).length===0) {
      return this.renderLoadingView();
    }

    return (
      <div >
        <List {...this.state} ></List>
      </div>
    );
  },


  renderLoadingView: function() {

    return (
      <div >
        <p>
          no devices...
        </p>
      </div>
    );
  },

  _onStateChange: function(state) {

    console.log('_onStateChange', state);
    if (state === 'poweredOn') {
      noble.startScanning({}, true);
    } else {
      noble.stopScanning();
    }
  },

  _onDiscover: function(peripheral) {

    var peripherals = this.state.peripherals;
    peripherals[peripheral.id] = peripheral;

    this.setState({
      peripherals
    })
  }
});

module.exports = VisualBLE;
