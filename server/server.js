const http = require('http');
const fs = require('fs');
const url = require('url');
const path = require('path');

const server = http.createServer(function(request,response){
	const urlPath = url.parse(request.url).pathname;
	//const pathJoin = path.join(__dirname, '../', urlPath);
	var filepath = `./client/${urlPath}`; 
	fs.stat(filepath,function(err,fileInfo){
		if(!err && fileInfo.isDirectory()){
			filepath += '/index.html';
		}
		fs.exists(filepath,function(doesExist){
			if(!doesExist){
				response.statusCode = 404;
				response.end(`Resource not found: "${urlPath}"`);
			}else{
				fs.readFile(filepath, (err, data) => {
					if(err){
						response.statusCode = 500;
			      		response.end(`Server error: "${err}"`);
					}else{
						response.end(data.toString('UTF-8'));
					}
				});
			}
		});	
	});	
});
const PORT = process.env.PORT || 3000;
server.listen(PORT,function(){
	console.log(`Server listening on port ${PORT}...`);
});


