var portName = require('../config').portName;
var serialport = require('serialport');

var SerialPort = serialport.SerialPort;
var ser = new SerialPort(portName, {
    baudRate: 9600,
    parser: serialport.parsers.readline("\n") // either '\n' or '\r\n;
});

ser.on('error', function(err) {
    // console.log('Serial port: ' + err);
});

module.exports = ser;