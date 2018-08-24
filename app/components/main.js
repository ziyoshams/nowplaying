import React, { Component } from 'react';
import { connect } from 'react-redux';
import Tweet from './tweet';
import Form from './form';
import Info from './info';

import { getAllTweets } from '../store';

class Main extends Component {
  constructor() {
    super();
  }

  async componentWillMount() {
    try {
      let positions = await this.getPosition();
      this.props.getTweets(positions[0], positions[1]);
    } catch (error) {}
  }

  getPosition() {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        position => {
          resolve([position.coords.latitude, position.coords.longitude]);
        },
        () => reject()
      );
    });
  }

  render() {
    return (
      <div className="container">
        <Info location={this.props.location} />
        <Form />
        <div id="tweets" className="tweets">
          {this.props.initialRender ? (
            <a className="button is-info is-large is-loading" />
          ) : (
            <Tweet tweets={this.props.tweets} />
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    tweets: state.tweets,
    location: state.location,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getTweets: (long, lat) => dispatch(getAllTweets(long, lat)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
