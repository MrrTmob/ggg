let http = require('http');

let request = (request, response) => {
    response.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    response.write("hello world");
    response.end();
};

http.createServer(request).listen(8080);