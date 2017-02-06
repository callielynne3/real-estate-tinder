import { combineReducers } from 'redux';

const visible = (state = '', action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const mapsSearchBoxReducer = combineReducers({ visible });

export default mapsSearchBoxReducer;
