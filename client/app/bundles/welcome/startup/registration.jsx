import ReactOnRails from 'react-on-rails';

import WelcomeLinksApp from './WelcomeLinksApp';
import RentalQueriesApp from './RentalQueriesApp'

// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  WelcomeLinksApp,
  RentalQueriesApp,
});
