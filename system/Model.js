const config=require("../Application/config");
const Mysql=require("mysql2");
const profiler=require("./profiler");

class Model{
	constructor(table){
		this.table=table;
		this.connection=Mysql.createConnection(config.database);
		this.connection.connect();
	}
	async query(sql,params=[]){
		if(config.profiler){
			profiler.getQuery(this.connection.query(sql,params).sql);
		}
		let result = await new Promise((resolve,reject)=>{
			this.connection.query(sql,params,(error,result)=>{
				if(error){
					reject(error);
				}else{
					resolve(result);
				}
			});
		})
		return result;
	}
	async getAll(table=this.table){
		const query=Mysql.format(`SELECT * FROM ??`,[table]);
		const result = await this.query(query);
		return result;
	}
	async getRow(table=this.table,value,param,request){
		const query=Mysql.format(`SELECT * FROM ?? WHERE `+param+`=?`,[table,value]);
		const result=await this.query(query);
		return result;
	}
}

module.exports = Model;