import React, { Component } from 'react';
import { followUser } from '../../redux/useCase';

const CN = 'profile';

import './tweet.scss';

class Tweet extends Component {
  state = { tweet: undefined };

  render() {
    const { user, followedUser, followUser } = this.props;

    return (
      <div className='tweet-component'>
        <div className='tweet-user'>{"Luisa"}</div>
        <div className='tweet-login'>{"@luisa"}</div>
        <div className='tweet-message'>
          {"Ola, este eh um tweet teste! Ola, este eh um tweet teste!Ola, este eh um tweet teste!Ola, este eh um tweet teste!Ola, este eh um tweet teste!Ola, este eh um tweet teste!Ola, este eh um tweet teste!"}
        </div>
        <button className="btn-success tweet-follow" onClick={() => followUser(1)}>
          Seguir
        </button>
        {followedUser && <p className="success-message">Usuário seguido com successo!</p>}
      </div>
    );
  }
}

export default Tweet;
