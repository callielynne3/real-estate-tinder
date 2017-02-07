import { combineReducers } from 'redux';

const link = (state = '', action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const rentalQueriesReducer = combineReducers({ link });

export default rentalQueriesReducer;