import { combineReducers } from 'redux';

const description = (state = '', action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const rentalFormReducer = combineReducers({ description });

export default rentalFormReducer;
