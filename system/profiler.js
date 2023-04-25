const { stringify } = require("querystring");

class Profiler{
	static userQuery="";
	static log=[];

	static async getData(request,response,next){
		let result = {
			path: request.path,
			post: request.body,
			session: request.session,
			query:Profiler.userQuery
		}
		Profiler.userQuery="";
		Profiler.log.push(result);
		Profiler.renderPartial(request,response);
		next();
	}
	static async renderPartial(request,response){
		let view="";
		for(let i=(Profiler.log.length>1?Profiler.log.length-2:0);i<Profiler.log.length;i++){
			view+= "<ul>";
			for(const [key,value] of Object.entries(Profiler.log[i])){
				view+="<li>"+key+": "+(value?JSON.stringify(value):"N/A")+"</li>";
			};
			view += "</ul>";
		}
		response.locals={profilerHTML:view};
  	}
	static getQuery(query){
		Profiler.userQuery=query;
	}
}
module.exports=Profiler;