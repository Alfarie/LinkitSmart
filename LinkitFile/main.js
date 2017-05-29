var config = require('./config');

var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path = require('path');
var ser = require('./modules/serial')
var uicmd = require('./modules/UiCommand');
var socket = uicmd.socket(io, ser);

uicmd.startReq();

var clientSocket = require('./modules/clientsocket')
var client = clientSocket(config.urlServer + ":" + config.portServer, config.mid);

var root = path.join(path.resolve(__dirname, './build/dist'));
app.use(express.static(root));

var sensors = require('./modules/sensors');

ser.on('data', function(data) {
    data = data.toString();
    try {
        jdata = JSON.parse(data);
        sensors.sensors = jdata;
        io.to('0x01').emit('SENSOR_DATA', jdata);
        client.emit("SENSORS_DATA", jdata);
    } catch (ex) {
        console.log("[MCU] :" + data);
    }
});

client.on("RELAYS", function(data) {
    console.log(data);
    var relay = data.relay;
    var evnt = (data.evnt) ? 0 : 1;
    console.log(relay + " " + evnt)
    ser.write("RELAY{" + relay + "," + evnt + "}");
});

app.get("/*", function(req, res) {
    res.redirect("/");
});

http.listen(config.port, function() {
    console.log('listening *:' + config.port);
});