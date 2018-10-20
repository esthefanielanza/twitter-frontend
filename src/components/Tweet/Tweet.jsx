import React, { Component } from 'react';
import { followUser } from '../../redux/useCase';

const CN = 'profile';

import './tweet.scss';

class Tweet extends Component {
  state = { tweet: undefined };

  render() {
    const { user = {}, followedUser, followUser, message } = this.props;

    return (
      <div className="tweet-component">
        <div className="tweet-user">{user.full_name}</div>
        <div className="tweet-login">{`@${user.login}`}</div>
        <div className="tweet-message">{message.message}</div>
        <button className="btn-success tweet-follow" onClick={() => followUser(message.user_id)}>
          Seguir
        </button>
        {followedUser && <p className="success-message">Usuário seguido com successo!</p>}
      </div>
    );
  }
}

export default Tweet;
