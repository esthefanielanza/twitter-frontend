import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import Register from '../Register/Register';
import Reducers from '../../redux/reducer';
import Login from '../Login/Login';

import './app.scss';

const CN = 'app';

const store = createStore(
  Reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk, logger)
);

export default class AppComponent extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Grid className="full-height p-0" fluid>
          <Row className="full-height">
            <Col xs={12} md={6}>
              <div className={`${CN}__container ${CN}__container__user`}>
                <section className={`${CN}__header`}>
                  <h1 className={`${CN}__header__title`}> TWITTER LIGHT </h1>
                </section>
                <Login />
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div className={`${CN}__container ${CN}__container__tweets`}>
                <Register />
              </div>
            </Col>
          </Row>
        </Grid>
      </Provider>
    );
  }
}
