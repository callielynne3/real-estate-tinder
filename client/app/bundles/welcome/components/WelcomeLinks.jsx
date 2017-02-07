import React from 'react';

export default class WelcomeLinks extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rentals: []
    };
  }

  render() {

    return(
      <div className="welcomeLinks">
        <a id="newRentalLink" href="/rentals/new">Post a Rental</a> <br/>
        <a id="browseRentalsLink" href="/">Find your next home!</a>
      </div>
    )
  }
}
