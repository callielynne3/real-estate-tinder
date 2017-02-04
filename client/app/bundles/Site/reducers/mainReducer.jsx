import { combineReducers } from 'redux';

const email = (state = '', action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const mainReducer = combineReducers({ email });

export default mainReducer;
