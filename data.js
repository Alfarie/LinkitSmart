var fs = require('fs');
var setPoint = [{
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
module.exports.setPoint = setPoint

module.exports.writeFile = function writeFile(data) {
    fs.writeFileSync("data.file", JSON.stringify(data))
}

module.exports.readFile = function readFile() {
    try {
        var datafile = fs.readFileSync("data.file");
        this.setPoint = JSON.parse(datafile.toString());
    } catch (ex) {
        console.log("[ERROR] Could not read file data.file")
        fs.writeFileSync("data.file", JSON.stringify(this.setPoint))
    }
}