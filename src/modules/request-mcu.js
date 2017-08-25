var serial = null;
var req_sensor = null;
var io = null;
var config = require('../config')
var sensors = require('./sensors')

var ON = 0;
var OFF = 1;

var queue = []

//4 channel gpio
var gpioStatus = [];

var initGpio = function() {
    for (var i in config.ch_channel.data) {
        gpioStatus.push(true);
    }
}

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


var sensor = {
    'temp': 33,
    'vpd': 1900,
    'soil': 61
}
var soil_state = 1;
var vpd_state = 1;
var temp_state = 1;

var req_sensor_fn = function() {
    // serial.write("REQ");

    if (sensor.soil >= 65) {
        soil_state = 1;
    }
    if (sensor.soil <= 45) {
        soil_state = 2;
    }
    if (soil_state == 1) {
        sensor.soil--;
    }
    if (soil_state == 2) {
        sensor.soil++;
    }


    if (sensor.vpd >= 2310) {
        vpd_state = 2;
    }
    if (sensor.vpd <= 1900) {
        vpd_state = 1;
    }
    if (vpd_state == 1) {
        sensor.vpd += 100;
    }
    if (vpd_state == 2) {
        sensor.vpd -= 100;
    }


    if (sensor.temp >= 33) {
        temp_state = 2;
    }
    if (sensor.temp <= 23) {
        temp_state = 1;
    }
    if (temp_state == 1) {
        sensor.temp += 2;
    }
    if (temp_state == 2) {
        sensor.temp -= 2;
    }

    var d = new Date();
    var dstr = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
    var str = dstr + ",12/12/12," + sensor.temp + ",20,20," + sensor.soil + "," + sensor.vpd

    // console.log(str);
    serial.emit('data', str)
    queue.push('REQ');
}

var clearGpio = function() {
    gpioOff(0);
    gpioOff(1);
    gpioOff(2);
    gpioOff(3);

    console.log("[Control] Clear gpio ", gpioStatus)
}

var Queue = function() {
    // console.log(queue)
    var cmd = queue[0];
    queue.shift();
    var delay = (cmd == 'REQ') ? 1500 : 100;

    setTimeout(Queue, delay)
}

var gpioOn = function(ch) {
    var strcmd = "RELAY{" + ch + "," + ON + "}";
    if (!gpioStatus[ch]) {
        queue.push(strcmd);
    }
    gpioStatus[ch] = true;
}

var gpioOff = function(ch) {
    var strcmd = "RELAY{" + ch + "," + OFF + "}";
    if (gpioStatus[ch]) {
        queue.push(strcmd);
    }
    gpioStatus[ch] = false;
}

module.exports.startReq = function() {
    req_sensor_fn();
    req_sensor = setInterval(req_sensor_fn, config.req_sensor_time)
}

module.exports.stopReq = function() {
    clearInterval(req_sensor);
}

module.exports.queue = queue;

module.exports.StopReqSend = StopReqSend;

//init serial to env
module.exports.setSerial = setSerail;

module.exports.gpioOn = gpioOn;

module.exports.gpioOff = gpioOff;


initGpio();
clearGpio();
Queue();