import React from 'react';

export default class MyRentals extends React.Component {
  constructor(props) {
    super(props);
  }

  renderRentals() {
    return this.props.rentals.map((rental) => {

      return (
        <div class="column">
          <div key={rental.id} className="">
            <div className="ui card">
              <div className="image">
                <img src="http://lorempixel.com/400/200/" />
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
                  Posted by {rental.user_id}
                </span>
                <span>
                  <i className="user icon"></i>
                  Posted on {rental.created_at}
                </span>
              </div>
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
        {this.renderRentals()}
      </div>
    );
  }
}