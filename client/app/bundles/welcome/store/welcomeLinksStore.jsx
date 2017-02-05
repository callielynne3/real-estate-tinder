import { createStore } from 'redux';
import welcomeLinksReducer from '../reducers/welcomeLinksReducer';


const configureStore = (railsProps) => (
  createStore(welcomeLinksReducer, railsProps)
);

export default configureStore;
