import { combineReducers } from 'redux';

const visible = (state = '', action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const mapsReducer = combineReducers({ visible });

export default mapsReducer;
