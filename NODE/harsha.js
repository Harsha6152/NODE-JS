var http = require('http')
http.createServer(function (req, res) {
    res.write("Hello World ! Welcome to Node.js tutorial");
    res.end();
}).listen(8080);