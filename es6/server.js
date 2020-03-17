let http = require('http');

let par1 = "<h1>Titolone</> <h3>Titolino</>";

let server = http.createServer(function(req, res) {
    res.writeHead(200, {"Content-Type": "text/html"});
    res.end(par1);
});
server.listen(8080);