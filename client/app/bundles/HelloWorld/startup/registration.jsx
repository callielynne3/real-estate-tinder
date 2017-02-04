import ReactOnRails from 'react-on-rails';

import HelloWorldApp from './HelloWorldApp';

import LoginApp from './LoginApp';

// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  HelloWorldApp,
  LoginApp,
});
