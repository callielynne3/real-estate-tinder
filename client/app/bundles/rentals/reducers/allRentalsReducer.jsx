import { combineReducers } from 'redux';

const email = (state = '', action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const allRentalsReducer = combineReducers({ email });

export default allRentalsReducer;
