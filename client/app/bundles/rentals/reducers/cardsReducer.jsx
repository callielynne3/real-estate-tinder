import { combineReducers } from 'redux';

const description = (state = '', action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const cardReducer = combineReducers({ description });

export default cardReducer;
