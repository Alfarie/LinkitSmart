var config = require('./config');

var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path = require('path');

var ser = require('./modules/serial')
var uicmd = require('./modules/UiCommand');
var socket = uicmd.socket(io, ser);
var logger = require('./modules/datalogger');
var api = require('./modules/api');
var cors = require('cors');
var sensors = require('./modules/sensors');

logger.start();
uicmd.startReq();


app.use(cors());
var root = path.join(path.resolve(__dirname, '../build/dist'));
app.use(express.static(root));
app.use('/api/', api);

ser.on('data', function(data) {
    data = data.toString();
    data = data.replace("\r", "");
    val = data.split(",");
    var jdata = {
        'time': val[0],
        'date': val[1],
        'temp': Number(val[2]),
        'humi': Number(val[3]),
        'light': Number(val[4]),
        'soil': Number(val[5]),
        'vpd': Number(val[6])
    }
    sensors.sensors = jdata;
    io.to('0x01').emit('SENSOR_DATA', jdata);
});

app.get("/*", function(req, res) {
    res.sendfile('index.html')
});

http.listen(config.port, function() {
    console.log('listening *:' + config.port);
});