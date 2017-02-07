import React from 'react';
import { Provider } from 'react-redux';

import configureStore from '../store/rentalQueriesStore';
import RentalQueriesContainer from '../containers/RentalQueriesContainer';

const RentalQueriesApp = (props, _railsContext) => (
  <Provider store={configureStore(props)}>
    <RentalQueriesContainer />
  </Provider>
);

export default RentalQueriesApp;
