import React, { Component } from 'react';
import axios from 'axios';
import Tweet from './tweet';
import Form from './form';
import Info from './info'

class Main extends Component {
  constructor() {
    super();
    this.state = {
      tweets: [],
      location: '',
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
        tweets: data.tweets,
        location: data.location,
        initialRender: false
      });

      twttr.widgets.load();
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
          <Info location={this.state.location}/>
          <Form />
          <div id="tweets" className="tweets">
            {this.state.initialRender ? <a className="button is-info is-large is-loading"></a> : <Tweet tweets={this.state.tweets} />}
          </div>
        </div>
      );
    }
  }
}

export default Main;
