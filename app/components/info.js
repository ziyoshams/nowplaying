import React from 'react';

const Info = props => {
  return (
    <section className="hero is-info">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">#nowplaying in {props.location}</h1>
          <p className="subtitle">
            This page shows #nowplaying tweets in {props.location} that contains a youtube link. It also allows you to
            post a #nowplaying tweet with a Youtube link.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Info;
