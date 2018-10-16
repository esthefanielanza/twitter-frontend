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
    fetch('https://twitter-eng2-users.herokuapp.com/${id}', {
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
    fetch('https://twitter-eng2-users.herokuapp.com/${id}/follow', {
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

// TIMELINE: Post

export const postTimeline = id => {
  return dispatch => {
    dispatch({ type: 'GET_ALL_POSTS' });
    fetch('https://microservice-twitter-timeline.herokuapp.com//${id}/post', {
      method: 'GET'
    })
      .then(response => response.json())
      .then(data => {
        if (!data.error) dispatch({ type: 'GET_ALL_POSTS_SUCCESS'});
        else dispatch({ type: 'GET_ALL_POSTS_FAILURE', error: data.description });
      })
      .catch(error => dispatch({ type: 'GET_ALL_POSTS_FAILURE', error: 'Um erro inesperado ocorreu!' }));
  };
};

// TIMELINE: Home

export const homeTimeline = id => {
  return dispatch => {
    dispatch({ type: 'GET_ALL_HOME_POSTS' });
    fetch('https://microservice-twitter-timeline.herokuapp.com/${id}/home', {
      method: 'GET'
    })
      .then(response => response.json())
      .then(data => {
        if (!data.error) dispatch({ type: 'GET_ALL_HOME_POSTS_SUCCESS'});
        else dispatch({ type: 'GET_ALL_HOME_POSTS_FAILURE', error: data.description });
      })
      .catch(error => dispatch({ type: 'GET_ALL_HOME_POSTS_FAILURE', error: 'Um erro inesperado ocorreu!' }));
  };
};

// MENSAGENS: Recuperar mensagem por ID

export const getMessage = id => {
  return dispatch => {
    dispatch({ type: 'GET_MESSAGE' });
    fetch('https://messages-tpes2.herokuapp.com/${id}', {
      method: 'GET'
    })
      .then(response => response.json())
      .then(data => {
        if (!data.error) dispatch({ type: 'GET_MESSAGE_SUCCESS'});
        else dispatch({ type: 'GET_MESSAGE_FAILURE', error: data.description });
      })
      .catch(error => dispatch({ type: 'GET_MESSAGE_FAILURE', error: 'Um erro inesperado ocorreu!' }));
  };
};

// MENSAGENS: Recupera todas as mensagem

export const listMessages () => {
  return dispatch => {
    dispatch({ type: 'GET_ALL_MESSAGES' });
    fetch('https://messages-tpes2.herokuapp.com/', {
      method: 'GET'
    })
      .then(response => response.json())
      .then(data => {
        if (!data.error) dispatch({ type: 'GET_ALL_MESSAGES_SUCCESS'});
        else dispatch({ type: 'GET_ALL_MESSAGES_FAILURE', error: data.description });
      })
      .catch(error => dispatch({ type: 'GET_ALL_MESSAGES_FAILURE', error: 'Um erro inesperado ocorreu!' }));
  };
};

// MENSAGENS: Cadastrar mensagem

export const registerMessage () => {
  return dispatch => {
    dispatch({ type: 'REGISTER_MESSAGE' });
    fetch('https://messages-tpes2.herokuapp.com/', {
      method: 'POST'
    })
      .then(response => response.json())
      .then(data => {
        if (!data.error) dispatch({ type: 'REGISTER_MESSAGE_SUCCESS'});
        else dispatch({ type: 'REGISTER_MESSAGE_FAILURE', error: data.description });
      })
      .catch(error => dispatch({ type: 'REGISTER_MESSAGE_FAILURE', error: 'Um erro inesperado ocorreu!' }));
  };
};
