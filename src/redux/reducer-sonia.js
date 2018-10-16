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
    // GET ALL POSTS
    case 'GET_ALL_POSTS':
      return objectUpdate(state, { loading: true, messages: [], getPostsError: false});
    case 'GET_ALL_POSTS_SUCCESS':
      return objectUpdate(state, { loading: false, messages: action.payload }});
    case 'GET_ALL_POSTS_FAILURE':
      return objectUpdate(state, { loading: false, getPostsError: action.error });
    // GET ALL HOME POSTS
    case 'GET_ALL_HOME_POSTS':
      return objectUpdate(state, { loading: true, messages: [], getPostsError: false});
    case 'GET_ALL_HOME_POSTS_SUCCESS':
      return objectUpdate(state, { loading: false, messages: action.payload }});
    case 'GET_ALL_HOME_POSTS_FAILURE':
      return objectUpdate(state, { loading: false, getPostsError: action.error });
    default:
    // GET MESSAGE
    case 'GET_MESSAGE':
      return objectUpdate(state, { loading: true, messages: [], getMessagesError: false});
    case 'GET_MESSAGE_SUCCESS':
      return objectUpdate(state, { loading: false, messages: action.payload }});
    case 'GET_MESSAGE_FAILURE':
      return objectUpdate(state, { loading: false, getMessagesError: action.error });
    default:
    // GET ALL MESSAGES
    case 'GET_ALL_MESSAGES':
      return objectUpdate(state, { loading: true, messages: [], getMessagesError: false});
    case 'GET_ALL_MESSAGES_SUCCESS':
      return objectUpdate(state, { loading: false, messages: action.payload }});
    case 'GET_ALL_MESSAGES_FAILURE':
      return objectUpdate(state, { loading: false, getMessagesError: action.error });
    default:

      return state;
  }
}

export default combineReducers({
  data: dataReducer
});
