import { createStore } from 'redux';
import allRentalsReducer from '../reducers/allRentalsReducer';

const configureStore = (railsProps) => (
  createStore(allRentalsReducer, railsProps)
);

export default configureStore;
