import React, { Component } from 'react';

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

  handleSubmit(evt) {
    evt.preventDefault();
    console.log('Working');
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  // render() {
  //   return (
  //     <form onSubmit={this.handleSubmit}>
  //       <label htmlFor="video_url">Video URL</label>
  //       <input type="text" name="video_url" value={this.state.video_url} onChange={this.handleChange}/>

  //       <label htmlFor="comment">Comment</label>
  //       <input type="text" name="comment" value={this.state.comment} onChange={this.handleChange}/>
  //       <button type="submit">Tweet to #nowplaying</button>
  //     </form>
  //   );
  // }

  render() {
    return (
      <form className="level" onSubmit={this.handleSubmit}>
        <div className="column">
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
        <div className="column">
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
        <div className="column">
          <div className="control">
            <button type="submit" className="button is-info">
              Tweet to #nowplaying
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default Form;
