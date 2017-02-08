import ReactOnRails from 'react-on-rails';

import RentalFormApp from './RentalFormApp';

import PreviewRentalForm from '../components/PreviewRentalForm';

// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  RentalFormApp,
  PreviewRentalForm,
});
