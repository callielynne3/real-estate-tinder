import ReactOnRails from 'react-on-rails';

import Maps from '../components/Maps';
import MapsSearchBox from '../components/MapsSearchBox';
import Browse from '../components/Browse';

// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  Maps,
  MapsSearchBox,
  Browse
});
