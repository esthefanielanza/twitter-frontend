import React, { PureComponent } from 'react';
import twitterIcon from '../../assets/twitter.png';

import './login.scss';

const CN = 'login';

class Login extends PureComponent {
  state = { username: undefined };

  render() {
    return (
      <div className={`${CN}__user-data`}>
        <div className="text-center">
          <img src={twitterIcon} className={`${CN}__icon`} />
          <label> Usuário </label>
          <input onClick={e => this.setState({ username: e.target.value })} />
          <div className="text-right">
            <button onClick={() => console.log('Should log in')}> Login </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
