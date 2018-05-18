const headerParser = function(req, res, callback) {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const language = req.headers['accept-language'];
    const software = req.headers['user-agent'];

    const responseObject = {
        ip: ip,
        language: language.slice(0,5),
        software: software.split(') ')[0].split(' (')[1]
    }

    callback(200, JSON.stringify(responseObject))
};

module.exports = {
    headerParser: headerParser
};
