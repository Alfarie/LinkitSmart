import * as express from 'express';
import * as path from 'path';

export class Routes{
	public router: any;
	private root:any;
	constructor(){
		this.router = express.Router();
		this.root = path.join(path.resolve(__dirname, '../build/dist'));
	}
}
