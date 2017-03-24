module.exports = (server, redirectDomain = 'http://localhost') => {
  return (update, options) => {
    server.on('request', (request, response) => {
      update(
        Object.assign({}, options, { path : request.url, method : request.method }),
        request,
        response
      );
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
