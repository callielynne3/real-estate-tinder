import React from 'react';

export default class WelcomeLinks extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rentals: []
    };
  }

  // componentDidMount() {
  //   $.getJSON('/api/v1/rentals.json', (response) => { this.setState({ rentals: response }) });
  // }

  render() {

    return(
      <div>
        <a href="http://www.google.com">Find something!</a> <br/>
        <a href="/">Find your next home!</a>
      </div>
    )
  }
}

WelcomeLinks.propTypes = {

};
WelcomeLinks.defaultProps = {

};