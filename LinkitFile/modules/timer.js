var sensors = require('./sensors');
var config = require('../config');
var uicmd = require('./UiCommand');
var loop = null;

var relay = require('../config').manualRelay;


var start = function() {
    clearInterval(loop);
    loop = setInterval(timerLoop, config.timer_req);
}

var stop = function() {
    for (var i = 0; i < 4; i++) {
        require('../config').manualRelay[i] = false;
    }
    clearInterval(loop);
}

/*
 var time = {
      'from':{
        'hour': this.hour_f,
        'min': this.min_f
      },
      'to':{
        'hour': this.hour_t,
        'min': this.min_t
      },
      'timestr': from+" - " + to,
      'hval': valt
    }

*/
var timerLoop = function() {
    var sensor = sensors.sensors;
    if (sensor.time != undefined) {
        for (var i in config.timer) {
            var flag = false;
            for (var j in config.timer[i]) {
                var hour_f = config.timer[i][j].from.hour;
                var min_f = config.timer[i][j].from.min;

                var hour_t = config.timer[i][j].to.hour;
                var min_t = config.timer[i][j].to.min;

                var valf = Number(hour_f) * 100 + Number(min_f);
                var valt = Number(hour_t) * 100 + Number(min_t);

                var now = sensor.time.split(":");
                var hour_now = Number(now[0]);
                var min_now = Number(now[1]);

                var valn = Number(hour_now) * 100 + Number(min_now);

                // console.log("[FROM] " + hour_f + ":" + min_f);
                // console.log("[TO  ] " + hour_t + ":" + min_t);
                // console.log("[NOW] " + hour_now + ":" + min_now);

                var A = valn >= valf;
                var B = valn <= valt;
                // console.log(valf + " <=" + valn + "<= " + valt);
                // console.log("A:" + A + " B:" + B);

                // console.log(relay)

                if (A & B) {
                    if (relay[i] != true) {
                        var st = 0;
                        var ch = Number(i) + 1;
                        var strcmd = "RELAY{" + ch + "," + st + "}";
                        // console.log("SEND RELAY ON");
                        uicmd.StopReqSend(strcmd);
                        relay[i] = true;
                    }
                    flag = true;
                }
            }
            if (!flag) {
                var st = 1;
                var ch = Number(i) + 1;
                var strcmd = "RELAY{" + ch + "," + st + "}";
                if (relay[i] != false) {
                    uicmd.StopReqSend(strcmd);
                    relay[i] = false;
                }
            }
        }
    }
}

module.exports.start = start;
module.exports.stop = stop;