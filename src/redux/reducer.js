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
    case 'ADD_USER':
      return objectUpdate(state, { addingUser: true, addedUser: false, addUserError: false, addedUser: false });
    case 'ADD_USER_SUCCESS':
      return objectUpdate(state, { addingUser: false, addedUser: true });
    case 'ADD_USER_FAILURE':
      return objectUpdate(state, { addingUser: false, addedUser: false, addUserError: action.error });
    default:
      return state;
  }
}

export default combineReducers({
  data: dataReducer
});
