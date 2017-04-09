module.exports = (server, redirectDomain = 'http://localhost') => {
  let redirect;
  return update => {
    server.on('request', (request, response) => {
      redirect = response;
      const matchValue = request.url;
      const updateType = request.method;
      update({ matchValue, updateType }, request, response);
    });
  }
}
