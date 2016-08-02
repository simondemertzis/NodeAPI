var mongoose = require('mongoose');
var dburl = 'mongodb://localhost:27017/meanhotel';

mongoose.connect(dburl);

mongoose.connection.on('connected', function(){
	console.log("Mongose connected to " + dburl);
});

mongoose.connection.on('disconnected', function(){
	console.log("Mongose sidconnected to " + dburl);
});

mongoose.connection.on('error', function(){
	console.log("Mongose error on " + dburl);
});

process.on('SIGINT', function(){
	mongoose.connection.close(function(){
		console.log("mongoose connectin termeitate through app");
		process.exit(0);
	});
});

//heroku
process.on('SIGTERM', function(){
	mongoose.connection.close(function(){
		console.log("mongoose connectin termeitate through app");
		process.exit(0);
	});
});
//For nodeman use -- currently not working cause node man sucks 
process.once('SIGUSR2', function(){
	mongoose.connection.close(function(){
		console.log("mongoose connectin termeitate through app");
		process.kill(process.pid, 'SIGUSR2');
	});
});

//Bring in schemas for motels
require('./hotels.model.js');


