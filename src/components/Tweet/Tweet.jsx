import React, { Component } from 'react';

const CN = 'profile';

import './tweet.scss';

class Tweet extends Component {
  state = { tweet: undefined };

  render() {
    const { user = {}, followUser, message, loggedUserId, following = [], unfollowUser } = this.props;
    const followingThisUser = following.includes(`${user.id}`);
    return (
      <div className="tweet-component">
        <div className="tweet-user">{user.full_name}</div>
        <div className="tweet-login">{`@${user.login}`}</div>
        <div className="tweet-message">{message.message}</div>
        {loggedUserId !== user.id && (
          <button
            className="btn-success tweet-follow"
            onClick={() =>
              followingThisUser
                ? unfollowUser(loggedUserId, message.user_id)
                : followUser(loggedUserId, message.user_id)
            }
          >
            {followingThisUser ? 'Deixar de seguir' : 'Seguir'}
          </button>
        )}
      </div>
    );
  }
}

export default Tweet;
