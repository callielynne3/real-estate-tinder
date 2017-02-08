import ReactOnRails from 'react-on-rails';

import WelcomeLinks from '../components/WelcomeLinks';
import RentalQueries from '../components/RentalQueries'

// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  WelcomeLinks,
  RentalQueries
});
