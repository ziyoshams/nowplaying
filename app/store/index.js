import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import axios from 'axios';

const logger = createLogger({
  collapsed: true
});

const initialState = {
  tweets: [],
  location: '',
  initialRender: false
};

// ACTION TYPES
const FETCH_TWEETS = 'FETCH_TWEETS';
const NEW_TWEET = 'NEW_TWEET';
const FETCH_LOCATION = 'FETCH_LOCATION';

// ACTION CREATORS
const fetchAllTweets = tweets => {
  return {
    type: FETCH_TWEETS,
    tweets
  };
};

const fetchLocation = location => {
  return {
    type: FETCH_LOCATION,
    location
  };
};

const newTweet = tweet => {
  return {
    type: NEW_TWEET,
    tweet
  };
};

// THUNKS
export const getAllTweets = (long, lat) => {
  return async dispatch => {
    const { data } = await axios.get(`/tweets/${long}/${lat}`);
    dispatch(fetchAllTweets(data.tweets));
    dispatch(fetchLocation(data.location));
    twttr.widgets.load();
  };
};

export const postNewTweet = payload => {
  return async dispatch => {
    let { data } = await axios.post('/tweet', payload);
    dispatch(newTweet(data));
    twttr.widgets.load();
  };
};

// REDUCER
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TWEETS:
      return {
        ...state,
        tweets: action.tweets
      };
    case NEW_TWEET:
      return {
        ...state,
        tweets: [action.tweet, ...state.tweets]
      };
    case FETCH_LOCATION:
      return {
        ...state,
        location: action.location
      };
    default:
      return state;
  }
};

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;
