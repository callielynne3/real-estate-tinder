import React from 'react';
import Hammer from 'react-hammerjs';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="center">
        <Hammer
          onTap={this.handleTap}
          onSwipe={this.handleSwipe}>
          <div>Tap Me</div>
        </Hammer>
        <Hammer
          onTap={this.handleTap}
          onSwipe={this.handleSwipe}
          options={{
            touchAction:'compute',
            recognizers: {
              tap: {
                time: 600,
                threshold: 100
              }
            }
        }}>
          <div>Tap Me</div>
        </Hammer>
      </div>
    );
  }
}