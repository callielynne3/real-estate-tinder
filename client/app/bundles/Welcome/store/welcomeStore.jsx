import { createStore } from 'redux';
import welcomeReducer from '../reducers/welcomeReducer';

const configureStore = (railsProps) => (
  createStore(welcomeReducer, railsProps)
);

export default configureStore;
