import React from 'react';
import { Provider } from 'react-redux';

import configureStore from '../store/cardStore';
import CardContainer from '../containers/CardContainer';

const CardApp = (props, _railsContext) => (
  <Provider store={configureStore(props)}>
    <CardContainer />
  </Provider>
);

export default CardApp;
