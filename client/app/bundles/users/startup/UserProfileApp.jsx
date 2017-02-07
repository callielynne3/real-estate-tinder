import React from 'react';
import { Provider } from 'react-redux';

import configureStore from '../store/userProfileStore';
import UserProfileContainer from '../containers/UserProfileContainer';

const UserProfileApp = (props, _railsContext) => (
  <Provider store={configureStore(props)}>
    <UserProfileContainer />
  </Provider>
);

export default UserProfileApp;
