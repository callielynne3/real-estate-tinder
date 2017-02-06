import React from 'react';
import { Provider } from 'react-redux';

import configureStore from '../store/mapsSearchBoxStore';
import MapsSearchBoxContainer from '../containers/MapsSearchBoxContainer';

const MapsSearchBoxApp = (props, _railsContext) => (
  <Provider store={configureStore(props)}>
    <MapsSearchBoxContainer />
  </Provider>
);

export default MapsSearchBoxApp;


