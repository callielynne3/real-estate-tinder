import { createStore } from 'redux';
import userProfileReducer from '../reducers/userProfileReducer';

const configureStore = (railsProps) => (
  createStore(userProfileReducer, railsProps)
);

export default configureStore;
