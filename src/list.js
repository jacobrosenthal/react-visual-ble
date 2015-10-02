/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react');

var EddystoneBeaconScanner = require('eddystone-beacon-scanner');
var Wimoto = require('wimoto');

var WimotoView = require('./wimoto-view');
var EddystoneView = require('./eddystone-view');
var UnknownView = require('./unknown-view');

var List = React.createClass({
  getDefaultProps: function () {
    return {
      peripherals: {},
      index: 0
    };
  },

  render: function() {
    if (Object.keys(this.props.peripherals).length===0) {
      return this.renderLoadingView();
    }

    var Peripherals = [];
    for (var key in this.props.peripherals) {
      var peripheral = this.props.peripherals[key];
      if(EddystoneBeaconScanner.isBeacon(peripheral)){
        Peripherals.push(<EddystoneView key={peripheral.id} peripheral={EddystoneBeaconScanner.parseBeacon(peripheral)}/>)
      }else if(Wimoto.Broadcast.isBroadcast(peripheral)){
        Peripherals.push(<WimotoView key={peripheral.id} peripheral={Wimoto.Broadcast.parseBroadcast(peripheral)}/>);
      }else {
        Peripherals.push(<UnknownView key={peripheral.id} peripheral={peripheral}/>);
      }
    }

    return (
      <div>
      {Peripherals}
      </div>
    );
  },

  renderLoadingView: function() {
    return (
      <div>
        <p>
          No Peripherals
        </p>
      </div>
    );
  }
});

module.exports = List;
