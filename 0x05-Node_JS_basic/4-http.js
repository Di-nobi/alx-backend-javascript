const http = require('http');

const hostname = 'localhost';
const port = 1245;
const app = http.createServer((req, respond) => {
  respond.statusCode = 200;
  respond.setHeader('Content-Type', 'text/plain');
  respond.end('Hello Holberton School!');
});

app.listen(port, hostname, () => {
});
module.exports = app;