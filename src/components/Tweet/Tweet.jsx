import React, { Component } from 'react';

const CN = 'profile';

import './tweet.scss';

class Tweet extends Component {
  state = { tweet: undefined };

  render() {
    const { user } = this.props;
    return (
      <div className='tweet-component'>
        <div className='tweet-user'>{"Luisa"}</div>
        <div className='tweet-login'>{"@luisa"}</div>
        <div className='tweet-message'>
          {"Ola, este eh um tweet teste! Ola, este eh um tweet teste!Ola, este eh um tweet teste!Ola, este eh um tweet teste!Ola, este eh um tweet teste!Ola, este eh um tweet teste!Ola, este eh um tweet teste!"}
        </div>
        <button className="btn-success tweet-follow">
          Seguir
        </button>
      </div>
    );
  }
}

export default Tweet;
