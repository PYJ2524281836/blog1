const handleServer = require('../app');
const http = require('http');
http.createServer(handleServer).listen(8082);