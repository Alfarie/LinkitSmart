var portName = '/dev/ttyS0';
var serialport = require('serialport');
var SerialPort = serialport.SerialPort;

var ser = new SerialPort(portName, {
    baudRate: 9600,
    parser: serialport.parsers.readline("\n") // either '\n' or '\r\n;
});

ser.on('error', function(err) {
    console.log('Serial port: ' + err);
});


ser.on('data', function(data) {
    data = data.toString();
    try {
        jdata = JSON.parse(data);
        if (jdata.time != undefined && jdata.temp != undefined &&
            jdata.humi != undefined && jdata.soil != undefined &&
            jdata.vpd != undefined) {
            jdata.mid = mid;
            jdata.user = 'admin';

            client.emit("SENSORS_DATA", jdata);
            //postData("http://localhost:3001", JSON.stringify(jdata), "/api/sensors")
        }
    } catch (ex) {
        console.log("[MCU] :" + data);
    }
});