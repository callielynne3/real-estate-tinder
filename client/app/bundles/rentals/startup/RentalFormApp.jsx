import React from 'react';
import { Provider } from 'react-redux';

import configureStore from '../store/rentalFormStore';
import RentalFormContainer from '../containers/RentalFormContainer';

const RentalFormApp = (props, _railsContext) => (
  <Provider store={configureStore(props)}>
    <RentalFormContainer />
  </Provider>
);

export default RentalFormApp;
