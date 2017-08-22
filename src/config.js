var fs = require('fs');

module.exports.rootdir = __dirname.replace("/src", "");
module.exports.portName = '/dev/ttyS0';
module.exports.urlServer = "http://localhost";
module.exports.portServer = 3001;
module.exports.did = 'GROBOTG03'
module.exports.req_sensor_time = 3000;
module.exports.setpoint_req = 1000;
module.exports.detecting_req = 5000;
module.exports.timer_req = 1000;
module.exports.logger_time = 1000 * 60 * 5;

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
        'temp': {
            'set': 30,
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
        'temp': {
            'set': 30,
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
        'temp': {
            'set': 30,
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
        'temp': {
            'set': 30,
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
        "temp": [28, 30, false],
        "use": true
    },
    {
        "ch": 2,
        "vpd": [2200, 2250, false],
        "soil": [40, 60, false],
        "temp": [28, 30, false],
        "use": true
    },
    {
        "ch": 3,
        "vpd": [2200, 2250, false],
        "soil": [40, 60, false],
        "temp": [28, 30, false],
        "use": true
    },
    {
        "ch": 4,
        "vpd": [2200, 2250, false],
        "soil": [40, 60, false],
        "temp": [28, 30, false],
        "use": true
    }
]

module.exports.setpoint_state = 1;

readConfigFile = function() {
    try {
        var datafile = fs.readFileSync(__dirname.replace("/src", "") + "/config.json");
        var data = JSON.parse(datafile.toString());
        console.log("[Config] Load json file...");
        config = data;
    } catch (ex) {
        console.log("[Config] Could not read config.json")
        fs.writeFileSync(__dirname.replace("/src", "") + "/config.json", JSON.stringify(module.exports))
        console.log("[Config] config.json writed")
    }
}
readConfigFile();