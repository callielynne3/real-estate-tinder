import { createStore } from 'redux';
import loginReducer from '../reducers/loginReducer';

const configureStore = (railsProps) => (
  createStore(loginReducer, railsProps)
);

export default configureStore;
