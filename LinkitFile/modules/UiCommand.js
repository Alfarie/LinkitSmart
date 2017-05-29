var serial = null;
var config = require('../config')
var setpoint = require('./setpoint');
var detecting = require('./detecting');
var timer = require('./timer');
var sensors = require('./sensors');
var relay = require('../config').manualRelay;

var req_sensor = null;

var UiCommand = function(io, ser) {
    serial = ser;
    io.on('connection', function(socket) {
        console.log("[LINKIT] Client Connected");
        socket.join('0x01');

        socket.emit('SET_POINT', config.setpoint);
        socket.emit('TIMER', config.timer)
        socket.emit('MANUAL', config.manualRelay);
        socket.emit('MODE', config.mode);
        socket.emit('SETMODE', config.setmode);
        socket.emit('TIMER', config.timer);
        socket.emit('DETECTING', config.detecting);

        //set point 
        socket.on('SET_POINT', function(data) {
            console.log(data);
            config.setpoint = data;


        });
        socket.on('MODE', function(data) {
            console.log(data);
            config.mode = data.mode;
            if (config.mode == "AUTO") {

            } else {
                setpoint.stop();
                detecting.stop();
                timer.stop();
                config.setmode = "";
            }
        });

        socket.on('RELAY', function(data) {
            var channel = data.channel;
            var state = data.state;
            config.manualRelay[channel - 1] = state;
            var st = (state) ? 0 : 1;
            var strcmd = "RELAY{" + channel + "," + st + "}";
            console.log(strcmd);
            StopReqSend(strcmd);
        });

        socket.on('SETMODE', function(data) {
            config.setmode = data.setmode;
            console.log(config.setmode)
            if (config.setmode == "SETPOINT") {
                console.log("[SETMODE] START SETPOINT")
                ClearAll();
                setpoint.start();
            }
            if (config.setmode == "DETECTING") {
                console.log("[SETMODE] START DETECTING")
                ClearAll();
                detecting.start();
            }
            if (config.setmode == "TIMER") {
                console.log("[SETMODE] START TIMER")
                ClearAll();
                timer.start();
            } else if (config.setmode == "") {
                console.log("[SETMODE] CLEAR ALL")
                ClearAll();
            }
        });

        socket.on('TIMER', function(data) {
            console.log(data);
            config.timer = data;

        });

        socket.on('DETECTING', function(data) {
            config.detecting = data;
            config.detecting_req = data[0].detecting * 1000;
            console.log("detecting_req: " + config.detecting_req);
            console.log(config.detecting);
            detecting.stop();
            detecting.start();

        });

        // var datetime = {
        //     'day': Number(this.day),
        //     'month': Number(this.month),
        //     'year': Number(this.year),
        //     'hour': Number(hour),
        //     'min': Number(this.min)
        // }

        socket.on("DATETIME", function(data) {
            console.log(data);
            var cmd = "DATETIME{" + data.day + "," + data.month + "," + (data.year % 2000) + "," + data.hour + "," + data.min + "}";;

            console.log(cmd);
            StopReqSend(cmd);

        });

        socket.on('disconnect', function() {
            console.log("Client Disconnected");
        });
    });
    return io;
}

var req_sensor_fn = function() {
    serial.write("REQ");
}

var delaySend = function(cmd) {
    serial.write(cmd);
}

var StopReqSend = function(cmd) {
    clearInterval(req_sensor);
    setTimeout(delaySend, 500, cmd);
    req_sensor = setInterval(req_sensor_fn, config.req_sensor_time)
}

var clearGpio = function() {
    for (var i = 1; i < 5; i++) {
        var strcmd = "RELAY{" + Number(i) + "," + 1 + "}";
        StopReqSend(strcmd);
    }
}

var ClearAll = function() {
    relay = [false, false, false, false]
    clearGpio();
    setpoint.stop();
    detecting.stop();
    timer.stop();
}


module.exports.socket = UiCommand
module.exports.startReq = function() {
    req_sensor = setInterval(req_sensor_fn, config.req_sensor_time)
}
module.exports.stopReq = function() {
    clearInterval(req_sensor);
}
module.exports.StopReqSend = StopReqSend;