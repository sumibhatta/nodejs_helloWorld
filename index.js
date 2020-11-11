'use strict';

const
    port = 3000,
    http = require('http'),
    url = require('url');

//Creating new server
http.createServer((req, res) => {
    let uri = url.parse(req.url).pathname;
    res.end(uri);
}).listen(port);

console.log(`Page hit the web service running on port ${port}`);