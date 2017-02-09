import ReactOnRails from 'react-on-rails';

import UserProfile from '../components/UserProfile';

import MyRentals from '../../rentals/components/MyRentals';

import MyVotes from '../../rentals/components/MyVotes';

// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  UserProfile,
  MyRentals, 
  MyVotes
});
