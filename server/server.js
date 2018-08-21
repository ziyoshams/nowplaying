const path = require('path');
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3033;


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public/index.html'));
});


app.get('/location', (req, res) => {
  var getClientAddress = function(req) {
    return (req.headers['X-Forwarded-For'] || '').split(',')[0] || req.connection.remoteAddress;
  };

  let ip = getClientAddress(req).split(':').pop();
  console.log(ip);
});



app.use(express.static(path.join(__dirname, '..', 'public')));

app.listen(PORT, () => {
  console.log(`App is running on localhost:${PORT}`);
});