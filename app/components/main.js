import React, { Component } from 'react';
import axios from 'axios';
import Tweet from './tweet';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      tweets: [],
      error: '',
      initialRender: true
    };
  }

  async componentWillMount() {
    try {
      let positions = await this.getPosition();
      console.log(positions);
      let { data } = await axios.get(`/tweets/${positions[0]}/${positions[1]}`);
      this.setState({
        tweets: data,
        initialRender: false
      });

      await data.map((tweet, i) => {
        return twttr.widgets.createTweet(`${tweet.id}`, document.getElementById(`tweet${i}`), {
          conversation: 'none',
          dnt: true
        });
      });
    } catch (error) {
      this.setState({
        error: 'Something is not Right'
      });
    }
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
    if (!this.state.error) {
      return (
        <div className="container">
          <div id="tweets" className="tweets">
            {this.state.initialRender ? <h1>Loading...</h1> : <Tweet tweets={this.state.tweets} />}
          </div>
        </div>
      );
    }
  }
}

export default Main;
