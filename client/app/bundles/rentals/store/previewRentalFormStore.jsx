import { createStore } from 'redux';
import previewRentalFormReducer from '../reducers/previewRentalFormReducer';

const configureStore = (railsProps) => (
  createStore(previewRentalFormReducer, railsProps)
);

export default configureStore;
