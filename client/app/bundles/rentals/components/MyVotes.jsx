import React from 'react';

export default class MyVotes extends React.Component {
  constructor(props) {
    super(props);
  }

  renderVotes() {
    return this.props.rentals.map((rental) => {
      return (
        <div key={rental.id} className="">
          <h3>{rental.title}</h3>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <h1>My Favorites</h1>
        {this.renderVotes()}
      </div>
    );
  }
}