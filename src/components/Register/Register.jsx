import React, { PureComponent } from 'react';

import './register.scss';

const CN = 'register';

class Register extends PureComponent {
  defaultState = {
    login: '',
    full_name: '',
    short_bio: '',
    sentUser: false,
    error: undefined
  };
  state = { ...this.defaultState };

  onSetField(e, field) {
    this.setState({ [field]: e.target.value });
  }

  componentDidUpdate() {
    if (this.state.sentUser && this.props.addedUser) {
      this.setState(this.defaultState);
    }
  }

  render() {
    const { addUser, addingUser, addedUser } = this.props;
    const { login, full_name, short_bio } = this.state;
    const error = this.state.error || this.props.error;

    return (
      <div className={CN}>
        <p className="mb-2">Veja o que está acontecendo no mundo agora</p>
        <p>Participe hoje do twitter.</p>
        <form className={`${CN}__form`}>
          <label> Usuário </label>
          <input value={login} onChange={e => this.onSetField(e, 'login')} />
          <label> Nome </label>
          <input value={full_name} onChange={e => this.onSetField(e, 'full_name')} />
          <label> Biografia </label>
          <textarea value={short_bio} onChange={e => this.onSetField(e, 'short_bio')} />
          <button
            className="btn-blue btn-large"
            onClick={e => {
              e.preventDefault();
              if (login && full_name && short_bio) {
                addUser({ login, full_name, short_bio });
                this.setState({ error: undefined, sentUser: true });
              } else this.setState({ error: 'Todos os campos devem ser preenchidos' });
            }}
          >
            {addingUser ? 'Enviando...' : 'Inscreva-se'}
          </button>
          {error && <p className="error-message">{error}</p>}
          {addedUser && !error && <p className="success-message">Usuário adicionado com successo!</p>}
        </form>
      </div>
    );
  }
}

export default Register;
