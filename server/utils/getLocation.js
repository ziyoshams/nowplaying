var geoip = require('geoip-lite');

function getLocation(req) {
  let getClientAddress = function(req) {
    return (req.headers['X-Forwarded-For'] || '').split(',')[0] || req.connection.remoteAddress;
  };

  let ip = getClientAddress(req)
    .split(':')
    .pop();

  if (ip.length < 4) {
    let  ll  = geoip.lookup('207.97.227.239');
    return ll;
  } else {
    let  ll  = geoip.lookup(ip);
    console.log(ll);
    return ll;
  }
}

module.exports = getLocation;
