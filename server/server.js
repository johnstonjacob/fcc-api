const http = require("http");
const requestListener = require("./requestListener");
const port = 3000;

const ip = "127.0.0.1";

const server = http.createServer(requestListener.requestHandler);
console.log("Listening on http://" + ip + ":" + port);
server.listen(port, ip);
