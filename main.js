var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path = require('path');
var data = require('./data');
var events = require('events');
var dataEvent = new events.EventEmitter();

var portName = '/dev/ttyS0';
var serialport = require('serialport');
var req_sensor_time = 1000;
var SerialPort = serialport.SerialPort;

var ser = new SerialPort(portName, {
    baudRate: 9600,
    parser: serialport.parsers.readline("\n") // either '\n' or '\r\n;
});

function serDelaySend(data) {
    console.log(data)
    ser.write(data)
}

var port = 3000;
var root = path.join(path.resolve(__dirname, './build/dist'));
app.use(express.static(root));

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
            io.to('0x01').emit("SENSOR_DATA", JSON.parse(data));
            console.log(data);
        }
    } catch (ex) {
        //console.log("[ERROR] wrong format")
    }
});
var req_sensor_fn = function() {
    ser.write("REQ");
}

var req_sensor = setInterval(req_sensor_fn, req_sensor_time)

io.on('connection', function(socket) {
    console.log("[LINKIT] Client Connected");
    socket.join('0x01');

    var data = require('./data');
    data.readFile();
    socket.emit('SET_POINT', data.setPoint);

    socket.on('join', function(data) {
        console.log('[Dashboard] Join room :' + data.room)
        socket.join('0x01');
    });

    socket.on('REQ_DATA', function() {
        socket.emit('REP_DATA', { row: Players });
    });

    socket.on('SET_POINT', function(data) {
        require('./data').writeFile(data);
        clearInterval(req_sensor);
        ser.write("UPDATE");
        setTimeout(function() {
            var str = "";
            for (var d in data) {
                var charray = [data[d].ch, data[d].vpd[0], data[d].vpd[1], (data[d].vpd[2]) ? 1 : 0, data[d].soil[0], data[d].soil[1], (data[d].soil[2]) ? 1 : 0]
                str = "{" + charray.toString() + "}";

                // console.log(str);
                // ser.write(str);
                setTimeout(sendTimer, 50, str);

            }
            req_sensor = setInterval(req_sensor_fn, req_sensor_time);
        }, 600);
    });

    socket.on('disconnect', function() {
        console.log("Client Disconnected");
    });
});

function sendTimer(data) {
    console.log(data);
    ser.write(data);
}

app.get("/*", function(req, res) {
    res.redirect("/");
});

http.listen(port, function() {
    console.log('listening *:' + port);
});