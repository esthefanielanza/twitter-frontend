import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Provider, connect } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import Register from '../Register/Register';
import Reducers from '../../redux/reducer';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import Dashboard from '../Dashboard/Dashboard';
import Tweet from '../Tweet/Tweet';
import { getUsers, login, addUser, deleteUser, followUser } from '../../redux/useCase';

import './container.scss';

const CN = 'app';

const store = createStore(
  Reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk, logger)
);

class Container extends Component {
  componentDidMount() {
    if (!this.props.users.length) {
      this.props.getUsers();
    }
  }

  render() {
    const {
      users,
      loginError,
      login,
      addedUser,
      addUserError,
      addingUser,
      addUser,
      loggedUser,
      logout,
      deleteUser,
      followUser,
      followedUser
    } = this.props;
    console.log('logged user', loggedUser);
    return (
      <Provider store={store}>
        <Grid className="full-height p-0" fluid>
          <Row className="full-height">
            <Col xs={12} md={6}>
              <div className={`${CN}__container ${CN}__container__user`}>
                <section className={`${CN}__header`}>
                  <h1 className={`${CN}__header__title`}> TWITTER LIGHT </h1>
                </section>
                {loggedUser ? (
                  <Profile user={loggedUser} logout={logout} deleteUser={() => deleteUser(loggedUser.id)} />
                ) : (
                  <Login users={users} error={loginError} login={login} />
                )}
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div className={`${CN}__container ${CN}__container__tweets`}>
                {loggedUser ? (
                  <Dashboard followedUser={followedUser} followUser={followUser}/>
                ) : (
                  <Register
                    addingUser={addingUser}
                    addedUser={addedUser}
                    addUserError={addUserError}
                    addUser={addUser}
                  />
                )}
              </div>
            </Col>
          </Row>
        </Grid>
      </Provider>
    );
  }
}

const mapStateToProps = ({ data }) => ({
  users: data.users,
  loginError: data.loginError,
  addingUser: data.addingUser,
  addedUser: data.addedUser,
  addUserError: data.addUserError,
  loggedUser: data.loggedUser,
  followedUser: data.followedUser
});

const mapDispatchToProps = dispatch => ({
  getUsers: () => dispatch(getUsers()),
  login: (username, users) => dispatch(login(username, users)),
  addUser: userData => dispatch(addUser(userData)),
  logout: () => dispatch({ type: 'LOGOUT' }),
  deleteUser: id => dispatch(deleteUser(id)),
  followUser: id => dispatch(followUser(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
