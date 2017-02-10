import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactSwipe from 'react-swipe';


export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
  }

  next() {
    this.refs.reactSwipe.next();
  }

  prev() {
    this.refs.reactSwipe.prev();
  }

  renderRentals() {
    return this.props.rentals.map((rental) => {

      return (
        <div key={rental.id} className="ui card something">
          <div className="ui image">
            <img src={rental.pictures[0]} />
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
      <div className="center your-daddy">
        <ReactSwipe ref="reactSwipe" className="swipeable" swipeOptions={{continuous: true }}>
          {this.renderRentals()}
        </ReactSwipe>
        <div className="ui center aligned container">
          <div className="ui large buttons">
            <button className="ui button" onClick={::this.prev}>Dislike</button>
              <div className="or"></div>
            <button className="ui button" onClick={::this.next}>Like</button>
          </div>
        </div>
      </div>
    );
  }
}
