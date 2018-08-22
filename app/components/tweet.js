import React from 'react';

const Tweet = props => {
  return props.tweets.map((tweet, i) => {
    return (
      <div key={tweet.id} className="single_tweet">
        <h2 className="single_tweet__title">Some Videos title - Long one so we can test in different window sizes</h2>
        <div className="single_tweet__content">
          <div className="video_side">
            <video src="https://www.youtube.com/watch?v=jEo-ykjmHgg" />
          </div>
          <div className="tweet_side">
            <div className="tweet" id={`tweet${i}`} />
          </div>
        </div>
      </div>
    );
  });
};

export default Tweet;
