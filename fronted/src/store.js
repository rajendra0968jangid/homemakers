import { createStore } from 'redux';

const authToken = localStorage.getItem('authToken');

const initialState = {
  isAuthenticated: !!authToken, // true if authToken exists, false otherwise
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        isAuthenticated: true,
      };
    case 'LOGOUT':
      return {
        ...state,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};

const store = createStore(authReducer);

export default store;
