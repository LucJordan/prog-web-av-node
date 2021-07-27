var exec = require("child_process").exec;

function start(response){
	console.log("Le gestionnaire 'start' est appelé.");
	//exec("ls -lah", function (error,stdout,stderr){
	setTimeout(function(){
		response.writeHead(200,{"Content-Type":"text/plain"});
		//response.write(stdout);
		response.write("Bonjour start");
		response.end();
	},10000);
	//});
}

function upload(response){
	console.log("Le gestionnaire 'upload' est appelé.");
	response.writeHead(200,{"Content-Type":"text/plain"});
	response.write("Bonjour Upload");
	response.end();
}

exports.start = start;
exports.upload = upload;