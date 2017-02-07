import ReactOnRails from 'react-on-rails';

import AllRentalsApp from './AllRentalsApp';

import RentalFormApp from './RentalFormApp';

import PreviewRentalForm from '../components/PreviewRentalForm';

// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  AllRentalsApp,
  RentalFormApp,
  PreviewRentalForm,
});
