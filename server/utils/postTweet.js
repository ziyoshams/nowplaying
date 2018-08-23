const client = require('./twitter');

function postTweet(content) {
  return new Promise((resolve, reject) => {
    client.post('statuses/update', { status: `${content.comment} ${content.video_url} #nowplaying` }, function(error, tweet) {
      if (!error) {
        console.log('TWEET POSTED', tweet);
        resolve(tweet);
      } else {
        reject(error);
      }
    });
  });
}

module.exports = postTweet;
