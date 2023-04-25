MyMVC

Folder Structure
	-Application Folder
		-Assets: Should hold the css, scripts and images.
		-Controller: Holds the controller files
		-Models: Holds the model files, MySQL settings may be configured in the config file within the Application folder
		-Views: Holds the view files
		-Config: Holds the default folders for both static and view files as well as session details and MySQL details, also has a toggle for the profiler.
	-System Folder
		-controllersHandler: auto imports controllers to the route.js file.
		-Model: parent model with query, getAll and getRow functions, constructor super is the name of the model (used by default for simple queries)
		-profiler: profiler class enabled or disabled in the config
		-valdations: validations class that may be used by the user, follows CodeIgniter synatx

Features.
	- A Profiler is available but limited to post data, routes, and sql queries.
	- A Validation class is also available for use, uses code igniter's format and can validate maxLength, minLength, required, matches, and validEmail.
	- The model class has to be used for models to be able to query and use built in queries (getAll and getRow)
	- A class has been created to handle controllers automatically within the routes.js page a controller must created must be instatiated with controller["controllerName"] or controller.controllerName.
	
Instructions for use.
	- Set up the config file when making use of Models for MySQL queries as well as port settings,session settings and enabling or disabling the profiler.
	- Create Controller file inside the Applications/controllers folder
	- Add route inside the route.js !note controllers should be called inside the controller Object and the class should have the same name as the file Ex: Routes.get("/",controller["YourController"].index); for YourController.js
	- Create model files within the models folder and extend the Modul class	
	- Create view and put inside the Views Folder.
	- Run nodemon app.js and go to localhost:{port !default 8080}
==================
	- When using the validator class simply extend it in your model or controller.
	- When using the profiler, change the profiler:false setting to profiler:true, include "<%- profilerHTML %>" to the ejs file being profiled.

		