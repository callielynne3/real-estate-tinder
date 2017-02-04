import { combineReducers } from 'redux';
// import { LOGIN_NAME_UPDATE } from '../constants/loginConstants';

const email = (state = '', action) => {
  switch (action.type) {
    // case LOGIN_NAME_UPDATE:
    //   return action.text;
    default:
      return state;
  }
};

const loginReducer = combineReducers({ email });

export default loginReducer;
