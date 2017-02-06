import { createStore } from 'redux';
import mapsSearchBoxReducer from '../reducers/mapsSearchBoxReducer';

const configureStore = (railsProps) => (
  createStore(mapsSearchBoxReducer, railsProps)
);

export default configureStore;
