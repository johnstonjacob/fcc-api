
const http = require('http');
const requestListener = require('./requestListener');
const port = 3000;

const ip = '10.30.65.222';

const server = http.createServer(requestListener.requestHandler);
console.log('Listening on http://' + ip + ':' + port);
server.listen(port, ip);
