const express = require('express');
var os = require('os');
const app = express();

const PORT = process.env.PORT || 3002;

app.listen(PORT, () => {
  console.log(`App is running on localhost:${PORT}`);
});

app.get('/', (req, res, next) => {
  var getClientAddress = function(req) {
    return (req.headers['X-Forwarded-For'] || '').split(',')[0] || req.connection.remoteAddress;
  };
  res.send(getClientAddress(req));
});
