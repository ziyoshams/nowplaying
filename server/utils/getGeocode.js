const axios = require('axios');

const geoCode = function(long, lat){
  return new Promise((resolve, reject) => {
    let result = axios.get(`http://maps.googleapis.com/maps/api/geocode/json?address=${long},${lat}`);
    result.then((data) => {
      resolve(data.data);
    }).catch((err) => reject(err))
  })
  
}

module.exports = geoCode;