var timer = {
    type: 'timer',
    data: [{
        start: "01:05",
        end: "02:10"
    }]
}

var ec = {
    type: 'ec',
    data: {
        start: 1.02,
        end: 1.5
    },
    working: 1 // [setpoint, setlength]
}

var ph = {
    type: 'ph',
    data: {
        start: 4.0,
        end: 5.58
    },
    working: 1 // [setpoint, setlength]
}

var co2 = {
    type: 'co2',
    data: {
        start: 800,
        end: 1000
    },
    working: 1 // [setpoin0, setlength]
}

var ch_checking = {
    total_ch: 4,
    data: [
        co2, ec, ph, timer
    ]
}


var checking = function() {
    if (ch_checking.total_ch != ch_checking.data.length) {
        console.log("[Error] total_ch not equal to length of data")
        return;
    }
    for (var index in ch_checking.data) {
        switch (ch_checking.data[index].type) {
            case 'ec':
                ec_op(ch_checking.data[index]);
                break;
            case 'ph':
                ph_op(ch_checking.data[index]);
                break;
            case 'co2':
                co2_op(ch_checking.data[index]);
                break;
            case 'temp':
                temp_op(ch_checking.data[index]);
                break;
            case 'timer':
                timer_op(ch_checking.data[index]);
                break;
            default:
                break;
        }
    }
}


var ec_op = function(ec) {
    console.log("ec :", ec.data.start, ec.data.end)
}

var ph_op = function(ph) {
    console.log("ph :", ph.data.start, ph.data.end)
}

var co2_op = function(co2) {
    console.log("co2 :", co2.data.start, co2.data.end)
}

var temp_op = function(temp) {
    console.log("temp :", temp.data.start, temp.data.end)
}

var vpd_op = function(vpd) {
    console.log("vpd :", vpd.data.start, vpd.data.end)
}

var timer_op = function(timer) {
    console.log("timer: ", timer.data)
}

setInterval(checking, 1000);