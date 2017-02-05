import { createStore } from 'redux';
import welcomeLinksReducer from '../reducers/welcomeLinksReducer';


const configureStore = (railsProps) => (
  createStore(WelcomeLinksReducer, railsProps)
);

export default configureStore;
