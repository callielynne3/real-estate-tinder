import React from 'react';
import { Provider } from 'react-redux';

import configureStore from '../store/mainStore';
import MainContainer from '../containers/MainContainer';

const MainApp = (props, _railsContext) => (
  <Provider store={configureStore(props)}>
    <MainContainer />
  </Provider>
);

export default MainApp;
