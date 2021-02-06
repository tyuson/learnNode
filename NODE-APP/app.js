const http = require('http');

let server = http.createServer(
    (req, res) => res.end('<html><body><h1>Hello</h1><p>Welcome to Node.js</p></body></html>')
);
server.listen(3000);