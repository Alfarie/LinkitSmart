var serial = null;
var req_sensor = null;
var io = null;
var config = require('../config')
var sensors = require('./sensors')



var changeDateFormat = function(date) {
    var datearr = date.split("/");
    var datestring = datearr[1] + "/" + datearr[0] + "/" + datearr[2];
    return datestring;
}


var setSerail = function(ser, socketio) {
    serial = ser;
    io = socketio
    serial.on('data', function(data) {
        // console.log(data);
        data = data.toString();
        data = data.replace("\r", "");
        val = data.split(",");

        val[1] = changeDateFormat(val[1]);
        //  00:00:00,12/12/12,28.3,52,20,80,2000
        var jdata = {
            'time': val[0],
            'date': val[1],
            'temp': Number(val[2]),
            'humi': Number(val[3]),
            'light': Number(val[4]),
            'soil': Number(val[5]),
            'vpd': Number(val[6])
        }
        sensors.shortLogger.push(jdata);
        if (sensors.shortLogger.length >= 50) {
            sensors.shortLogger.shift();
        }
        sensors.sensors = jdata;
        io.to('0x01').emit('SENSOR_DATA', jdata);
    });
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
    // serial.write("REQ");
    serial.emit('data', "00:00:00,12/12/12,28.3,52,20,80,2000")
}



module.exports.startReq = function() {
    req_sensor = setInterval(req_sensor_fn, config.req_sensor_time)
}
module.exports.stopReq = function() {
    clearInterval(req_sensor);
}

module.exports.StopReqSend = StopReqSend;

module.exports.setSerial = setSerail;