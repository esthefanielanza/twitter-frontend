import React, { Component } from 'react';

const CN = 'profile';

import './profile.scss';
import { deleteUser } from '../../redux/useCase';

class Profile extends Component {
  state = { tweet: undefined };

  render() {
    const { user, logout, deleteUser } = this.props;
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
        <textarea placeholder="O que está acontecendo?" onChange={e => this.setState({ tweet: e.target.value })} />
        <div className="text-right">
          <button onClick={() => console.log('Should create a message here')}> Tweet </button>
        </div>
      </div>
    );
  }
}

export default Profile;
