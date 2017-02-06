import React from 'react';
import { Provider } from 'react-redux';

import configureStore from '../store/welcomeLinksStore';
import WelcomeLinksContainer from '../containers/WelcomeLinksContainer';

const WelcomeLinksApp = (props, _railsContext) => (
  <Provider store={configureStore(props)}>
    <WelcomeLinksContainer />
  </Provider>
);

export default WelcomeLinksApp;
