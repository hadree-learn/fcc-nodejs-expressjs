const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Welcome to our homepage');
  } else if (req.url === '/about') {
    res.end('This is our about page');
  } else {
    res.end(`
      <h1>Oops!</h1>
      <p>There is no content for this page, yet</p>
      <a href="/">Return to homepage</a>
    `);
  }
});

server.listen(5000);
