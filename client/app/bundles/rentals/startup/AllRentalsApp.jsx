import React from 'react';
import { Provider } from 'react-redux';

import configureStore from '../store/allRentalsStore';
import AllRentalsContainer from '../containers/AllRentalsContainer';

const AllRentalsApp = (props, _railsContext) => (
  <Provider store={configureStore(props)}>
    <AllRentalsContainer />
  </Provider>
);

export default AllRentalsApp;
