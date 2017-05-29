var sensors = require('./sensors');
var config = require('../config');
var uicmd = require('./UiCommand');
var loop = null;

module.exports.stage = 1;


var stage = require('./setpoint').stage;
var relay = require('../config').manualRelay;
//setpoint start
var start = function() {
    // clearInterval(loop);
    loop = setInterval(setpointLoop, 1000);
}

var stop = function() {
    clearInterval(loop);
}



var setpointLoop = function() {
    // console.log("SETPOINT LOOP")
    var sensor = sensors.sensors;
    // console.log(sensor);
    if (sensor.time != undefined) {

        for (var i in config.setpoint) {
            var soiluse = config.setpoint[i].soil[2];
            var vpduse = config.setpoint[i].vpd[2];

            var soil1 = config.setpoint[i].soil[0];
            var soil2 = config.setpoint[i].soil[1];

            var vpd1 = config.setpoint[i].vpd[0];
            var vpd2 = config.setpoint[i].vpd[1];

            var A = soiluse;
            var B = vpduse;

            var C = sensor.soil <= soil1;
            var D = sensor.soil >= soil2;

            var E = sensor.vpd >= vpd1;
            var F = sensor.vpd >= vpd2;

            // console.log("A:" + A + " B:" + B + " C:" + C + " D:" + D + " E:" + E + " F:" + F);
            if (stage == 1) {

                if ((A && C && !D) || (B && E && F)) {
                    stage = 2;
                    var ch = (Number(i) + 1);
                    var st = 0;
                    var strcmd = "RELAY{" + ch + "," + st + "}";

                    if (relay[i] != true) {
                        uicmd.StopReqSend(strcmd);
                        relay[i] = true;
                    }
                } else {
                    var ch = (Number(i) + 1);
                    var st = 1;
                    var strcmd = "RELAY{" + ch + "," + st + "}";

                    if (relay[i] != false) {
                        uicmd.StopReqSend(strcmd);
                        relay[i] = false;
                    }

                }
            } else if (stage == 2) {
                if ((A && C) || (B && E)) {
                    var ch = (Number(i) + 1);
                    var st = 0;
                    var strcmd = "RELAY{" + ch + "," + st + "}";

                    if (relay[i] != true) {
                        uicmd.StopReqSend(strcmd);
                        relay[i] = true;
                    }

                } else {
                    var ch = (Number(i) + 1);
                    var st = 1;
                    var strcmd = "RELAY{" + ch + "," + st + "}";
                    stage = 1;

                    if (relay[i] != false) {
                        uicmd.StopReqSend(strcmd);
                        relay[i] = false;
                    }

                }
            }
        }
    }
}

module.exports.start = start;
module.exports.stop = stop;