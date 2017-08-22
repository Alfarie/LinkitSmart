module.exports.manual = {
    type: 'manual',
    data: {
        stage: false // [true, false]
    }
}

module.exports.timer = {
    type: 'timer',
    data: [{
        start: "01:05",
        end: "02:10"
    }]
}

module.exports.ec = {
    type: 'ec',
    data: {
        start: 1.02,
        end: 1.5
    },
    working: 1 // [setpoint, setlength]
}

module.exports.ph = {
    type: 'ph',
    data: {
        start: 4.0,
        end: 5.58
    },
    working: 1 // [setpoint, setlength]
}

module.exports.co2 = {
    type: 'co2',
    data: {
        start: 800,
        end: 1000
    },
    working: 1 // [setpoin0, setlength]
}