import { combineReducers } from 'redux';
// import { LOGIN_NAME_UPDATE } from '../constants/loginConstants';

const message = (state = '', action) => {
  switch (action.type) {
    // case LOGIN_NAME_UPDATE:
    //   return action.text;
    default:
      return state;
  }
};

const welcomeReducer = combineReducers({ message });

export default welcomeReducer;
