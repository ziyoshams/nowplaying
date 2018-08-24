const client = require('./twitter');

function postTweet(content) {
  return new Promise((resolve, reject) => {
    client.post('statuses/update', { status: `${content.comment} ${content.video_url} #nowplaying`}, function(error, tweet) {
      if (!error) {
        resolve({
          id: tweet.id_str,
          name: tweet.user.screen_name,
          url: tweet.entities.urls.pop()
        });
      } else {
        reject(error);
      }
    });
  });
}

module.exports = postTweet;
