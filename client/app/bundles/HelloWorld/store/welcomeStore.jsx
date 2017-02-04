import { createStore } from 'redux';
import loginReducer from '../reducers/welcomeReducer';

const configureStore = (railsProps) => (
  createStore(welcomeReducer, railsProps)
);

export default configureStore;
