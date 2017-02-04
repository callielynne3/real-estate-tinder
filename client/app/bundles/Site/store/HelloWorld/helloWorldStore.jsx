import { createStore } from 'redux';
import helloWorldReducer from '../../reducers/HelloWorld/helloWorldReducer';


const configureStore = (railsProps) => (
  createStore(helloWorldReducer, railsProps)
);

export default configureStore;
