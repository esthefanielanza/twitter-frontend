import React, { Component } from 'react';

const CN = 'profile';

import './profile.scss';

class Profile extends Component {
  state = { tweet: undefined };

  render() {
    const { user, logout, deleteUser, createMessage } = this.props;
    return (
      <div className={`profile ${CN}__user-data`}>
        <h1>{user.full_name}</h1>
        <h2> {`@${user.login}`} </h2>
        <p>{user.short_bio}</p>
        <p> Seguindo: {user.following.length} </p>
        <p> Seguidores: {user.followers.length}</p>
        <div>
          <button className="btn-danger" onClick={deleteUser}>
            Deletar conta
          </button>
          <button onClick={logout}> Logout </button>
        </div>
        <textarea
          placeholder="O que está acontecendo?"
          value={this.state.tweet}
          onChange={e => this.setState({ tweet: e.target.value })}
        />
        <div className="text-right">
          <button
            onClick={() => {
              createMessage(user.id, this.state.tweet);
              this.setState({ tweet: '' });
            }}
          >
            Tweet
          </button>
        </div>
      </div>
    );
  }
}

export default Profile;
