var express = require('express');
var app = express();
var http = require('http').Server(app);
var path = require('path');

// socket.io module --> use io for declare event or emit
var io = require('socket.io')(http);

//module for connect to could
var client = require('./modules/client-server')

// cors
var cors = require('cors');
app.use(cors())

// serial init --> no implementation on this module (just serial port initialization)
var ser = require('./modules/serial')
    // global data --> for keep current sensor value, short logger
var sensors = require('./modules/sensors');

// communication part to mcu --> require socket.io and serial
var request_mcu = require('./modules/request-mcu');
request_mcu.setSerial(ser, io); // set serial and socket.io
request_mcu.startReq(); // start send Request sensor data

// uicmd --> socket.io connection part to UI
var uicmd = require('./modules/UiCommand');
uicmd.socket(io);


var logger = require('./modules/datalogger');
logger.start();

var api = require('./modules/api');
app.use('/api/', api);

var root = path.join(path.resolve(__dirname, '../build/dist'));
app.use(express.static(root));

app.get("/*", function(req, res) {
    res.redirect("/");
});

http.listen(3000, function() {
    console.log('listening *:' + 3000);
});