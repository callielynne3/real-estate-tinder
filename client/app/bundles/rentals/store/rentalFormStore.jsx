import { createStore } from 'redux';
import rentalFormReducer from '../reducers/rentalFormReducer';

const configureStore = (railsProps) => (
  createStore(rentalFormReducer, railsProps)
);

export default configureStore;
