const express=require("express");
const session=require("express-session");

const config=require("./Application/config");
const routes=require("./Application/routes");
const bodyParser=require('body-parser');
const profiler=require("./system/profiler");

const app = express();
const server = app.listen(config.port);
const path = require("path");

app.use(express.static(path.join(__dirname,"Application",config.assets)));
app.use(bodyParser.urlencoded({extended:true}));
app.use(session(config.session));


app.set("views",[path.join(__dirname,"Application",config.views),path.join(__dirname,"system","systemViews")]);
app.set("view engine","ejs");

if(config.profiler){
	app.use(profiler.getData);
}

app.use(routes);