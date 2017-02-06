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
      <div>
        <a id="move me" href="http://www.google.com">Find something!</a> <br/>
        <a href="/">Find your next home!</a>
      </div>
    )
  }
}
