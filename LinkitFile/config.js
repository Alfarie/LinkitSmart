var fs = require('fs');

var readFile = function() {
    try {
        var datafile = fs.readFileSync("config.file");
        var data = JSON.parse(datafile.toString());
        module.exports = data;
        // console.log(data);
    } catch (ex) {
        console.log("[ERROR] Could not read config.file")
        fs.writeFileSync("config.file", JSON.stringify(module.exports))
    }
}

var writeFile = function() {
    fs.writeFileSync("config.file", JSON.stringify(module.exports))
}


module.exports.portName = '/dev/ttyS0';
module.exports.urlServer = "http://localhost";
module.exports.portServer = 3001;
module.exports.mid = "INTX01WL"
module.exports.req_sensor_time = 5000;
module.exports.setpoint_req = 1000;
module.exports.detecting_req = 5000;
module.exports.timer_req = 1000;

module.exports.port = 3000;
module.exports.mode = "MANUAL";
module.exports.setmode = ""
module.exports.manualRelay = [false, false, false, false];

module.exports.timer = [];
module.exports.timer[0] = [];
module.exports.timer[1] = [];
module.exports.timer[2] = [];
module.exports.timer[3] = [];


module.exports.detecting = [{
        'vpd': {
            'set': 2000,
            'isuse': false
        },
        'soil': {
            'set': 50,
            'isuse': false
        },
        'working': 10,
        'detecting': 10
    },
    {
        'vpd': {
            'set': 2000,
            'isuse': false
        },
        'soil': {
            'set': 50,
            'isuse': false
        },
        'working': 10,
        'detecting': 10
    },
    {
        'vpd': {
            'set': 2000,
            'isuse': false
        },
        'soil': {
            'set': 50,
            'isuse': false
        },
        'working': 10,
        'detecting': 10
    },
    {
        'vpd': {
            'set': 2000,
            'isuse': false
        },
        'soil': {
            'set': 50,
            'isuse': false
        },
        'working': 10,
        'detecting': 10
    }
]

module.exports.setpoint = [{
        "ch": 1,
        "vpd": [2200, 2250, false],
        "soil": [40, 60, false],
        "use": true
    },
    {
        "ch": 2,
        "vpd": [2200, 2250, false],
        "soil": [40, 60, false],
        "use": true
    },
    {
        "ch": 3,
        "vpd": [2200, 2250, false],
        "soil": [40, 60, false],
        "use": true
    },
    {
        "ch": 4,
        "vpd": [2200, 2250, false],
        "soil": [40, 60, false],
        "use": true
    }
]

readFile();

setInterval(writeFile, 2000);