import React from 'react';
import ReactSwipe from 'react-swipe';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
  }

  renderRentals() {
    return this.props.rentals.map((rental) => {

      return (
        <div key={rental.id} className="ui card">
          <div className="ui image">
            <img src="http://lorempixel.com/400/200" />
          </div>
          <div className="content">
            <div className="header">{rental.title}</div>
            <a href="/rentals/1">See More Details</a>
            <div className="meta">
              <a>{rental.address}</a>
            </div>
            <div className="description">
              {rental.property_type}
            </div>
          </div>
          <div className="extra content">
            <span className="right floated">
              Posted by
            </span>
            <span>
              <i className="user icon"></i>
              Posted on {rental.created_at}
            </span>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="ui stackable grid container">
        <ReactSwipe className="carousel" swipeOptions={{continuous: false, auto: 25}}>
          {this.renderRentals()}
        </ReactSwipe>
      </div>
    );
  }
}