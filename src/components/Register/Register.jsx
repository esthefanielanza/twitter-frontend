import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { addUser } from '../../redux/useCase';
import './register.scss';

const CN = 'register';

class Register extends PureComponent {
  defaultState = {
    user: '',
    name: '',
    shortbio: '',
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
    const { user, name, shortbio } = this.state;
    const error = this.state.error || this.props.error;

    return (
      <div className={CN}>
        <p className="mb-2">Veja o que está acontecendo no mundo agora</p>
        <p>Participe hoje do twitter.</p>
        <form className={`${CN}__form`}>
          <label> Usuário </label>
          <input value={user} onChange={e => this.onSetField(e, 'user')} />
          <label> Nome </label>
          <input value={name} onChange={e => this.onSetField(e, 'name')} />
          <label> Biografia </label>
          <textarea value={shortbio} onChange={e => this.onSetField(e, 'shortbio')} />
          <button
            className="btn-blue btn-large"
            onClick={e => {
              e.preventDefault();
              if (user && name && shortbio) {
                addUser({ user, name, shortbio });
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

const mapStateToProps = ({ data }) => {
  return {
    addingUser: data.addingUser,
    addedUser: data.addedUser,
    error: data.addUserError
  };
};

const mapDispatchToProps = dispatch => ({
  addUser: userData => dispatch(addUser(userData))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);
