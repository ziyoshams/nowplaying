const client = require('./twitter');

function getTweets(long, lat) {
  return new Promise((resolve, reject) => {
    client.get(
      `/search/tweets.json?q=%23nowplaying+%23Nowplaying+%23NowPlaying&geocode=${long},${lat},30mi&filter%3Amedia&result_type=recent`,
      (err, tweets) => {
        if (!err) {
          let result = tweets.statuses.map(element => {
            return {
              id: element.id_str,
              name: element.user.screen_name,
              url: element.entities.urls.pop()
            };
          });
          resolve(result);
        } else {
          reject(err.message);
        }
      }
    );
  });
}

module.exports = getTweets;
