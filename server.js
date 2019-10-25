

// DEPENDENCIES


var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var htmlRoutes = require('./app/routing/html-routes.js');
var ApiRoutes = require('./app/routing/api-routes.js');
var friends = require('./app/data/friends.js');


var app = express(); 
var PORT = process.env.PORT || 3000; 


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));


// require the file routes

require('./app/routing/api-routes.js')(app); 
require('./app/routing/html-routes.js')(app);

app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});

