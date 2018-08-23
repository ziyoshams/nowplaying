import React from 'react';

const Tweet = props => {
  return props.tweets.map((tweet, i) => {
    return (
      <div key={tweet.id} className="single_tweet">
        <h2 className="single_tweet__title">Some Videos title - Long one so we can test in different window sizes</h2>
        <div className="single_tweet__content">
          <div className="video_side">
            {tweet.url ? (
              <iframe width="100%" height="400px" src={`${tweet.url.url}`} frameBorder="0" />
            ) : (
              <span className="icon has-text-danger">
                <i className="fas fa-video-slash fa-3x" />
              </span>
            )}
          </div>
          <div className="tweet_side">
            <blockquote className="twitter-tweet" data-lang="en">
              <a href={`https://twitter.com/${tweet.name}/status/${tweet.id}`} />
            </blockquote>
          </div>
        </div>
      </div>
    );
  });
};

export default Tweet;
