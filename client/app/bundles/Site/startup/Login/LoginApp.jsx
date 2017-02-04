import React from 'react';
import { Provider } from 'react-redux';

import configureStore from '../store/loginStore';
import LoginContainer from '../containers/LoginContainer';

const LoginApp = (props, _railsContext) => (
  <Provider store={configureStore(props)}>
    <LoginContainer />
  </Provider>
);

export default LoginApp;
