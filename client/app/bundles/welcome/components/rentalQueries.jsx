import React from 'react';

export default class rentalQueries extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rentals: []
    };
  }

  render() {

    return(
      <div className="rentalQueries">
        <p>
          <select id="propertyType">
            <option value="apartment">Studio/Apartment</option>
            <option value="room">Room</option>
          </select>
        </p>
        <p>
          <select id="priceRange">
            <option value="lowest">less than $1,000</option>
            <option value="low">$1,000-$2,000</option>
            <option value="medium">$3,000-$4,000</option>
            <option value="high">more than $4,000</option>
          </select>
        </p>
      </div>
    )
  }
}
