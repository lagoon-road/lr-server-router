module.exports = (server, redirectDomain = 'http://localhost') => {
  return (update, options) => {
    server.on('request', (request, response) => {
      const pathValue  = request.url;
      const updateType = request.method;
      update(Object.assign({}, options, { pathValue, updateType }), request, response);
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
