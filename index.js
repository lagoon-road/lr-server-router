module.exports = (server, redirectDomain = 'http://localhost') => {
  return update => {
    server.on('request', (request, response) => {
      const matchValue = request.url;
      const updateType = request.method;
      update({ matchValue, updateType }, request, response);
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
