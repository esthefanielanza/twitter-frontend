import React, { Component } from 'react';

import twitterIcon from '../../assets/twitter.png';

import './login.scss';

const CN = 'login';

class Login extends Component {
  state = { username: undefined };

  render() {
    const { login, users, error } = this.props;
    return (
      <div className={`${CN}__user-data`}>
        <div className="text-center">
          <img src={twitterIcon} className={`${CN}__icon`} />
          <label> Usuário </label>
          <input onChange={e => this.setState({ username: e.target.value })} />
          <p className="error-message">{error}</p>
          <div className="text-right">
            <button onClick={() => login(this.state.username, users)}> Login </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
