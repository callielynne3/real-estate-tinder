import React from 'react';

export default class MyRentals extends React.Component {
  constructor(props) {
    super(props);
  }

  renderRentals() {
    return this.props.rentals.map((rental) => {

      return (
        <div key={rental.id} className="five wide column">
          <div className="ui card">
            <div className="image">
              <img src={rental.pictures[0]} />
            </div>
            <div className="content">
              <div className="header">{rental.title}</div>
              <div className="meta">
                <a>{rental.address}</a>
              </div>
              <div className="description">
                {rental.property_type}
              </div>
            </div>
            <div className="extra content">
              <span className="right floated">
                Posted by {rental.rentor.email}
              </span>
              <span>
                <i className="user icon"></i>
                Posted on {rental.created_at}
              </span>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
       <div>
        <h1>My Rentals</h1>
        <div className="ui grid container stackable">
          {this.renderRentals()}
        </div>
      </div>
    );
  }
}