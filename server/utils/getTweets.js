require('dotenv').config();
const Twitter = require('twitter');
const client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

function getTweets(long, lat) {
  return new Promise((resolve, reject) => {
    client.get(
      `/search/tweets.json?q=%23nowplaying+%23Nowplaying+%23NowPlaying&geocode=${long},${lat},30mi&result_type=recent`,
      (err, tweets) => {
        if (!err) {
          let result = tweets.statuses.map(element => {
            return {
              id: element.id_str,
            };
          });
          resolve(result);
        } else {
          throw reject(err.message);
        }
      }
    );
  });
}

module.exports = getTweets;
