export const addUser = userData => {
  return dispatch => {
    dispatch({ type: 'ADD_USER' });
    fetch('https://twitter-eng2-users.herokuapp.com/', {
      method: 'POST',
      body: JSON.stringify(userData),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        if (!data.error) {
          dispatch(getUsers());
          dispatch({ type: 'ADD_USER_SUCCESS', payload: data });
        } else dispatch({ type: 'ADD_USER_FAILURE', error: data.description });
      })
      .catch(error => dispatch({ type: 'ADD_USER_FAILURE', error: 'Um erro inesperado ocorreu!' }));
  };
};

export const getUsers = () => {
  return dispatch => {
    dispatch({ type: 'GET_ALL_USERS' });
    fetch('https://twitter-eng2-users.herokuapp.com/', {
      method: 'GET'
    })
      .then(response => response.json())
      .then(data => {
        if (!data.error) dispatch({ type: 'GET_ALL_USERS_SUCCESS', payload: data.users });
        else dispatch({ type: 'GET_ALL_USERS_FAILURE', error: data.description });
      })
      .catch(error => dispatch({ type: 'GET_ALL_USERS_FAILURE', error: 'Um erro inesperado ocorreu!' }));
  };
};

export const login = (username = '', users) => {
  return dispatch => {
    const loggedUser = users.filter(user => {
      return username.toLowerCase() === user.login.toLowerCase();
    })[0];
    if (loggedUser) dispatch({ type: 'LOGIN_SUCCESS', user: loggedUser });
    else dispatch({ type: 'LOGIN_FAILURE', error: 'Usuário não existe' });
  };
};

export const deleteUser = id => {
  return dispatch => {
    dispatch({ type: 'DELETE_USER' });
    fetch(`https://twitter-eng2-users.herokuapp.com/${id}`, {
      method: 'DELETE'
    })
      .then(response => response.json())
      .then(data => {
        if (!data.error) {
          dispatch({ type: 'LOGOUT' });
          dispatch({ type: 'DELETE_USER_SUCCESS' });
        } else dispatch({ type: 'DELETE_USER_FAILURE', error: data.description });
      })
      .catch(error => dispatch({ type: 'DELETE_USER_FAILURE', error: 'Um erro inesperado ocorreu!' }));
  };
};

export const followUser = id => {
  return dispatch => {
    dispatch({ type: 'FOLLOW_USER' });
    fetch(`https://twitter-eng2-users.herokuapp.com/${id}/follow`, {
      method: 'PUT'
    })
      .then(response => response.json())
      .then(data => {
        if (!data.error) {
          dispatch({ type: 'FOLLOW_USER_SUCCESS' });
        } else dispatch({ type: 'FOLLOW_USER_FAILURE', error: data.description });
      })
      .catch(error => dispatch({ type: 'FOLLOW_USER_FAILURE', error: 'Um erro inesperado ocorreu!' }));
  };
};

export const createMessage = (user_id, message) => {
  return dispatch => {
    dispatch({ type: 'CREATE_MESSAGE' });
    fetch(`https://messages-twitter.herokuapp.com/?user_id=${user_id}&message=${message}`, {
      method: 'POST',
      body: {
        user_id,
        message
      }
    })
      .then(response => response.json())
      .then(data => {
        if (!data.error) {
          dispatch({ type: 'CREATE_MESSAGE_SUCCESS' });
          dispatch(getDashboardMessages());
        } else dispatch({ type: 'CREATE_MESSAGE_FAILURE', error: data.description });
      })
      .catch(error => dispatch({ type: 'CREATE_MESSAGE_FAILURE', error: 'Um erro inesperado ocorreu!' }));
  };
};

export const getDashboardMessages = () => {
  return dispatch => {
    dispatch({ type: 'GET_DASHBOARD' });
    fetch('https://messages-twitter.herokuapp.com/', {
      method: 'GET'
    })
      .then(response => response.json())
      .then(data => {
        if (!data.error) {
          dispatch({ type: 'GET_DASHBOARD_SUCCESS', payload: data.messages });
        } else dispatch({ type: 'GET_DASHBOARD_FAILURE', error: data.description });
      })
      .catch(error => dispatch({ type: 'GET_DASHBOARD_FAILURE', error: 'Um erro inesperado ocorreu!', a: error }));
  };
};

//
