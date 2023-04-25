const path=require("path");
const fs=require("fs");
const dirPath=path.join(__dirname,"..","Application","controllers");
let controller={};
const files=fs.readdirSync(dirPath)
	try{
		for(let i=0;i<files.length;i++){
			let controllerName=files[i].slice(0,-3);
			controller[controllerName]=require(path.join(dirPath,controllerName));
		}
	}catch(error){
		console.log(error);
	}
module.exports=controller;