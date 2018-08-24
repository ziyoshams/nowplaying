import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postNewTweet } from '../store';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      comment: '',
      video_url: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  async handleSubmit(evt) {
    evt.preventDefault();
    this.props.newTweet(this.state);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  render() {
    return (
      <form className="level" onSubmit={this.handleSubmit}>
        <div className="column is-5">
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Video URL"
              name="video_url"
              value={this.state.video_url}
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="column is-5">
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Comment"
              name="comment"
              value={this.state.comment}
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="column is-2">
          <div className="control is-centered">
            <button type="submit" className="button is-info">
              <span className="icon">
                <i className="fab fa-twitter" />
              </span>
              <span>Tweet to #nowplaying</span>
            </button>
          </div>
        </div>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    newTweet: data => dispatch(postNewTweet(data))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Form);
