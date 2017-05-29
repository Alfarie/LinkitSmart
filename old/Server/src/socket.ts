import * as socketIo from "socket.io"
import * as Data from './Model/data'


export class Socket {
	public io: any;
	public data:Data.Data;
	constructor(io: any){
		this.io = io;
		this.data = new Data.Data();
		this.listen();
	}
	private listen(): void{
		this.io.on("connection" ,(socket: any) => {
			console.log("client connected")
			socket.join('0x01');
			this.io.to('0x01').emit("SET_POINT" , this.data.setPoint);
			
			socket.on("SENSOR_DATA" , (data:any)=> {
				this.io.to('0x01').emit("SENSOR_DATA" , data);
			});

			socket.on('SET_POINT', (data:any)=>{
				this.data.setPoint = data;
				this.data.writeFile(data);
				this.io.to('0x01').emit("SET_POINT" , this.data.setPoint);
				console.log(data);
			})
		});
	}
	
}
