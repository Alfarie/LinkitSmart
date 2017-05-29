
import * as serialport from 'serialport'
import * as socket from './socket'

export class SerialPortLink {
    private portname: string = "/dev/ttyUSB0"
    public io: any;
    constructor(io:any) {
        console.log("[Serial] Initialize..");
        var ser = new serialport(this.portname, {
            baudRate: 57600,
            dataBits: 8,
            parity: 'none',
            stopBits: 1,
            flowControl: false,
            parser: serialport.parsers.readline("\n")   // either '\n' or '\r\n;
        });


        ser.on('error', function (err) {
            console.log('Serial port: ' + err);
        });

        ser.on('data', function (data) {
            data = data.toString();
            console.log(data);
        });

        this.io = io;
    }
}