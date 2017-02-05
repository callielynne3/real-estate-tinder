import React from 'react';
import Header from './Header/Header.jsx';
import AllRentals from '../../rentals/components/AllRentals.jsx';
import Card from '../../rentals/components/Card.jsx';

const Main = (props) => (
  <div>
    <Header />
    <AllRentals />
    <Card />
  </div>
);

export default Main;
