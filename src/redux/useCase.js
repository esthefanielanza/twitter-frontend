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
        if (!data.error) dispatch({ type: 'ADD_USER_SUCCESS', payload: data });
        else dispatch({ type: 'ADD_USER_FAILURE', error: data.description });
      })
      .catch(error => dispatch({ type: 'ADD_USER_FAILURE', error: 'Um erro inesperado ocorreu!' }));
  };
};
