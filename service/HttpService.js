const http = require("http");
const post =async function(uriPath, body, header){
    let options = {
        hostname: 'localhost',
        port: 8080,
        path: uriPath,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
            'token':'233233233233'
        }
    };
    let req = http.request(options, function (res) {
        console.log('STATUS: ' + res.statusCode);
        console.log('HEADERS: ' + JSON.stringify(res.headers));
        res.setEncoding('utf8');
        res.on('data', function (data) {
            return JSON.parse(data);
        });
    });
    req.on('error', function (e) {
        console.log('problem with request: ' + e.message);
        return {'status':'FAIL', 'message':e.message};
    });
// write data to request body
    req.write(JSON.stringify(body));
    req.end();
};

module.exports = {
    post:post
};