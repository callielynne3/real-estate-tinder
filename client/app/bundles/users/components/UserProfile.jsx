import React from 'react';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
  }
  renderRentals() {
    if (this.props.rentals.length === 0) {
      return <a href={this.props.newRentalLink}>Post a New Listing</a>;
    } else {
      return <h1><a href="my_rentals">My Rentals</a></h1>;
    }
  }
  render() {
    console.log(this.props);
    return (
      <div>
        {this.renderRentals()}
      </div>
    );
  }
}

export default UserProfile;