var serial = null;
var req_sensor = null;
var config = require('../config')


var setSerail = function(ser) {
    serial = ser;
}


var delaySend = function(cmd) {
    serial.write(cmd);
}

var StopReqSend = function(cmd) {
    clearInterval(req_sensor);
    setTimeout(delaySend, 500, cmd);
    req_sensor = setInterval(req_sensor_fn, config.req_sensor_time)
}

var req_sensor_fn = function() {
    serial.write("REQ");
}

module.exports.startReq = function() {
    req_sensor = setInterval(req_sensor_fn, config.req_sensor_time)
}
module.exports.stopReq = function() {
    clearInterval(req_sensor);
}

module.exports.StopReqSend = StopReqSend;

module.exports.setSerial = setSerail;