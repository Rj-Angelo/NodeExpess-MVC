const Express=require("express");
const Routes=Express.Router();
const controller=require("../system/controllersHandler");

//===START routes
// Sample Route Routes.get("/",controller["Users"].index); Users is the controller, and index is the method
//=== END routes

module.exports = Routes;