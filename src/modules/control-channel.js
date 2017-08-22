var channel = require('./model/channel');
var config = require('../config');

var ch_checking = config.ch_checking



var checking = function() {
    if (ch_checking.total_ch != ch_checking.data.length) {
        console.log("[Error] total_ch not equal to length of data")
        return;
    }
    for (var index in ch_checking.data) {
        switch (ch_checking.data[index].type) {
            case 'ec':
                ec_op(ch_checking.data[index], index + 1);
                break;
            case 'ph':
                ph_op(ch_checking.data[index], index + 1);
                break;
            case 'co2':
                co2_op(ch_checking.data[index], index + 1);
                break;
            case 'temp':
                temp_op(ch_checking.data[index], index + 1);
                break;
            case 'timer':
                timer_op(ch_checking.data[index], index + 1);
                break;
            default:
                break;
        }
    }
}


var ec_op = function(ec, ch) {
    console.log("ec :", ec.data.start, ec.data.end, "channel :", ch)

}

var ph_op = function(ph, ch) {
    console.log("ph :", ph.data.start, ph.data.end, "channel :", ch)

}

var co2_op = function(co2, ch) {
    console.log("co2 :", co2.data.start, co2.data.end, "channel :", ch)

}

var temp_op = function(temp, ch) {
    console.log("temp :", temp.data.start, temp.data.end, "channel :", ch)

}

var vpd_op = function(vpd, ch) {
    console.log("vpd :", vpd.data.start, vpd.data.end, "channel :", ch)

}

var timer_op = function(timer, ch) {
    console.log("timer: ", timer.data, "channel :", ch)

}