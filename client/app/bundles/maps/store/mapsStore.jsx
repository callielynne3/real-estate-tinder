import { createStore } from 'redux';
import mapsReducer from '../reducers/mapsReducer';

const configureStore = (railsProps) => (
  createStore(mapsReducer, railsProps)
);

export default configureStore;
