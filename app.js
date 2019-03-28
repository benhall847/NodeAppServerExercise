const http = require("http");

http.createServer((request,response)=>{
    response.writeHead(200,{'Content-Type':'text/plain'});
    response.end('I AM MASTER World\n');
}).listen(8081)


console.log('Server running at http://127.0.0.1:8081/ or localhost:')