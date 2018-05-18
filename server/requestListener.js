const http = require("http");
const modules = require("../modules");
const defaultCorsHeaders = {
    "access-control-allow-origin": "*",
    "access-control-allow-methods": "GET, POST, PUT, DEconstE, OPTIONS",
    "access-control-allow-headers": "content-type, accept",
    "access-control-max-age": 10 // Seconds.
};

const requestHandler = function(req, res) {
    const method = req.method;
    const url = req.url;
    const headers = defaultCorsHeaders;
    const methodCalls = {
        GET: getMethod,
        POST: postMethod,
        PUT: null,
        OPTIONS: null,
        DELETE: null
    };
    console.log("Serving " + method + " request on " + url);

    if (method in methodCalls) methodCalls[method]();

    function getMethod() {
        const endpoint = url.split("/")[1]
        if (endpoint === 'timestamp') modules.ts.timestamp(req, res, generateResponse);
        else if (endpoint === 'headerparser') modules.hp.headerParser(req, res, generateResponse);
        else pageNotFound();
    }

    function postMethod() {}

    function generateResponse(statusCode, data) {
        res.writeHead(statusCode, headers);
        res.end(data);
    }
    function pageNotFound() {
        res.writeHead(404);
        res.end("Page Not Found", headers);
    }
};

module.exports = {
    requestHandler: requestHandler
};
