import React from 'react';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
  }
  renderFavorites() {
    if (this.props.votes.length === 0) {
      return 
        <div>
          <button class="ui button"><a href={this.props.homeLink}>Find Your New Home</a></button>
        </div>;
    } else {
      return <button className="ui button"><a href="my_votes">My Favorites</a></button>
    }
  }


  renderRentals() {
    if (this.props.rentals.length === 0) {
      return 
        <div>
          <button class="ui button"><a href={this.props.newRentalLink}>Post a New Listing</a></button>
        </div>;
    } else {
      return <button className="ui button"><a href="my_rentals">My Rentals</a></button>;
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
