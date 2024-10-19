const next = require('next');
const http = require('http');

const port = process.env.PORT || 3000;
const host = process.env.HOST || 'localhost';

const app = next({ dev: process.env.NODE_ENV !== 'production' });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    http.createServer((req, res) => {
        handle(req, res);
    }).listen(port, (err) => {
        if (err) throw err;
        console.log(`> Ready on http://${host}:${port}`);
    });
});
