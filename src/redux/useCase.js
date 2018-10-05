export const addUser = userData => {
  return dispatch => {
    dispatch({ type: 'ADD_USER' });
    console.log('ADDING USER', userData);
    //should do a fetch call here
    // dispatch success if ok
    dispatch({ type: 'ADD_USER_SUCCESS' });
    // dispatch failure for errors
    // dispatch({ type: 'ADD_USER_FAILURE', error: 'Um erro ocorreu!' });
  };
};
