import { combineReducers } from 'redux';

const link = (state = '', action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const welcomeLinksReducer = combineReducers({ link });

export default welcomeLinksReducer;