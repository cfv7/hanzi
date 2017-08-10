const express = require('express');
const proxy = require('http-proxy-middleware');

const app = express();
const runServer = require('./server').runServer;

if (process.env.NODE_ENV === 'production') {
    // Just run the server
    runServer(process.env.DATABASE_URL, process.env.PORT || 8080);
}


else {
    const app = express();
    app.use(proxy('http://localhost:3000/', {
        logLevel: 'warn', 
        ws: true,
        router: {
            'localhost:8080/api': 'http://localhost:3001'
        }
    }));
    app.listen(process.env.PORT || 8080);
}
