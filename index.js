module.exports = (server, redirectDomain = 'http://localhost') => {
  return function(expose, update) => {
    expose('httpRouter', 'get', 'post', 'update', 'delete', 'patch', 'options', 'header');
    server.on('request', (request, response) => {
      update('httpRouter', request.method, request, response);
    });

    return {
      redirect(path) {
        path = path[0] === '/' ? redirectDomain + path : path;
        redirect.writeHead(302, { location : path });
        redirect.end();
      }
    }
  }
}
