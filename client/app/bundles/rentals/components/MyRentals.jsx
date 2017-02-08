import React from 'react';

export default class MyRentals extends React.Component {
  constructor(props) {
    super(props);
  }

  renderRentals() {
    return this.props.rentals.map((rental) => {
      return (
        <div key={rental.id} className="">
          <div className="ui card">
            <div className="image">
              <img src="http://semantic-ui.com/images/avatar2/large/elyse.png" />
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
                Posted on 
              </span>
              <span>
                <i className="user icon"></i>
                Posted by {rental.ret}
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
        {this.renderRentals()}
      </div>
    );
  }
}