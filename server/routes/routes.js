module.exports = function (app, express) {
  app.get('/api/test', (req, res) => {
    console.log('get request received');
    res.send('got it again');
  })
};
