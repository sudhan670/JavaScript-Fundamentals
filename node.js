console.log("Hello world");
var http=require('http');
http.createServer(function(request,response){
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end("Hello world");
}).listen(9000);
console.log('Server running at http://127.0.0.1:9000/');
// It has two types of code conscepts either Blocking or Non-Blocking Code in the file
//Blocking means contains the file which has not open source coded file
//Non-Blocking means it contains the file of whole contained file 
var fs=require('fs');
data=fs.readFileSync('input.txt');
console.log(data.toString());
//non-bocking code 
fs.readFile('input.txt',function(err,data){
    if(err){console.error(err);}
    console.log(data.toString());
});
