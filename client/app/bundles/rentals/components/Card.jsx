import React from 'react';
import ReactDOM from 'react-dom';
import Draggable from 'react-draggable';

export default class Card extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      description: ""
    };
  }

  eventLogger = (e: MouseEvent, data: Object) => {
    console.log('Event: ', event);
    console.log('Data: ', data);
  };

  render() {
    const dragHandlers = {onStart: this.onStart, onStop: this.onStop};
    return (
      <Draggable
        handle=".handle"
        zIndex={100}
        {...dragHandlers}>
        <div className="ui card handle">
          <div className="image">
            <img src="http://semantic-ui.com/images/avatar2/large/elyse.png" />
          </div>
          <div className="content">
            <div className="header">Elyse</div>
            <div className="meta">
              <a>Coworker</a>
            </div>
            <div className="description">
              Elyse is a copywriter working in New York.
            </div>
          </div>
          <div className="extra content">
            <span className="right floated">
              Joined in 2014
            </span>
            <span>
              <i className="user icon"></i>
              151 Friends
            </span>
          </div>
        </div>
      </Draggable>
    );
  }
}