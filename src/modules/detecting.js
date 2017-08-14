var sensors = require('./sensors');
var config = require('../config');
var uicmd = require('./request-mcu');
var loop = null;

var relay = require('../config').manualRelay;


var start = function() {
    clearInterval(loop);
    loop = setInterval(detectingLoop, config.detecting_req);
}

var stop = function() {
    clearInterval(loop);
}


var detectingLoop = function() {
    var sensor = sensors.sensors;
    if (sensor.time != undefined) {
        for (var i in config.detecting) {
            var vpduse = config.detecting[i].vpd.isuse;
            var soiluse = config.detecting[i].soil.isuse;

            var vpd1 = config.detecting[i].vpd.set;
            var soil1 = config.detecting[i].soil.set;
            var working = config.detecting[i].working * 1000;
            // var working = 3 * 1000;
            var A = vpduse;
            var B = soiluse;
            var C = sensor.vpd >= vpd1;
            var D = sensor.soil <= soil1;

            var ch = (Number(i) + 1);


            // console.log("A:" + A + " B:" + B + " C:" + C + " D:" + D);

            // console.log(relay[i]);
            if ((A && C) || (B && D)) {
                var st = 0;
                var strcmd = "RELAY{" + ch + "," + st + "}";
                if (relay[i] != true) {
                    uicmd.StopReqSend(strcmd);
                    relay[i] = true;
                    st = 1;
                    strcmd = "RELAY{" + ch + "," + st + "}";
                    setTimeout(function(cmd, ind) {
                        uicmd.StopReqSend(cmd);
                        relay[ind] = false;
                    }, working, strcmd, i)
                }

            }
        }
    }
}




module.exports.start = start;
module.exports.stop = stop;