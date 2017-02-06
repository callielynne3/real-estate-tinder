import { createStore } from 'redux';
import rentalQueriesReducer from '../reducers/rentalQueriesReducer';


const configureStore = (railsProps) => (
  createStore(rentalQueriesReducer, railsProps)
);

export default configureStore;
