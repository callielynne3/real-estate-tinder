import { combineReducers } from 'redux';

const email = (state = '', action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const id = (state = '', action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const created_at = (state = '', action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const updated_at = (state = '', action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const userProfileReducer = combineReducers({ email, id, created_at, updated_at });

export default userProfileReducer;
