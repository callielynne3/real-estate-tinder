import React from 'react';

export default class AllRentals extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rentals: []
    };
  }

  componentDidMount() {
    $.getJSON('/api/v1/rentals.json', (response) => { this.setState({ rentals: response }) });
  }

  render() {
    if (this.state.rentals) {
      var rentals= this.state.rentals.map((rental) => {
        return (
          <div key={rental.id}>
            <h3>{rental.title}</h3>
            <p>{rental.property_type}</p>
          </div> )
      });
    }

    return(
      <div>
        {rentals}
      </div>
    )
  }
}

AllRentals.propTypes = {

};
AllRentals.defaultProps = {

};