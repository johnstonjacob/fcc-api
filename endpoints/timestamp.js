const url = require('url');

const timestamp = function(req, res, callback) {
    let data, natural;
    const param = url.parse(req.url, true).query.timestamp;
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];

    if (isNaN(param * 10)) {
        natural = param;
        data = new Date(param);
    } else {
        data = new Date(param * 1000);
        natural = `${months[data.getMonth()]} ${data.getDate()}, ${data.getFullYear()}`;
    }

    const responseObject = { unix: data.getTime() / 1000, natural: natural };
    callback(200, JSON.stringify(responseObject));
};

module.exports = {
    timestamp: timestamp
};
