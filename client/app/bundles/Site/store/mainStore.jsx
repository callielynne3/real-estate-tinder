import { createStore } from 'redux';
import mainReducer from '../reducers/mainReducer';

const configureStore = (railsProps) => (
  createStore(mainReducer, railsProps)
);

export default configureStore;
