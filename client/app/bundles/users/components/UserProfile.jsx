import React from 'react';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
  }
  renderFavorites() {
    if (this.props.votes.length === 0) {
      return <a href={this.props.homeLink}>Find Your New Home</a>;
    } else {
      return <h1><a href="my_votes">My Favorites</a></h1>;
    }
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
        {this.renderFavorites()}
      </div>
    );
  }
}

export default UserProfile;