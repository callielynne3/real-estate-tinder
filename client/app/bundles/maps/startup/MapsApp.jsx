import React from 'react';
import { Provider } from 'react-redux';

import configureStore from '../store/mapsStore';
import MapsContainer from '../containers/MapsContainer';

const MapsApp = (props, _railsContext) => (
  <Provider store={configureStore(props)}>
    <MapsContainer />
  </Provider>
);

export default MapsApp;
