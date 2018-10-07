import { combineReducers } from 'redux';

const initialState = {
  messages: [],
  users: [],
  loading: false,
  addingUser: false
};

const objectUpdate = (state, data) => {
  return Object.assign({}, state, {
    ...state,
    ...data
  });
};

function dataReducer(state = initialState, action) {
  switch (action.type) {
    // ADD USER //
    case 'ADD_USER':
      return objectUpdate(state, { addingUser: true, addedUser: false, addUserError: false, addedUser: false });
    case 'ADD_USER_SUCCESS':
      return objectUpdate(state, { addingUser: false, addedUser: true });
    case 'ADD_USER_FAILURE':
      return objectUpdate(state, { addingUser: false, addedUser: false, addUserError: action.error });
    // GET ALL USERS //
    case 'GET_ALL_USERS':
      return objectUpdate(state, { loading: true, users: [], getUsersError: false });
    case 'GET_ALL_USERS_SUCCESS':
      return objectUpdate(state, { loading: false, users: action.payload });
    case 'GET_ALL_USERS_FAILURE':
      return objectUpdate(state, { loading: false, getUsersError: action.error });
    // LOGIN //
    case 'LOGIN_SUCCESS':
      return objectUpdate(state, { loggedUser: action.user, loginError: false });
    case 'LOGIN_FAILURE':
      return objectUpdate(state, { loginError: action.error });
    case 'LOGOUT':
      return objectUpdate(state, { loggedUser: undefined });
    // DELETE_USER //
    case 'DELETE_USER':
      return objectUpdate(state, { deleting: true, error: undefined });
    case 'DELETE_USER_SUCCESS':
      return objectUpdate(state, { deleting: false });
    case 'DELETE_USER_FAILURE':
      return objectUpdate(state, { deleting: false, deleteError: action.error });
    // FOLLOW_USER //
    case 'FOLLOW_USER':
      return objectUpdate(state, { following: true, error: undefined });
    case 'FOLLOW_USER_SUCCESS':
      return objectUpdate(state, { followedUser: true, following: false });
    case 'FOLLOW_USER_FAILURE':
      return objectUpdate(state, { following: false, deleteError: action.error });
    default:
      return state;
  }
}

export default combineReducers({
  data: dataReducer
});
