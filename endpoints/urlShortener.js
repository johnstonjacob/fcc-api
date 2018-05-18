const URL = require('url').URL;
const url = require('url');
const short = require('shortid')
const validUrl = require('valid-url');

const urlShortener = function(req, res, callback) {
    const param = url.parse(req.url, true).query.shorten;
    let statusCode = 200;
    let data;

    if (!validUrl.is_http_uri(param)) {
        statusCode = 422;
        data = "422: Invalid Query";
    } else {
        const parser = new URL(param);
        const hash = short.generate(parser.href);

        data = `${req.headers['host']}/${hash}`;
    }

    callback(statusCode, data);
};

module.exports = {
    urlShortener: urlShortener
};
