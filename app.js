let http = require('http');
let url = require('url');
let fs = require('fs');

http.createServer((request, response) => {

	var q = url.parse(request.url, true);
	var filename = "."+q.pathname;
	if(filename == './'){
		filename = './index';
	}

	filename = filename + '.html';

	fs.readFile(filename, (error, data) => {
		if(error){
			response.writeHead(404, {'Content-Type': 'text/html'});
			return response.end("404 Page Not Found");
		}
		response.writeHead(200, {'Content-Type': 'text/html'});
		response.write(data);
		console.log("...Incoming Request: "+request.url);
		response.end();
	});

	/*response.writeHead(200, {'Content-Type': 'text/html'});
	response.end('Hello World!');*/

	/*response.writeHead(200, {'Content-Type': 'text/html'});
	var q = url.parse(request.url, true).query;
	var dates = q.year;
	response.end(dates);*/

	

}).listen(3000);

console.log("Serevr listening aon Port 3000");