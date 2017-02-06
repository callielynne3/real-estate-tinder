import { combineReducers } from 'redux';

const description = (state = '', action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const previewRentalFormReducer = combineReducers({ description });

export default previewRentalFormReducer;
