const config={
	port:8080,
	assets:"assets",
	views:"views",
	session:{
		secret:'keyboardkitteh',
		resave:false,
		saveUninitialized:true,
		cookie:{ maxAge: 60000 }
	},
	database:{
		host:"127.0.0.1",
		user:"root",
		password:"",
		database:"",
		port:3306,
	},
	profiler:true
}
module.exports=config;