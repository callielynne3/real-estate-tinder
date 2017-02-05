import { createStore } from 'redux';
import findHomeLinkReducer from '../reducers/FindHomeLink/findHomeLinkReducer';


const configureStore = (railsProps) => (
  createStore(findHomeLinkReducer, railsProps)
);

export default configureStore;
