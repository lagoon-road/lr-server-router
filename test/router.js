const tape = require('tape');
const http = require('http');

tape('Testing update function', test => {
  const server = http.createServer();
  const router = require('../index')(server);
  const update = (options, request, response) => {
    response.end('hey');
    test.equal(options.updateType, 'GET');
    test.equal(options.matchValue, '/');
    test.end();
  }
  router(update);
  server.listen(4011, function() {});
  http.get('http://localhost:4011', response => {
    server.close();
  });
});
