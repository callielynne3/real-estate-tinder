import React from 'react';

export default class Card extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      description: ""
    };
  }

  componentDidMount() {
    console.log('whatever the hell')
    // $.getJSON('/api/v1/rentals.json', (response) => { this.setState({ rentals: response }) });
  }

  render() {
    return (
      <div className="cardContainer">
        <div className="box">
          <p>this is a thing.</p>
        </div>
      </div>
    )
    // if (this.state.rentals) {
    //   var rentals = this.state.rentals.map((rental) => {
    //     return (
    //       <div key={rental.id}>
    //         <h3>{rental.title}</h3>
    //         <p>{rental.property_type}</p>
    //       </div> )
    //   });
    // }
    //
    // return(
    //   <div>
    //     {rentals}
    //   </div>
    // )
  }
}

Card.propTypes = {

};
Card.defaultProps = {

};
