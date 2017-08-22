var express = require('express');
var app = express();
var http = require('http').Server(app);
var path = require('path');
var io = require('socket.io')(http);
var client = require('./modules/client-server')
var cors = require('cors');
app.use(cors())


var ser = require('./modules/serial')
var sensors = require('./modules/sensors');
var config = require('./config');


var request_mcu = require('./modules/request-mcu');
request_mcu.setSerial(ser);
request_mcu.startReq();

var uicmd = require('./modules/UiCommand');
var socket = uicmd.socket(io);

// Initialize CONFIGURATION


var changeDateFormat = function(date) {
    var datearr = date.split("/");
    var datestring = datearr[1] + "/" + datearr[0] + "/" + datearr[2];
    return datestring;
}


// logger
var logger = require('./modules/datalogger');
logger.start();
//


var api = require('./modules/api');
app.use('/api/', api);

var root = path.join(path.resolve(__dirname, '../build/dist'));
app.use(express.static(root));

ser.on('data', function(data) {
    // console.log(data);
    data = data.toString();
    data = data.replace("\r", "");
    val = data.split(",");

    val[1] = changeDateFormat(val[1]);

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

app.get("/*", function(req, res) {
    res.redirect("/");
});

http.listen(3000, function() {
    console.log('listening *:' + 3000);
});