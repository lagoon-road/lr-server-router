module.exports = (server, redirectDomain = 'http://localhost') => {
  return (update, environments) => {
    server.on('request', (request, response) => {
      update(environments, request.method, request.url, request, response);
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
