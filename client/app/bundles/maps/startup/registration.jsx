import ReactOnRails from 'react-on-rails';

import MapsApp from './MapsApp';
import MapsSearchBoxApp from './MapsSearchBoxApp';

// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  MapsApp,
  MapsSearchBoxApp
});
